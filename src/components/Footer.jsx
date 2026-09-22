import React from 'react';
import { MapPin, Phone, Clock, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-footer text-[#FFD6B8] pt-16 pb-12 border-t border-[#8064A2]/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#8064A2]/30">

          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Apex.png"
                alt="APEX Tuition Center Logo"
                className="w-10 h-10 rounded-xl object-contain shadow-xs border border-[#8064A2]/50 p-0.5 bg-[#432941]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#FFF0D5] font-heading">
                  APEX
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#F26B5E] uppercase -mt-1">
                  Tuition Center
                </span>
              </div>
            </div>

            <p className="text-xl font-serif italic text-[#F6C945] font-bold">
              “Reach Beyond the Stars”
            </p>

            <p className="text-sm text-[#FFD6B8] leading-relaxed max-w-sm font-medium">
              Providing focused learning, consistent practice, mandatory daily tests, and personal academic guidance for students in Kumbakonam.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#432941] border border-[#F26B5E]/40 text-xs font-bold text-[#FFF0D5]">
              <span>Course Fee: ₹500 / Month</span>
              <span className="text-[#F26B5E]">•</span>
              <span>1st - 10th &amp; +1, +2 Maths</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFF0D5] font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-[#F26B5E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F26B5E] transition-colors">
                  Services (What We Provide)
                </a>
              </li>
              <li>
                <a href="#routine" className="hover:text-[#F26B5E] transition-colors">
                  Academic Routine
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F26B5E] transition-colors">
                  About APEX &amp; Faculty
                </a>
              </li>
              <li>
                <a href="#why-apex" className="hover:text-[#F26B5E] transition-colors">
                  Why Choose APEX?
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F26B5E] transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F26B5E] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFF0D5] font-heading">
              Center Details
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#FFD6B8]">
                <MapPin className="w-5 h-5 text-[#F26B5E] flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF0D5] font-bold">
                  Medway Hospital Near, Pillayampettai, Kumbakonam
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#FFD6B8]">
                <Phone className="w-5 h-5 text-[#F6C945] flex-shrink-0" />
                <a href="tel:6382256206" className="text-base font-black text-[#FFF0D5] hover:text-[#F26B5E] transition-colors">
                  6382256206
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#FFD6B8]">
                <Clock className="w-5 h-5 text-[#A8D5BA] flex-shrink-0" />
                <span className="text-[#FFF0D5] font-bold">5:00 PM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:6382256206"
                className="w-full py-2.5 px-4 text-xs font-extrabold text-[#FFF0D5] bg-[#F26B5E] hover:bg-[#D9574D] rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FFF0D5]" />
                Call 6382256206 to Enroll
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#FFD6B8]">
          <p>© 2026 APEX Tuition Center. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#FFD6B8] hover:text-[#F26B5E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

