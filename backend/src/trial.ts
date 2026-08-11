/** 14-day trial + merchant onboarding helpers */

export const TRIAL_DAYS = 14

export const ONBOARDING_STAGES = [
  'registered',
  'store_created',
  'products_added',
  'payments_setup',
  'live',
  'paid',
] as const

export type OnboardingStage = (typeof ONBOARDING_STAGES)[number]

export const FOLLOW_UP_STATUSES = ['new', 'contacted', 'nurturing', 'won', 'lost'] as const
export type FollowUpStatus = (typeof FOLLOW_UP_STATUSES)[number]

export const STAGE_LABELS: Record<OnboardingStage, string> = {
  registered: '已註冊',
  store_created: '已建店',
  products_added: '已上架商品',
  payments_setup: '已設定金流',
  live: '商店已上線',
  paid: '已付款開通',
}

export function addDaysIso(days: number, from = new Date()): string {
  const d = new Date(from.getTime() + days * 24 * 60 * 60 * 1000)
  // Store as SQLite-friendly local+8 style string without timezone noise
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`
}

export function nowIso(): string {
  return addDaysIso(0)
}

export function parseSqlDate(value?: string | null): Date | null {
  if (!value) return null
  // Accept "YYYY-MM-DD HH:MM:SS" or ISO
  const normalized = value.includes('T') ? value : value.replace(' ', 'T') + (value.includes('Z') || value.includes('+') ? '' : 'Z')
  const d = new Date(normalized)
  return Number.isNaN(d.getTime()) ? null : d
}

export function computeTrial(row: {
  plan_status?: string | null
  trial_started_at?: string | null
  trial_ends_at?: string | null
  is_admin?: number | null
}) {
  if (row.is_admin === 1) {
    return {
      planStatus: 'paid' as const,
      daysLeft: null as number | null,
      trialEndsAt: null as string | null,
      trialStartedAt: null as string | null,
      expired: false,
      showPaywall: false,
      showReminder: false,
    }
  }

  const planStatus = (row.plan_status || 'trialing') as 'trialing' | 'expired' | 'paid'
  if (planStatus === 'paid') {
    return {
      planStatus,
      daysLeft: null,
      trialEndsAt: row.trial_ends_at || null,
      trialStartedAt: row.trial_started_at || null,
      expired: false,
      showPaywall: false,
      showReminder: false,
    }
  }

  const ends = parseSqlDate(row.trial_ends_at)
  const now = new Date()
  let daysLeft = TRIAL_DAYS
  if (ends) {
    daysLeft = Math.ceil((ends.getTime() - now.getTime()) / (24 * 60 * 60 * 1000))
  }
  const expired = planStatus === 'expired' || daysLeft <= 0
  return {
    planStatus: expired ? ('expired' as const) : ('trialing' as const),
    daysLeft: Math.max(0, daysLeft),
    trialEndsAt: row.trial_ends_at || null,
    trialStartedAt: row.trial_started_at || null,
    expired,
    showPaywall: expired,
    showReminder: !expired && daysLeft <= 3,
  }
}

export async function ensureTrialSchema(db: D1Database) {
  const userCols = [
    `ALTER TABLE users ADD COLUMN trial_started_at TEXT`,
    `ALTER TABLE users ADD COLUMN trial_ends_at TEXT`,
    `ALTER TABLE users ADD COLUMN plan_status TEXT DEFAULT 'trialing'`,
    `ALTER TABLE users ADD COLUMN follow_up_status TEXT DEFAULT 'new'`,
    `ALTER TABLE users ADD COLUMN follow_up_note TEXT DEFAULT ''`,
    `ALTER TABLE users ADD COLUMN follow_up_updated_at TEXT`,
    `ALTER TABLE users ADD COLUMN ref TEXT`,
    `ALTER TABLE users ADD COLUMN utm_source TEXT`,
    `ALTER TABLE users ADD COLUMN utm_medium TEXT`,
    `ALTER TABLE users ADD COLUMN utm_campaign TEXT`,
  ]
  for (const sql of userCols) {
    await db.prepare(sql).run().catch(() => {})
  }

  await ensureStoresTableExtras(db)

  // Backfill existing non-admin users without trial dates
  await db.prepare(`
    UPDATE users
    SET trial_started_at = COALESCE(trial_started_at, created_at, datetime('now', '+8 hours')),
        trial_ends_at = COALESCE(trial_ends_at, datetime(COALESCE(created_at, datetime('now', '+8 hours')), '+${TRIAL_DAYS} days')),
        plan_status = COALESCE(plan_status, 'trialing'),
        follow_up_status = COALESCE(follow_up_status, 'new')
    WHERE COALESCE(is_admin, 0) = 0
  `).run().catch(() => {})

  // Mark expired trials
  await db.prepare(`
    UPDATE users
    SET plan_status = 'expired'
    WHERE COALESCE(is_admin, 0) = 0
      AND COALESCE(plan_status, 'trialing') = 'trialing'
      AND trial_ends_at IS NOT NULL
      AND datetime(trial_ends_at) < datetime('now')
  `).run().catch(() => {})
}

async function ensureStoresTableExtras(db: D1Database) {
  const storeCols = [
    `ALTER TABLE stores ADD COLUMN onboarding_stage TEXT DEFAULT 'store_created'`,
    `ALTER TABLE stores ADD COLUMN payments_enabled INTEGER DEFAULT 0`,
    `ALTER TABLE stores ADD COLUMN is_live INTEGER DEFAULT 0`,
    `ALTER TABLE stores ADD COLUMN product_count INTEGER DEFAULT 0`,
    `ALTER TABLE stores ADD COLUMN last_active_at TEXT`,
  ]
  for (const sql of storeCols) {
    await db.prepare(sql).run().catch(() => {})
  }
  await db.prepare(`
    UPDATE stores
    SET onboarding_stage = COALESCE(onboarding_stage, 'store_created')
    WHERE onboarding_stage IS NULL OR onboarding_stage = ''
  `).run().catch(() => {})
}

export { ensureStoresTableExtras }

export function stageRank(stage?: string | null): number {
  const i = ONBOARDING_STAGES.indexOf((stage || 'registered') as OnboardingStage)
  return i < 0 ? 0 : i
}

export function maxStage(a?: string | null, b?: string | null): OnboardingStage {
  return stageRank(a) >= stageRank(b) ? ((a as OnboardingStage) || 'registered') : ((b as OnboardingStage) || 'registered')
}
