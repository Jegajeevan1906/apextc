import React from 'react';
import { Sparkles, GraduationCap, Phone, Clock, BadgePercent, Star, ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div id="join" className="absolute top-0"></div>
      {/* Subtle floating stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 text-[#C59B4A]/40 animate-star-glow">
          <Star className="w-5 h-5 fill-[#C59B4A]" />
        </div>
        <div className="absolute bottom-16 right-12 text-[#B85C38]/50 animate-star-glow" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-[#C59B4A]/30 animate-star-glow" style={{ animationDelay: '2s' }}>
          <Star className="w-4 h-4 fill-[#C59B4A]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#493447] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#B85C38]/40 shadow-xl text-center relative overflow-hidden text-[#F7F0E3]">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B85C38]/20 border border-[#B85C38]/40 mb-6">
            <Sparkles className="w-4 h-4 text-[#C59B4A] animate-star-glow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8D8BD]">
              Admissions Open • Enroll Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F7F0E3] tracking-tight font-heading mb-4">
            Ready to <span className="text-[#E8D8BD]">Reach Beyond</span> the <span className="text-[#C59B4A] font-serif italic">Stars?</span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-[#E8D8BD] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            “Give your learning journey a strong foundation with APEX Tuition Center.”
          </p>

          {/* 3 Prominent Highlights: Fee, Timing, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">

            {/* Fee Card */}
            <div className="bg-[#3B302A]/80 rounded-2xl p-4 border border-[#E8D8BD]/30 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#B85C38]/20 text-[#B85C38] border border-[#B85C38]/40 flex items-center justify-center mx-auto mb-2">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D8BD] block">
                Course Fee
              </span>
              <span className="text-xl font-black text-[#F7F0E3] font-heading">
                ₹500 / Month
              </span>
            </div>

            {/* Timings Card */}
            <div className="bg-[#3B302A]/80 rounded-2xl p-4 border border-[#E8D8BD]/30 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#C59B4A]/20 text-[#C59B4A] border border-[#C59B4A]/40 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D8BD] block">
                Tuition Timings
              </span>
              <span className="text-xl font-black text-[#F7F0E3] font-heading">
                5:00 PM – 9:00 PM
              </span>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-[#3B302A]/80 rounded-2xl p-4 border border-[#E8D8BD]/30 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#B85C38]/20 text-[#B85C38] border border-[#B85C38]/40 flex items-center justify-center mx-auto mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8D8BD] block">
                Direct Contact
              </span>
              <a
                href="tel:6382256206"
                className="text-xl font-black text-[#F7F0E3] font-heading hover:text-[#C59B4A] transition-colors"
              >
                6382256206
              </a>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6382256206"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#F7F0E3] bg-[#B85C38] hover:bg-[#91452F] rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
            >
              <GraduationCap className="w-5 h-5 text-[#F7F0E3]" />
              <span>Call to Enroll (6382256206)</span>
              <ArrowUpRight className="w-4 h-4 text-[#F7F0E3]" />
            </a>

            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#3B302A] bg-[#F7F0E3] hover:bg-[#E8D8BD] border border-[#F7F0E3] rounded-xl shadow-xs transition-all duration-300 gap-2"
            >
              <span>View Center Location</span>
            </a>
          </div>

          <p className="text-xs text-[#E8D8BD] font-medium mt-6">
            Medway Hospital Near, Pillayampettai, Kumbakonam
          </p>

        </div>
      </div>
    </section>
  );
}

