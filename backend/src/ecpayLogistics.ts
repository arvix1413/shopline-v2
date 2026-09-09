/** ECPay (綠界) 超商電子地圖 — 台灣 7-11 取貨標準串接路徑（無公開 Seven API）。 */

export type EcpayLogisticsEnv = {
  ECPAY_MERCHANT_ID?: string
  ECPAY_HASH_KEY?: string
  ECPAY_HASH_IV?: string
  /** stage | production；預設 stage */
  ECPAY_LOGISTICS_MODE?: string
  /** UNIMART (B2C) | UNIMARTC2C (C2C 交貨便)；預設依 mode */
  ECPAY_LOGISTICS_SUBTYPE?: string
  SITE_URL?: string
  /** 寄件人（店家） */
  ECPAY_SENDER_NAME?: string
  ECPAY_SENDER_PHONE?: string
}

/** 店家自備綠界欄位（D1 stores 表） */
export type StoreEcpayRow = {
  ecpay_merchant_id?: string | null
  ecpay_hash_key?: string | null
  ecpay_hash_iv?: string | null
  ecpay_logistics_mode?: string | null
  ecpay_logistics_subtype?: string | null
  ecpay_sender_name?: string | null
  ecpay_sender_phone?: string | null
  name?: string | null
}

/**
 * 優先用店家自己的綠界帳號；若店家未填，可選用平台 env 當後備（測試用）。
 * 正式訂閱制應由店家自開通，平台不代收物流／貨款。
 */
export function resolveEcpayEnv(
  platform: EcpayLogisticsEnv,
  store?: StoreEcpayRow | null
): EcpayLogisticsEnv & { source: 'store' | 'platform' | 'none' } {
  const mid = (store?.ecpay_merchant_id || '').trim()
  const key = (store?.ecpay_hash_key || '').trim()
  const iv = (store?.ecpay_hash_iv || '').trim()
  if (mid) {
    return {
      ECPAY_MERCHANT_ID: mid,
      ECPAY_HASH_KEY: key || undefined,
      ECPAY_HASH_IV: iv || undefined,
      ECPAY_LOGISTICS_MODE: (store?.ecpay_logistics_mode || platform.ECPAY_LOGISTICS_MODE || 'stage').toString(),
      ECPAY_LOGISTICS_SUBTYPE: (store?.ecpay_logistics_subtype || platform.ECPAY_LOGISTICS_SUBTYPE || '').toString() || undefined,
      ECPAY_SENDER_NAME: (store?.ecpay_sender_name || store?.name || platform.ECPAY_SENDER_NAME || '').toString() || undefined,
      ECPAY_SENDER_PHONE: (store?.ecpay_sender_phone || platform.ECPAY_SENDER_PHONE || '').toString() || undefined,
      SITE_URL: platform.SITE_URL,
      source: 'store',
    }
  }
  if ((platform.ECPAY_MERCHANT_ID || '').trim()) {
    return { ...platform, source: 'platform' }
  }
  return { ...platform, source: 'none' }
}

export function ecpayConfigured(env: EcpayLogisticsEnv): boolean {
  return Boolean((env.ECPAY_MERCHANT_ID || '').trim())
}

/** 建立物流單需要 HashKey／HashIV */
export function ecpayCreateReady(env: EcpayLogisticsEnv): boolean {
  return Boolean(
    (env.ECPAY_MERCHANT_ID || '').trim() &&
      (env.ECPAY_HASH_KEY || '').trim() &&
      (env.ECPAY_HASH_IV || '').trim()
  )
}

export function maskSecret(value?: string | null): string | null {
  const v = (value || '').trim()
  if (!v) return null
  if (v.length <= 4) return '****'
  return `${'*'.repeat(Math.min(8, v.length - 4))}${v.slice(-4)}`
}

export function ecpayCreateUrl(env: EcpayLogisticsEnv): string {
  const mode = (env.ECPAY_LOGISTICS_MODE || 'stage').toLowerCase()
  return mode === 'production'
    ? 'https://logistics.ecpay.com.tw/Express/Create'
    : 'https://logistics-stage.ecpay.com.tw/Express/Create'
}

export function ecpayMapUrl(env: EcpayLogisticsEnv): string {
  const mode = (env.ECPAY_LOGISTICS_MODE || 'stage').toLowerCase()
  return mode === 'production'
    ? 'https://logistics.ecpay.com.tw/Express/map'
    : 'https://logistics-stage.ecpay.com.tw/Express/map'
}

export function ecpayLogisticsSubtype(env: EcpayLogisticsEnv): string {
  const custom = (env.ECPAY_LOGISTICS_SUBTYPE || '').trim().toUpperCase()
  if (custom) return custom
  // 綠界測試：2000933 = C2C → UNIMARTC2C；2000132 = B2C → UNIMART
  const mid = (env.ECPAY_MERCHANT_ID || '').trim()
  if (mid === '2000132') return 'UNIMART'
  return 'UNIMARTC2C'
}

