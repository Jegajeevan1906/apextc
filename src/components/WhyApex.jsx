import React from 'react';
import { BadgePercent, Repeat, TrendingUp, Calculator, PenTool, Users, Sparkles, Check } from 'lucide-react';

export default function WhyApex() {
  const reasons = [
    {
      title: 'Affordable Learning',
      description: 'Quality tuition at only ₹500/month making high-standard academic guidance accessible to every motivated learner.',
      icon: BadgePercent,
      tag: '₹500 / Month',
      color: 'bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30 group-hover:bg-[#B85C38] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#B85C38]/50',
    },
    {
      title: 'Consistent Practice',
      description: 'Daily tests and regular practice help students stay academically prepared, eliminating exam fear and last-minute cramming.',
      icon: Repeat,
      tag: 'Daily Mandatory Test',
      color: 'bg-[#8A9A78]/15 text-[#6F795D] border border-[#8A9A78]/30 group-hover:bg-[#8A9A78] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#8A9A78]/50',
    },
    {
      title: 'Weekly Assessment',
      description: 'Saturday weekly tests help rigorously track student progress, address doubts, and systematically identify areas to improve.',
      icon: TrendingUp,
      tag: 'Saturday Evaluation',
      color: 'bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30 group-hover:bg-[#B85C38] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#B85C38]/50',
    },
    {
      title: 'Focused Mathematics Coaching',
      description: 'Dedicated Mathematics support for +1 and +2 students with thorough concept explanations and step-by-step problem derivations.',
      icon: Calculator,
      tag: '+1 & +2 Specialist',
      color: 'bg-[#8A9A78]/15 text-[#6F795D] border border-[#8A9A78]/30 group-hover:bg-[#8A9A78] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#8A9A78]/50',
    },
    {
      title: 'Better Writing Skills',
      description: 'Regular handwriting practice improves neatness, legibility, and organized answer sheet presentation to score maximum marks.',
      icon: PenTool,
      tag: 'Handwriting Drills',
      color: 'bg-[#493447]/15 text-[#493447] border border-[#493447]/30 group-hover:bg-[#493447] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#493447]/50',
    },
    {
      title: 'Student-Focused Learning',
      description: 'A structured learning environment designed to nurture each student individually and help them improve step by step with confidence.',
      icon: Users,
      tag: 'Step-by-Step Mentorship',
      color: 'bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30 group-hover:bg-[#B85C38] group-hover:text-[#F7F0E3]',
      border: 'hover:border-[#B85C38]/50',
    },
  ];

  return (
    <section id="why-apex" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF6ED] border border-[#E8D8BD] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B85C38]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B85C38]">
              The APEX Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#493447] tracking-tight font-heading mb-4">
            Why Choose APEX?
          </h2>
          <p className="text-base sm:text-lg text-[#3B302A] font-normal leading-relaxed">
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
                className={`group relative bg-[#FBF6ED] rounded-2xl p-7 border border-[#E8D8BD] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${reason.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${reason.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#493447] bg-[#F7F0E3] px-2.5 py-1 rounded-full border border-[#E8D8BD]">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#493447] mb-2 font-heading group-hover:text-[#B85C38] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#3B302A] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8D8BD] flex items-center gap-1.5 text-xs font-semibold text-[#8A9A78]">
                  <Check className="w-4 h-4 text-[#8A9A78]" />
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

