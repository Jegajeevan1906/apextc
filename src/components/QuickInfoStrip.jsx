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
      iconBg: 'bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30',
      borderGlow: 'hover:border-[#B85C38]/50',
    },
    {
      label: 'Higher Secondary',
      title: '+1 & +2',
      subtitle: 'Maths Only',
      badge: 'Specialized Coaching',
      icon: Calculator,
      iconBg: 'bg-[#8A9A78]/15 text-[#6F795D] border border-[#8A9A78]/30',
      borderGlow: 'hover:border-[#8A9A78]/50',
    },
    {
      label: 'Tuition Timing',
      title: '5:00 PM – 9:00 PM',
      subtitle: 'Focused Study Hours',
      badge: 'Daily Batches',
      icon: Clock,
      iconBg: 'bg-[#493447]/15 text-[#493447] border border-[#493447]/30',
      borderGlow: 'hover:border-[#493447]/50',
    },
    {
      label: 'Affordable Fee',
      title: '₹500 / Month',
      subtitle: 'Per Student (₹500/- PM)',
      badge: 'Best Value in Town',
      icon: BadgePercent,
      iconBg: 'bg-[#B85C38] text-[#F7F0E3] border border-[#B85C38]',
      borderGlow: 'hover:border-[#B85C38]',
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
                className={`rounded-2xl p-5 border transition-all duration-300 shadow-xs ${
                  card.highlight
                    ? 'bg-[#FBF6ED] border-[#B85C38]/50 ring-1 ring-[#B85C38]/30'
                    : 'bg-[#FBF6ED] border-[#E8D8BD]'
                } ${card.borderGlow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      card.highlight
                        ? 'bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30 shadow-xs'
                        : 'bg-[#F7F0E3] text-[#493447] border border-[#E8D8BD]'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A9A78] block">
                    {card.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#493447] tracking-tight font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#B85C38]">
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

