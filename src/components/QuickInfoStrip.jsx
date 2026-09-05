import React from 'react';
import { BookOpen, Calculator, Clock, BadgePercent, Sparkles } from 'lucide-react';

export default function QuickInfoStrip() {
  const cards = [
    {
      label: 'Classes',
      title: '1st – 10th',
      subtitle: 'All Subjects',
      badge: 'Foundational Support',
      icon: BookOpen,
      iconBg: 'bg-blue-100 text-blue-700',
      borderGlow: 'hover:border-blue-300',
    },
    {
      label: 'Higher Secondary',
      title: '+1 & +2',
      subtitle: 'Maths Only',
      badge: 'Specialized Coaching',
      icon: Calculator,
      iconBg: 'bg-indigo-100 text-indigo-700',
      borderGlow: 'hover:border-indigo-300',
    },
    {
      label: 'Tuition Timing',
      title: '5:00 PM – 9:00 PM',
      subtitle: 'Focused Study Hours',
      badge: 'Daily Batches',
      icon: Clock,
      iconBg: 'bg-sky-100 text-sky-700',
      borderGlow: 'hover:border-sky-300',
    },
    {
      label: 'Affordable Fee',
      title: '₹500 / Month',
      subtitle: 'Per Student (₹500/- PM)',
      badge: 'Best Value in Town',
      icon: BadgePercent,
      iconBg: 'bg-amber-100 text-amber-700',
      borderGlow: 'hover:border-amber-300',
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
                className={`academic-card rounded-2xl p-5 border backdrop-blur-md transition-all duration-300 ${
                  card.highlight
                    ? 'glass-panel-gold border-amber-300/80 shadow-md ring-1 ring-amber-400/20'
                    : 'glass-panel border-slate-200/80'
                } ${card.borderGlow}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      card.highlight
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-650 block">
                    {card.label}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700">
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
