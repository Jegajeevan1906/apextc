import React from 'react';
import { BadgePercent, Repeat, TrendingUp, Calculator, PenTool, Users, Sparkles, Check } from 'lucide-react';

export default function WhyApex() {
  const reasons = [
    {
      title: 'Affordable Learning',
      description: 'Quality tuition at only ₹500/month making high-standard academic guidance accessible to every motivated learner.',
      icon: BadgePercent,
      tag: '₹500 / Month',
      color: 'bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 group-hover:bg-[#C86D51] group-hover:text-white',
      border: 'hover:border-[#C86D51]/50',
    },
    {
      title: 'Consistent Practice',
      description: 'Daily tests and regular practice help students stay academically prepared, eliminating exam fear and last-minute cramming.',
      icon: Repeat,
      tag: 'Daily Mandatory Test',
      color: 'bg-[#D99B4B]/15 text-[#B87A2D] border border-[#D99B4B]/30 group-hover:bg-[#D99B4B] group-hover:text-white',
      border: 'hover:border-[#D99B4B]/50',
    },
    {
      title: 'Weekly Assessment',
      description: 'Saturday weekly tests help rigorously track student progress, address doubts, and systematically identify areas to improve.',
      icon: TrendingUp,
      tag: 'Saturday Evaluation',
      color: 'bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 group-hover:bg-[#C86D51] group-hover:text-white',
      border: 'hover:border-[#C86D51]/50',
    },
    {
      title: 'Focused Mathematics Coaching',
      description: 'Dedicated Mathematics support for +1 and +2 students with thorough concept explanations and step-by-step problem derivations.',
      icon: Calculator,
      tag: '+1 & +2 Specialist',
      color: 'bg-[#D99B4B]/15 text-[#B87A2D] border border-[#D99B4B]/30 group-hover:bg-[#D99B4B] group-hover:text-white',
      border: 'hover:border-[#D99B4B]/50',
    },
    {
      title: 'Better Writing Skills',
      description: 'Regular handwriting practice improves neatness, legibility, and organized answer sheet presentation to score maximum marks.',
      icon: PenTool,
      tag: 'Handwriting Drills',
      color: 'bg-[#6E625F]/15 text-[#261C1A] border border-[#6E625F]/30 group-hover:bg-[#6E625F] group-hover:text-white',
      border: 'hover:border-[#6E625F]/50',
    },
    {
      title: 'Student-Focused Learning',
      description: 'A structured learning environment designed to nurture each student individually and help them improve step by step with confidence.',
      icon: Users,
      tag: 'Step-by-Step Mentorship',
      color: 'bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 group-hover:bg-[#C86D51] group-hover:text-white',
      border: 'hover:border-[#C86D51]/50',
    },
  ];

  return (
    <section id="why-apex" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE8] border border-[#E6DED5] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C86D51]">
              The APEX Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#261C1A] tracking-tight font-heading mb-4">
            Why Choose APEX?
          </h2>
          <p className="text-base sm:text-lg text-[#6E625F] font-normal leading-relaxed">
            Delivering disciplined guidance, systematic practice, and personal attention for every student.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-[#F3EEE8]/90 backdrop-blur-md rounded-2xl p-7 border border-[#E6DED5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${reason.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${reason.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#261C1A] bg-[#FBF9F5] px-2.5 py-1 rounded-full border border-[#E6DED5]">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#261C1A] mb-2 font-heading group-hover:text-[#C86D51] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#6E625F] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E6DED5] flex items-center gap-1.5 text-xs font-semibold text-[#C86D51]">
                  <Check className="w-4 h-4 text-[#C86D51]" />
                  <span>Standard at APEX</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