/**
 * ExtraData 上限 20。格式：`Y{storeId}` / `N{storeId}`（首字 = IsCollection，其餘 = stores.id）
 * 用數字 id，避免長 slug 被截斷後回錯店。
 */
export function encodeMapExtraData(storeId: number, isCollection: 'Y' | 'N' = 'N'): string {
  const id = Math.max(1, Math.floor(Number(storeId) || 0))
  return `${isCollection === 'Y' ? 'Y' : 'N'}${id}`.slice(0, 20)
}

export function decodeMapExtraData(extra: string): {
  storeId: number | null
  /** 舊格式相容：曾用 slug 寫入 ExtraData */
  legacySlug: string | null
  isCollection: 'Y' | 'N'
} {
  const raw = String(extra || '').trim()
  if (/^[YyNn]\d+$/.test(raw)) {
    return {
      isCollection: raw[0].toUpperCase() === 'Y' ? 'Y' : 'N',
      storeId: Number(raw.slice(1)),
      legacySlug: null,
    }
  }
  if (/^[YyNn]/.test(raw) && raw.length > 1) {
    return {
      isCollection: raw[0].toUpperCase() === 'Y' ? 'Y' : 'N',
      storeId: null,
      legacySlug: raw.slice(1).toLowerCase(),
    }
  }
  return { storeId: null, legacySlug: raw.toLowerCase() || null, isCollection: 'N' }
}

export function buildCvsMapFormFields(opts: {
  env: EcpayLogisticsEnv
  storeId: number
  serverReplyUrl: string
  isCollection: 'Y' | 'N'
  device: 0 | 1
  merchantTradeNo?: string
}): Record<string, string> {
  const merchantId = (opts.env.ECPAY_MERCHANT_ID || '').trim()
  if (!merchantId) throw new Error('ECPAY_MERCHANT_ID 未設定')

  const tradeNo =
    opts.merchantTradeNo ||
    `M${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`.slice(0, 20)

  return {
    MerchantID: merchantId,
    MerchantTradeNo: tradeNo,
    LogisticsType: 'CVS',
    LogisticsSubType: ecpayLogisticsSubtype(opts.env),
    IsCollection: opts.isCollection,
    ServerReplyURL: opts.serverReplyUrl,
    ExtraData: encodeMapExtraData(opts.storeId, opts.isCollection),
    Device: String(opts.device),
  }
}

