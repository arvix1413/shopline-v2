# 🛍️ SHOPLINE - 全栈电商平台

基于 Next.js 14 + Cloudflare 技术栈构建的现代化电商平台，完整复刻 SHOPLINE 官网设计和功能。

---

## 项目信息

| 项目 | 说明 |
|------|------|
| **名称** | SHOPLINE 克隆 / 演示电商 |
| **类型** | 官网展示 + 商品站 + 管理后台 |
| **代码仓库** | https://github.com/arvix1413/shopline-v2.git |
| **默认分支** | `main`（推送即生产部署） |
| **本地路径** | `ern-projects/shopline-v2` |

### 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Next.js 15 + `@cloudflare/next-on-pages` |
| 构建产物 | `frontend/.vercel/output/static` |
| 托管 | **Cloudflare Pages**（项目名 `shopline-frontend`） |
| API | **Cloudflare Worker**（脚本名 `shopline-backend`） |
| 数据库 | **Cloudflare D1**（`shopline-v2-db`） |
| 存储 | **R2**（`shopline-v2`） |

---

## 部署与线上环境

### GitHub Actions 自动部署

**Workflow：** `.github/workflows/deploy.yml`（触发：`push` → `main`，或 `workflow_dispatch`）

| Job | 步骤 |
|-----|------|
| `deploy-pages` | `frontend/`：`npm ci --legacy-peer-deps` → `npm run pages:build`（`NEXT_PUBLIC_API_URL`）→ `wrangler pages deploy .vercel/output/static --project-name shopline-frontend` |
| `deploy-worker` | `backend/`：`wrangler deploy` |
| `notify` | Telegram 部署通知 |

### GitHub Secrets（必需）

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Pages + Workers + D1 + DNS |
| `CLOUDFLARE_ACCOUNT_ID` | `51908639511240656e3a5d46a004f299` |
| `TELEGRAM_BOT_TOKEN` | 部署通知 |
| `TELEGRAM_CHAT_ID` | 部署通知 |

批量写入：`ern-projects/scripts/set-cf-deploy-secrets.sh`

### 健康检查

```bash
curl -I https://arvixai.com/
curl -I https://shopline-frontend.pages.dev/
curl -s https://shopline-backend.arvix1413.workers.dev/api/products
```

---

## 🌐 在线演示

- **前端网站（主域名）**: https://arvixai.com
- **前端网站（WWW）**: https://www.arvixai.com
- **前端网站（Pages 默认域名）**: https://shopline-frontend.pages.dev
- **商品展示**: https://arvixai.com/products
- **购物车**: https://arvixai.com/cart
- **管理后台**: https://arvixai.com/admin

### 线上 URL 汇总

| 用途 | URL |
|------|-----|
| **主域名** | https://arvixai.com |
| **WWW** | https://www.arvixai.com |
| **Pages 默认域名** | https://shopline-frontend.pages.dev |
| **Worker API** | https://shopline-backend.arvix1413.workers.dev |

### Cloudflare 资源

| 资源 | 值 |
|------|-----|
| Account ID | `51908639511240656e3a5d46a004f299` |
| Pages 项目 | `shopline-frontend` |
| Worker 脚本 | `shopline-backend` |
| D1 数据库 | `shopline-v2-db`（`dcd227af-5f80-4c1e-941c-7b58bb0aed01`） |
| R2 存储桶 | `shopline-v2` |
| Zone ID (arvixai.com) | `ba218f75c4d0326588d0091c4a925046` |
| API Token | GitHub Secrets `CLOUDFLARE_API_TOKEN` |

### DNS 配置（arvixai.com）

域名在 Cloudflare Registrar，Zone 激活前需将注册商 NS 改为 Cloudflare 分配的：

- `carmelo.ns.cloudflare.com`
- `melody.ns.cloudflare.com`

（公网若仍显示 `cesar` / `priscilla`，自定义域名不会生效。）

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `@` | `shopline-frontend.pages.dev` | Proxied |
| CNAME | `www` | `shopline-frontend.pages.dev` | Proxied |

