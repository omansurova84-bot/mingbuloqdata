import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { GraduationCap, Hospital, Home, Users } from 'lucide-react';

export function Social() {
  const stats = [
    { title: 'Ta\'lim muassasalari', value: '54', icon: GraduationCap, description: 'Maktablar va kollejlar' },
    { title: 'Tibbiyot muassasalari', value: '3', icon: Hospital, description: 'Kasalxonalar' },
    { title: "O'quvchilar", value: '22+ ming', icon: Users, description: 'Barcha ta\'lim muassasalarida' },
    { title: 'Kasalxona o\'rinlari', value: '590', icon: Hospital, description: 'Umumiy o\'rin soni' },
  ];

  return (
    <div>
      <PageHeader 
        title="Ijtimoiy soha" 
        description="Ta'lim, sog'liqni saqlash, madaniyat va sport sohalaridagi rivojlanish"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937]">Ta'lim tizimi</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Umumta'lim maktablari</span>
                <span className="font-semibold text-[#1F2937]">51 ta</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Litsey</span>
                <span className="font-semibold text-[#1F2937]">1 ta</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Kollej</span>
                <span className="font-semibold text-[#1F2937]">1 ta</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Iqtidorli bolalar internati</span>
                <span className="font-semibold text-[#1F2937]">1 ta</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-[#1F2937] mb-3">O'quvchilar soni</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Jami</span>
                  <span className="font-semibold">22+ ming nafar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Hospital className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937]">Sog'liqni saqlash</h2>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Markaziy kasalxona</span>
                <span className="font-semibold text-[#1F2937]">400 o'rin</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Sil dispanseri</span>
                <span className="font-semibold text-[#1F2937]">125 o'rin</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Yuqumli kasalliklar kasalxonasi</span>
                <span className="font-semibold text-[#1F2937]">65 o'rin</span>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-[#1F2937] mb-3">Jami o'rinlar</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Umumiy</span>
                  <span className="font-semibold">590 o'rin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937]">Madaniyat</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Madaniyat uylari</h3>
                <p className="text-sm text-gray-600 mb-2">12 ta madaniyat uyi va ko'ngilochar markazlar</p>
                <div className="text-lg font-bold text-purple-600">48,000 nafar</div>
                <div className="text-xs text-gray-500">Yillik tashrif buyuruvchilar</div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Kutubxonalar</h3>
                <p className="text-sm text-gray-600 mb-2">15 ta kutubxona va o'qish xonalari</p>
                <div className="text-lg font-bold text-blue-600">124,000 ta</div>
                <div className="text-xs text-gray-500">Kitoblar fondi</div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Muzeylар</h3>
                <p className="text-sm text-gray-600 mb-2">5 ta tarixiy va madaniy muzeylар</p>
                <div className="text-lg font-bold text-green-600">3,200 ta</div>
                <div className="text-xs text-gray-500">Eksponatlar soni</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937]">Sport</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Stadionlar</h3>
                <p className="text-sm text-gray-600 mb-2">6 ta stadion va sport maydonchalar</p>
                <div className="text-lg font-bold text-orange-600">12,000 o'rin</div>
                <div className="text-xs text-gray-500">Umumiy sig'im</div>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Sport majmualari</h3>
                <p className="text-sm text-gray-600 mb-2">8 ta sport zallari va fitnes markazlari</p>
                <div className="text-lg font-bold text-cyan-600">4,500 nafar</div>
                <div className="text-xs text-gray-500">Kunlik tashrif buyuruvchilar</div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">Sport to'garaklari</h3>
                <p className="text-sm text-gray-600 mb-2">42 ta sport to'garagi va sektsiyalar</p>
                <div className="text-lg font-bold text-teal-600">2,800 nafar</div>
                <div className="text-xs text-gray-500">Mashg'ulotlarda qatnashuvchilar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Ijtimoiy himoya dasturlari</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Imtiyozli toifalar</h3>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">8,400</div>
              <p className="text-sm text-gray-600">Nafaqaxo'rlar va nogironlar</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Mablag' ajratildi</h3>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">24.5 mlrd</div>
              <p className="text-sm text-gray-600">so'm (2025-yil)</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Kam ta'minlangan oilalar</h3>
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">1,240</div>
              <p className="text-sm text-gray-600">Ijtimoiy yordam oladigan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}