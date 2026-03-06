import { PageHeader } from '../components/PageHeader';
import { Landmark, BookOpen, Crown, Users } from 'lucide-react';

export function History() {
  const timelinePeriods = [
    {
      period: "Qadimgi davr",
      title: "Dastlabki aholi punktlari",
      description: "Go'rtepa qishlog'i qadimiy aholi punktlaridan biri bo'lib, Farg'ona vodiysi yo'llari orqali karvonlar o'tgan tarixiy hududdir."
    },
    {
      period: "O'rta asrlar",
      title: "Buyuk Ipak yo'li davri",
      description: "Hudud Buyuk Ipak yo'lining muhim yo'nalishida joylashganligi sababli savdo va madaniyat markazi bo'lgan."
    },
    {
      period: "1952-yil",
      title: "Zadaryo tumani tashkil etildi",
      description: "1952-yil 29-sentyabrda rasman Zadaryo tumani sifatida tashkil etildi va rasmiy ma'muriy birlik maqomini oldi."
    },
    {
      period: "1994-yil",
      title: "Mingbuloq tumani nomi berildi",
      description: "O'zbekiston mustaqilligidan so'ng, 1994-yilda tuman Mingbuloq tumani deb qayta nomlandi."
    },
    {
      period: "2000-yillar",
      title: "Zamonaviy rivojlanish bosqichi",
      description: "Infratuzilma, qishloq xo'jaligi va sanoat sohalari jadal sur'atlarda rivojlandi."
    },
    {
      period: "2020-2026",
      title: "Yangi yutuqlar davri",
      description: "Yangilanuvchi energiya, ichimlik suvi tarmog'i, yo'llar ta'mirlash va iqtisodiyotni diversifikatsiya qilish loyihalari amalga oshirilmoqda."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Tarix" 
        description="Mingbuloq tumanining boy tarixi va rivojlanish yo'li"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white rounded-lg p-8 shadow-md">
            <Landmark className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">1952-yil</h3>
            <p className="text-blue-100">29-sentabr - Zadaryo tumani rasman tashkil etilgan</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <BookOpen className="w-12 h-12 text-[#3B82F6] mb-4" />
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">1994-yil</h3>
            <p className="text-gray-600">Mingbuloq tumani nomi berildi</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <Crown className="w-12 h-12 text-[#3B82F6] mb-4" />
            <h3 className="text-2xl font-bold text-[#1F2937] mb-2">74 yil</h3>
            <p className="text-gray-600">Rasmiy tashkil etilganidan buyon</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">Tarixiy rivojlanish</h2>
          
          <div className="space-y-6">
            {timelinePeriods.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#3B82F6] last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#3B82F6] rounded-full"></div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="text-sm font-semibold text-[#3B82F6] mb-2">{item.period}</div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Go'rtepa qishlog'i</h2>
            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-8 h-8 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Tarixiy ahamiyat</h3>
                  <p className="text-sm text-gray-600">
                    Go'rtepa qishlog'i qadimiy aholi punkti bo'lib, Farg'ona vodiysidagi savdo yo'llarining kesishgan joyida joylashgan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Mineral bulog'i</h3>
                  <p className="text-sm text-gray-600">
                    Go'rtepa mineral bulog'i o'zining shifobaxsh xususiyatlari bilan mashhur va turizm uchun muhim obyekt hisoblanadi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Madaniy meros</h3>
                  <p className="text-sm text-gray-600">
                    Qishloq o'zining boy an'analari va madaniy merosini asrab-avaylab kelmoqda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Nomlanish tarixi</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Zadaryo tumani (1952-1994)</h3>
                <p className="text-sm text-gray-600 mb-2">42 yil davomida Zadaryo tumani nomi ostida faoliyat yuritdi.</p>
                <div className="text-xs text-blue-600 font-medium">1952-yil 29-sentabr - 1994-yil</div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Mingbuloq tumani (1994-hozir)</h3>
                <p className="text-sm text-gray-600 mb-2">Mustaqillik davrida qayta nomlandi va rivojlanishda yangi bosqichga kirdi.</p>
                <div className="text-xs text-green-600 font-medium">1994-yildan hozirgi vaqtgacha</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 mb-8">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Muhim tarixiy voqealar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-[#3B82F6] font-semibold mb-2">1952-yil</div>
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Tuman tashkil etildi</h3>
              <p className="text-sm text-gray-600">
                29-sentabrda Zadaryo tumani rasman tashkil etildi va Namangan viloyati tarkibiga kirdi.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-[#3B82F6] font-semibold mb-2">1994-yil</div>
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Qayta nomlash</h3>
              <p className="text-sm text-gray-600">
                O'zbekiston mustaqilligidan keyin tuman Mingbuloq deb qayta nomlandi.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">An'analar va madaniy meros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-3">Dehqonchilik an'analari</h3>
              <p className="text-sm text-gray-600">
                Paxtachilik, g'allachilik va bog'dorchilik asrlar davomida saqlanib kelmoqda
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-3">Milliy bayramlar</h3>
              <p className="text-sm text-gray-600">
                Navruz, mustaqillik kuni va boshqa milliy bayramlar keng nishonlanadi
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-3">Mahalliy oshxona</h3>
              <p className="text-sm text-gray-600">
                Alami qishlog'i qovunlari va mahalliy taomlar o'ziga xos ta'miga ega
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
