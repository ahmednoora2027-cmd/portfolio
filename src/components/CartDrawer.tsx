import React, { useState } from 'react';
import { CartItem, OrderType } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Copy, 
  Check, 
  Truck, 
  Store, 
  Utensils,
  MapPin,
  Phone,
  User
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: number, newQty: number) => void;
  onRemoveItem: (itemId: number) => void;
  onClearCart: () => void;
  onOpenMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenMenu
}) => {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    const orderTypeLabel = 
      orderType === 'delivery' ? '🛵 توصيل للمنازل بالمرج' :
      orderType === 'pickup' ? '🛍️ استلام من فرع المرج (تيك أواي)' : 
      '🍽️ تناول داخل المطعم';

    let message = `طلب جديد من موقع لقمه هنا\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) message += `👤 *العميل:* ${customerName.trim()}\n`;
    if (customerPhone.trim()) message += `📱 *رقم الهاتف:* ${customerPhone.trim()}\n`;
    message += `🏷️ *نوع الطلب:* ${orderTypeLabel}\n`;
    
    if (orderType === 'delivery' && deliveryAddress.trim()) {
      message += `📍 *العنوان:* ${deliveryAddress.trim()}\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📋 *الأصناف المطلوبة:*\n`;

    items.forEach((ci) => {
      message += `- *${ci.item.name}* × ${ci.quantity}\n`;
      if (ci.extraOptions && ci.extraOptions.length > 0) {
        message += `   ↳ إضافات: ${ci.extraOptions.join('، ')}\n`;
      }
      if (ci.notes) {
        message += `   ↳ ملاحظة: ${ci.notes}\n`;
      }
    });

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💵 *الإجمالي:* حسب المنيو والوزن / الحجم\n`;
    
    if (generalNotes.trim()) {
      message += `📝 *ملاحظات عامة:* ${generalNotes.trim()}\n`;
      message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    message += `\nمرحبًا، أريد تأكيد الطلب ومعرفة الإجمالي ووقت التحضير والتوصيل.`;

    return message;
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopyOrder = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#111] border-r border-white/10 shadow-2xl flex flex-col text-[#fff7e8]">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#151515]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#f3b52b]/10 text-[#f3b52b] border border-[#f3b52b]/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-lg text-[#fff7e8]">سلة الطلب</h3>
                <span className="text-xs text-[#888]">
                  {items.length === 0 ? 'السلة فارغة' : `${items.length} أصناف في القائمة`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-400 hover:text-red-300 p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  title="تفريغ السلة"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-[#181818] border border-white/5 flex items-center justify-center mx-auto mb-4 text-[#888]">
                  <ShoppingBag className="w-8 h-8 text-[#f3b52b]/50" />
                </div>
                <h4 className="font-bold text-base text-[#fff7e8] mb-1">السلة فارغة</h4>
                <p className="text-xs text-[#888] mb-6 max-w-xs mx-auto">
                  اختر من البرجر، الكريب المقرمش، والبيتزا الإيطالية اللذيذة.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onOpenMenu();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#f3b52b] text-[#080808] font-black text-xs hover:bg-[#ffd76a] transition-colors cursor-pointer"
                >
                  اختار لقمتك
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#ffd76a] block">
                    الأصناف المحددة ({items.reduce((acc, i) => acc + i.quantity, 0)})
                  </span>
                  
                  {items.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="p-3 rounded-xl bg-[#171717] border border-white/5 flex gap-3 items-center"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-16 h-16 object-cover rounded-xl flex-shrink-0 bg-[#080808]"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h5 className="font-bold text-sm text-[#fff7e8] truncate">
                            {cartItem.item.name}
                          </h5>
                          <span className="text-xs font-bold text-[#ffd76a] whitespace-nowrap ml-2">
                            {cartItem.item.priceDisplay}
                          </span>
                        </div>

                        {cartItem.extraOptions && cartItem.extraOptions.length > 0 && (
                          <p className="text-[11px] text-[#ffd76a] truncate mt-0.5">
                            + {cartItem.extraOptions.join('، ')}
                          </p>
                        )}

                        {cartItem.notes && (
                          <p className="text-[11px] text-[#aaa] truncate mt-0.5">
                            ملاحظة: {cartItem.notes}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-[#777]">{cartItem.item.category}</span>

                          <div className="flex items-center gap-2 bg-[#090909] px-2 py-0.5 rounded-lg border border-white/5">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                              className="text-white/60 hover:text-white cursor-pointer"
                              aria-label="إنقاص"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                              className="text-white/60 hover:text-white cursor-pointer"
                              aria-label="زيادة"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.item.id)}
                        className="text-white/30 hover:text-red-400 p-1 transition-colors cursor-pointer"
                        aria-label="حذف"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Delivery / Takeaway Switch */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <label className="text-xs font-bold text-[#ffd76a] block">
                    طريقة الاستلام:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        orderType === 'delivery'
                          ? 'bg-[#f3b52b]/15 border-[#f3b52b] text-[#ffd76a]'
                          : 'bg-[#151515] border-white/5 text-[#888] hover:text-white'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>دليفري للمنزل</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        orderType === 'pickup'
                          ? 'bg-[#f3b52b]/15 border-[#f3b52b] text-[#ffd76a]'
                          : 'bg-[#151515] border-white/5 text-[#888] hover:text-white'
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>استلام فرع</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('dinein')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        orderType === 'dinein'
                          ? 'bg-[#f3b52b]/15 border-[#f3b52b] text-[#ffd76a]'
                          : 'bg-[#151515] border-white/5 text-[#888] hover:text-white'
                      }`}
                    >
                      <Utensils className="w-4 h-4" />
                      <span>داخل الصالة</span>
                    </button>
                  </div>
                </div>

                {/* Optional Customer info for direct WhatsApp ease */}
                <div className="space-y-3 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold text-[#ffd76a] block">بيانات إضافية (اختياري لتسهيل التوصيل):</span>

                  <div>
                    <label className="text-[11px] text-[#aaa] block mb-1">الاسم:</label>
                    <input
                      type="text"
                      placeholder="اسمك"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#090909] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#aaa] block mb-1">رقم الهاتف:</label>
                    <input
                      type="tel"
                      dir="ltr"
                      placeholder="01XXXXXXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#090909] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b] text-left"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="text-[11px] text-[#aaa] block mb-1">عنوان التوصيل بالمرج:</label>
                      <textarea
                        rows={2}
                        placeholder="الشارع، رقم العمارة، علامة مميزة..."
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#090909] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b] resize-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] text-[#aaa] block mb-1">ملاحظات على الطلب:</label>
                    <input
                      type="text"
                      placeholder="صوصات زيادة، بدون شطة..."
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#090909] border border-white/10 text-xs text-[#fff7e8] focus:outline-none focus:border-[#f3b52b]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer with WhatsApp Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#151515] space-y-3">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-[#aaa]">الإجمالي:</span>
                <span className="text-[#ffd76a] font-black text-base">حسب المنيو الفعلي</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm bg-[#1c8c4a] hover:bg-[#15733c] text-white active:scale-98 transition-all shadow-lg shadow-[#1c8c4a]/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                إرسال الطلب عبر واتساب
              </button>

              <div className="flex items-center justify-between text-[11px] text-[#777] pt-1">
                <button
                  onClick={handleCopyOrder}
                  className="flex items-center gap-1 hover:text-[#f3b52b] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#22c55e]" />
                      <span className="text-[#22c55e]">تم نسخ تفاصيل الطلب!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>نسخ نص الطلب</span>
                    </>
                  )}
                </button>

                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
