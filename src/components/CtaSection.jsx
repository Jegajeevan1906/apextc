import React from 'react';
import { Sparkles, GraduationCap, Phone, Clock, BadgePercent, Star, ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="section-contact py-20 relative overflow-hidden">
      <div id="join" className="absolute top-0"></div>
      {/* Subtle floating stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 text-[#F6C945]/60 animate-star-glow">
          <Star className="w-5 h-5 fill-[#F6C945]" />
        </div>
        <div className="absolute bottom-16 right-12 text-[#F26B5E]/60 animate-star-glow" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-[#F6C945]/50 animate-star-glow" style={{ animationDelay: '2s' }}>
          <Star className="w-4 h-4 fill-[#F6C945]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#593B57] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#F26B5E]/40 shadow-xl text-center relative overflow-hidden text-[#FFF0D5]">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F26B5E]/20 border border-[#F26B5E]/50 mb-6">
            <Sparkles className="w-4 h-4 text-[#F6C945] animate-star-glow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFF0D5]">
              Admissions Open • Enroll Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF0D5] tracking-tight font-heading mb-4">
            Ready to <span className="text-[#F6C945]">Reach Beyond</span> the <span className="text-[#FFD6B8] font-serif italic">Stars?</span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-[#FFD6B8] font-semibold leading-relaxed max-w-2xl mx-auto mb-10">
            “Give your learning journey a strong foundation with APEX Tuition Center.”
          </p>

          {/* 3 Prominent Highlights: Fee, Timing, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">

            {/* Fee Card */}
            <div className="bg-[#FFF0D5] rounded-2xl p-5 border border-[#F8B878] shadow-md transform hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFD6B8] text-[#F26B5E] border border-[#F8B878] flex items-center justify-center mx-auto mb-2.5">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8064A2] block mb-0.5">
                Course Fee
              </span>
              <span className="text-xl font-black text-[#593B57] font-heading block">
                ₹500 <span className="text-sm text-[#F26B5E] font-bold">/ Month</span>
              </span>
            </div>

            {/* Timings Card */}
            <div className="bg-[#FFF0D5] rounded-2xl p-5 border border-[#F8B878] shadow-md transform hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFD6B8] text-[#F28C38] border border-[#F8B878] flex items-center justify-center mx-auto mb-2.5">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8064A2] block mb-0.5">
                Tuition Timings
              </span>
              <span className="text-xl font-black text-[#593B57] font-heading block">
                5:00 PM – 9:00 PM
              </span>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-[#FFF0D5] rounded-2xl p-5 border border-[#F8B878] shadow-md transform hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FFD6B8] text-[#F26B5E] border border-[#F8B878] flex items-center justify-center mx-auto mb-2.5">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8064A2] block mb-0.5">
                Direct Contact
              </span>
              <a
                href="tel:6382256206"
                className="text-xl font-black text-[#F26B5E] font-heading hover:text-[#D9574D] transition-colors block"
              >
                6382256206
              </a>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6382256206"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-[#FFF0D5] bg-[#F26B5E] hover:bg-[#D9574D] rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
            >
              <GraduationCap className="w-5 h-5 text-[#FFF0D5]" />
              <span>Call to Enroll (6382256206)</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFF0D5]" />
            </a>

            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-[#593B57] bg-[#F6C945] hover:bg-[#E0B335] border border-[#F6C945] rounded-xl shadow-xs transition-all duration-300 gap-2"
            >
              <span>View Center Location</span>
            </a>
          </div>

          <p className="text-xs text-[#FFD6B8] font-bold mt-6">
            Medway Hospital Near, Pillayampettai, Kumbakonam
          </p>

        </div>
      </div>
    </section>
  );
}

