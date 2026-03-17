'use client'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0f0f5e 0%, #1e1e8f 25%, #2d2db0 50%, #4a3fa8 75%, #6b52b8 100%)' }}
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #7c6fd4, transparent)' }} />
        <div className="absolute top-0 right-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: main content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
              全方位零售整合專家
            </h1>
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              SHOPLINE 提供全方位的零售解決方案，一站實現全通路整合，<br className="hidden lg:block" />
              並透過知識賦能與生態圈服務拓展商機、驅動成長！
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#1a1a8f] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              免費試用
            </a>

            {/* Dashboard preview mockup */}
            <div className="mt-16 relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="ml-4 flex-1 bg-white/10 rounded h-5 text-xs text-white/40 flex items-center px-3">
                    shopline.tw/admin
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {['今日訂單', '本月營收', '商品數', '會員數'].map((label, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold">{['128', 'NT$48K', '256', '1.2K'][i]}</div>
                        <div className="text-xs text-white/60 mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-xl h-24 flex items-center justify-center">
                    <div className="flex items-end gap-2 h-16">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                        <div key={i} className="w-4 rounded-t bg-white/40" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: LINE chat card */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-800">
              {/* Chat header */}
              <div className="bg-[#06c755] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-white font-bold text-sm">
                  SL
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">SHOPLINE 顧問</div>
                  <div className="text-white/80 text-xs">線上中</div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-3 bg-[#f0f0f0]">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066ff] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">P</div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm max-w-[220px] shadow-sm">
                    <p className="font-semibold text-gray-900 mb-1">歡迎來到 SHOPLINE！</p>
                    <p className="text-gray-600 text-xs leading-relaxed">我們致力於提供完整的零售解決方案，協助品牌在全通路打造一致、流暢且高效的營運體驗。</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066ff] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">P</div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm max-w-[220px] shadow-sm">
                    <p className="text-gray-600 text-xs leading-relaxed">多元工具、專業資源與生態圈服務，將助你掌握商機、驅動長期成長！</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066ff] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">P</div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm max-w-[220px] shadow-sm">
                    <p className="text-gray-700 text-xs font-semibold mb-1">想進一步了解適合你的零售解決方案與資源？</p>
                    <p className="text-gray-600 text-xs leading-relaxed">掃描 QRCode 加入 SHOPLINE 顧問 LINE@，專業團隊將與你聯繫，提供量身建議。</p>
                    {/* QR code placeholder */}
                    <div className="mt-3 w-20 h-20 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-0.5">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div key={i} className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-gray-800' : 'bg-white'} rounded-sm`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-right text-xs text-gray-400">Peter · 1d</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
