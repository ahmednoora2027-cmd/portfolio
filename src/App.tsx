import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Toast } from './components/Toast';
import { Flame } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lokma-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lokma-cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const handleAddToCart = (
    item: MenuItem, 
    quantity: number = 1, 
    notes: string = '', 
    options: string[] = []
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          notes: notes || updated[existingIndex].notes,
          extraOptions: options.length > 0 ? options : updated[existingIndex].extraOptions
        };
        return updated;
      } else {
        return [...prev, { item, quantity, notes, extraOptions: options }];
      }
    });

    showToast(`تمت إضافة ${item.name} إلى السلة`);
  };

  const handleUpdateQuantity = (itemId: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
    showToast('تم حذف الصنف من السلة');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('تم تفريغ السلة');
  };

  const totalCartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#fff7e8] selection:bg-[#f3b52b] selection:text-black relative">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Night Owl Banner */}
        <div className="bg-[#141006] border-y border-[#f3b52b]/20 py-2.5 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#ffd76a] font-bold text-center">
            <span className="flex items-center gap-1.5 text-[#f3b52b]">
              <Flame className="w-4 h-4" />
              سهرانين لخدمتكم:
            </span>
            <span>
              مفتوح يوميًا حتى 4:00 صباحًا · توصيل سريع لجميع مناطق المرج ومحطة المرج
            </span>
            <button
              onClick={scrollToMenu}
              className="underline hover:text-white transition-colors cursor-pointer mr-2 hidden sm:inline"
            >
              اطلب الآن
            </button>
          </div>
        </div>

        {/* Menu Section */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Story / About Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Location & Contact Section */}
        <LocationSection onOpenCart={() => setIsCartOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        cartCount={totalCartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenMenu={scrollToMenu}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
