import { StatCard } from '../components/StatCard';
import { Users, MapIcon, TrendingUp, Building2, Newspaper, Mountain } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  const stats = [
    { title: 'Aholi soni', value: '121,7 ming', icon: Users, description: '2023-yil holatiga' },
    { title: 'Hudud maydoni', value: '769,4 km²', icon: MapIcon, description: 'Umumiy maydon' },
    { title: 'Sanoat hajmi', value: '322,4 mlrd', icon: TrendingUp, description: "so'm (2025-yil)" },
    { title: 'Yangi ish o\'rinlari', value: '5,214', icon: Building2, description: '2025-yil 1-chorak' },
  ];

  const news = [
    {
      id: 1,
      title: "93 nafar fuqaroga jami 23,25 gektar yer ajratildi",
      date: "2026-yil fevral",
      description: "Mingbuloq tumanida 93 nafar fuqaroga qishloq xo'jaligi ekinlari yetishtirishga mo'ljallangan 23,25 gektar maydonli yer uchastkalar ajratildi."
    },
    {
      id: 2,
      title: "Qo'g'aliko'li MFY ichimlik suvi tarmog'i tortildi",
      date: "2026-yil yanvar",
      description: "Qo'g'aliko'li mahallasida 1010 xonadonga ichimlik suvi ta'minoti tarmog'i tortildi. Bu aholi hayot sifatini sezilarli darajada yaxshilaydi."
    },
    {
      id: 3,
      title: "Tumanda mini GES o'rnatildi",
      date: "2026-yil yanvar",
      description: "Mingbuloq tumanida yangilanuvchi energiya manbaidan foydalanish maqsadida mini gidroelektrostansiya o'rnatildi."
    },
  ];

  const quickLinks = [
    { title: 'Tuman haqida', path: '/about', icon: MapIcon, color: 'bg-blue-500' },
    { title: 'Aholi statistikasi', path: '/population', icon: Users, color: 'bg-green-500' },
    { title: 'Iqtisodiyot', path: '/economy', icon: TrendingUp, color: 'bg-purple-500' },
    { title: 'Turizm', path: '/tourism', icon: Mountain, color: 'bg-orange-500' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="max-w-[1440px] mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              Mingbuloq tumani ochiq ma'lumotlar portali
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Namangan viloyati Mingbuloq tumani haqida to'liq va ishonchli ma'lumotlar - demografiya, iqtisodiyot, ijtimoiy soha va ko'plab boshqa ko'rsatkichlar
            </p>
            <div className="flex gap-4">
              <Link 
                to="/about" 
                className="bg-white text-[#1E3A8A] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Tuman haqida batafsil
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Statistics Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Asosiy ko'rsatkichlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Tez havola</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1F2937]">{link.title}</h3>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1F2937]">So'nggi yangiliklar</h2>
            <Link to="/news" className="text-[#3B82F6] font-semibold hover:underline">
              Barcha yangiliklar →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <Link to="/news" className="text-[#3B82F6] font-semibold text-sm hover:underline">
                  Batafsil →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tourism Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1F2937]">Turizm joylari</h2>
            <Link to="/tourism" className="text-[#3B82F6] font-semibold hover:underline">
              Barchasi →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Go'rtepa mineral bulog'i", desc: "Sog'lomlashtiruvchi mineral suv manbai" },
              { name: "Sirdaryo sohillari", desc: "Noyob tabiat va dam olish zonalari" },
              { name: "Qo'qonko'l va ko'llar", desc: "Baliqchilik va dam olish imkoniyatlari" }
            ].map((place, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <div className="w-full h-40 bg-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Mountain className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}