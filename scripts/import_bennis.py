# -*- coding: utf-8 -*-
"""Register Bennis demo store on ARVIX and import scraped products."""
from __future__ import annotations

import json
import mimetypes
import sys
import urllib.error
import urllib.request
from pathlib import Path

API = "https://shopline-backend.arvix1413.workers.dev"
PRODUCTS_JSON = Path(__file__).resolve().parent / "bennis_products.json"
EMAIL = "bennis-demo@arvixai.com"
PASSWORD = "BennisDemo123!"
SHOP_NAME = "班尼斯"
SLUG = "bennis"
TAGLINE = "枕頭｜馬來西亞天然乳膠枕頭"


def req(method: str, path: str, data=None, headers=None, raw=False):
    url = API + path if path.startswith("/") else path
    body = None
    hdrs = {"User-Agent": "ARVIX-importer/1.0"}
    if headers:
        hdrs.update(headers)
    if data is not None and not raw:
        body = json.dumps(data).encode("utf-8")
        hdrs["Content-Type"] = "application/json"
    elif data is not None and raw:
        body = data
    request = urllib.request.Request(url, data=body, headers=hdrs, method=method)
    try:
        with urllib.request.urlopen(request, timeout=60) as r:
            raw_body = r.read()
            ctype = r.headers.get("Content-Type", "")
            if "json" in ctype or raw_body[:1] in (b"{", b"["):
                return r.status, json.loads(raw_body.decode("utf-8"))
            return r.status, raw_body
    except urllib.error.HTTPError as e:
        err = e.read()
        try:
            parsed = json.loads(err.decode("utf-8"))
        except Exception:
            parsed = err.decode("utf-8", errors="replace")
        return e.code, parsed


def multipart_upload(image_bytes: bytes, filename: str, content_type: str):
    boundary = "----arvixboundary7MA4YWxkTrZu0gW"
    parts = []
    parts.append(f"--{boundary}\r\n".encode())
    parts.append(
        f'Content-Disposition: form-data; name="file"; filename="{filename}"\r\n'
        f"Content-Type: {content_type}\r\n\r\n".encode()
    )
    parts.append(image_bytes)
    parts.append(f"\r\n--{boundary}--\r\n".encode())
    body = b"".join(parts)
    return req(
        "POST",
        "/api/upload",
        data=body,
        headers={"Content-Type": f"multipart/form-data; boundary={boundary}"},
        raw=True,
    )


def download(url: str) -> tuple[bytes, str]:
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=45) as r:
        data = r.read()
        ctype = r.headers.get("Content-Type") or mimetypes.guess_type(url)[0] or "image/jpeg"
        return data, ctype.split(";")[0].strip()


def ensure_store() -> str:
    status, check = req("GET", f"/api/stores/check-slug?slug={SLUG}")
    print("slug check", status, check)
    if isinstance(check, dict) and check.get("ok"):
        status, reg = req(
            "POST",
            "/api/auth/register",
            {
                "email": EMAIL,
                "password": PASSWORD,
                "name": "Bennis Demo",
                "shopName": SHOP_NAME,
                "slug": SLUG,
                "tagline": TAGLINE,
            },
        )
        print("register", status, reg if isinstance(reg, dict) else str(reg)[:200])
        if status in (200, 201) and isinstance(reg, dict):
            slug = (reg.get("store") or {}).get("slug") or SLUG
            # set tagline via raw SQL isn't available; store already has default
            return slug
        # email may already exist
    status, store = req("GET", f"/api/stores/{SLUG}")
    if status == 200 and isinstance(store, dict) and store.get("slug"):
        print("using existing store", store.get("slug"), store.get("name"))
        return store["slug"]
    # fallback register with alternate email
    alt = f"bennis-demo-{Path(__file__).stat().st_mtime_ns}@arvixai.com"
    status, reg = req(
        "POST",
        "/api/auth/register",
        {
            "email": alt,
            "password": PASSWORD,
            "name": "Bennis Demo",
            "shopName": SHOP_NAME,
            "slug": SLUG,
            "tagline": TAGLINE,
        },
    )
    print("register fallback", status, reg if isinstance(reg, dict) else str(reg)[:200])
    if status in (200, 201) and isinstance(reg, dict):
        return (reg.get("store") or {}).get("slug") or SLUG
    raise SystemExit(f"Could not provision store: {status} {reg}")


def clear_existing(slug: str):
    status, products = req("GET", f"/api/products?store={slug}")
    if status != 200 or not isinstance(products, list):
        print("list products failed", status, products)
        return
    print(f"existing products for {slug}: {len(products)}")
    for p in products:
        pid = p.get("id")
        if not pid:
            continue
        s, r = req("DELETE", f"/api/products/{pid}")
        print(" delete", pid, s)


def import_products(slug: str):
    products = json.loads(PRODUCTS_JSON.read_text(encoding="utf-8"))
    created = 0
    for i, p in enumerate(products, 1):
        image_url = p.get("imageUrl") or ""
        uploaded = image_url
        if image_url:
            try:
                img, ctype = download(image_url)
                ext = ".jpg"
                if "png" in ctype:
                    ext = ".png"
                elif "webp" in ctype:
                    ext = ".webp"
                fname = f"bennis-{i}{ext}"
                # skip upload if file too large for API (5MB)
                if len(img) <= 5 * 1024 * 1024:
                    st, up = multipart_upload(img, fname, ctype)
                    print(f"  upload {i}", st, up if isinstance(up, dict) else "")
                    if st in (200, 201) and isinstance(up, dict) and up.get("imageUrl"):
                        uploaded = up["imageUrl"]
                else:
                    print(f"  skip upload large {len(img)}")
            except Exception as e:
                print(f"  image fail {i}: {e}")

        desc_parts = []
        if p.get("listPrice"):
            desc_parts.append(f"原價 NT${int(p['listPrice'])}")
        desc_parts.append("馬來西亞天然乳膠枕頭｜班尼斯示範商品")
        body = {
            "name": p["name"],
            "price": p["price"],
            "category": p.get("category") or "枕頭",
            "description": " ".join(desc_parts),
            "imageUrl": uploaded,
            "stock": 50,
            "featured": i <= 4,
            "storeSlug": slug,
        }
        st, res = req("POST", "/api/products", body)
        ok = st in (200, 201)
        print(f"[{i}/{len(products)}] {'OK' if ok else 'FAIL'} {st} {p['name'][:40]}")
        if not ok:
            print(" ", res)
        else:
            created += 1
    return created


def main():
    print("init db…")
    print(req("POST", "/api/init"))
    slug = ensure_store()
    print("store slug =", slug)
    clear_existing(slug)
    n = import_products(slug)
    status, products = req("GET", f"/api/products?store={slug}")
    print("final count", status, len(products) if isinstance(products, list) else products)
    print("created", n)
    print(f"STORE_URL=https://arvixai.com/s/shop?slug={slug}")
    print(f"STORE_URL_ALT=https://arvixai.com/{slug}")


if __name__ == "__main__":
    main()