export function autoSubmitHtml(action: string, fields: Record<string, string>): string {
  const inputs = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<input type="hidden" name="${escapeHtml(k)}" value="${escapeHtml(v)}" />`
    )
    .join('\n')
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>前往 7-11 門市地圖</title></head>
<body>
<p style="font-family:sans-serif;text-align:center;margin-top:40px">正在開啟 7-11 電子地圖…</p>
<form id="ecpay" method="post" action="${escapeHtml(action)}">
${inputs}
</form>
<script>document.getElementById('ecpay').submit()</script>
</body></html>`
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** 綠界 CheckMacValue（建立物流單等 API 用；電子地圖本身通常不需） */
export async function ecpayCheckMacValue(
  params: Record<string, string>,
  hashKey: string,
  hashIV: string
): Promise<string> {
  const filtered = Object.entries(params)
    .filter(([k, v]) => k !== 'CheckMacValue' && v !== undefined && v !== null && String(v) !== '')
    .sort(([a], [b]) => (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0))

  const raw =
    `HashKey=${hashKey}&` +
    filtered.map(([k, v]) => `${k}=${v}`).join('&') +
    `&HashIV=${hashIV}`

  const encoded = ecpayUrlEncode(raw).toLowerCase()
  const digest = await md5Hex(encoded)
  return digest.toUpperCase()
}

function ecpayUrlEncode(s: string): string {
  return encodeURIComponent(s)
    .replace(/%20/g, '+')
    .replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`)
    .replace(/%21/g, '!')
    .replace(/%28/g, '(')
    .replace(/%29/g, ')')
    .replace(/%2a/gi, '*')
}

async function md5Hex(message: string): Promise<string> {
  // Workers SubtleCrypto 不支援 MD5；用精簡實作
  const { md5 } = await import('./md5')
  return md5(message)
}

function parseEcpayCreateResponse(text: string): {
  ok: boolean
  error?: string
  fields: Record<string, string>
} {
  const raw = (text || '').trim()
  if (raw.startsWith('0|')) {
    return { ok: false, error: raw.slice(2).trim() || '綠界建立物流單失敗', fields: {} }
  }
  const payload = raw.startsWith('1|') ? raw.slice(2) : raw
  const fields: Record<string, string> = {}
  for (const part of payload.split('&')) {
    const i = part.indexOf('=')
    if (i < 0) continue
    fields[decodeURIComponent(part.slice(0, i))] = decodeURIComponent(part.slice(i + 1).replace(/\+/g, ' '))
  }
  const rtn = Number(fields.RtnCode || 0)
  if (rtn !== 1 && rtn !== 300) {
    // 1 = 成功；部分文件 300 為訂單處理中亦可接受
    return { ok: false, error: fields.RtnMsg || `綠界回傳狀態 ${fields.RtnCode || '未知'}`, fields }
  }
  return { ok: true, fields }
}

export type CreateCvsOrderInput = {
  env: EcpayLogisticsEnv
  merchantTradeNo: string
  goodsAmount: number
  goodsName: string
  isCollection: boolean
  senderName: string
  senderCellPhone: string
  receiverName: string
  receiverCellPhone: string
  receiverStoreId: string
  serverReplyUrl: string
  receiverEmail?: string
}

export type CreateCvsOrderResult = {
  ok: boolean
  error?: string
  logisticsId?: string
  cvsPaymentNo?: string
  cvsValidationNo?: string
  /** 店家去 ibon 輸入的交貨便代碼 = PaymentNo + ValidationNo */
  shipmentCode?: string
  raw?: Record<string, string>
}

/** 幕後建立 7-11 C2C／B2C 門市物流單，成功後回傳寄件代碼 */
export async function createCvsLogisticsOrder(input: CreateCvsOrderInput): Promise<CreateCvsOrderResult> {
  if (!ecpayCreateReady(input.env)) {
    return { ok: false, error: '尚未設定 ECPAY_MERCHANT_ID／HASH_KEY／HASH_IV' }
  }
  const merchantId = (input.env.ECPAY_MERCHANT_ID || '').trim()
  const hashKey = (input.env.ECPAY_HASH_KEY || '').trim()
  const hashIV = (input.env.ECPAY_HASH_IV || '').trim()
  const subtype = ecpayLogisticsSubtype(input.env)
  const amount = Math.round(input.goodsAmount)
  if (!Number.isFinite(amount) || amount < 1) {
    return { ok: false, error: '訂單金額無效' }
  }
  if (amount > 20000) {
    return { ok: false, error: '7-11 取貨／貨到付款單筆金額上限為 NT$ 20,000' }
  }
  const now = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  const tradeDate = `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`

  const params: Record<string, string> = {
    MerchantID: merchantId,
    MerchantTradeNo: input.merchantTradeNo.slice(0, 20),
    MerchantTradeDate: tradeDate,
    LogisticsType: 'CVS',
    LogisticsSubType: subtype,
    GoodsAmount: String(amount),
    IsCollection: input.isCollection ? 'Y' : 'N',
    GoodsName: sanitizeGoodsName(input.goodsName),
    SenderName: sanitizePersonName(input.senderName),
    SenderCellPhone: normalizeTwMobile(input.senderCellPhone),
    ReceiverName: sanitizePersonName(input.receiverName),
    ReceiverCellPhone: normalizeTwMobile(input.receiverCellPhone),
    ReceiverStoreID: String(input.receiverStoreId || '').trim(),
    ServerReplyURL: input.serverReplyUrl,
  }
  if (input.isCollection) {
    params.CollectionAmount = String(amount)
  }
  if (input.receiverEmail) params.ReceiverEmail = input.receiverEmail

  params.CheckMacValue = await ecpayCheckMacValue(params, hashKey, hashIV)

  const body = new URLSearchParams(params)
  const res = await fetch(ecpayCreateUrl(input.env), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const text = await res.text()
  const parsed = parseEcpayCreateResponse(text)
  if (!parsed.ok) return { ok: false, error: parsed.error, raw: parsed.fields }

  const paymentNo = (parsed.fields.CVSPaymentNo || '').trim()
  const validationNo = (parsed.fields.CVSValidationNo || '').trim()
  const shipmentCode = paymentNo && validationNo ? `${paymentNo}${validationNo}` : paymentNo || undefined

  return {
    ok: true,
    logisticsId: parsed.fields.AllPayLogisticsID,
    cvsPaymentNo: paymentNo || undefined,
    cvsValidationNo: validationNo || undefined,
    shipmentCode,
    raw: parsed.fields,
  }
}

function sanitizeGoodsName(name: string) {
  return (name || '商品')
    .replace(/[\^'`!@#%&*+\\"<>|_\[\]]/g, '')
    .slice(0, 40) || '商品'
}

function sanitizePersonName(name: string) {
  let n = (name || '').replace(/[0-9]/g, '').replace(/[^\u4e00-\u9fffA-Za-z\s]/g, '').trim()
  if (!n) n = '顧客'
  // 綠界：中文約 2~5 字、英文 4~10；過短補「先生」
  if ([...n].length < 2) n = `${n}先生`
  return n.slice(0, 10)
}

function normalizeTwMobile(phone: string) {
  const digits = (phone || '').replace(/\D/g, '')
  if (digits.startsWith('09') && digits.length === 10) return digits
  if (digits.length === 9 && digits.startsWith('9')) return `0${digits}`
  return digits.slice(0, 10) || '0912345678'
}
