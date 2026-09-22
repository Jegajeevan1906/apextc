import React from 'react';
import { GraduationCap, Phone, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import ApexAnimatedBanner from './ApexAnimatedBanner';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Marketing Info & Pricing */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#F3EEE8] backdrop-blur-md border border-[#E6DED5] rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51]">
                Excellence in Tutoring • Kumbakonam
              </span>
              <span className="text-[#E6DED5]">|</span>
              <span className="text-xs font-medium text-[#6E625F]">Standard 1st - 10th &amp; +1, +2</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#261C1A] leading-[1.1]">
                APEX <span className="text-[#C86D51]">TUITION CENTER</span>
              </h1>
              <p className="font-handwriting text-3xl sm:text-4xl text-[#D99B4B] mt-2 tracking-wide font-bold">
                “Reach Beyond the <span className="underline decoration-wavy decoration-[#D99B4B]">Stars</span>”
              </p>
            </div>

            {/* Description */}
            <p className="text-[#6E625F] text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Building strong foundations, developing confident learners, and guiding students towards academic excellence through disciplined practice, mandatory daily assessments, and personalized mentoring.
            </p>

            {/* Unbeatable Fee Card */}
            <div className="rounded-2xl p-5 border border-[#E6DED5] max-w-lg shadow-md bg-[#F3EEE8]/90 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C86D51] to-[#B65C40] flex items-center justify-center text-white shadow-md flex-shrink-0 font-bold">
                    <Star className="w-7 h-7 fill-white text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C86D51] bg-[#C86D51]/15 border border-[#C86D51]/30 px-2.5 py-0.5 rounded-md">
                      Unbeatable Value
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-extrabold text-[#261C1A]">₹500</span>
                      <span className="text-sm font-semibold text-[#6E625F]">/ MONTH</span>
                    </div>
                  </div>
                </div>
                <div className="sm:border-l sm:border-[#E6DED5] sm:pl-5 text-xs text-[#6E625F] space-y-1">
                  <p className="font-bold text-[#261C1A]">Complete Support</p>
                  <p>• Daily Tests • Handwriting • Guidance</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#join"
                className="px-7 py-3.5 rounded-2xl bg-[#C86D51] hover:bg-[#B65C40] text-white font-bold text-base shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>Join APEX</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="tel:6382256206"
                className="px-7 py-3.5 rounded-2xl bg-[#F3EEE8] hover:bg-[#EBDDD0] border border-[#E6DED5] text-[#261C1A] font-bold text-base shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-[#C86D51]" />
                <span>Contact Us</span>
              </a>

              <div className="text-xs font-semibold text-[#6E625F]">
                Direct Call: <a href="tel:6382256206" className="text-[#C86D51] underline font-bold">6382256206</a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-[#6E625F]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C86D51]" />
                <span>Mandatory Daily Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C86D51]" />
                <span>Saturday Weekly Tests</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C86D51]" />
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

