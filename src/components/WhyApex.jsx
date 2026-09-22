import React from 'react';
import { BadgePercent, Repeat, TrendingUp, Calculator, PenTool, Users, Sparkles, Check } from 'lucide-react';

export default function WhyApex() {
  const reasons = [
    {
      title: 'Affordable Learning',
      description: 'Quality tuition at only ₹500/month making high-standard academic guidance accessible to every motivated learner.',
      icon: BadgePercent,
      tag: '₹500 / Month',
      cardBg: 'bg-[#FFD6B8]',
      cardBorder: 'border-[#F8B878]',
      color: 'bg-[#F26B5E] text-[#FFF0D5]',
    },
    {
      title: 'Consistent Practice',
      description: 'Daily tests and regular practice help students stay academically prepared, eliminating exam fear and last-minute cramming.',
      icon: Repeat,
      tag: 'Daily Mandatory Test',
      cardBg: 'bg-[#D7EEDB]',
      cardBorder: 'border-[#A8D5BA]',
      color: 'bg-[#8064A2] text-[#FFF0D5]',
    },
    {
      title: 'Weekly Assessment',
      description: 'Saturday weekly tests help rigorously track student progress, address doubts, and systematically identify areas to improve.',
      icon: TrendingUp,
      tag: 'Saturday Evaluation',
      cardBg: 'bg-[#C9B6E4]/40',
      cardBorder: 'border-[#C9B6E4]',
      color: 'bg-[#593B57] text-[#FFF0D5]',
    },
    {
      title: 'Focused Mathematics Coaching',
      description: 'Dedicated Mathematics support for +1 and +2 students with thorough concept explanations and step-by-step problem derivations.',
      icon: Calculator,
      tag: '+1 & +2 Specialist',
      cardBg: 'bg-[#FFF4CC]',
      cardBorder: 'border-[#F6C945]',
      color: 'bg-[#F28C38] text-[#FFF0D5]',
    },
    {
      title: 'Better Writing Skills',
      description: 'Regular handwriting practice improves neatness, legibility, and organized answer sheet presentation to score maximum marks.',
      icon: PenTool,
      tag: 'Handwriting Drills',
      cardBg: 'bg-[#FFD8D4]',
      cardBorder: 'border-[#F26B5E]',
      color: 'bg-[#F26B5E] text-[#FFF0D5]',
    },
    {
      title: 'Student-Focused Learning',
      description: 'A structured learning environment designed to nurture each student individually and help them improve step by step with confidence.',
      icon: Users,
      tag: 'Step-by-Step Mentorship',
      cardBg: 'bg-[rgba(248,184,120,0.35)]',
      cardBorder: 'border-[#F8B878]',
      color: 'bg-[#8064A2] text-[#FFF0D5]',
    },
  ];

  return (
    <section id="why-apex" className="section-why-apex py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D7EEDB] border border-[#A8D5BA] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8064A2]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8064A2]">
              The APEX Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#593B57] tracking-tight font-heading mb-4">
            Why Choose APEX?
          </h2>
          <p className="text-base sm:text-lg text-[#593B57] font-semibold leading-relaxed">
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
                className={`group relative ${reason.cardBg} rounded-2xl p-7 border ${reason.cardBorder} shadow-xs hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${reason.color} shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#593B57] bg-[#FFF0D5] px-2.5 py-1 rounded-full border border-[#F8B878]">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#593B57] mb-2 font-heading">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#593B57] font-semibold leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#593B57]/20 flex items-center gap-1.5 text-xs font-extrabold text-[#8064A2]">
                  <Check className="w-4 h-4 text-[#8064A2]" />
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

