import React from 'react';
import { Sparkles, MapPin, Phone, Clock, GraduationCap, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-royal-gradient flex items-center justify-center text-amber-300 shadow-md border border-blue-400/30">
                <Sparkles className="w-5 h-5 animate-star-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-heading">
                  APEX
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase -mt-1">
                  Tuition Center
                </span>
              </div>
            </div>

            <p className="text-xl font-serif italic text-amber-300 font-bold">
              “Reach Beyond the Stars”
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing focused learning, consistent practice, mandatory daily tests, and personal academic guidance for students in Kumbakonam.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-300">
              <span>Course Fee: ₹500 / Month</span>
              <span className="text-slate-500">•</span>
              <span>1st - 10th &amp; +1, +2 Maths</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Services (What We Provide)
                </a>
              </li>
              <li>
                <a href="#routine" className="hover:text-amber-300 transition-colors">
                  Academic Routine
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About APEX &amp; Faculty
                </a>
              </li>
              <li>
                <a href="#why-apex" className="hover:text-amber-300 transition-colors">
                  Why Choose APEX?
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 font-heading">
              Center Details
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  Medway Hospital Near, Pillayampettail, Kumbakonam
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:6382256206" className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                  6382256206
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span>5:00 PM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:6382256206"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-royal-gradient rounded-xl shadow hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                Call 6382256206 to Enroll
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 APEX Tuition Center. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
