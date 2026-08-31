# -*- coding: utf-8 -*-
"""Parse Bennis pillow category listing into products.json"""
import json
import re
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

URL = "https://www.bennis.com.tw/products.php?mid=1&sid=53"
OUT = Path(__file__).resolve().parent / "bennis_products.json"
CACHE = Path(__file__).resolve().parent / "bennis_products.html"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; ARVIX-importer/1.0)"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def decode_html(raw: bytes) -> str:
    for enc in ("utf-8", "big5", "cp950"):
        try:
            text = raw.decode(enc)
            if "乳膠" in text or "枕頭" in text:
                return text
        except UnicodeDecodeError:
            continue
    return raw.decode("utf-8", errors="replace")


class ProductCollector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.products = []
        self._in_h6 = False
        self._h6 = []
        self._pending_name = None
        self._prices = []
        self._last_img = None
        self._capture_prices = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "h6":
            self._in_h6 = True
            self._h6 = []
        if tag == "img":
            src = attrs.get("src") or attrs.get("data-src") or ""
            if "upload/product" in src or "/assets/images/" in src:
                if src.startswith("//"):
                    src = "https:" + src
                elif src.startswith("/"):
                    src = "https://www.bennis.com.tw" + src
                elif not src.startswith("http"):
                    src = "https://www.bennis.com.tw/" + src.lstrip("./")
                self._last_img = src
        if tag == "a":
            href = attrs.get("href") or ""
            m = re.search(r"product_detail\.php\?id=(\d+)", href)
            if m and self._pending_name:
                # attach detail id to pending
                self._pending_detail = m.group(1)

    def handle_endtag(self, tag):
        if tag == "h6" and self._in_h6:
            self._in_h6 = False
            name = re.sub(r"\s+", " ", "".join(self._h6)).strip()
            if name and len(name) > 2:
                self._pending_name = name
                self._prices = []
                self._capture_prices = True
                self._pending_img = self._last_img
                self._pending_detail = getattr(self, "_pending_detail", None)

    def handle_data(self, data):
        if self._in_h6:
            self._h6.append(data)
            return
        if not self._capture_prices:
            return
        # collect NT$ prices after a product title
        for m in re.finditer(r"NT\$\s*([0-9,]+)", data):
            self._prices.append(int(m.group(1).replace(",", "")))
            if len(self._prices) >= 2 and self._pending_name:
                list_price = max(self._prices[:2])
                sale_price = min(self._prices[:2])
                self.products.append(
                    {
                        "name": self._pending_name,
                        "listPrice": list_price,
                        "price": sale_price,
                        "imageUrl": getattr(self, "_pending_img", None),
                        "detailId": getattr(self, "_pending_detail", None),
                        "category": "枕頭",
                    }
                )
                self._pending_name = None
                self._capture_prices = False
                self._prices = []


def scrape_listing() -> list:
    raw = fetch(URL)
    CACHE.write_bytes(raw)
    text = decode_html(raw)
    parser = ProductCollector()
    parser.feed(text)

    # Fallback regex pairing if parser got little
    if len(parser.products) < 5:
        products = []
        # h6 name then nearby prices
        blocks = re.split(r"<h6[^>]*>", text, flags=re.I)
        for block in blocks[1:]:
            name_m = re.match(r"(.*?)</h6>", block, re.I | re.S)
            if not name_m:
                continue
            name = re.sub(r"<[^>]+>", "", name_m.group(1))
            name = re.sub(r"\s+", " ", name).strip()
            if not name or "選單" in name:
                continue
            prices = [int(p.replace(",", "")) for p in re.findall(r"NT\$\s*([0-9,]+)", block[:800])]
            if len(prices) < 2:
                continue
            img_m = re.search(
                r'(?:src|data-src)=["\']([^"\']*upload/product/[^"\']+)["\']',
                block[:2000],
                re.I,
            )
            if not img_m:
                # look backwards in previous chunk — use assets pillow images near top
                img_m = re.search(
                    r'(?:src|data-src)=["\']([^"\']+(?:upload/product|assets/images)[^"\']+\.(?:jpg|png|webp))["\']',
                    block[:2000],
                    re.I,
                )
            img = None
            if img_m:
                src = img_m.group(1)
                if src.startswith("//"):
                    img = "https:" + src
                elif src.startswith("/"):
                    img = "https://www.bennis.com.tw" + src
                elif not src.startswith("http"):
                    img = "https://www.bennis.com.tw/" + src.lstrip("./")
                else:
                    img = src
            detail_m = re.search(r"product_detail\.php\?id=(\d+)", block[:2000])
            products.append(
                {
                    "name": name,
                    "listPrice": max(prices[:2]),
                    "price": min(prices[:2]),
                    "imageUrl": img,
                    "detailId": detail_m.group(1) if detail_m else None,
                    "category": "枕頭",
                }
            )
        return products

    return parser.products


def enrich_from_detail(product: dict) -> dict:
    did = product.get("detailId")
    if not did:
        return product
    url = f"https://www.bennis.com.tw/product_detail.php?id={did}"
    try:
        text = decode_html(fetch(url))
    except Exception as e:
        product["detailError"] = str(e)
        return product
    # prefer larger product images
    imgs = re.findall(
        r'(?:src|data-src|href)=["\']([^"\']*upload/product/[^"\']+\.(?:jpg|jpeg|png|webp))["\']',
        text,
        re.I,
    )
    cleaned = []
    for src in imgs:
        if src.startswith("//"):
            src = "https:" + src
        elif src.startswith("/"):
            src = "https://www.bennis.com.tw" + src
        elif not src.startswith("http"):
            src = "https://www.bennis.com.tw/" + src.lstrip("./")
        if src not in cleaned:
            cleaned.append(src)
    if cleaned:
        # prefer non-icon if available
        non_icon = [u for u in cleaned if "/icon-" not in u]
        product["imageUrl"] = (non_icon or cleaned)[0]
        product["gallery"] = cleaned[:6]
    # short description from meta or first paragraph
    meta = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)["\']', text, re.I)
    if meta:
        product["description"] = meta.group(1).strip()[:500]
    return product


def main():
    products = scrape_listing()
    # dedupe by name
    seen = set()
    unique = []
    for p in products:
        if p["name"] in seen:
            continue
        seen.add(p["name"])
        unique.append(p)
    print(f"listing products: {len(unique)}")
    for i, p in enumerate(unique):
        print(f"  enrich {i+1}/{len(unique)} {p['name'][:40]}")
        enrich_from_detail(p)
    OUT.write_text(json.dumps(unique, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {OUT}")
    for p in unique:
        print(f"- {p['price']} | {p.get('imageUrl','')[:60]} | {p['name'][:50]}")


if __name__ == "__main__":
    main()
