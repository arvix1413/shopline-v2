#!/usr/bin/env bash
# Fix arvixai.com DNS + Pages custom domain for shopline-frontend.
# Requires CLOUDFLARE_API_TOKEN with Zone.DNS Edit (+ Registrar Edit if NS sync needed).

set -euo pipefail

ZONE_ID="${ZONE_ID:-ba218f75c4d0326588d0091c4a925046}"
ACCOUNT_ID="${ACCOUNT_ID:-51908639511240656e3a5d46a004f299}"
DOMAIN="${DOMAIN:-arvixai.com}"
PAGES_CNAME="${PAGES_CNAME:-shopline-frontend.pages.dev}"
PAGES_PROJECT="${PAGES_PROJECT:-shopline-frontend}"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "ERROR: set CLOUDFLARE_API_TOKEN" >&2
  exit 1
fi

cf() {
  local method=$1 path=$2
  shift 2
  curl -sS -X "$method" "https://api.cloudflare.com/client/v4${path}" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -H "Content-Type: application/json" \
    "$@"
}

json_ok() {
  local body=$1
  echo "$body" | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get('success') else 1)" 2>/dev/null
}

echo "== Verify API token =="
verify=$(cf GET /user/tokens/verify)
json_ok "$verify" || { echo "$verify"; exit 1; }
echo "Token OK"

echo "== Zone ${DOMAIN} =="
zone=$(cf GET "/zones/${ZONE_ID}")
json_ok "$zone" || { echo "$zone"; exit 1; }
echo "$zone" | python3 -c "
import json,sys
z=json.load(sys.stdin)['result']
print('status:', z['status'])
print('assigned NS:', ', '.join(z['name_servers']))
print('original NS:', ', '.join(z.get('original_name_servers') or []))
"
NS_CARMELO=$(echo "$zone" | python3 -c "import json,sys; print(','.join(json.load(sys.stdin)['result']['name_servers']))")

echo "== Sync Cloudflare Registrar nameservers (if permitted) =="
reg_body=$(python3 -c "import json; print(json.dumps({'nameservers': '${NS_CARMELO}'.split(',')}))")
reg=$(cf PATCH "/accounts/${ACCOUNT_ID}/registrar/domains/${DOMAIN}" -d "$reg_body") || true
if json_ok "$reg" 2>/dev/null; then
  echo "Registrar nameservers updated"
else
  echo "WARN: registrar API skipped or failed (update NS manually in CF dashboard if zone stays pending)"
  echo "$reg" | python3 -m json.tool 2>/dev/null | head -8 || true
fi

echo "== DNS records =="
records=$(cf GET "/zones/${ZONE_ID}/dns_records?per_page=100")
if ! json_ok "$records"; then
  echo "ERROR: cannot list DNS (token needs Zone.DNS Read/Edit for ${DOMAIN})"
  echo "$records"
  exit 1
fi

export PAGES_CNAME DOMAIN
echo "$records" | python3 -c "
import json, os, sys
data = json.load(sys.stdin)
target = os.environ['PAGES_CNAME'].rstrip('.')
domain = os.environ['DOMAIN']
want = [('@', domain), ('www', f'www.{domain}')]

def norm_name(n):
    if n == domain: return '@'
    if n == f'www.{domain}': return 'www'
    return n

to_delete = []
have_cname = set()
for r in data['result']:
    name = norm_name(r['name'])
    if name not in ('@', 'www'):
        continue
    content = (r.get('content') or '').rstrip('.')
    if r['type'] == 'CNAME' and content == target:
        have_cname.add(name)
        print(f'OK  {name} CNAME -> {r[\"content\"]}')
    elif r['type'] == 'A' and r['content'] == '76.76.21.21':
        to_delete.append(r['id'])
        print(f'DEL {name} A {r[\"content\"]} (Vercel)')
    else:
        to_delete.append(r['id'])
        print(f'DEL {name} {r[\"type\"]} {r.get(\"content\")}')

open('/tmp/cf_delete_ids.txt', 'w').write('\n'.join(to_delete))
open('/tmp/cf_missing.txt', 'w').write('\n'.join(n for n, _ in want if n not in have_cname))
"

while IFS= read -r id; do
  [[ -z "$id" ]] && continue
  echo "Deleting record $id"
  cf DELETE "/zones/${ZONE_ID}/dns_records/${id}" >/dev/null
done < /tmp/cf_delete_ids.txt

while IFS= read -r label; do
  [[ -z "$label" ]] && continue
  name="$label"
  [[ "$label" == "@" ]] && name="${DOMAIN}"
  [[ "$label" == "www" ]] && name="www.${DOMAIN}"
  body=$(python3 -c "import json; print(json.dumps({'type':'CNAME','name':'''${name}''','content':'${PAGES_CNAME}','proxied':True}))")
  echo "Creating CNAME ${name} -> ${PAGES_CNAME}"
  created=$(cf POST "/zones/${ZONE_ID}/dns_records" -d "$body")
  json_ok "$created" || { echo "$created"; exit 1; }
done < /tmp/cf_missing.txt

echo "== Pages custom domains =="
for host in "${DOMAIN}" "www.${DOMAIN}"; do
  body=$(python3 -c "import json; print(json.dumps({'name':'${host}','zone_id':'${ZONE_ID}'}))")
  add=$(cf POST "/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}/domains" -d "$body") || true
  if echo "$add" | python3 -c "import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get('success') or d['errors'][0]['code']==8000018 else 1)" 2>/dev/null; then
    echo "Pages domain ${host}: ok or already exists"
  else
    echo "Pages domain ${host}: $(echo "$add" | python3 -c "import json,sys; print(json.load(sys.stdin).get('errors'))")"
  fi
done

list=$(cf GET "/accounts/${ACCOUNT_ID}/pages/projects/${PAGES_PROJECT}/domains")
echo "$list" | python3 -c "
import json,sys
for x in json.load(sys.stdin).get('result',[]):
    v=x.get('verification_data') or {}
    print(f\"  {x['name']}: {x['status']} {v.get('error_message','')}\")
"

echo "== Done. Public NS check: dig NS ${DOMAIN} +short =="
