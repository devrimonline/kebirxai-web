import React, { useState } from 'react';
function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeDemo, setActiveDemo] = useState(0);

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
    {/* Animated Background */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
    </div>

    {/* Navigation */}
    <nav className={`relative z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
    {/* Logo */}
    <div className="flex items-center space-x-3">
    <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
    <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* Fil figürü */}
    <path d="M20 80 Q15 70 15 60 Q15 40 25 30 Q35 20 50 20 Q65 20 75 30 Q85 40 85 60 Q85 70 80 80 L75 85 Q70 90 65 85 L60 80 Q55 85 50 80 Q45 85 40 80 L35 85 Q30 90 25 85 Z" 
    fill="currentColor" className="opacity-90"/>
    {/* Dişler */}
    <path d="M75 75 Q80 80 85 75 Q80 85 75 80" fill="currentColor" className="opacity-80"/>
    <path d="M75 80 Q80 85 85 80 Q80 90 75 85" fill="currentColor" className="opacity-80"/>
    {/* Göz */}
    <circle cx="35" cy="45" r="3" fill={isDark ? "#1f2937" : "#ffff"}/>
    {/* Dişli */}
    <g transform="translate(45,35) scale(0.8)">
    <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="0" cy="0" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M-2,-8 L2,-8 L2,-12 L-2,-12 Z M8,-2 L8,2 L12,2 L12,-2 Z M2,8 L-2,8 L-2,12 L2,12 Z M-8,2 L-8,-2 L-12,-2 L-12,2 Z" 
    fill="currentColor"/>
    </g>
    {/* Devre */}
    <g transform="translate(25,65) scale(0.6)">
    <circle cx="0" cy="0" r="2" fill="currentColor"/>
    <path d="M0,0 L8,0 M8,0 L8,-8 M8,-8 L16,-8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="16" cy="-8" r="2" fill="currentColor"/>
    <path d="M16,-8 L24,-8 M24,-8 L24,0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="24" cy="0" r="2" fill="currentColor"/>
    </g>
    </svg>
    </div>
    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    kebirX
    </div>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-8">
    <a href="#" className="hover:text-blue-400 transition-colors">Forum</a>
    <a href="#" className="hover:text-blue-400 transition-colors">Makaleler</a>
    <a href="#" className="hover:text-blue-400 transition-colors">AI Araçları</a>
    <a href="#" className="hover:text-blue-400 transition-colors">Konular</a>
    <a href="#" className="hover:text-blue-400 transition-colors">Hakkında</a>
    </div>

    {/* Theme Toggle & Mobile Menu */}
    <div className="flex items-center space-x-4">
    <button
    onClick={() => setIsDark(!isDark)}
    className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
    >
    {isDark ? '🌙' : '☀️'}
    </button>
    
    {/* Mobile Menu Button */}
    <button className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </button>
    </div>
    </div>
    </div>
    </nav>

    {/* Hero Section */}
    <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Muhasebe Dünyası
    </span>
    <br />
    <span className={isDark ? 'text-white' : 'text-gray-900'}>
    AI ile Buluşuyor
    </span>
    </h1>
    
    <p className={`text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
    Muhasebe profesyonelleri için tasarlanmış AI destekli platform. 
    Forum, makaleler ve akıllı araçlarla mesleğinizi bir üst seviyeye taşıyın.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
    Foruma Katıl
    </button>
    <button className={`w-full sm:w-auto px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-xl font-semibold text-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-200 shadow-lg`}>
    AI Araçlarını Keşfet
    </button>
    </div>

    {/* Search Bar */}
    <div className="max-w-2xl mx-auto">
    <div className={`relative backdrop-blur-md ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} rounded-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
    <input
    type="text"
    placeholder="Muhasebe konularında arama yapın..."
    className={`w-full px-6 py-4 bg-transparent ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    </button>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Interactive Demo Section */}
    <section className="relative z-10 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    AI Araçlarını Deneyin
    </span>
    </h2>
    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
    Muhasebe işlemlerinizi hızlandıran akıllı araçlarımızı keşfedin
    </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    {/* Demo Tabs */}
    <div className="space-y-4">
    {demos.map((demo, index) => (
    <div
    key={index}
    onClick={() => setActiveDemo(index)}
    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
    activeDemo === index
    ? `${isDark ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400'} border-2`
    : `${isDark ? 'bg-gray-800/50 hover:bg-gray-800/70 border-gray-700' : 'bg-white/50 hover:bg-white/70 border-gray-200'} border hover:border-gray-600`
    } backdrop-blur-md`}
    >
    <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{demo.description}</p>
    </div>
    ))}
    </div>

    {/* Code Display */}
    <div className={`${isDark ? 'bg-gray-900/80' : 'bg-gray-800'} rounded-2xl p-6 backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-600'}`}>
    <div className="flex items-center justify-between mb-4">
    <div className="flex space-x-2">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
    <span className="text-gray-400 text-sm">JavaScript</span>
    </div>
    <pre className="text-green-400 text-sm sm:text-base overflow-x-auto">
    <code>{demos[activeDemo].code}</code>
    </pre>
    </div>
    </div>
    </div>
    </section>

    {/* Features Grid */}
    <section className="relative z-10 py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
    <span className={isDark ? 'text-white' : 'text-gray-900'}>
    Neden KebirX?
    </span>
    </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-all duration-300 transform hover:scale-105`}
    >
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
    </div>
    ))}
    </div>
    </div>
    </section>

    {/* CTA Section */}
    <section className="relative z-10 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className={`p-12 rounded-3xl ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'} backdrop-blur-md border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Topluluğa Katılın
    </span>
    </h2>
    <p className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
    Muhasebe dünyasının en büyük AI destekli platformunda yerinizi alın
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
    Ücretsiz Başla
    </button>
    <button className={`px-8 py-4 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} rounded-xl font-semibold text-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-200 shadow-lg`}>
    Demo İzle
    </button>
    </div>
    </div>
    </div>
    </section>

    {/* Footer */}
    <footer className={`relative z-10 ${isDark ? 'bg-gray-900/80' : 'bg-gray-50/80'} backdrop-blur-md border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="col-span-2 md:col-span-1">
    <div className="flex items-center space-x-3 mb-4">
    <div className="w-8 h-8 relative">
    <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M20 80 Q15 70 15 60 Q15 40 25 30 Q35 20 50 20 Q65 20 75 30 Q85 40 85 60 Q85 70 80 80 L75 85 Q70 90 65 85 L60 80 Q55 85 50 80 Q45 85 40 80 L35 85 Q30 90 25 85 Z" 
    fill="currentColor" className="opacity-90"/>
    <circle cx="35" cy="45" r="3" fill={isDark ? "#1f2937" : "#ffff"}/>
    <g transform="translate(45,35) scale(0.6)">
    <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="0" cy="0" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M-2,-8 L2,-8 L2,-12 L-2,-12 Z M8,-2 L8,2 L12,2 L12,-2 Z M2,8 L-2,8 L-2,12 L2,12 Z M-8,2 L-8,-2 L-12,-2 L-12,2 Z" 
    fill="currentColor"/>
    </g>
    </svg>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    kebirX
    </span>
    </div>
    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
    Muhasebe dünyasının AI destekli platformu
    </p>
    </div>
    
    <div>
    <h3 className="font-semibold mb-4">Platform</h3>
    <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Forum</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Makaleler</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">AI Araçları</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Konular</a></li>
    </ul>
    </div>
    
    <div>
    <h3 className="font-semibold mb-4">Destek</h3>
    <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Yardım</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">İletişim</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">SSS</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Geri Bildirim</a></li>
    </ul>
    </div>
    
    <div>
    <h3 className="font-semibold mb-4">Yasal</h3>
    <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Gizlilik</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Şartlar</a></li>
    <li><a href="#" className="hover:text-blue-400 transition-colors">Çerezler</a></li>
    </ul>
    </div>
    </div>
    
    <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} text-center`}>
    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
    © 2024 KebirX. Tüm hakları saklıdır.
    </p>
    </div>
    </div>
    </footer>
    </div>
  );
}
export default App;