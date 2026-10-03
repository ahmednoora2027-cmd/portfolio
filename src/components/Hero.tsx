import React from 'react';
import { RESTAURANT_INFO, isRestaurantOpenNow } from '../data/restaurantData';
import { 
  Star, 
  MapPin, 
  PhoneCall, 
  MessageCircle, 
  ShoppingBag, 
  Flame, 
  Clock, 
  ShieldCheck, 
  Utensils 
} from 'lucide-react';

interface HeroProps {
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCart }) => {
  const status = isRestaurantOpenNow();

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Hero Image - Guaranteed Local High-Res Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.heroImage}
          alt="لقمه هنا - برجر وسماش وبيتزا وكريب"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(243,181,43,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161208]/85 border border-[#f3b52b]/40 backdrop-blur-md mb-6 shadow-xl shadow-black/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.isOpen ? 'bg-[#22c55e]' : 'bg-red-400'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.isOpen ? 'bg-[#22c55e]' : 'bg-red-500'}`}></span>
          </span>
          <span className="text-xs font-bold text-[#ffd76a]">
            {status.isOpen ? 'مفتوح الآن · يغلق 4:00 AM' : 'مغلق حاليًا · يفتح 11:00 AM'}
          </span>
          <span className="text-[#f3b52b]/40">•</span>
          <span className="text-xs text-[#ded8cf] flex items-center gap-1 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#f3b52b]" />
            المرج، القاهرة
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#fff7e8] tracking-tight leading-[1.05] mb-6">
          لقمه <span className="bg-gradient-to-r from-[#f3b52b] via-[#ffd76a] to-[#f3b52b] bg-clip-text text-transparent">هنا.</span><br />
          والطعم <span className="bg-gradient-to-r from-[#f3b52b] via-[#ffd76a] to-[#f3b52b] bg-clip-text text-transparent">يكمل.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#ded8cf] leading-relaxed mb-8">
          برجر، كريب، بيتزا وأكلات سريعة بجودة عالية وطعم معمول بحب. اطلب أونلاين واستلم طلبك أو تواصل معنا مباشرة في قلب المرج.
        </p>

        {/* Actions buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={scrollToMenu}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f3b52b] to-[#e5a017] text-[#080808] font-black text-sm sm:text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#f3b52b]/20 cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            شوف المنيو
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#171717] text-[#fff7e8] border border-white/10 hover:border-[#f3b52b]/50 hover:bg-[#202020] font-bold text-sm sm:text-base transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#f3b52b]" />
            ابدأ الطلب 🛒
          </button>

          <a
            href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحبًا لقمه هنا، أريد الطلب')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#1c8c4a] text-white hover:bg-[#15733c] font-bold text-sm sm:text-base transition-all shadow-md shadow-[#1c8c4a]/20"
          >
            <MessageCircle className="w-4 h-4" />
            واتساب
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141414]/80 border border-white/8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1 text-[#f3b52b] mb-1">
              <Star className="w-4 h-4 fill-[#f3b52b]" />
              <span className="text-xl sm:text-2xl font-black text-[#fff7e8]">4.6</span>
            </div>
            <div className="text-xs text-[#999]">من 30 تقييم Google</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141414]/80 border border-white/8 backdrop-blur-sm">
            <div className="text-base sm:text-lg font-black text-[#ffd76a] mb-1">200–400 ج.م</div>
            <div className="text-xs text-[#999]">متوسط تكلفة الفرد</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141414]/80 border border-white/8 backdrop-blur-sm">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="text-base sm:text-lg font-black text-[#f3b52b] hover:underline block mb-1" 
              dir="ltr"
            >
              {RESTAURANT_INFO.phoneDisplay}
            </a>
            <div className="text-xs text-[#999]">اتصال واستفسار فوري</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#141414]/80 border border-white/8 backdrop-blur-sm">
            <div className="text-base sm:text-lg font-black text-[#fff7e8] mb-1">المرج البحرية</div>
            <div className="text-xs text-[#999]">القاهرة — شارع الإمام سالم</div>
          </div>
        </div>

      </div>
    </section>
  );
};
