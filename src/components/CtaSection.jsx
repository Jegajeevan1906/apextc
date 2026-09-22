import React from 'react';
import { Sparkles, GraduationCap, Phone, Clock, BadgePercent, Star, ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div id="join" className="absolute top-0"></div>
      {/* Subtle floating stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 text-[#C86D51]/40 animate-star-glow">
          <Star className="w-5 h-5 fill-[#C86D51]" />
        </div>
        <div className="absolute bottom-16 right-12 text-[#D99B4B]/50 animate-star-glow" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-[#C86D51]/30 animate-star-glow" style={{ animationDelay: '2s' }}>
          <Star className="w-4 h-4 fill-[#D99B4B]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#F3EEE8]/95 rounded-3xl p-8 sm:p-12 md:p-14 border border-[#E6DED5] shadow-xl text-center relative overflow-hidden backdrop-blur-md">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/15 border border-[#C86D51]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#C86D51] animate-star-glow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C86D51]">
              Admissions Open • Enroll Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#261C1A] tracking-tight font-heading mb-4">
            Ready to <span className="text-[#C86D51]">Reach Beyond</span> the <span className="text-[#D99B4B] font-serif italic">Stars?</span>
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-[#6E625F] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            “Give your learning journey a strong foundation with APEX Tuition Center.”
          </p>

          {/* 3 Prominent Highlights: Fee, Timing, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">

            {/* Fee Card */}
            <div className="bg-[#FBF9F5] rounded-2xl p-4 border border-[#E6DED5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 flex items-center justify-center mx-auto mb-2">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E625F] block">
                Course Fee
              </span>
              <span className="text-xl font-black text-[#261C1A] font-heading">
                ₹500 / Month
              </span>
            </div>

            {/* Timings Card */}
            <div className="bg-[#FBF9F5] rounded-2xl p-4 border border-[#E6DED5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#D99B4B]/15 text-[#B87A2D] border border-[#D99B4B]/30 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E625F] block">
                Tuition Timings
              </span>
              <span className="text-xl font-black text-[#261C1A] font-heading">
                5:00 PM – 9:00 PM
              </span>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-[#FBF9F5] rounded-2xl p-4 border border-[#E6DED5] shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 flex items-center justify-center mx-auto mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E625F] block">
                Direct Contact
              </span>
              <a
                href="tel:6382256206"
                className="text-xl font-black text-[#261C1A] font-heading hover:text-[#C86D51] transition-colors"
              >
                6382256206
              </a>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6382256206"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#C86D51] hover:bg-[#B65C40] rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
            >
              <GraduationCap className="w-5 h-5 text-white" />
              <span>Call to Enroll (6382256206)</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#261C1A] bg-[#FBF9F5] hover:bg-[#EBDDD0] border border-[#E6DED5] rounded-xl shadow-xs transition-all duration-300 gap-2"
            >
              <span>View Center Location</span>
            </a>
          </div>

          <p className="text-xs text-[#6E625F] font-medium mt-6">
            Medway Hospital Near, Pillayampettai, Kumbakonam
          </p>

        </div>
      </div>
    </section>
  );
}

