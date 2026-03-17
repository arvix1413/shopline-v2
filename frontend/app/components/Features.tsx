'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: ShoppingCart,
    title: '一站到位快速上手',
    description: '不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！'
  },
  {
    icon: TrendingUp,
    title: '成長引擎業績翻倍',
    description: '突破業績有訣竅！善用會員分級結合第一方數據與精準再行銷，深入掌握顧客需求、降低獲客成本；此外，多元第三方應用程式，讓你靈活應對各種銷售需求。'
  },
  {
    icon: Users,
    title: '極致升級全通路整合',
    description: '整合全通路開店包含社群商務、品牌 APP、POS、數據資料及開放的 API 等，大幅降低成本，加上專業的顧問服務與豐富生態圈，讓你快速推進，品牌成長無阻！'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">適用各種規模</h2>
          <p className="text-xl text-gray-600">無論是個人創業還是全球品牌</p>
          <p className="text-lg text-gray-600 mt-2">
            不論新手創業還是大型品牌，從網路開店、社群導購、OMO POS 系統到全通路整合，一站為你實現全通路零售升級，加速業績成長！
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-shopline-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-shopline-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-shopline-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              了解所有方案
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}