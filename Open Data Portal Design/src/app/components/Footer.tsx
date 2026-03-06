import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mingbuloq tumani</h3>
            <p className="text-gray-400 text-sm">
              Ochiq ma'lumotlar portali - tuman haqida to'liq va ishonchli ma'lumotlar manbai
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 (71) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mingbuloq.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mingbuloq tumani, Namangan viloyati</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Foydali havolalar</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Namangan viloyati hokimligi
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                O'zbekiston Respublikasi hukumat portali
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Statistika agentligi
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Mingbuloq tumani ochiq ma'lumotlar portali. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}