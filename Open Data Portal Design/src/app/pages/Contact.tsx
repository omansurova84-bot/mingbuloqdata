import { PageHeader } from '../components/PageHeader';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Xabaringiz qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHeader 
        title="Bog'lanish" 
        description="Biz bilan bog'laning - savollaringiz va takliflaringizni qabul qilamiz"
      />
      
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-md">
            <Phone className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-blue-100 text-sm mb-3">Ish vaqtida bizga qo'ng'iroq qiling</p>
            <div className="space-y-1">
              <p className="font-semibold">+998 (71) 123-45-67</p>
              <p className="font-semibold">+998 (71) 123-45-68</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-md">
            <Mail className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-green-100 text-sm mb-3">Elektron xat yuboring</p>
            <div className="space-y-1">
              <p className="font-semibold">info@mingbuloq.uz</p>
              <p className="font-semibold">admin@mingbuloq.uz</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-md">
            <MapPin className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manzil</h3>
            <p className="text-purple-100 text-sm mb-3">Bizning ofisimiz</p>
            <p className="font-semibold">
              Mingbuloq tumani hokimligi,<br />
              Jomasho'y shaharchasi,<br />
              Namangan viloyati, O'zbekiston
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Xabar yuborish</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ism-familiya *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                    placeholder="+998 (__) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Mavzu *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                >
                  <option value="">Mavzuni tanlang</option>
                  <option value="info">Umumiy ma'lumot</option>
                  <option value="statistics">Statistika bo'yicha savol</option>
                  <option value="tourism">Turizm bo'yicha</option>
                  <option value="business">Tadbirkorlik</option>
                  <option value="other">Boshqa</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Xabar matni *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none"
                  placeholder="Xabaringizni yozing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Xabar yuborish
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1F2937]">Ish vaqti</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Dushanba - Juma</span>
                  <span className="font-semibold text-[#1F2937]">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Shanba</span>
                  <span className="font-semibold text-[#1F2937]">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yakshanba</span>
                  <span className="font-semibold text-red-600">Dam olish</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Eslatma:</strong> Tushlik tanaffusi 13:00 - 14:00 oralig'ida
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Bo'limlar</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Ma'lumot markazi</h3>
                  <p className="text-sm text-gray-600 mb-2">Umumiy ma'lumotlar va konsultatsiya</p>
                  <p className="text-sm text-[#3B82F6] font-medium">Tel: +998 (71) 123-45-67</p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Iqtisodiyot bo'limi</h3>
                  <p className="text-sm text-gray-600 mb-2">Iqtisodiy ma'lumotlar va statistika</p>
                  <p className="text-sm text-[#3B82F6] font-medium">Tel: +998 (71) 123-45-68</p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <h3 className="font-semibold text-[#1F2937] mb-1">Turizm bo'limi</h3>
                  <p className="text-sm text-gray-600 mb-2">Turizm bo'yicha ma'lumotlar</p>
                  <p className="text-sm text-[#3B82F6] font-medium">Tel: +998 (71) 123-45-69</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1F2937] mb-1">Matbuot xizmati</h3>
                  <p className="text-sm text-gray-600 mb-2">Ommaviy axborot vositalari uchun</p>
                  <p className="text-sm text-[#3B82F6] font-medium">Tel: +998 (71) 123-45-70</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-[#1F2937] mb-3">Bizni ijtimoiy tarmoqlarda kuzating</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-1">📘</div>
                  <div className="text-xs text-gray-600">Facebook</div>
                </button>
                <button className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="text-xs text-gray-600">Telegram</div>
                </button>
                <button className="bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-xs text-gray-600">Instagram</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-semibold">Xarita</p>
              <p className="text-sm">Mingbuloq tumani, Namangan viloyati</p>
              <p className="text-xs mt-2">Jomasho'y shaharchasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}