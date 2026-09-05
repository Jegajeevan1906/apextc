import React from 'react';
import { BadgePercent, Repeat, TrendingUp, Calculator, PenTool, Users, Sparkles, Check } from 'lucide-react';

export default function WhyApex() {
  const reasons = [
    {
      title: 'Affordable Learning',
      description: 'Quality tuition at only ₹500/month making high-standard academic guidance accessible to every motivated learner.',
      icon: BadgePercent,
      tag: '₹500 / Month',
      color: 'bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white',
      border: 'hover:border-amber-300',
    },
    {
      title: 'Consistent Practice',
      description: 'Daily tests and regular practice help students stay academically prepared, eliminating exam fear and last-minute cramming.',
      icon: Repeat,
      tag: 'Daily Mandatory Test',
      color: 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white',
      border: 'hover:border-blue-300',
    },
    {
      title: 'Weekly Assessment',
      description: 'Saturday weekly tests help rigorously track student progress, address doubts, and systematically identify areas to improve.',
      icon: TrendingUp,
      tag: 'Saturday Evaluation',
      color: 'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white',
      border: 'hover:border-indigo-300',
    },
    {
      title: 'Focused Mathematics Coaching',
      description: 'Dedicated Mathematics support for +1 and +2 students with thorough concept explanations and step-by-step problem derivations.',
      icon: Calculator,
      tag: '+1 & +2 Specialist',
      color: 'bg-violet-100 text-violet-700 group-hover:bg-violet-600 group-hover:text-white',
      border: 'hover:border-violet-300',
    },
    {
      title: 'Better Writing Skills',
      description: 'Regular handwriting practice improves neatness, legibility, and organized answer sheet presentation to score maximum marks.',
      icon: PenTool,
      tag: 'Handwriting Drills',
      color: 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white',
      border: 'hover:border-emerald-300',
    },
    {
      title: 'Student-Focused Learning',
      description: 'A structured learning environment designed to nurture each student individually and help them improve step by step with confidence.',
      icon: Users,
      tag: 'Step-by-Step Mentorship',
      color: 'bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white',
      border: 'hover:border-sky-300',
    },
  ];

  return (
    <section id="why-apex" className="py-20 bg-gradient-to-b from-white via-[#FAF9F5] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">
              The APEX Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Why Choose APEX?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
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
                className={`academic-card group relative bg-white/95 rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${reason.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${reason.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading group-hover:text-blue-900 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4" />
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
