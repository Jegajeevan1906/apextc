import React from 'react';
import { Clock, ClipboardCheck, CalendarCheck, CalendarRange, PenTool, CheckCircle, ArrowDown, Sparkles } from 'lucide-react';

export default function AcademicRoutine() {
  const steps = [
    {
      timeBadge: '5:00 PM – 9:00 PM',
      title: 'Regular Tuition Classes',
      description: 'Daily batch timings focusing on core syllabus, conceptual clarity, homework clarification, and step-by-step problem-solving.',
      icon: Clock,
      color: 'bg-blue-600 text-white',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    {
      timeBadge: 'Daily Session',
      title: 'Mandatory Test',
      description: 'Every student attends a mandatory daily test on the topics covered, reinforcing memory, consistency, and active revision.',
      icon: ClipboardCheck,
      color: 'bg-indigo-600 text-white',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    },
    {
      timeBadge: 'Every Saturday',
      title: 'Weekly Test',
      description: 'Comprehensive Saturday test evaluating full weekly syllabus, benchmarking progress, and identifying areas for immediate remediation.',
      icon: CalendarCheck,
      color: 'bg-amber-500 text-white',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      timeBadge: 'Based on Situation & Portion',
      title: 'Sunday Class Update',
      description: 'Flexible weekend sessions scheduled as needed based on portion completion and upcoming school exams, communicated on Saturday.',
      icon: CalendarRange,
      color: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      timeBadge: 'Continuous Routine',
      title: 'Handwriting Practice',
      description: 'Targeted drills to improve speed, letter formation, neatness, and exam paper presentation for top examination marks.',
      icon: PenTool,
      color: 'bg-rose-500 text-white',
      badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
    },
  ];

  return (
    <section id="routine" className="py-20 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900">
              Structured Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            Learn. Practice. Improve.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A proven academic progression designed to build discipline, speed, and mastery week after week.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-300 via-amber-300 to-emerald-300"></div>

          <div className="space-y-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[44%]">
                    <div className="academic-card bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${step.badgeBg}`}>
                          {step.timeBadge}
                        </span>
                        <span className="text-xs font-bold text-slate-400 font-mono">
                          Step 0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-heading mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Icon */}
                  <div className="w-full md:w-[12%] flex justify-center items-center relative my-2 md:my-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.color} shadow-md border-4 border-white z-10 transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Mobile Arrow Down indicator */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden mt-2 text-slate-400">
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                      </div>
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[44%]"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Milestone Banner */}
          <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white text-center shadow-xl border border-blue-800">
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0" />
              <p className="text-sm sm:text-base font-semibold">
                Continuous evaluation ensures no student is left behind.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
