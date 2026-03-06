import { PageHeader } from '../components/PageHeader';
import { MapPin, Users, Building, Landmark, Calendar } from 'lucide-react';

export function About() {
  return (
    <div>
      <PageHeader 
        title="Tuman haqida" 
        description="Mingbuloq tumani tarixi, joylashuvi va asosiy ma'lumotlari"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Umumiy ma'lumot</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>Mingbuloq tumani</strong> (1994-yilgacha Zadaryo tumani) Namangan viloyatining eng muhim 
                  tumanlaridan biri hisoblanadi. Tuman 1952-yil 29-sentyabrda tashkil etilgan bo'lib, 
                  769,4 kvadrat kilometr maydonni egallaydi.
                </p>
                <p>
                  Tuman ma'muriy markazi <strong>Jomasho'y shaharchasi</strong> hisoblanadi. 2023-yil ma'lumotlariga ko'ra, 
                  tumanda 121,7 ming kishi yashaydi va aholi zichligi 179,4 kishi/km² ni tashkil etadi.
                </p>
                <p>
                  Mingbuloq tumani o'zining boy tarixiy merosi, rivojlangan qishloq xo'jaligi va 
                  zamonaviy infratuzilmasi bilan mashhur. Tuman Namangan viloyatining iqtisodiy 
                  rivojlanishida muhim o'rin tutadi.
                </p>
                <p>
                  2026-yil 7-fevraldanberi tumanni <strong>Mansurov Ahror Ahmadaliyevich</strong> boshqaradi.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Ma'muriy bo'linish</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#3B82F6] pl-4">
                  <h3 className="font-semibold text-lg text-[#1F2937]">Shaharchalar: 1 ta</h3>
                  <p className="text-gray-600 text-sm mt-1">Jomasho'y (tuman markazi)</p>
                </div>
                <div className="border-l-4 border-[#3B82F6] pl-4">
                  <h3 className="font-semibold text-lg text-[#1F2937]">Qishloq fuqarolar yig'inlari: 7 ta</h3>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Bo'ston</div>
                    <div>• Gulbog'</div>
                    <div>• Go'rtepa</div>
                    <div>• Dovduq</div>
                    <div>• Oltinko'l</div>
                    <div>• Mehnatobod</div>
                    <div>• Momoxon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white rounded-lg shadow-md p-6">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Joylashuvi</h3>
              <p className="text-blue-100 text-sm">
                Namangan viloyati, O'zbekiston Respublikasi
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <Users className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Aholi</h3>
              <p className="text-gray-600 text-sm mb-3">
                121,7 ming kishi
              </p>
              <div className="text-xs text-gray-500">
                2023-yil holatiga
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Erkaklar:</span>
                  <span className="font-semibold">50,7%</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Ayollar:</span>
                  <span className="font-semibold">49,3%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <Building className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Hudud</h3>
              <p className="text-gray-600 text-sm mb-3">
                769,4 kvadrat kilometr (0,769 ming km²)
              </p>
              <div className="text-xs text-gray-500">
                Aholi zichligi: 179,4 kishi/km²
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <Landmark className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Markaz</h3>
              <p className="text-gray-600 text-sm">
                Jomasho'y shaharchasi
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <Calendar className="w-10 h-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">Tashkil etilgan</h3>
              <p className="text-gray-600 text-sm mb-2">
                1952-yil 29-sentabr
              </p>
              <div className="text-xs text-gray-500">
                Avvalgi nomi: Zadaryo tumani (1994-yilgacha)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 mb-8">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Asosiy iqtisodiy tarmoqlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Qishloq xo'jaligi</h3>
              <p className="text-gray-600 text-sm">
                Paxtachilik, g'allachilik, bog'dorchilik, sabzavotchilik, polizchilik va chorvachilik
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Sanoat</h3>
              <p className="text-gray-600 text-sm">
                Yengil sanoat, oziq-ovqat ishlab chiqarish va qurilish materiallari
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Xizmat ko'rsatish</h3>
              <p className="text-gray-600 text-sm">
                Savdo, ta'lim, sog'liqni saqlash va transport xizmatlari
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Rahbariyat</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                MA
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#1F2937]">Mansurov Ahror Ahmadaliyevich</h3>
                <p className="text-sm text-gray-600">Tuman hokimi</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <strong>Tayinlangan sana:</strong> 2026-yil 7-fevral
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
