import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Plus, Minus, ShoppingBag, Sparkles, Check } from 'lucide-react';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, notes?: string, options?: string[]) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const extraChoices = [
    'صوص شيدر سايح إضافي',
    'جبنة موتزاريلا إكسترا',
    'هالبينو سبايسي حار',
    'بدون مخلل أو بصل',
    'صوص رانش مدخن'
  ];

  const toggleOption = (opt: string) => {
    setSelectedOptions((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const handleAdd = () => {
    onAddToCart(item, quantity, specialInstructions.trim(), selectedOptions);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/10 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image - Local asset with guaranteed display */}
        <div className="relative aspect-[16/10] bg-[#1a1a1a] overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
          
          <div className="absolute bottom-3 right-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#080808]/90 border border-[#f3b52b]/40 text-[#ffd76a] text-xs font-bold">
              {item.category}
            </span>
            {item.isChefSpecial && (
              <span className="px-2.5 py-1 rounded-md bg-[#f3b52b] text-[#080808] text-xs font-black flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                توقيع الشيف
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#fff7e8]">
                {item.name}
              </h3>
              <div className="text-sm font-black text-[#ffd76a] bg-[#1c180e] px-2.5 py-1 rounded-lg border border-[#f3b52b]/30 whitespace-nowrap">
                {item.priceDisplay}
              </div>
            </div>

            <p className="text-sm text-[#b8b0a2] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Custom Options / Extras */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#ffd76a]">
              إضافات وتفضيلات (اختياري):
            </label>
            <div className="flex flex-wrap gap-2">
              {extraChoices.map((opt) => {
                const isSelected = selectedOptions.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleOption(opt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#f3b52b]/20 border-[#f3b52b] text-[#ffd76a]'
                        : 'bg-[#181818] border-white/8 text-[#aaa] hover:text-white'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#ffd76a]">
              ملاحظات التحضير:
            </label>
            <input
              type="text"
              placeholder="مثال: سبايسي، صوص زيادة، تقطيع نصفين..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#090909] border border-white/10 text-xs text-[#fff7e8] placeholder-[#666] focus:outline-none focus:border-[#f3b52b] transition-colors"
            />
          </div>

          {/* Quantity Controls & Add Button */}
          <div className="pt-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-[#090909] p-1.5 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-[#1c1c1c] text-white hover:bg-[#f3b52b] hover:text-black flex items-center justify-center transition-colors disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-black text-base text-[#fff7e8]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-[#1c1c1c] text-white hover:bg-[#f3b52b] hover:text-black flex items-center justify-center transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm transition-all ${
                added 
                  ? 'bg-[#22c55e] text-black' 
                  : 'bg-gradient-to-r from-[#f3b52b] to-[#e5a017] text-[#080808] hover:brightness-110 active:scale-95 shadow-lg shadow-[#f3b52b]/20 cursor-pointer'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  تمت الإضافة للسلة!
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  أضف للطلب • {quantity} {quantity === 1 ? 'صنف' : 'أصناف'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
