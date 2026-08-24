import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24" style={{ backgroundColor: '#F4F7FC' }}>
      <section className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">✓</div>
        <h1 className="mb-4 text-3xl font-black" style={{ color: '#00142D' }}>付款已送出</h1>
        <p className="mb-8" style={{ color: '#687280' }}>
          Stripe 正在确认你的订阅。确认完成后，ARVIX 团队会通过付款时填写的电子邮件与你联系。
        </p>
        <Link href="/" className="inline-block rounded-full px-8 py-3 font-bold text-white" style={{ backgroundColor: '#356DFF' }}>
          返回首页
        </Link>
      </section>
    </main>
  )
}