一键修复 DNS（使用 tmt 仓库里已配置的 `CLOUDFLARE_API_TOKEN`）：

```bash
gh workflow run cf-dns-setup-arvixai.yml -R arvix1413/tmt
```

`shopline-v2` 仓库需自行配置同名 GitHub Secret 后，也可运行：

```bash
gh workflow run fix-arvixai-dns.yml -R arvix1413/shopline-v2
```

## ✨ 核心功能

### 🎨 前端功能
- 📱 响应式设计，完美适配所有设备
- 🛍️ 商品浏览和分类筛选
- 🛒 完整购物车系统（添加、修改、删除）
- 🎯 商品搜索和排序
- 💫 流畅的用户交互体验

### ⚙️ 管理后台
- 📝 商品管理（创建、编辑、删除）
- 📷 图片上传和管理
- 🎨 智能默认图片系统
- 📊 库存管理
- ✨ 精选商品设置

### 🔧 技术特性
- 🚀 Cloudflare Pages 部署
- 💾 Cloudflare D1 数据库
- 📁 Cloudflare R2 对象存储
- 🌍 全球 CDN 加速
- 🔒 安全的 API 设计

## 🏗️ 技术架构

### 前端技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **类型**: TypeScript
- **部署**: Cloudflare Pages

### 后端技术栈
- **框架**: Hono (轻量级 Web 框架)
- **运行时**: Cloudflare Workers
- **数据库**: Cloudflare D1 (SQLite)
- **存储**: Cloudflare R2 (S3 兼容)
- **ORM**: Drizzle ORM

### 基础设施
- **CDN**: Cloudflare 全球网络
- **域名**: 固定生产域名
- **SSL**: 自动 HTTPS
- **缓存**: 智能边缘缓存

## 📁 项目结构

```
shopline-v2/
├── .github/workflows/
│   ├── deploy.yml            # push main → Pages + Worker + Telegram
│   └── fix-arvixai-dns.yml   # 手动：arvixai.com DNS
├── frontend/                 # Next.js 前端应用
│   ├── app/                 # App Router 页面
│   │   ├── components/      # React 组件
│   │   ├── admin/          # 管理后台
│   │   ├── products/       # 商品页面
│   │   └── cart/           # 购物车页面
│   ├── lib/                # 工具库和 API 客户端
│   └── public/             # 静态资源
├── backend/                 # Hono 后端 API
│   ├── src/                # 源代码
│   │   ├── index.ts        # 主应用文件
│   │   └── schema.ts       # 数据库模式
│   ├── schema.sql          # 数据库结构
│   └── seed.sql            # 初始数据
├── e2e-tests/              # Playwright 端到端测试
└── product-images/         # 商品图片资源
```

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 yarn
- Cloudflare 账户

### 1. 克隆项目
```bash
git clone <repository-url>
cd shopline-v2
```

### 2. 安装依赖
```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install

# 安装测试依赖
cd ../e2e-tests
npm install
```

### 3. 配置环境变量
```bash
# 前端配置
cd frontend
cp .env.local.example .env.local
# 编辑 .env.local 设置 API URL

# 后端配置
cd ../backend
# 配置 wrangler.toml 中的数据库和存储桶
```

### 4. 本地开发
```bash
# 启动前端开发服务器
cd frontend
npm run dev

# 启动后端开发服务器
cd backend
npm run dev
```

### 5. 部署到生产环境

推送 `main` 会触发 GitHub Actions（见「部署与线上环境」）。手动部署：

```bash
cd frontend
NEXT_PUBLIC_API_URL=https://shopline-backend.arvix1413.workers.dev npm run pages:build
npx wrangler pages deploy .vercel/output/static --project-name shopline-frontend

cd ../backend
npx wrangler deploy
```

## 📊 数据库结构

### 核心表结构
- **products** - 商品信息
- **categories** - 商品分类
- **cart_items** - 购物车项目
- **users** - 用户信息
- **orders** - 订单数据

