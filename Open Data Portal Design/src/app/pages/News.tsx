import { PageHeader } from '../components/PageHeader';
import { Calendar, Tag } from 'lucide-react';

const newsCategories = ['Barcha yangiliklar', 'Iqtisodiyot', 'Ta\'lim', 'Sog\'liqni saqlash', 'Madaniyat', 'Sport'];

const newsItems = [
  {
    id: 1,
    title: "93 nafar fuqaroga jami 23,25 gektar yer ajratildi",
    date: "2026-yil fevral",
    category: "Iqtisodiyot",
    description: "Mingbuloq tumanida 93 nafar fuqaroga qishloq xo'jaligi ekinlari yetishtirishga mo'ljallangan jami 23,25 gektar maydonli yer uchastkalar ajratildi. Bu tadbirkorlik va dehqonchilikni rivojlantirishga katta hissa qo'shadi.",
    image: true
  },
  {
    id: 2,
    title: "Qo'g'aliko'li MFY ichimlik suvi tarmog'i tortildi",
    date: "2026-yil yanvar",
    category: "Infratuzilma",
    description: "Qo'g'aliko'li mahalla fuqarolar yig'ini hududida 1010 xonadonga ichimlik suvi ta'minoti tarmog'i tortildi. Bu loyiha aholi turmush sifatini sezilarli darajada yaxshilaydi va sog'lom hayot tarzini ta'minlaydi.",
    image: true
  },
  {
    id: 3,
    title: "Mingbuloq tumanida mini GES o'rnatildi",
    date: "2026-yil yanvar",
    category: "Energetika",
    description: "Tumanda yangilanuvchi energiya manbaidan foydalanish maqsadida zamonaviy mini gidroelektrostansiya o'rnatildi. Bu ekologik toza energiya ishlab chiqarishga imkon beradi va atrof-muhitni muhofaza qilishga xizmat qiladi.",
    image: true
  },
  {
    id: 4,
    title: "Do'stlik istirohat bog'i rekonstruksiyasi boshlandi",
    date: "2026-yil mart",
    category: "Madaniyat",
    description: "Tuman markazidagi mashhur Do'stlik istirohat bog'ining to'liq rekonstruksiya qilish ishlari boshlandi. Bog'da zamonaviy ko'ngilochar ob'ektlar, sport majmualari va yashil hududlar barpo etiladi.",
    image: false
  },
  {
    id: 5,
    title: "Yangi sanoat zonalari yaratilmoqda",
    date: "2026-yil fevral",
    category: "Iqtisodiyot",
    description: "Tumanda kichik va o'rta biznes uchun maxsus sanoat zonalari tashkil etilmoqda. Bu tadbirkorlarning faoliyat yuritishi uchun qulay shart-sharoit yaratishga qaratilgan muhim loyiha.",
    image: false
  },
  {
    id: 6,
    title: "24/7 ko'ngilochar ko'chalar loyihasi",
    date: "2026-yil yanvar",
    category: "Madaniyat",
    description: "Yoshlar va oilalar uchun kunduzi va tunda faol bo'ladigan ko'ngilochar ko'chalar loyihasi amalga oshirilmoqda. Bu dam olish va o'yin-kulgi imkoniyatlarini kengaytiradi.",
    image: false
  },
  {
    id: 7,
    title: "Yo'llar ta'mirlash dasturi davom etmoqda",
    date: "2026-yil fevral",
    category: "Infratuzilma",
    description: "Tuman ichidagi asosiy yo'llarni ta'mirlash va zamonaviylashtirish dasturi muvaffaqiyatli amalga oshirilmoqda. Bu transport harakatini yaxshilashga va xavfsizlikni oshirishga xizmat qiladi.",
    image: false
  },
  {
    id: 8,
    title: "Sohilbo'yi hududlarni obodonlashtirish",
    date: "2026-yil yanvar",
    category: "Ekologiya",
    description: "Sirdaryo va mahalliy ko'llar sohillaridagi hududlarni obodonlashtirish ishlari olib borilmoqda. Bu dam olish zonalarini yaratish va tabiatni muhofaza qilishga qaratilgan.",
    image: false
  }
];

export function News() {
  return (
    <div>
      <PageHeader 
        title="Yangiliklar" 
        description="Mingbuloq tumanining eng so'nggi yangiliklari va voqealari"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {newsCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                index === 0
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {news.image && (
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <Calendar className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-sm">Yangilik rasmi</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Tag className="w-4 h-4 text-[#3B82F6]" />
                      <span className="text-[#3B82F6] font-medium">{news.category}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1F2937] mb-3 hover:text-[#3B82F6] cursor-pointer">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.description}
                  </p>
                  <button className="text-[#3B82F6] font-semibold hover:underline">
                    Batafsil o'qish →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Mashhur yangiliklar</h3>
              <div className="space-y-4">
                {newsItems.slice(0, 5).map((news) => (
                  <div key={news.id} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="text-xs text-gray-500 mb-1">{news.date}</div>
                    <h4 className="font-semibold text-[#1F2937] text-sm hover:text-[#3B82F6] cursor-pointer">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Yangiliklar byulleteni</h3>
              <p className="text-blue-100 text-sm mb-4">
                Mingbuloq tumani yangiliklaridan xabardor bo'lib turing
              </p>
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
              />
              <button className="w-full bg-white text-[#1E3A8A] py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Obuna bo'lish
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Kategoriyalar</h3>
              <div className="space-y-2">
                {['Iqtisodiyot', "Ta'lim", "Sog'liqni saqlash", 'Madaniyat', 'Sport', 'Ekologiya'].map((cat, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-700">{cat}</span>
                    <span className="bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-full">
                      {Math.floor(Math.random() * 20) + 5}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}