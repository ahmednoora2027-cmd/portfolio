import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, isRestaurantOpenNow } from '../data/restaurantData';
import { 
  ShoppingBag, 
  Phone, 
  Clock, 
  MapPin, 
  Menu as MenuIcon, 
  X,
  MessageCircle,
  Flame
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = isRestaurantOpenNow();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المنيو', href: '#menu' },
    { label: 'عن لقمه هنا', href: '#story' },
    { label: 'الصور', href: '#gallery' },
    { label: 'التقييمات', href: '#reviews' },
    { label: 'الموقع والتواصل', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro bar for status and phone */}
      <div className="bg-[#050505] text-[#999] text-xs py-1.5 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.isOpen ? 'bg-[#22c55e]' : 'bg-red-400'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-[#22c55e]' : 'bg-red-500'}`}></span>
              </span>
              <span className="text-[#ffd76a] font-bold">{status.message}</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#bbb]">
              <MapPin className="w-3.5 h-3.5 text-[#f3b52b]" />
              المرج، القاهرة — شارع الإمام سالم
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="text-[#f3b52b] hover:text-[#ffd76a] flex items-center gap-1 transition-colors font-bold"
            >
              <Phone className="w-3 h-3" />
              {RESTAURANT_INFO.phoneDisplay}
            </a>
            <span className="text-[#333]">|</span>
            <span className="text-[#ffd76a] font-black">★ {RESTAURANT_INFO.rating} (30 تقييم)</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080808]/95 backdrop-blur-md shadow-2xl shadow-black/80 border-b border-white/10 py-3' 
            : 'bg-gradient-to-b from-[#080808]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f3b52b] to-[#d97706] p-0.5 flex items-center justify-center shadow-lg shadow-[#f3b52b]/15">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                <span className="text-[#ffd76a] font-black text-xl">ل</span>
              </div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black tracking-tight text-[#fff7e8] group-hover:text-[#ffd76a] transition-colors leading-none">
                لقمه <span className="text-[#f3b52b]">هنا</span>
              </div>
              <div className="text-[9px] tracking-widest text-[#888] font-bold mt-1">
                LOKMA HENA • المرج
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#ddd] hover:text-[#f3b52b] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#f3b52b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick WhatsApp */}
            <a
              href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحبًا لقمه هنا، أريد الاستفسار والطلب')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#1c8c4a] hover:bg-[#15733c] transition-all shadow-md shadow-[#1c8c4a]/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب</span>
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#ffd76a] bg-[#1a1711] border border-[#f3b52b]/30 hover:bg-[#251f14] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#f3b52b]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#f3b52b] to-[#e5a017] text-[#080808] font-black text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#f3b52b]/20 cursor-pointer"
              aria-label="سلة الطلبات"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">السلة</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#080808] text-[#ffd76a] text-xs font-black">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#171717] border border-white/10 text-white hover:text-[#f3b52b] transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/10 px-6 py-5 mt-3 space-y-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#ddd] hover:text-[#ffd76a] hover:bg-[#181818] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحبًا لقمه هنا، أريد الطلب')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1c8c4a] text-white font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل واتساب
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#171717] text-[#fff7e8] font-bold text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#f3b52b]" />
                اتصال: {RESTAURANT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
