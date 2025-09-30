import React, { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeDemo, setActiveDemo] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const demos = [
    {
      title: "Muhasebe AI Asistanı",
      description: "Muhasebe sorularınızı anında yanıtlayın",
      code: `// Muhasebe hesaplama örneği
const kdvHesapla = (tutar, oran = 20) => {
  return tutar * (oran / 100);
};

console.log(kdvHesapla(1000)); // 200 TL`
    },
    {
      title: "Vergi Hesaplayıcı",
      description: "Gelir vergisi ve KDV hesaplamalarını otomatikleştirin",
      code: `// Gelir vergisi hesaplama
const gelirVergisi = (gelir) => {
  if (gelir <= 32000) return gelir * 0.15;
  if (gelir <= 70000) return gelir * 0.20;
  return gelir * 0.27;
};`
    },
    {
      title: "Mali Müşavir Araçları",
      description: "Profesyonel muhasebe araçları ve raporlama",
      code: `// Bilanço analizi
const bilanco = {
  aktif: 50000,
  pasif: 50000,
  ozkaynak: 20000,
  borc: 30000
};

const likiditeOrani = aktif / borc;`
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated Background - Responsive sizes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/2kebirxweb-fil.png" alt="KebirX Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                kebirX
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#" className="text-sm xl:text-base hover:text-blue-400 transition-colors">Forum</a>
              <a href="#" className="text-sm xl:text-base hover:text-blue-400 transition-colors">Makaleler</a>
              <a href="#" className="text-sm xl:text-base hover:text-blue-400 transition-colors">AI Araçları</a>
              <a href="#" className="text-sm xl:text-base hover:text-blue-400 transition-colors">Konular</a>
              <a href="#" className="text-sm xl:text-base hover:text-blue-400 transition-colors">Hakkında</a>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-base hover:text-blue-400 transition-colors py-2">Forum</a>
                <a href="#" className="text-base hover:text-blue-400 transition-colors py-2">Makaleler</a>
                <a href="#" className="text-base hover:text-blue-400 transition-colors py-2">AI Araçları</a>
                <a href="#" className="text-base hover:text-blue-400 transition-colors py-2">Konular</a>
                <a href="#" className="text-base hover:text-blue-400 transition-colors py-2">Hakkında</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
<section className="relative z-10 pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center flex flex-col items-center">
      
      {/* Başlık */}
      <h1 className="font-bold leading-tight mb-6 sm:mb-8">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center sm:text-justify mb-2 sm:mb-3">
          Muhasebe Dünyası
        </span>
        <span className={`${isDark ? 'text-white' : 'text-gray-900'} block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center sm:text-justify`}>
          Yapay Zeka ile Buluşuyor...
        </span>
      </h1>

      {/* Açıklama Metni - Şık tipografi + badge */}
<div className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-700'} text-center mb-10 sm:mb-14`}>
  <p className="mb-4 font-semibold">
    Muhasebe profesyonelleri için tasarlanmış{" "}
    <span className="text-blue-500">AI destekli platform.</span>
  </p>
  <p className={`inline-block px-4 py-2 rounded-xl ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'} text-sm sm:text-base`}>
    Forum, makaleler ve akıllı araçlarla mesleğinizi bir üst seviyeye taşıyın.
  </p>
</div>

      {/* Butonlar - Responsive Layout */}
      <div className="mb-10 sm:mb-16 w-full">
        {/* PC/Laptop: 3 buton yan yana */}
        <div className="hidden sm:flex gap-4 justify-center items-center max-w-4xl mx-auto">
          <button className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            forum
          </button>
          <a 
            href="https://www.youtube.com/@kebirxtv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1"
          >
            <button className="w-full px-8 py-4 bg-red-600 text-black rounded-xl font-semibold text-lg hover:bg-red-700 hover:text-black transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              kebirXTV
            </button>
          </a>
          <button className={`flex-1 px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-xl font-semibold text-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-200 shadow-lg`}>
            ai tools
          </button>
        </div>

        {/* Mobil: Forum + kebirXTV üstte, AI Tools altta */}
        <div className="sm:hidden space-y-3 max-w-md mx-auto">
          {/* Üst satır: Forum + kebirXTV */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-base hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              forum
            </button>
            <a 
              href="https://www.youtube.com/@kebirxtv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
            >
              <button className="w-full px-4 py-3 bg-red-600 text-black rounded-xl font-semibold text-base hover:bg-red-700 hover:text-black transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                kebirXTV
              </button>
            </a>
          </div>
          
          {/* Alt satır: AI Tools */}
          <button className={`w-full px-4 py-3 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-xl font-semibold text-base border ${isDark ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-200 shadow-lg`}>
            ai tools
          </button>
        </div>
      </div>

      {/* Arama kutusu */}
      <form action="https://forum.kebirxai.tr/search" target="_blank" method="get" className="max-w-2xl w-full px-4">
        <div className={`relative backdrop-blur-md ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
          <input
            type="text"
            name="q"
            placeholder="Muhasebe konularında arama yapın..."
            className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} text-base sm:text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 sm:pr-14`}
          />
          <button type="submit" className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      {/* Interactive Demo Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yapay Zeka Araçlarını Deneyin
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Muhasebe işlemlerinizi hızlandıran akıllı araçlarımızı keşfedin!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Demo Tabs */}
            <div className="space-y-3 sm:space-y-4">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeDemo === index
                      ? `${isDark ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400'} border-2`
                      : `${isDark ? 'bg-gray-800/50 hover:bg-gray-800/70 border-gray-700' : 'bg-white/50 hover:bg-white/70 border-gray-200'} border hover:border-gray-600`
                  } backdrop-blur-md`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{demo.title}</h3>
                  <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{demo.description}</p>
                </div>
              ))}
            </div>

            {/* Code Display */}
            <div className={`${isDark ? 'bg-gray-900/80' : 'bg-gray-800'} rounded-2xl p-4 sm:p-6 backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-600'} order-first lg:order-last`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">JavaScript</span>
              </div>
              <pre className="text-green-400 text-xs sm:text-sm md:text-base overflow-x-auto">
                <code>{demos[activeDemo].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                Neden kebirX !?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Destekli Çözümler",
                description: "Yapay zeka ile muhasebe işlemlerinizi otomatikleştirin"
              },
              {
                icon: "👥",
                title: "Profesyonel Topluluk",
                description: "Binlerce muhasebe uzmanı ile bilgi paylaşın"
              },
              {
                icon: "📚",
                title: "Güncel İçerik",
                description: "Sektördeki son gelişmeleri takip edin"
              },
              {
                icon: "🔧",
                title: "Pratik Araçlar",
                description: "Hesaplama ve analiz araçları ile zamandan tasarruf edin"
              },
              {
                icon: "📊",
                title: "Raporlama",
                description: "Detaylı raporlar ve analizler oluşturun"
              },
              {
                icon: "🎯",
                title: "Uzman Desteği",
                description: "Alanında uzman kişilerden destek alın"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
                <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'} backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Topluluğa Katılın!
              </span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Muhasebe dünyasının en büyük Yapay Zeka destekli platformunda yerinizi alın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forum.kebirxai.tr" target="_blank">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Ücretsiz Başla!
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 ${isDark ? 'bg-gray-900/80' : 'bg-gray-50/80'} backdrop-blur-md border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img src="/2kebirxweb-fil.png" alt="KebirX Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  kebirX
                </span>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs sm:text-sm`}>
                Muhasebe dünyasının AI destekli platformu
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Platform</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Makaleler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Araçları</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Konular</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Destek</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Yardım</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SSS</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Geri Bildirim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Yasal</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gizlilik</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Şartlar</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Çerezler</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              2025 KebirX. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;