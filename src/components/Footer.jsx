import React from 'react';
import { MapPin, Phone, Clock, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3B302A] text-[#E8D8BD] pt-16 pb-12 border-t border-[#493447] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#493447]">

          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Apex.png"
                alt="APEX Tuition Center Logo"
                className="w-10 h-10 rounded-xl object-contain shadow-xs border border-[#493447] p-0.5 bg-[#493447]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#F7F0E3] font-heading">
                  APEX
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#B85C38] uppercase -mt-1">
                  Tuition Center
                </span>
              </div>
            </div>

            <p className="text-xl font-serif italic text-[#C59B4A] font-bold">
              “Reach Beyond the Stars”
            </p>

            <p className="text-sm text-[#E8D8BD] leading-relaxed max-w-sm">
              Providing focused learning, consistent practice, mandatory daily tests, and personal academic guidance for students in Kumbakonam.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#493447] border border-[#B85C38]/40 text-xs font-semibold text-[#F7F0E3]">
              <span>Course Fee: ₹500 / Month</span>
              <span className="text-[#B85C38]">•</span>
              <span>1st - 10th &amp; +1, +2 Maths</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F7F0E3] font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-[#B85C38] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B85C38] transition-colors">
                  Services (What We Provide)
                </a>
              </li>
              <li>
                <a href="#routine" className="hover:text-[#B85C38] transition-colors">
                  Academic Routine
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B85C38] transition-colors">
                  About APEX &amp; Faculty
                </a>
              </li>
              <li>
                <a href="#why-apex" className="hover:text-[#B85C38] transition-colors">
                  Why Choose APEX?
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#B85C38] transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B85C38] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#F7F0E3] font-heading">
              Center Details
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#E8D8BD]">
                <MapPin className="w-5 h-5 text-[#B85C38] flex-shrink-0 mt-0.5" />
                <span className="text-[#F7F0E3] font-medium">
                  Medway Hospital Near, Pillayampettai, Kumbakonam
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#E8D8BD]">
                <Phone className="w-5 h-5 text-[#C59B4A] flex-shrink-0" />
                <a href="tel:6382256206" className="text-base font-bold text-[#F7F0E3] hover:text-[#B85C38] transition-colors">
                  6382256206
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#E8D8BD]">
                <Clock className="w-5 h-5 text-[#8A9A78] flex-shrink-0" />
                <span className="text-[#F7F0E3] font-medium">5:00 PM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:6382256206"
                className="w-full py-2.5 px-4 text-xs font-bold text-[#F7F0E3] bg-[#B85C38] hover:bg-[#91452F] rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F7F0E3]" />
                Call 6382256206 to Enroll
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D8BD]">
          <p>© 2026 APEX Tuition Center. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#E8D8BD] hover:text-[#B85C38] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

