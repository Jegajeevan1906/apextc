import React from 'react';
import { Sparkles, CheckCircle2, Quote, Award, BookOpen, Clock, HeartHandshake } from 'lucide-react';

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
    <section id="about" className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Reserved Educator Image Area with Academic Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Golden/Royal Border Frame */}
              <div className="relative p-3 rounded-3xl bg-gradient-to-b from-amber-200/70 via-white to-blue-200/70 shadow-2xl border border-white">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[3/4] shadow-inner">
                  <img
                    src="/apex-educator.jpg"
                    alt="Academic Frame - Faculty of Mathematics"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Subtle Corner Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-500 pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-500 pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-500 pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-500 pointer-events-none"></div>
                </div>

                {/* Faculty Credential Tag */}
                <div className="mt-4 pb-2 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-2">
                    <Award className="w-3.5 h-3.5 text-blue-700" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-900">
                      Tutor &amp; Academic Mentor
                    </span>
                  </div>
                  
                  {/* Name Display - exact prompt requirement */}
                  <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">
                    Keerthana M.Sc MATHS
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Postgraduate in Mathematics • Dedicated Tutoring
                  </p>
                </div>

              </div>

              {/* Floating Academic Badge */}
              <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-4 py-2.5 shadow-lg border border-amber-200/80 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-800">
                  Concept Mastery &amp; Problem Solving
                </span>
              </div>

            </div>
          </div>

          {/* Right Side: About APEX Story & Quotes */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-900">
                About Our Academy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-5">
              About <span className="text-royal-gradient">APEX</span>
            </h2>

            {/* Suggested description from prompt */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6">
              APEX Tuition Center is committed to creating a focused and disciplined learning environment where students can strengthen their academic foundations, practise consistently and build confidence in their studies.
            </p>

            {/* Academic Offering Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* PROMINENT QUOTE CALLOUTS (Prompt Requirements) */}
            <div className="w-full space-y-4">
              
              {/* Quote 1 */}
              <div className="relative glass-panel rounded-2xl p-5 border-l-4 border-l-amber-500 shadow-xs">
                <Quote className="w-6 h-6 text-amber-500/40 absolute top-3 right-3 pointer-events-none" />
                <p className="text-base sm:text-lg font-serif italic font-bold text-slate-900 leading-relaxed">
                  “Small steps in learning today create great achievements tomorrow.”
                </p>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 mt-2 block">
                  APEX Philosophy
                </span>
              </div>

              {/* Quote 2 */}
              <div className="relative glass-panel rounded-2xl p-5 border-l-4 border-l-blue-600 shadow-xs">
                <Quote className="w-6 h-6 text-blue-500/40 absolute top-3 right-3 pointer-events-none" />
                <p className="text-base sm:text-lg font-serif italic font-bold text-slate-900 leading-relaxed">
                  “Learn with discipline. Practice with consistency. Reach beyond the stars.”
                </p>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-800 mt-2 block">
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
