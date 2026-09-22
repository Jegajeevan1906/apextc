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
      bg: 'bg-[#FFD6B8]',
      border: 'border-[#F8B878]',
      iconBg: 'bg-[#F26B5E]/20 text-[#F26B5E] border border-[#F26B5E]/40',
      badgeStyle: 'bg-[#FFF0D5] text-[#F26B5E] border border-[#F8B878]',
      labelColor: 'text-[#F26B5E]',
    },
    {
      label: 'Higher Secondary',
      title: '+1 & +2',
      subtitle: 'Maths Only',
      badge: 'Specialized Coaching',
      icon: Calculator,
      bg: 'bg-[#D7EEDB]',
      border: 'border-[#A8D5BA]',
      iconBg: 'bg-[#8064A2]/20 text-[#8064A2] border border-[#8064A2]/40',
      badgeStyle: 'bg-[#FFF0D5] text-[#8064A2] border border-[#A8D5BA]',
      labelColor: 'text-[#8064A2]',
    },
    {
      label: 'Tuition Timing',
      title: '5:00 PM – 9:00 PM',
      subtitle: 'Focused Study Hours',
      badge: 'Daily Batches',
      icon: Clock,
      bg: 'bg-[#C9B6E4]/40',
      border: 'border-[#C9B6E4]',
      iconBg: 'bg-[#593B57]/20 text-[#593B57] border border-[#593B57]/40',
      badgeStyle: 'bg-[#FFF0D5] text-[#593B57] border border-[#C9B6E4]',
      labelColor: 'text-[#593B57]',
    },
    {
      label: 'Affordable Fee',
      title: '₹500 / Month',
      subtitle: 'Per Student (₹500/- PM)',
      badge: 'Best Value in Town',
      icon: BadgePercent,
      bg: 'bg-[#FFF4CC]',
      border: 'border-[#F6C945]',
      iconBg: 'bg-[#F26B5E] text-[#FFF0D5] border border-[#F26B5E]',
      badgeStyle: 'bg-[#F26B5E]/15 text-[#F26B5E] border border-[#F26B5E]/30',
      labelColor: 'text-[#F28C38]',
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
                className={`rounded-2xl p-5 border transition-all duration-300 shadow-xs ${card.bg} ${card.border} hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeStyle}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className={`text-xs font-extrabold uppercase tracking-wider ${card.labelColor} block`}>
                    {card.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#593B57] tracking-tight font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm font-bold text-[#F26B5E]">
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

