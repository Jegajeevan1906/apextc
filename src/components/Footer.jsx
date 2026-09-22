import React from 'react';
import { MapPin, Phone, Clock, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3EEE8] text-[#6E625F] pt-16 pb-12 border-t border-[#E6DED5] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E6DED5]">

          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Apex.png"
                alt="APEX Tuition Center Logo"
                className="w-10 h-10 rounded-xl object-contain shadow-xs border border-[#E6DED5] p-0.5 bg-[#FBF9F5]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#261C1A] font-heading">
                  APEX
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C86D51] uppercase -mt-1">
                  Tuition Center
                </span>
              </div>
            </div>

            <p className="text-xl font-serif italic text-[#D99B4B] font-bold">
              “Reach Beyond the Stars”
            </p>

            <p className="text-sm text-[#6E625F] leading-relaxed max-w-sm">
              Providing focused learning, consistent practice, mandatory daily tests, and personal academic guidance for students in Kumbakonam.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FBF9F5] border border-[#E6DED5] text-xs font-semibold text-[#261C1A]">
              <span>Course Fee: ₹500 / Month</span>
              <span className="text-[#E6DED5]">•</span>
              <span>1st - 10th &amp; +1, +2 Maths</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#261C1A] font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-[#C86D51] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C86D51] transition-colors">
                  Services (What We Provide)
                </a>
              </li>
              <li>
                <a href="#routine" className="hover:text-[#C86D51] transition-colors">
                  Academic Routine
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C86D51] transition-colors">
                  About APEX &amp; Faculty
                </a>
              </li>
              <li>
                <a href="#why-apex" className="hover:text-[#C86D51] transition-colors">
                  Why Choose APEX?
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C86D51] transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C86D51] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#261C1A] font-heading">
              Center Details
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#6E625F]">
                <MapPin className="w-5 h-5 text-[#C86D51] flex-shrink-0 mt-0.5" />
                <span className="text-[#261C1A] font-medium">
                  Medway Hospital Near, Pillayampettai, Kumbakonam
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#6E625F]">
                <Phone className="w-5 h-5 text-[#D99B4B] flex-shrink-0" />
                <a href="tel:6382256206" className="text-base font-bold text-[#261C1A] hover:text-[#C86D51] transition-colors">
                  6382256206
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#6E625F]">
                <Clock className="w-5 h-5 text-[#6E625F] flex-shrink-0" />
                <span className="text-[#261C1A] font-medium">5:00 PM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:6382256206"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#C86D51] hover:bg-[#B65C40] rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                Call 6382256206 to Enroll
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E625F]">
          <p>© 2026 APEX Tuition Center. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#6E625F] hover:text-[#C86D51] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

