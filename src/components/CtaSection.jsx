import React from 'react';
import { Sparkles, GraduationCap, Phone, Clock, BadgePercent, Star, ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-sky-50 to-blue-50/70">
      {/* Subtle floating stars and clouds background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 text-amber-400/50 animate-star-glow">
          <Star className="w-5 h-5 fill-amber-300" />
        </div>
        <div className="absolute bottom-16 right-12 text-sky-400/60 animate-star-glow" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-amber-300/40 animate-star-glow" style={{ animationDelay: '2s' }}>
          <Star className="w-4 h-4 fill-amber-200" />
        </div>
        {/* Soft celestial clouds */}
        <div className="absolute -top-12 right-0 w-96 h-96 bg-white/60 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 left-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 md:p-14 border border-amber-200/80 shadow-2xl text-center relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/70 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 animate-star-glow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900">
              Admissions Open • Enroll Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Ready to <span className="text-royal-gradient">Reach Beyond</span> the <span className="text-gold-gradient font-serif italic">Stars?</span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-slate-650 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            “Give your learning journey a strong foundation with APEX Tuition Center.”
          </p>

          {/* 3 Prominent Highlights: Fee, Timing, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            
            {/* Fee Card */}
            <div className="bg-white/90 rounded-2xl p-4 border border-amber-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Course Fee
              </span>
              <span className="text-xl font-black text-slate-900 font-heading">
                ₹500 / Month
              </span>
            </div>

            {/* Timings Card */}
            <div className="bg-white/90 rounded-2xl p-4 border border-blue-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Tuition Timings
              </span>
              <span className="text-xl font-black text-slate-900 font-heading">
                5:00 PM – 9:00 PM
              </span>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-white/90 rounded-2xl p-4 border border-emerald-200 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Direct Contact
              </span>
              <a
                href="tel:6382256206"
                className="text-xl font-black text-slate-900 font-heading hover:text-blue-700 transition-colors"
              >
                6382256206
              </a>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6382256206"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-royal-gradient rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
            >
              <GraduationCap className="w-5 h-5 text-amber-300" />
              <span>Call to Enroll (6382256206)</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </a>

            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-850 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-all duration-300 gap-2"
            >
              <span>View Center Location</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 font-medium mt-6">
            Medway Hospital Near, Pillayampettail, Kumbakonam
          </p>

        </div>
      </div>
    </section>
  );
}
