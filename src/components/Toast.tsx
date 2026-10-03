import React from 'react';
import { Check, ShoppingBag } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onOpenCart }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-1/2 translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#f5efe3] text-[#090909] font-black text-xs sm:text-sm shadow-2xl shadow-black border border-[#caa45d]">
        <div className="w-5 h-5 rounded-full bg-[#29c36a] text-black flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span>{message}</span>

        {onOpenCart && (
          <button
            onClick={onOpenCart}
            className="mr-2 px-2.5 py-1 rounded-lg bg-[#090909] text-[#e4c77d] text-xs hover:bg-[#222] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ShoppingBag className="w-3 h-3" />
            افتح السلة
          </button>
        )}
      </div>
    </div>
  );
};
