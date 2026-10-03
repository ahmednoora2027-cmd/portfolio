import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, Phone, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#888] pt-14 pb-24 md:pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f3b52b] to-[#d97706] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[6px] flex items-center justify-center">
                  <span className="text-[#ffd76a] font-black text-sm">ل</span>
                </div>
              </div>
              <span className="text-xl font-black text-[#fff7e8]">
                لقمه <span className="text-[#f3b52b]">هنا</span>
              </span>
            </div>

            <p className="text-xs text-[#aaa] leading-relaxed">
              طعم يخليك ترجع.. أشهى برجر، كريب، وبيتزا معمولة بجودة عالية ومكونات طازجة في قلب المرج.
            </p>

            <div className="text-xs text-[#ffd76a] font-bold">
              ★ 4.6 من 30 تقييم على Google
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-black text-[#fff7e8] mb-3">أقسام الموقع</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#f3b52b] transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#f3b52b] transition-colors">
                  المنيو وقائمة الطعام
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#f3b52b] transition-colors">
                  عن لقمه هنا
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#f3b52b] transition-colors">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#f3b52b] transition-colors">
                  التقييمات
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f3b52b] transition-colors">
                  الموقع والاتصال
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-black text-[#fff7e8] mb-3">بيانات التواصل</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f3b52b] flex-shrink-0 mt-0.5" />
                <span>شارع الإمام سالم، المرج البحرية، القاهرة</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f3b52b] flex-shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#f3b52b]" dir="ltr">
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                <a href={RESTAURANT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#22c55e]">
                  واتساب: {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-1 text-[11px] text-[#666]">
                مفتوح يوميًا: 11:00 ص – 4:00 فجرًا
              </div>
            </div>
          </div>

          {/* Service note & Scroll to top */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-[#fff7e8] mb-3">توصيل سريع</h4>
            <p className="text-xs text-[#999] leading-relaxed">
              نوصل طلباتك ساخنة وسريعة لجميع أرجاء المرج والمناطق المجاورة. اطلب عبر واتساب وسنصلك فورًا.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141414] border border-white/10 text-xs font-bold text-[#fff7e8] hover:text-[#f3b52b] hover:border-[#f3b52b]/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              العودة للأعلى
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>
            © {new Date().getFullYear()} لقمه هنا — جميع الحقوق محفوظة.
          </div>
          <div className="text-[#666]">
            طعم يكمل كل لقمة
          </div>
        </div>
      </div>
    </footer>
  );
};
