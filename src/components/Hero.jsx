import React from 'react';
import { Sparkles, GraduationCap, Phone, CheckCircle2, BookOpen, Calculator, ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/50 via-[#FAF9F5] to-[#FAF9F5]">
      {/* Decorative Celestial Sky Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-12 left-10 w-72 h-72 bg-sky-200/35 rounded-full blur-3xl"></div>
        <div className="absolute top-4 right-12 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/3 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Floating subtle celestial symbols */}
      <div className="absolute top-24 left-8 text-amber-400/60 animate-star-glow pointer-events-none hidden lg:block">
        <Star className="w-5 h-5 fill-amber-300" />
      </div>
      <div className="absolute top-36 right-16 text-sky-400/50 animate-star-glow pointer-events-none hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-blue-300/40 pointer-events-none font-serif text-2xl hidden md:block select-none animate-float-slow">
        ∫ f(x)dx
      </div>
      <div className="absolute top-48 right-1/4 text-amber-500/30 pointer-events-none font-serif text-2xl hidden md:block select-none animate-float-reverse">
        ∑ n=1
      </div>
      <div className="absolute top-64 left-16 text-indigo-400/30 pointer-events-none font-serif text-xl hidden lg:block select-none">
        π ≈ 3.14159
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Tagline & Fee Spotlight */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Academic Credential Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-xs mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Excellence in Tutoring • Kumbakonam
              </span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs font-medium text-slate-600">Standard 1st - 10th &amp; +1, +2</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-3">
              APEX <span className="text-royal-gradient">TUITION</span> CENTER
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-slate-800 font-bold mb-5 leading-snug">
              “Reach Beyond the <span className="text-gold-gradient relative inline-block underline decoration-amber-300/50 decoration-wavy decoration-2">Stars</span>”
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-650 font-normal leading-relaxed max-w-2xl mb-8">
              Building strong foundations, developing confident learners, and guiding students towards academic excellence through disciplined practice, mandatory daily assessments, and personalized mentoring.
            </p>

            {/* FLOATING CLOUD / ACADEMIC GLASS CARD: COURSE FEE HIGHLIGHT */}
            <div className="w-full max-w-lg mb-8 relative group">
              {/* Soft glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/40 via-sky-300/30 to-blue-400/30 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative glass-panel-gold rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-amber-100 animate-star-glow" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          Unbeatable Value
                        </span>
                        <span className="text-xs font-semibold text-slate-500">Course Fee</span>
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                          ₹500
                        </span>
                        <span className="text-sm font-bold text-slate-600">/ MONTH</span>
                        <span className="text-xs font-medium text-slate-400 ml-1">(₹500/- PM)</span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:border-l sm:border-amber-200/80 sm:pl-4 flex flex-col justify-center">
                    <span className="text-xs font-bold text-slate-800">Complete Support</span>
                    <span className="text-[11px] text-slate-500">Daily Tests • Handwriting • Guidance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-royal-gradient rounded-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 gap-2.5"
              >
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <span>Join APEX</span>
                <ArrowUpRight className="w-4 h-4 text-white/80" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Contact Us</span>
              </a>

              <a
                href="tel:6382256206"
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4 ml-1 hidden sm:inline-block"
              >
                Direct Call: 6382256206
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Mandatory Daily Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Saturday Weekly Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Handwriting Improvement</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Illustration & Floating Academic Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/50 via-sky-100/40 to-amber-100/50 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Main Illustration Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-white/90 p-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/apex-hero.jpg"
                    alt="APEX Tuition Center - Reach Beyond the Stars Academic Concept"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-between text-xs">
                    <span className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Academic Excellence
                    </span>
                    <span className="text-slate-200 text-[11px]">Kumbakonam</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 1st - 10th All Subjects */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-panel rounded-2xl p-3 shadow-lg border border-white/80 animate-float-slow hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">1st – 10th Std</div>
                  <div className="text-[11px] font-medium text-slate-500">All Subjects</div>
                </div>
              </div>

              {/* Floating Badge 2: Higher Secondary Mathematics */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 glass-panel rounded-2xl p-3 shadow-lg border border-white/80 animate-float-reverse hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">+1 &amp; +2 Higher Sec</div>
                  <div className="text-[11px] font-medium text-slate-500">Mathematics Only</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