### 数据库初始化
```bash
cd backend
npx wrangler d1 execute shopline-v2-db --file=schema.sql --remote
npx wrangler d1 execute shopline-v2-db --file=seed.sql --remote
```

## 🧪 测试

### 端到端测试
```bash
cd e2e-tests
npm run test
```

### API 测试
```bash
# 测试商品 API
curl https://shopline-backend.arvix1413.workers.dev/api/products

# 测试图片上传
curl -X POST -F "file=@image.jpg" https://shopline-backend.arvix1413.workers.dev/api/upload
```

## 🔧 配置说明

### Cloudflare 配置
1. **D1 数据库**: `shopline-v2-db`
2. **R2 存储桶**: `shopline-v2`
3. **Pages 项目**: `shopline-frontend`
4. **Workers 项目**: `shopline-backend`

### 域名配置
- 前端: `https://arvixai.com`（主域名）/ `https://www.arvixai.com` / `https://shopline-frontend.pages.dev`
- 后端: `https://shopline-backend.arvix1413.workers.dev`

## 📈 性能优化

- ⚡ 静态站点生成 (SSG)
- 🌍 全球 CDN 分发
- 📦 代码分割和懒加载
- 🖼️ 图片优化和缓存
- 💾 智能数据缓存

## 🛡️ 安全特性

- 🔒 HTTPS 强制加密
- 🛡️ CORS 跨域保护
- 🔐 API 访问控制
- 📝 输入验证和清理
- 🚫 SQL 注入防护

## 🕷️ 原版爬取工具

用于爬取 shopline.tw 所有页面的 HTML + 截图，作为复刻对比基准。

### 安装依赖
```bash
pip install playwright
python3 -m playwright install chromium
```

### 运行
```bash
cd shopline-v2/crawler
python3 shopline_crawler.py
```

### 输出结构
```
shopline_output/
├── screenshots/   # 每页全屏截图 (.png)
├── html/          # 每页完整 HTML (.html)
└── crawl_report.json
```

覆盖页面（36 个）：解決方案、網路商店、社群購物、零售POS、功能應用、方案費用、新手上路等所有导航子页面。

### 爬虫脚本完整代码

