import React from 'react';
import { Sparkles, CheckCircle2, Quote, Award, BookOpen } from 'lucide-react';

export default function About() {
  const points = [
    'Classes for 1st to 10th – All Subjects',
    '+1 & +2 – Mathematics Coaching',
    'Mandatory daily revision tests',
    'Saturday weekly comprehensive tests',
    'Handwriting practice for neatness & presentation',
    'Flexible Sunday class updates based on situation & portions',
    'Regular evening batches from 5:00 PM to 9:00 PM',
    'Affordable quality education at ₹500 per month',
  ];

  return (
    <section id="about" className="section-about py-20 relative overflow-hidden">
      {/* Background Decorative Soft Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#F26B5E]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F6C945]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Reserved Educator Image Area with Academic Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">

              {/* Outer Soft Sand Border Frame */}
              <div className="relative p-3 rounded-3xl bg-[#FFD6B8] border border-[#F8B878] shadow-xs">

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FFF0D5] aspect-[3/4] shadow-inner border border-[#F8B878]">
                  <img
                    src="/apex-educator.jpg"
                    alt="Academic Frame - Faculty of Mathematics"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Corner Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F26B5E] pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F26B5E] pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F26B5E] pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F26B5E] pointer-events-none"></div>
                </div>

                {/* Faculty Credential Tag */}
                <div className="mt-4 pb-2 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F26B5E]/15 border border-[#F26B5E]/30 mb-2">
                    <Award className="w-3.5 h-3.5 text-[#F26B5E]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F26B5E]">
                      Tutor &amp; Academic Mentor
                    </span>
                  </div>

                  {/* Name Display */}
                  <h3 className="text-2xl font-black text-[#593B57] font-heading tracking-tight">
                    KEERTHANA M.Sc MATHS
                  </h3>

                  <p className="text-xs font-bold text-[#593B57] mt-0.5">
                    Postgraduate in Mathematics • Dedicated Tutoring
                  </p>
                </div>

              </div>

              {/* Floating Academic Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#FFF0D5] rounded-2xl px-4 py-2.5 shadow-xs border border-[#F8B878] flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#F26B5E]" />
                <span className="text-xs font-bold text-[#593B57]">
                  Concept Mastery &amp; Problem Solving
                </span>
              </div>

            </div>
          </div>

          {/* Right Side: About APEX Story & Quotes */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD6B8] border border-[#F8B878] mb-3 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#F26B5E]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F26B5E]">
                About Our Academy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#593B57] tracking-tight font-heading mb-5">
              About <span className="text-[#F26B5E]">APEX</span>
            </h2>

            <p className="text-base sm:text-lg text-[#593B57] font-semibold leading-relaxed mb-6">
              APEX Tuition Center is committed to creating a focused and disciplined learning environment where students can strengthen their academic foundations, practise consistently and build confidence in their studies.
            </p>

            {/* Academic Offering Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-[#FFF0D5] p-2.5 rounded-xl border border-[#F8B878] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#8064A2] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-[#593B57] leading-snug">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* PROMINENT QUOTE CALLOUTS */}
            <div className="w-full space-y-4">

              {/* Quote 1 */}
              <div className="relative bg-[#FFD6B8] rounded-2xl p-5 border-l-4 border-l-[#F26B5E] border-y border-r border-[#F8B878] shadow-xs">
                <Quote className="w-6 h-6 text-[#F26B5E]/30 absolute top-3 right-3 pointer-events-none" />
                <p className="text-base sm:text-lg font-serif italic font-bold text-[#593B57] leading-relaxed">
                  “Small steps in learning today create great achievements tomorrow.”
                </p>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F26B5E] mt-2 block">
                  APEX Philosophy
                </span>
              </div>

              {/* Quote 2 */}
              <div className="relative bg-[#FFF4CC] rounded-2xl p-5 border-l-4 border-l-[#F6C945] border-y border-r border-[#F6C945] shadow-xs">
                <Quote className="w-6 h-6 text-[#F6C945]/40 absolute top-3 right-3 pointer-events-none" />
                <p className="text-base sm:text-lg font-serif italic font-bold text-[#593B57] leading-relaxed">
                  “Learn with discipline. Practice with consistency. Reach beyond the stars.”
                </p>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F28C38] mt-2 block">
                  APEX Guiding Principle
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

