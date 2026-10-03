import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, ShieldCheck, Truck, MapPin, Phone, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#0d0d0d] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual card with local guaranteed image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black aspect-square max-w-md mx-auto">
              <img
                src={RESTAURANT_INFO.heroImage}
                alt="لقمه هنا - برجر ووجبة"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-[#121212]/90 border border-[#f3b52b]/30 backdrop-blur-md">
                <div className="text-xs text-[#ffd76a] font-black mb-1">
                  طعم يخليك ترجع
                </div>
                <p className="text-xs text-[#ded8cf]">
                  «أفضل بيتزا وبرجر في المرج.. جودة عالية وتسليم سريع»
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f3b52b]/15 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Story & Why Lokma Hena */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#f3b52b] uppercase">
              WHY LOKMA HENA • عن لقمه هنا
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff7e8] leading-tight">
              لقمة صغيرة، <br />
              <span className="text-[#f3b52b]">تجربة كبيرة.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#ded8cf] leading-relaxed">
              في <strong className="text-[#ffd76a]">لقمه هنا</strong> بشارع الإمام سالم بالمرج، نهتم بكل تفصيلة تصنع الطعم المظبوط. نختار المكونات الطازجة يوميًا من اللحوم الصافية، خضار فريش، وأجبان طبيعية ذائبة لتقديم أشهى كريب مقرمش، برجر مكرمل، وبيتزا إيطالية غنية بالجبن.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#141414] border border-white/5 flex gap-3.5 items-start">
                <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#fff7e8] mb-1">جودة وطعم معمول بحب</h4>
                  <p className="text-xs text-[#888] leading-relaxed">
                    تتبيلات حصرية وعجائن فريش تُخبز فور طلبك لضمان أعلى قرمشة ونكهة لذيذة.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/5 flex gap-3.5 items-start">
                <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#fff7e8] mb-1">برجر، كريب، بيتزا، ووجبات</h4>
                  <p className="text-xs text-[#888] leading-relaxed">
                    منيو متكامل يرضي كل الأذواق — من السندوتشات السريعة حتى وجبات الأصدقاء والعائلة.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/5 flex gap-3.5 items-start">
                <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#fff7e8] mb-1">طلب وتوصيل مباشر عبر واتساب</h4>
                  <p className="text-xs text-[#888] leading-relaxed">
                    بدون تعقيد، اختر أصنافك وأرسل طلبك مباشرة إلى واتساب المطعم في ثوانٍ.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/5 flex gap-3.5 items-start">
                <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#fff7e8] mb-1">شارع الإمام سالم — المرج</h4>
                  <p className="text-xs text-[#888] leading-relaxed">
                    موقع متميز بالمرج البحرية، مفتوح يوميًا حتى الساعة 4:00 فجرًا لتلبية جوع آخر الليل.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 rounded-2xl bg-[#17140e] border border-[#f3b52b]/30 flex flex-wrap items-center justify-between gap-4 mt-4">
              <div>
                <div className="text-xs text-[#ffd76a] font-bold">جاهز تطلب لقمتك؟</div>
                <div className="text-xs text-[#aaa]">تواصل مباشرة مع المطعم عبر الهاتف أو واتساب</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-4 py-2 rounded-xl bg-[#222] border border-white/10 text-white font-bold text-xs hover:border-[#f3b52b] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f3b52b]" />
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1c8c4a] text-white font-bold text-xs hover:bg-[#15733c] transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  واتساب
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