```python
"""
SHOPLINE.TW 完整爬取脚本
- 抓取所有导航菜单子页面
- 保存 HTML + 截图
- 支持点击菜单跳转

安装依赖:
  pip install playwright
  playwright install chromium

运行:
  python shopline_crawler.py
"""

import asyncio
import json
import os
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse
from playwright.async_api import async_playwright

BASE_URL = "https://shopline.tw"
OUTPUT_DIR = Path("shopline_output")
SCREENSHOTS_DIR = OUTPUT_DIR / "screenshots"
HTML_DIR = OUTPUT_DIR / "html"
TIMEOUT = 30_000  # ms

NAV_PAGES = [
    {"name": "解決方案總覽",          "url": "/solutions"},
    {"name": "流量獲取與轉換",         "url": "/solutions/traffic-and-conversion"},
    {"name": "會員回購",              "url": "/solutions/member-repurchase"},
    {"name": "OMO 全通路整合",         "url": "/solutions/omo"},
    {"name": "商店營運效率",           "url": "/solutions/shop-efficiency"},
    {"name": "數據賦能",              "url": "/solutions/data-analysis"},
    {"name": "網路商店特色總覽",        "url": "/online-store"},
    {"name": "網路商店功能介紹",        "url": "/online-store/features"},
    {"name": "客戶案例",              "url": "/showcase"},
    {"name": "SHOP Builder",         "url": "/online-store/shop-builder"},
    {"name": "版型主題",              "url": "/templates"},
    {"name": "社群購物特色總覽",        "url": "/social-commerce"},
    {"name": "社群購物功能介紹",        "url": "/social-commerce/features"},
    {"name": "Instagram Live",       "url": "/social-commerce/instagram-live"},
    {"name": "零售POS特色總覽",        "url": "/pos"},
    {"name": "零售POS功能介紹",        "url": "/pos/features"},
    {"name": "週邊硬體",              "url": "/pos/hardware"},
    {"name": "RFIM 分眾行銷",         "url": "/targeted-marketing"},
    {"name": "LINE 官方帳號整合",      "url": "/line-solution"},
    {"name": "團購解決方案",           "url": "/group-buying"},
    {"name": "Shoplytics 數據分析",   "url": "/shoplytics"},
    {"name": "SHOPLINE Payments",    "url": "/payments"},
    {"name": "Smart OMO",            "url": "/smart-omo"},
    {"name": "Shopper App",          "url": "/shopper-app"},
    {"name": "所有方案費用",           "url": "/about/pricing"},
    {"name": "功能模組費用",           "url": "/about/pricing/module"},
    {"name": "開店祕技",              "url": "/online-store-setup"},
    {"name": "新手問答",              "url": "/faq/overview"},
    {"name": "關於我們",              "url": "/about"},
    {"name": "最新消息",              "url": "/about/press"},
    {"name": "網站地圖",              "url": "/about/sitemap"},
    {"name": "合作機會",              "url": "/cooperate"},
    {"name": "精選夥伴",              "url": "/selectedpartners"},
    {"name": "資格與認證",            "url": "/compliance-center"},
    {"name": "產品最新動態",           "url": "/changelog"},
]


def slugify(text: str) -> str:
    text = re.sub(r'[^\w\u4e00-\u9fff\-]', '_', text)
    return text[:60]


async def scrape_page(page, url: str, name: str):
    full_url = urljoin(BASE_URL, url)
    slug = slugify(name)
    print(f"\n{'─'*60}")
    print(f"  📄 {name}")
    print(f"  🔗 {full_url}")

    try:
        await page.goto(full_url, wait_until="networkidle", timeout=TIMEOUT)
        await page.wait_for_timeout(1500)

        html_content = await page.content()
        html_path = HTML_DIR / f"{slug}.html"
        html_path.write_text(html_content, encoding="utf-8")
        print(f"  ✅ HTML saved → {html_path.name}")

        screenshot_path = SCREENSHOTS_DIR / f"{slug}.png"
        await page.screenshot(path=str(screenshot_path), full_page=True)
        print(f"  📸 Screenshot → {screenshot_path.name}")

        links = await page.eval_on_selector_all(
            "a[href]",
            "els => els.map(el => el.getAttribute('href')).filter(h => h && h.startsWith('/') && !h.startsWith('//'))"
        )
        return {
            "name": name, "url": full_url, "slug": slug,
            "status": "success", "internal_links_found": len(set(links)),
        }
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return {"name": name, "url": full_url, "slug": slug, "status": "error", "error": str(e)}


async def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    SCREENSHOTS_DIR.mkdir(exist_ok=True)
    HTML_DIR.mkdir(exist_ok=True)

    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
        context = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            locale="zh-TW",
        )
        page = await context.new_page()

        result = await scrape_page(page, "/", "首頁")
        results.append(result)

        for item in NAV_PAGES:
            result = await scrape_page(page, item["url"], item["name"])
            results.append(result)
            await asyncio.sleep(0.5)

        await browser.close()

    report_path = OUTPUT_DIR / "crawl_report.json"
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    success = [r for r in results if r["status"] == "success"]
    errors = [r for r in results if r["status"] == "error"]
    print(f"\n✅ 成功: {len(success)} 页  ❌ 失败: {len(errors)} 页")


if __name__ == "__main__":
    asyncio.run(main())
```

---

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [SHOPLINE](https://shopline.tw) - 原始设计灵感
- [Cloudflare](https://cloudflare.com) - 基础设施支持
- [Next.js](https://nextjs.org) - 前端框架
- [Hono](https://hono.dev) - 后端框架

---

**🌟 如果这个项目对你有帮助，请给个 Star！**