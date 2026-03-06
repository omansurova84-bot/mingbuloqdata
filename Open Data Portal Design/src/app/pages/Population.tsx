import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { Users, TrendingUp, UserCheck, Baby } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function Population() {
  const stats = [
    { title: 'Jami aholi', value: '121,7 ming', icon: Users, description: '2023-yil holatiga' },
    { title: 'Aholi zichligi', value: '179,4 kishi', icon: TrendingUp, description: '1 km² ga' },
    { title: "O'rtacha yosh", value: '23,9 yil', icon: UserCheck, description: "Yosh aholi ko'p" },
    { title: 'Erkaklar ulushi', value: '50,7%', icon: Baby, description: '49,3% ayollar' },
  ];

  const ageData = [
    { age: '0-14', erkak: 18500, ayol: 17800 },
    { age: '15-29', erkak: 22300, ayol: 21500 },
    { age: '30-44', erkak: 16800, ayol: 16200 },
    { age: '45-59', erkak: 9200, ayol: 9800 },
    { age: '60+', erkak: 5400, ayol: 6600 },
  ];

  const urbanRuralData = [
    { name: 'Shahar aholisi', value: 42600, percentage: 31.8 },
    { name: 'Qishloq aholisi', value: 91500, percentage: 68.2 },
  ];

  const COLORS = ['#3B82F6', '#1E3A8A'];

  return (
    <div>
      <PageHeader 
        title="Aholi statistikasi" 
        description="Mingbuloq tumani aholisi haqida batafsil statistik ma'lumotlar"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Yosh bo'yicha taqsimot</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="erkak" fill="#3B82F6" name="Erkaklar" />
                <Bar dataKey="ayol" fill="#1E3A8A" name="Ayollar" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Shahar va qishloq aholisi</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={urbanRuralData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {urbanRuralData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Aholi tarkibi (2026-yil 1-yanvar holatiga)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#EFF6FF]">
                  <th className="px-6 py-3 text-left font-semibold text-[#1F2937]">Ko'rsatkichlar</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">Jami</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">Erkaklar</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">Ayollar</th>
                  <th className="px-6 py-3 text-right font-semibold text-[#1F2937]">%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-[#1F2937]">Jami aholi</td>
                  <td className="px-6 py-4 text-right font-semibold">134,100</td>
                  <td className="px-6 py-4 text-right">67,200</td>
                  <td className="px-6 py-4 text-right">66,900</td>
                  <td className="px-6 py-4 text-right">100%</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-[#1F2937]">0-14 yosh</td>
                  <td className="px-6 py-4 text-right font-semibold">36,300</td>
                  <td className="px-6 py-4 text-right">18,500</td>
                  <td className="px-6 py-4 text-right">17,800</td>
                  <td className="px-6 py-4 text-right">27.1%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-[#1F2937]">15-29 yosh</td>
                  <td className="px-6 py-4 text-right font-semibold">43,800</td>
                  <td className="px-6 py-4 text-right">22,300</td>
                  <td className="px-6 py-4 text-right">21,500</td>
                  <td className="px-6 py-4 text-right">32.7%</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-[#1F2937]">30-44 yosh</td>
                  <td className="px-6 py-4 text-right font-semibold">33,000</td>
                  <td className="px-6 py-4 text-right">16,800</td>
                  <td className="px-6 py-4 text-right">16,200</td>
                  <td className="px-6 py-4 text-right">24.6%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-[#1F2937]">45-59 yosh</td>
                  <td className="px-6 py-4 text-right font-semibold">19,000</td>
                  <td className="px-6 py-4 text-right">9,200</td>
                  <td className="px-6 py-4 text-right">9,800</td>
                  <td className="px-6 py-4 text-right">14.2%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-[#1F2937]">60 va undan yuqori</td>
                  <td className="px-6 py-4 text-right font-semibold">12,000</td>
                  <td className="px-6 py-4 text-right">5,400</td>
                  <td className="px-6 py-4 text-right">6,600</td>
                  <td className="px-6 py-4 text-right">8.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Aholi zichligi</h3>
            <div className="text-4xl font-bold text-[#3B82F6] mb-2">181 kishi</div>
            <p className="text-sm text-gray-600">1 km² ga</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">O'rtacha oila hajmi</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">4,7 kishi</div>
            <p className="text-sm text-gray-600">Bir oilada</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Mehnat resurslari</h3>
            <div className="text-4xl font-bold text-purple-600 mb-2">51.1%</div>
            <p className="text-sm text-gray-600">Umumiy aholidan</p>
          </div>
        </div>
      </div>
    </div>
  );
}