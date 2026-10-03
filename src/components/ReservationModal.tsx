import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  CalendarDays, 
  Clock, 
  Users, 
  Phone, 
  User, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('18:00');
  const [guests, setGuests] = useState('4');
  const [occasion, setOccasion] = useState('عشاء عائلي');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('يرجى ملء الاسم ورقم الهاتف لإتمام الحجز');
      return;
    }
    setError('');

    // Format WhatsApp reservation message
    const msg = `*طلب حجز طاولة في مطعم بيت الأكابر*\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *الاسم:* ${name.trim()}\n` +
      `📱 *رقم الهاتف:* ${phone.trim()}\n` +
      `📅 *التاريخ:* ${date}\n` +
      `⏰ *الوقت:* ${time}\n` +
      `👥 *عدد الأفراد:* ${guests} أفراد\n` +
      `🎉 *المناسبة:* ${occasion}\n` +
      (notes.trim() ? `📝 *طلبات خاصة:* ${notes.trim()}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `مرحبًا، نرجو تأكيد حجز الطاولة في الموعد المحدد. شكراً لكم.`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/201033421613?text=${encoded}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#caa45d]/30 rounded-2xl shadow-2xl p-6 sm:p-7 text-[#f5efe3] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#caa45d]/10 border border-[#caa45d]/30 text-[#caa45d] flex items-center justify-center mx-auto mb-3">
            <CalendarDays className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-[#f5efe3]">حجز طاولة مسبق</h3>
          <p className="text-xs text-[#a39c90] mt-1">
            نسعد باستقبالكم في صالات بيت الأكابر المكيفة بمول الخان بالعاشر من رمضان
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-[#29c36a] mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-[#f5efe3]">جاري تحويلك لتأكيد الحجز...</h4>
            <p className="text-sm text-[#aaa]">سيتم فتح تطبيق واتساب لإرسال بيانات الحجز لإدارة المطعم مباشرة.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#caa45d] mb-1">الاسم الكريم:</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#666] absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pr-9 pl-3 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] focus:outline-none focus:border-[#caa45d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#caa45d] mb-1">رقم الهاتف:</label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-[#666] absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    dir="ltr"
                    required
                    placeholder="010XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pr-3 pl-9 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] focus:outline-none focus:border-[#caa45d] text-left"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#caa45d] mb-1">التاريخ:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] focus:outline-none focus:border-[#caa45d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#caa45d] mb-1">الوقت المتوقع:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] focus:outline-none focus:border-[#caa45d]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#caa45d] mb-1">عدد الأفراد:</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] focus:outline-none focus:border-[#caa45d]"
                >
                  <option value="1">فرد واحد</option>
                  <option value="2">فردين (طاولة ثنائية)</option>
                  <option value="4">4 أفراد</option>
                  <option value="6">6 أفراد</option>
                  <option value="8">8 أفراد</option>
                  <option value="10">10 أفراد</option>
                  <option value="15">15 فرد (عزومة كبرى)</option>
                  <option value="20+">أكثر من 20 فرد (وليمة خاصة)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#caa45d] mb-1">نوع المناسبة:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['عشاء عائلي', 'عزومة عمل', 'عيد ميلاد', 'لقاء أصدقاء'].map((occ) => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${
                      occasion === occ
                        ? 'bg-[#caa45d]/20 border-[#caa45d] text-[#e4c77d]'
                        : 'bg-[#0a0a0a] border-white/5 text-[#888] hover:text-white'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#caa45d] mb-1">
                طلبات خاصة (مقاعد أطفال، كعكة، جلسة هادئة...):
              </label>
              <textarea
                rows={2}
                placeholder="أخبرنا بما يجعلك مرتاحًا..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-[#f5efe3] placeholder-[#666] focus:outline-none focus:border-[#caa45d] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-[#caa45d] to-[#b38e45] text-[#090909] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#caa45d]/20 mt-4 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              تأكيد الحجز فورًا عبر واتساب
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
