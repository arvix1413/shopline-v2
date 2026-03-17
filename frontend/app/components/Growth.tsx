'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react'

export default function Growth() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">持續準備賦能成長</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-shopline-orange/10 to-orange-100 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-shopline-orange rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">電商成長學苑</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                商家專屬學習平台，多元課程包含趨勢講座與檔期實戰班等，讓商家跟上市場趨勢、掌握致勝關鍵。
              </p>
              <button className="bg-shopline-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                立即學習
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-shopline-blue mr-3" />
                <h4 className="text-lg font-semibold">專業認證課程</h4>
              </div>
              <p className="text-gray-600">獲得業界認可的電商專業認證</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-shopline-green mr-3" />
                <h4 className="text-lg font-semibold">社群交流</h4>
              </div>
              <p className="text-gray-600">與同業交流經驗，共同成長</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-shopline-orange mr-3" />
                <h4 className="text-lg font-semibold">市場趨勢報告</h4>
              </div>
              <p className="text-gray-600">掌握最新市場動態與商機</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-shopline-blue to-blue-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">一站掌握</h3>
          <p className="text-xl mb-8 opacity-90">
            一個後台，全面掌握品牌經營所需！強大齊全的功能及彈性的架構，從後端營運管理到前端銷售，助你高效經營、快速拓展市場。
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 bg-white/30 rounded-lg mx-auto mb-3"></div>
                <div className="text-sm opacity-80">功能 {item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}