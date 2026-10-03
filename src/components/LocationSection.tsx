import React from 'react';
import { RESTAURANT_INFO, isRestaurantOpenNow } from '../data/restaurantData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  UtensilsCrossed, 
  Truck,
  Building
} from 'lucide-react';

interface LocationSectionProps {
  onOpenCart: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenCart }) => {
  const status = isRestaurantOpenNow();

  return (
    <section id="contact" className="py-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#f3b52b] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5" />
            VISIT US • موقعنا وتواصل معنا
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff7e8] tracking-tight">
            تعالى <span className="text-[#f3b52b]">لنا في المرج</span>
          </h2>
          <p className="text-sm sm:text-base text-[#999] mt-2">
            شارع الإمام سالم — المرج البحرية، القاهرة. نسعد باستقبالكم وتوصيل طلباتكم حتى 4:00 فجرًا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#121212] border border-white/8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/8">
                <div>
                  <h3 className="text-xl font-black text-[#fff7e8]">{RESTAURANT_INFO.name}</h3>
                  <span className="text-xs text-[#ffd76a] font-bold">LOKMA HENA • فرع المرج</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  status.isOpen 
                    ? 'bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/40' 
                    : 'bg-red-500/15 text-red-400 border-red-500/40'
                }`}>
                  {status.isOpen ? '● مفتوح الآن (حتى 4 AM)' : '● مغلق الآن'}
                </div>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#fff7e8] font-bold mb-0.5">العنوان:</strong>
                    <p className="text-[#aaa] leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                    <span className="inline-block mt-1 text-xs text-[#ffd76a]">
                      Plus Code: <span className="font-mono" dir="ltr">{RESTAURANT_INFO.plusCode}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#fff7e8] font-bold mb-0.5">رقم الهاتف والاتصال السريع:</strong>
                    <a 
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-[#ffd76a] hover:underline font-bold text-lg inline-block"
                      dir="ltr"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#fff7e8] font-bold mb-0.5">مواعيد العمل:</strong>
                    <p className="text-[#aaa]">
                      يوميًا من <strong className="text-[#fff7e8]">11:00 صباحًا</strong> وحتى <strong className="text-[#ffd76a]">4:00 صباحًا</strong> بعد منتصف الليل.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] flex-shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#fff7e8] font-bold mb-0.5">التوصيل والاستلام:</strong>
                    <p className="text-[#aaa]">
                      خدمة توصيل سريعة لمناطق المرج والمناطق المجاورة، أو استلام فوري من المطعم.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/8">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#f3b52b] to-[#e5a017] text-[#080808] font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#f3b52b]/15"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>

              <a
                href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent('مرحبًا لقمه هنا')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1c8c4a] text-white font-bold text-sm hover:bg-[#15733c] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                محادثة واتساب
              </a>
            </div>
          </div>

          {/* Map Preview & Order Prompt Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#121212] border border-white/8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-black text-lg text-[#fff7e8]">الخريطة والاتجاهات</h4>
                <span className="text-xs text-[#888] font-mono" dir="ltr">
                  585V+3P El Marg
                </span>
              </div>

              {/* Map Embed Representation */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] mb-4">
                <iframe
                  title="موقع مطعم لقمه هنا بالمرج"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=30.158,31.335&z=15&output=embed"
                />
                
                <div className="absolute top-3 right-3 bg-[#080808]/90 border border-[#f3b52b]/50 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f3b52b]" />
                  <span className="text-xs font-bold text-[#fff7e8]">شارع الإمام سالم — المرج</span>
                </div>
              </div>

              <div className="bg-[#181818] p-4 rounded-2xl border border-white/5 mb-4">
                <h5 className="font-bold text-sm text-[#ffd76a] mb-1">اطلب في دقيقة</h5>
                <p className="text-xs text-[#aaa] leading-relaxed">
                  أضف الأصناف المفضلة للسلة ثم أرسل تفاصيل الطلب عبر واتساب. الأسعار الدقيقة تؤكد مباشرة مع المطعم عبر واتساب.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1c1c1c] border border-white/10 hover:border-[#f3b52b] text-[#fff7e8] hover:text-[#ffd76a] font-bold text-sm transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#f3b52b]" />
                الاتجاهات في خرائط Google
              </a>

              <button
                onClick={onOpenCart}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-transparent border border-[#f3b52b]/40 text-[#f3b52b] hover:bg-[#f3b52b]/10 font-bold text-xs transition-colors cursor-pointer"
              >
                فتح سلة الطلب والبدء
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
