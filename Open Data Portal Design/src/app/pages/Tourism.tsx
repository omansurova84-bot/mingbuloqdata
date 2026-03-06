import { PageHeader } from '../components/PageHeader';
import { Mountain, Landmark, Camera, Map, Droplets } from 'lucide-react';

const touristPlaces = [
  {
    id: 1,
    name: "Go'rtepa mineral bulog'i",
    category: "Sog'lomlashtirish turizmi",
    description: "Go'rtepada joylashgan mineral bulog'i o'zining shifobaxsh xususiyatlari bilan mashhur. Mineral suv turli kasalliklarni davolashda qo'llaniladi.",
    features: ["Mineral suv", "Sog'lomlashtirish", "Ekologik toza hudud"],
    distance: "8 km"
  },
  {
    id: 2,
    name: "Sirdaryo sohillari",
    category: "Tabiat turizmi",
    description: "Sirdaryo daryo sohillari dam olish va baliqchilik uchun ajoyib joylar. Noyob tabiat manzaralari va tinch muhit.",
    features: ["Dam olish zonalari", "Baliqchilik", "Tabiiy manzaralar"],
    distance: "3 km"
  },
  {
    id: 3,
    name: "Qo'qonko'l",
    category: "Tabiiy ko'l",
    description: "Katta va go'zal tabiiy ko'l. Suv turizmi, baliqchilik va dam olish uchun ideal joy. Qushlar uchun muhim yashash joyi.",
    features: ["Suv turizmi", "Baliqchilik", "Qushlarni kuzatish"],
    distance: "12 km"
  },
  {
    id: 4,
    name: "To'ng'izko'l",
    category: "Tabiiy ko'l",
    description: "Noyob ekotizimga ega tabiiy ko'l. Yovvoyi o'simliklar va hayvonlar uchun muhim yashash joyi.",
    features: ["Ekoturizm", "Tabiatni muhofaza", "Fotografiya"],
    distance: "15 km"
  },
  {
    id: 5,
    name: "Tegirmonko'l",
    category: "Tabiiy ko'l",
    description: "Tarixiy nomga ega bo'lgan ko'l. Dam olish va piknik uchun qulay joy.",
    features: ["Dam olish", "Piknik zonalari", "Baliqchilik"],
    distance: "10 km"
  },
  {
    id: 6,
    name: "Alami qishlog'i qovunlari",
    category: "Agro-turizm",
    description: "Alami qishlog'i o'zining mazali qovunlari bilan butun mintaqada mashhur. Agro-turizm va mahalliy mahsulotlar bilan tanishish imkoniyati.",
    features: ["Agro-turizm", "Mahalliy mahsulotlar", "Qovun festivali"],
    distance: "7 km"
  }
];

export function Tourism() {
  return (
    <div>
      <PageHeader 
        title="Turizm" 
        description="Mingbuloq tumanining turistik joylari va diqqatga sazovor manzillari"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-md">
            <Droplets className="w-10 h-10 mb-3" />
            <div className="text-3xl font-bold mb-1">5</div>
            <p className="text-blue-100 text-sm">Ko'llar va suv resurslari</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-md">
            <Mountain className="w-10 h-10 mb-3" />
            <div className="text-3xl font-bold mb-1">1</div>
            <p className="text-green-100 text-sm">Mineral buloq</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-md">
            <Camera className="w-10 h-10 mb-3" />
            <div className="text-3xl font-bold mb-1">Yuqori</div>
            <p className="text-purple-100 text-sm">Ekoturizm salohiyati</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6 shadow-md">
            <Map className="w-10 h-10 mb-3" />
            <div className="text-3xl font-bold mb-1">Agro</div>
            <p className="text-orange-100 text-sm">Agro-turizm yo'nalishlari</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Diqqatga sazovor joylar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristPlaces.map((place) => (
              <div key={place.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <Droplets className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm font-medium">{place.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#1F2937]">{place.name}</h3>
                    <span className="text-xs bg-blue-100 text-[#3B82F6] px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {place.distance}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{place.description}</p>
                  <div className="space-y-1">
                    {place.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Turizm yo'nalishlari</h2>
            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Sog'lomlashtirish turizmi</h3>
                  <p className="text-sm text-gray-600">
                    Go'rtepa mineral bulog'i orqali sog'lomlashtirish va davolanish imkoniyatlari
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Ekoturizm</h3>
                  <p className="text-sm text-gray-600">
                    Ko'llar, Sirdaryo sohillari va qo'riqxonalar orqali tabiat bilan tanishish
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Agro-turizm</h3>
                  <p className="text-sm text-gray-600">
                    Alami qishlog'i qovunlari va fermer xo'jaliklari bilan tanishish
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Turist xizmatlari</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Mehmonxonalar</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Tuman markazida mehmonxonalar va uylar mavjud
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Yashash joylari</span>
                  <span className="font-semibold text-[#3B82F6]">Mavjud</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Transport</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Barcha turistik joylarga transport bilan yetib borish mumkin
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Yo'llar holati</span>
                  <span className="font-semibold text-green-600">Yaxshi</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Restoran va kafe</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Mahalliy taomlar va milliy oshxona
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Ovqatlanish joylari</span>
                  <span className="font-semibold text-purple-600">Mavjud</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mingbuloq tumaniga tashrif buyuring</h2>
              <p className="text-blue-100 mb-6">
                Noyob tabiati, shifobaxsh mineral buloqlari va go'zal ko'llari bilan tanishing. 
                Ekoturizm va agro-turizm uchun ideal joy!
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Go'rtepa mineral bulog'i</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sirdaryo va 4 ta tabiiy ko'l</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Alami qishlog'i qovunlari</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Ekoturizm va agro-turizm</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Aloqa ma'lumotlari</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-blue-200 mb-1">Telefon:</div>
                  <div className="font-semibold">+998 (71) 123-45-67</div>
                </div>
                <div>
                  <div className="text-blue-200 mb-1">Email:</div>
                  <div className="font-semibold">tourism@mingbuloq.uz</div>
                </div>
                <div>
                  <div className="text-blue-200 mb-1">Manzil:</div>
                  <div className="font-semibold">Mingbuloq tumani, Namangan viloyati</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
