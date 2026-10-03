import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { ProductModal } from './ProductModal';
import { 
  Search, 
  Sparkles, 
  Plus, 
  Check, 
  Utensils, 
  Star 
} from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity?: number, notes?: string, options?: string[]) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectItem, setInspectItem] = useState<MenuItem | null>(null);
  const [justAddedId, setJustAddedId] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'الكل' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        return matchName || matchDesc || matchCat;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item, 1);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 900);
  };

  return (
    <section id="menu" className="py-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#f3b52b] uppercase mb-2">
              <Utensils className="w-3.5 h-3.5" />
              OUR MENU • منيو لقمه هنا
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff7e8] tracking-tight">
              اختار <span className="text-[#f3b52b]">لقمتك</span>
            </h2>
            <p className="text-sm sm:text-base text-[#999] mt-2 max-w-xl leading-relaxed">
              أشهر الأصناف المميزة في لقمه هنا — برجر، كريب كرانشي، بيتزا إيطالية وسندوتشات سريعة معمولة بحب في المرج.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-[#f3b52b] absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن كريب، برجر، بيتزا، استربس..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-[#141414] border border-white/10 text-sm text-[#fff7e8] placeholder-[#777] focus:outline-none focus:border-[#f3b52b] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-white bg-[#222] px-1.5 py-0.5 rounded cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const count = cat === 'الكل'
              ? MENU_ITEMS.length
              : MENU_ITEMS.filter((i) => i.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#f3b52b] text-[#080808] shadow-md shadow-[#f3b52b]/20 scale-105'
                    : 'bg-[#151515] text-[#ccc] border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-[#080808]/20 text-[#080808]' : 'bg-[#222] text-[#888]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#121212] rounded-2xl border border-white/5">
            <Utensils className="w-12 h-12 text-[#f3b52b]/40 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#fff7e8] mb-1">لم نجد أصناف مطابقة</h3>
            <p className="text-xs text-[#888] mb-4">جرب البحث بكلمات أخرى أو اختر فئة أخرى.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('الكل');
              }}
              className="px-4 py-2 rounded-xl bg-[#f3b52b] text-[#080808] font-bold text-xs cursor-pointer"
            >
              عرض كل الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item) => {
              const isJustAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setInspectItem(item)}
                  className="group bg-gradient-to-b from-[#181818] to-[#101010] border border-white/8 hover:border-[#f3b52b]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f3b52b]/5 flex flex-col cursor-pointer"
                >
                  {/* Dish Image - Guaranteed local asset */}
                  <div className="relative aspect-square bg-[#1a1a1a] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                    {/* Badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-1 rounded-full bg-black/75 border border-white/10 text-[#ffd76a] text-[10px] font-black backdrop-blur-sm">
                        {item.tag || item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 text-[11px] text-[#ddd] font-semibold bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {item.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-base text-[#fff7e8] group-hover:text-[#ffd76a] transition-colors mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#999] line-clamp-2 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                      <div className="text-xs font-black text-[#ffd76a] bg-[#1a160d] px-2 py-1 rounded-md border border-[#f3b52b]/25">
                        {item.priceDisplay}
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(e, item)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          isJustAdded
                            ? 'bg-[#22c55e] text-black scale-105'
                            : 'bg-[#f3b52b] text-[#080808] hover:bg-[#ffd76a] active:scale-95 shadow-md shadow-[#f3b52b]/15'
                        }`}
                        aria-label={`إضافة ${item.name}`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>أُضيف!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>+ أضف للسلة</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {inspectItem && (
        <ProductModal
          item={inspectItem}
          onClose={() => setInspectItem(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
};
