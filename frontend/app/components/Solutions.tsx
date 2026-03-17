'use client'

import { motion } from 'framer-motion'
import { Store, Smartphone, CreditCard, Users, Zap } from 'lucide-react'

const solutions = [
  {
    icon: Store,
    title: '網路商店',
    description: '網路開店的所需一切， SHOPLINE 都幫你準備好了！從商品上架、金物流串接、顧客管理到行銷推廣及後台訂單管理等，一個後台就能輕鬆搞定。'
  },
  {
    icon: Smartphone,
    title: '社群購物',
    description: '內建社群直播購物、AI 導購機器人與訊息整合中心等，確保從互動到下單的每一步都順暢無阻，無縫的社群購物體驗，助你輕鬆收單、提升業績。'
  },
  {
    icon: CreditCard,
    title: '零售 POS',
    description: '專為零售品牌打造的智慧 OMO POS 系統，簡單直覺的介面，從結帳收銀、商品庫存管理、會員經營、數據分析到線上、線下的資訊的無縫整併，一站搞定！'
  },
  {
    icon: Users,
    title: 'Smart OMO 會員導購工具',
    description: '門市和網店聰明串連！不管顧客在實體門市或是網路商店，都能快速註冊品牌會員；店員隨時輕鬆導購，引導跨通路消費，加速全通路業績成長。'
  },
  {
    icon: Zap,
    title: 'Shopper App',
    description: '輕鬆打造品牌專屬購物 App！結合官網及 App 優勢，透過推播通知、會員卡、優惠條碼等 App 專屬體驗，打造穩定會員流量池，深化 OMO 效益。'
  }
]

export default function Solutions() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">全通路開店整合</h2>
          <p className="text-xl text-gray-600">市場唯一五大原生開店工具</p>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
            全通路開店工具原生連動，一站整合、免串接！輔以市場最成熟的開放 API，快速實現線上及線下無縫整合，打造 OMO 零售生意！
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-shopline-blue/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-shopline-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-shopline-blue transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}