import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Home, Utensils, ShoppingBag, Phone, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 px-2 py-2 flex items-center justify-around md:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.8)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0))]">
      {/* Home */}
      <button
        onClick={() => scrollTo('home')}
        className="flex flex-col items-center gap-1 text-[#aaa] hover:text-[#f3b52b] text-[10px] font-bold p-1 cursor-pointer"
      >
        <Home className="w-5 h-5 text-[#f3b52b]" />
        <span>الرئيسية</span>
      </button>

      {/* Menu */}
      <button
        onClick={() => scrollTo('menu')}
        className="flex flex-col items-center gap-1 text-[#aaa] hover:text-[#f3b52b] text-[10px] font-bold p-1 cursor-pointer"
      >
        <Utensils className="w-5 h-5" />
        <span>المنيو</span>
      </button>

      {/* Cart */}
      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center gap-1 text-[#ffd76a] text-[10px] font-bold p-1 cursor-pointer"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-[#f3b52b]" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#f3b52b] text-[#080808] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span>السلة</span>
      </button>

      {/* WhatsApp */}
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-[#22c55e] text-[10px] font-bold p-1"
      >
        <MessageCircle className="w-5 h-5" />
        <span>واتساب</span>
      </a>

      {/* Direct Call */}
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="flex flex-col items-center gap-1 text-[#aaa] hover:text-[#f3b52b] text-[10px] font-bold p-1"
      >
        <Phone className="w-5 h-5" />
        <span>اتصال</span>
      </a>
    </div>
  );
};
