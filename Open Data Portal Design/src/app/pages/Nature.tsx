import { PageHeader } from '../components/PageHeader';
import { Cloud, Droplets, Wind, Sun, Mountain, TreePine } from 'lucide-react';

export function Nature() {
  return (
    <div>
      <PageHeader 
        title="Tabiat va geografiya" 
        description="Mingbuloq tumanining tabiiy sharoiti, iqlimi va geografik xususiyatlari"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Geografik joylashuvi</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Mingbuloq tumani Namangan viloyatida joylashgan bo'lib, hudud asosan 
                pasttekislik, qo'riq va bo'z yerlar, shuningdek qum barxanlardan iborat.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-3">Hudud xususiyatlari:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                    Pasttekislik hududlar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                    Qo'riq va bo'z yerlar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                    Qum barxanlar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                    Och tusli bo'z tuproq
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Iqlim xususiyatlari</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Tuman hududida quruq iqlim hukm suradi. Yoz issiq va quruq, qish esa 
                nisbatan sovuq o'tadi.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                  <Sun className="w-8 h-8 text-orange-600 mb-2" />
                  <div className="text-sm font-semibold text-[#1F2937]">Yoz (iyul)</div>
                  <div className="text-2xl font-bold text-orange-700">+28°C</div>
                  <div className="text-xs text-gray-600">O'rtacha</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <Cloud className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-[#1F2937]">Qish (yanvar)</div>
                  <div className="text-2xl font-bold text-blue-700">-3,5°C</div>
                  <div className="text-xs text-gray-600">O'rtacha</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Iqlim ko'rsatkichlari</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <Sun className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="font-semibold text-[#1F2937] mb-2">Yoz harorati</h3>
              <div className="text-3xl font-bold text-orange-600 mb-1">+28°C</div>
              <div className="text-sm text-gray-600">O'rtacha (iyul)</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <Cloud className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="font-semibold text-[#1F2937] mb-2">Qish harorati</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">-3,5°C</div>
              <div className="text-sm text-gray-600">O'rtacha (yanvar)</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 border border-cyan-200">
              <Droplets className="w-10 h-10 text-cyan-500 mb-3" />
              <h3 className="font-semibold text-[#1F2937] mb-2">Yog'ingarchilik</h3>
              <div className="text-3xl font-bold text-cyan-600 mb-1">150-200</div>
              <div className="text-sm text-gray-600">mm (yillik)</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
              <Wind className="w-10 h-10 text-teal-500 mb-3" />
              <h3 className="font-semibold text-[#1F2937] mb-2">Iqlim turi</h3>
              <div className="text-2xl font-bold text-teal-600 mb-1">Quruq</div>
              <div className="text-sm text-gray-600">Kontinental</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Suv resurslari</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Mingbuloq tumani boy suv resurslariga ega. Tuman hududidan Sirdaryo oqib o'tadi 
                va bir nechta muhim ko'llar joylashgan.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-3">Asosiy suv manbalari:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>Sirdaryo</strong> - asosiy daryo
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>Qo'qonko'l</strong> - katta ko'l
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>To'ng'izko'l</strong> - tabiiy ko'l
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>Tegirmonko'l</strong> - tabiiy ko'l
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>Qolgandaryo</strong> - daryo
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <strong>Oxunboboyev kanali</strong> - 45 km uzunlikda
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">O'simlik va hayvonot dunyosi</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Mingbuloq tumani o'ziga xos o'simlik va hayvonot dunyosiga ega. Quruq iqlim 
                sharoitida yashovchi turlar keng tarqalgan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-green-200">
                  <TreePine className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#1F2937]">Yovvoyi o'simliklar</div>
                    <div className="text-xs text-gray-600">Saksovul, tol, qamish, yulg'un, g'o'may, sho'ra</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <Mountain className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#1F2937]">Hayvonot dunyosi</div>
                    <div className="text-xs text-gray-600">Tulki, chiyabo'ri, bo'ri, quyon, ilon, kaltakesak</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-sky-50 rounded-lg p-3 border border-sky-200">
                  <Mountain className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#1F2937]">Qushlar</div>
                    <div className="text-xs text-gray-600">Echkemar, chumchuq, musicha, qirg'iy, zarg'aldoq</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Tuproq va yer resurslari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-3">Tuproq turlari</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  Och tusli bo'z tuproq
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  Sho'rxok botqoq tuproq
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                  Qumli tuproqlar
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-3">Yer foydalanish</h3>
              <p className="text-sm text-gray-600">
                Tumandagi yerlarning asosiy qismi qishloq xo'jaligi ekinlari yetishtirishga, 
                yaylov va o'tloqlarga mo'ljallangan. 2026-yilda 93 nafar fuqaroga 23,25 gektar 
                yer ajratildi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
