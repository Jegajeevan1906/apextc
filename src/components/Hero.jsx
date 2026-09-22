import React from 'react';
import { GraduationCap, Phone, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import ApexAnimatedBanner from './ApexAnimatedBanner';

export default function Hero() {
  return (
    <section id="home" className="section-hero relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Marketing Info & Pricing */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#FFD6B8] backdrop-blur-md border border-[#F8B878] rounded-full px-4 py-1.5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F26B5E] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F26B5E]">
                Excellence in Tutoring • Kumbakonam
              </span>
              <span className="text-[#F8B878]">|</span>
              <span className="text-xs font-bold text-[#593B57]">Standard 1st - 10th &amp; +1, +2</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#593B57] leading-[1.1]">
                APEX <span className="text-[#F26B5E]">TUITION CENTER</span>
              </h1>
              <p className="font-handwriting text-3xl sm:text-4xl text-[#F28C38] mt-2 tracking-wide font-bold">
                “Reach Beyond the <span className="underline decoration-wavy decoration-[#F6C945]">Stars</span>”
              </p>
            </div>

            {/* Description */}
            <p className="text-[#593B57] text-base sm:text-lg leading-relaxed font-semibold max-w-xl">
              Building strong foundations, developing confident learners, and guiding students towards academic excellence through disciplined practice, mandatory daily assessments, and personalized mentoring.
            </p>

            {/* Unbeatable Fee Card */}
            <div className="rounded-2xl p-5 border border-[#F8B878] max-w-lg shadow-xs bg-[#FFD6B8]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F26B5E] flex items-center justify-center text-[#FFF0D5] shadow-md flex-shrink-0 font-bold">
                    <Star className="w-7 h-7 fill-[#F6C945] text-[#F6C945]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F26B5E] bg-[#F26B5E]/15 border border-[#F26B5E]/30 px-2.5 py-0.5 rounded-md">
                      Unbeatable Value
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-extrabold text-[#593B57]">₹500</span>
                      <span className="text-sm font-extrabold text-[#8064A2]">/ MONTH</span>
                    </div>
                  </div>
                </div>
                <div className="sm:border-l sm:border-[#F8B878] sm:pl-5 text-xs text-[#593B57] space-y-1">
                  <p className="font-bold text-[#593B57]">Complete Support</p>
                  <p className="font-semibold">• Daily Tests • Handwriting • Guidance</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#join"
                className="px-7 py-3.5 rounded-2xl bg-[#F26B5E] hover:bg-[#D9574D] text-[#FFF0D5] font-bold text-base shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-[#FFF0D5]" />
                <span>Join APEX</span>
                <ArrowRight className="w-4 h-4 text-[#FFF0D5]" />
              </a>

              <a
                href="tel:6382256206"
                className="px-7 py-3.5 rounded-2xl bg-[#F6C945] hover:bg-[#E0B335] border-1.5 border-[#F6C945] text-[#593B57] font-bold text-base shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#593B57]" />
                <span>Contact Us</span>
              </a>

              <div className="text-xs font-bold text-[#593B57]">
                Direct Call: <a href="tel:6382256206" className="text-[#F26B5E] underline font-extrabold">6382256206</a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-bold text-[#593B57]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8064A2]" />
                <span>Mandatory Daily Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8064A2]" />
                <span>Saturday Weekly Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8064A2]" />
                <span>Handwriting Improvement</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Animated Emblem Banner Canvas Component */}
          <div className="lg:col-span-6 relative">
            <ApexAnimatedBanner />
          </div>

        </div>
      </div>
    </section>
  );
}

