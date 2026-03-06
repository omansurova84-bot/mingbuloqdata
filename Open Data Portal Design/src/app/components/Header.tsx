import { Link, useLocation } from 'react-router';
import { Menu } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Bosh sahifa' },
  { path: '/about', label: 'Tuman haqida' },
  { path: '/nature', label: 'Tabiat va geografiya' },
  { path: '/population', label: 'Aholi statistikasi' },
  { path: '/economy', label: 'Iqtisodiyot' },
  { path: '/news', label: 'Yangiliklar' },
  { path: '/social', label: 'Ijtimoiy soha' },
  { path: '/history', label: 'Tarix' },
  { path: '/tourism', label: 'Turizm' },
  { path: '/contact', label: 'Bog\'lanish' },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#1E3A8A] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#1E3A8A] text-xl font-bold">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Mingbuloq tumani</h1>
              <p className="text-sm text-blue-200">Ochiq ma'lumotlar portali</p>
            </div>
          </Link>
        </div>
      </div>
      
      <nav className="bg-[#1E40AF] border-t border-blue-700">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors hover:bg-[#1E3A8A] ${
                  location.pathname === item.path ? 'bg-[#1E3A8A] text-white' : 'text-blue-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
