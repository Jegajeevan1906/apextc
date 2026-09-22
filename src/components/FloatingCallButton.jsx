import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <aside aria-label="Quick Phone Call" className="fixed bottom-6 right-6 z-40 md:hidden flex flex-col items-end">
      <a
        href="tel:6382256206"
        className="flex items-center gap-2 bg-[#B85C38] hover:bg-[#91452F] text-[#F7F0E3] pl-3.5 pr-4 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Call APEX Tuition Center at 6382256206"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-4 h-4 text-[#F7F0E3]" />
        </div>
        <span className="text-xs font-extrabold tracking-wide">Call Now</span>
      </a>
    </aside>
  );
}
