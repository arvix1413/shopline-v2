export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">SHOPLINE</div>
            <p className="text-gray-400 mb-6">
              全方位零售整合專家，助你實現全通路成長
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">產品方案</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">網路商店</a></li>
              <li><a href="#" className="hover:text-white transition-colors">社群購物</a></li>
              <li><a href="#" className="hover:text-white transition-colors">零售 POS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">品牌 APP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">資源中心</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">成功案例</a></li>
              <li><a href="#" className="hover:text-white transition-colors">電商學苑</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技術文件</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API 文件</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">支援服務</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">客服中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技術支援</a></li>
              <li><a href="#" className="hover:text-white transition-colors">合作夥伴</a></li>
              <li><a href="#" className="hover:text-white transition-colors">聯絡我們</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SHOPLINE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">隱私政策</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">服務條款</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie 政策</a>
          </div>
        </div>
      </div>
    </footer>
  )
}