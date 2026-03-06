import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { TrendingUp, Factory, Wheat, ShoppingBag, Users, Briefcase } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function Economy() {
  const stats = [
    { title: 'Sanoat mahsuloti', value: '322,4 mlrd', icon: Factory, description: "so'm (2025-yil 1-chorak)" },
    { title: 'Chakana savdo', value: '140,9 mlrd', icon: ShoppingBag, description: "so'm" },
    { title: 'Xizmatlar', value: '211,5 mlrd', icon: Briefcase, description: "so'm" },
    { title: 'Yangi ish o\'rinlari', value: '5,214 ta', icon: Users, description: '2025-yil 1-chorak' },
  ];

  const economicData = [
    { year: '2021', qiymat: 890 },
    { year: '2022', qiymat: 1020 },
    { year: '2023', qiymat: 1180 },
    { year: '2024', qiymat: 1340 },
    { year: '2025', qiymat: 1520 },
  ];

  const sectorData = [
    { name: 'Sanoat', value: 322.4 },
    { name: 'Xizmatlar', value: 211.5 },
    { name: 'Chakana savdo', value: 140.9 },
    { name: 'Qurilish', value: 68.4 },
  ];

  return (
    <div>
      <PageHeader 
        title="Iqtisodiyot" 
        description="Mingbuloq tumani iqtisodiy ko'rsatkichlari va rivojlanish sur'atlari"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Iqtisodiy o'sish dinamikasi (mlrd so'm)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={economicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="qiymat" stroke="#3B82F6" strokeWidth={3} name="Iqtisodiyot hajmi" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Tarmoqlar bo'yicha (2025-yil 1-chorak)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sectorData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#1E3A8A" name="Mlrd so'm" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">2025-yil 1-chorak iqtisodiy ko'rsatkichlar</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#EFF6FF]">
                  <th className="px-6 py-3 text-left font-semibold text-[#1F2937]">Ko'rsatkichlar</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">Hajmi (mlrd so'm)</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">Izoh</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-[#1F2937]">Sanoat mahsulotlari</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#3B82F6]">322,4</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600">Asosiy tarmoq</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-[#1F2937]">Xizmatlar</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#3B82F6]">211,5</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600">Turli xizmatlar</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-[#1F2937]">Chakana savdo aylanmasi</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#3B82F6]">140,9</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600">Savdo sohasi</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-[#1F2937]">Qurilish ishlari</td>
                  <td className="px-6 py-4 text-right font-semibold text-[#3B82F6]">68,4</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600">Infratuzilma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Qishloq xo'jaligi</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Paxtachilik</span>
                <span className="font-semibold text-[#1F2937]">Yetakchi tarmoq</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">G'allachilik</span>
                <span className="font-semibold text-[#1F2937]">Muhim tarmoq</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Bog'dorchilik</span>
                <span className="font-semibold text-[#1F2937]">Rivojlanmoqda</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Sabzavotchilik</span>
                <span className="font-semibold text-[#1F2937]">Alami qovunlari mashhur</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Polizchilik</span>
                <span className="font-semibold text-[#1F2937]">Kengaymoqda</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Chorvachilik</span>
                <span className="font-semibold text-[#1F2937]">An'anaviy soha</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">2026-yil rivojlanish loyihalari</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">📍 Do'stlik istirohat bog'i</h3>
                <p className="text-sm text-gray-600">Rekonstruksiya va zamonaviylashtirish</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">🏭 Yangi sanoat zonalari</h3>
                <p className="text-sm text-gray-600">Kichik va o'rta biznes uchun</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">🌟 24/7 ko'ngilochar ko'chalar</h3>
                <p className="text-sm text-gray-600">Yoshlar va oilalar uchun</p>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h3 className="font-semibold text-[#1F2937] mb-2">💧 Ichimlik suvi</h3>
                <p className="text-sm text-gray-600">Infratuzilmani yaxshilash</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border border-green-200 mb-8">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Yangiliklar va yutuqlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-2">2026-yil fevral</div>
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Yer ajratish</h3>
              <p className="text-sm text-gray-600">
                93 nafar fuqaroga jami 23,25 gektar yer ajratildi. Bu tadbirkorlik va qishloq xo'jaligini rivojlantirishga xizmat qiladi.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-2">2026-yil yanvar</div>
              <h3 className="font-semibold text-lg text-[#1F2937] mb-2">Mini GES</h3>
              <p className="text-sm text-gray-600">
                Yangilanuvchi energiya manbai sifatida mini gidroelektrostansiya ishga tushirildi. Bu ekologik toza energiya ishlab chiqarish imkonini beradi.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Yangi ish o'rinlari</h3>
            <div className="text-4xl font-bold mb-2">5,214</div>
            <p className="text-sm text-blue-100">2025-yil 1-chorakda yaratildi</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Sanoat mahsuloti</h3>
            <div className="text-4xl font-bold mb-2">322,4</div>
            <p className="text-sm text-green-100">mlrd so'm (2025-yil 1-chorak)</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Chakana savdo</h3>
            <div className="text-4xl font-bold mb-2">140,9</div>
            <p className="text-sm text-purple-100">mlrd so'm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
