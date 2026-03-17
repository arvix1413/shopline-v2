'use client'

import { motion } from 'framer-motion'
import { Target, Layers, BarChart, Database, Repeat } from 'lucide-react'
import Link from 'next/link'

const integrations = [
  {
    icon: Target,
    title: '流量獲取與轉換解決方案',
    description: '跨場景流量覆蓋 x 流量轉換工具 x 一站式整合服務，協助商家突破流量天花板，輕輕鬆鬆流量變現、提升轉換！'
  },
  {
    icon: Layers,
    title: 'OMO 全通路整合解決方案',
    description: '不管是從實體店做數位轉型還是網店拓展線下新商機，皆能透過 「 系統、通路、數據」三大核心的整合，創造零斷點的 OMO 生意。'
  },
  {
    icon: BarChart,
    title: '商店營運效率解決方案',
    description: 'SHOPLINE 全面支援商家在「商店建立準備」、「銷售與訂單管理」及「出貨及售後服務」過程中，有效節省人力成本、加強營運效率！'
  },
  {
    icon: Database,
    title: '數據賦能解決方案',
    description: '告別低效數據圖表！SHOPLINE 整合第一方數據，精煉「人」、「貨」、「場」三大指標數據，搭配顧問服務與產業趨勢報告，助你洞察市場、加速決策、提升業績！'
  },
  {
    icon: Repeat,
    title: '會員回購解決方案',
    description: '想打造專屬品牌網店的會員經營閉環？從精準顧客分眾、活動優惠玩法到自動化推播系統，SHOPLINE 幫你輕鬆建立，低成本打造高回購，舊客經營 level up！'
  }
]

export default function Integration() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">全方位零售解決方案</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-shopline-green to-green-500 rounded-xl flex items-center justify-center mb-6">
                <integration.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                {integration.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-shopline-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              了解更多
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}