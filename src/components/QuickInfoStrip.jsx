import React from 'react';
import { BookOpen, Calculator, Clock, BadgePercent } from 'lucide-react';

export default function QuickInfoStrip() {
  const cards = [
    {
      label: 'Classes',
      title: '1st – 10th',
      subtitle: 'All Subjects',
      badge: 'Foundational Support',
      icon: BookOpen,
      iconBg: 'bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30',
      borderGlow: 'hover:border-[#C86D51]/50',
    },
    {
      label: 'Higher Secondary',
      title: '+1 & +2',
      subtitle: 'Maths Only',
      badge: 'Specialized Coaching',
      icon: Calculator,
      iconBg: 'bg-[#D99B4B]/15 text-[#B87A2D] border border-[#D99B4B]/30',
      borderGlow: 'hover:border-[#D99B4B]/50',
    },
    {
      label: 'Tuition Timing',
      title: '5:00 PM – 9:00 PM',
      subtitle: 'Focused Study Hours',
      badge: 'Daily Batches',
      icon: Clock,
      iconBg: 'bg-[#6E625F]/15 text-[#261C1A] border border-[#6E625F]/30',
      borderGlow: 'hover:border-[#6E625F]/50',
    },
    {
      label: 'Affordable Fee',
      title: '₹500 / Month',
      subtitle: 'Per Student (₹500/- PM)',
      badge: 'Best Value in Town',
      icon: BadgePercent,
      iconBg: 'bg-[#C86D51] text-white border border-[#C86D51]',
      borderGlow: 'hover:border-[#C86D51]',
      highlight: true,
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 border backdrop-blur-md transition-all duration-300 shadow-md ${
                  card.highlight
                    ? 'bg-[#F3EEE8] border-[#C86D51]/50 ring-1 ring-[#C86D51]/30'
                    : 'bg-[#F3EEE8]/90 border-[#E6DED5]'
                } ${card.borderGlow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      card.highlight
                        ? 'bg-[#C86D51]/15 text-[#C86D51] border border-[#C86D51]/30 shadow-xs'
                        : 'bg-[#FBF9F5] text-[#6E625F] border border-[#E6DED5]'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6E625F] block">
                    {card.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#261C1A] tracking-tight font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#C86D51]">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

