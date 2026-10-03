import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Camera, X, ZoomIn, ChevronRight, ChevronLeft } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0c0c0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#f3b52b] uppercase mb-2">
            <Camera className="w-3.5 h-3.5" />
            GALLERY • معرض الصور
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#fff7e8] tracking-tight">
            لقمه هنا <span className="text-[#f3b52b]">بالصور</span>
          </h2>
          <p className="text-sm sm:text-base text-[#999] mt-2">
            صور حية من قلب مطبخنا — برجر، كريب، بيتزا، ووجبات سريعة. اضغط على أي صورة لتكبيرها.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#f3b52b]/60 cursor-pointer transition-all duration-300 ${
                  isFeatured ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                />
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#ffd76a] font-bold block">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-black text-[#fff7e8]">{item.title}</h4>
                    </div>
                    <div className="p-2 rounded-xl bg-black/60 text-[#f3b52b]">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 left-5 z-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#f3b52b] hover:text-black transition-colors"
            aria-label="السابق"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#f3b52b] hover:text-black transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeImageIndex].src}
              alt={GALLERY_ITEMS[activeImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/10 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="text-base sm:text-lg font-bold text-[#fff7e8]">
                {GALLERY_ITEMS[activeImageIndex].title}
              </h4>
              <span className="text-xs text-[#ffd76a]">
                {GALLERY_ITEMS[activeImageIndex].category} • صورة {activeImageIndex + 1} من {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
