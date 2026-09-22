import React from 'react';
import { BookOpen, Calculator, CalendarCheck, PenTool, ArrowRight, Sparkles, Award, Users } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: '01',
      title: 'Tuition for 1st to 10th Standard',
      subtitle: 'All Subjects • Complete Academic Coaching',
      description: 'Comprehensive, curriculum-aligned evening tuition covering Tamil, English, Mathematics, Science, and Social Science with conceptual clarity and doubt clarification.',
      icon: BookOpen,
      badgeColor: 'bg-[#B85C38]/15 text-[#B85C38] border-[#B85C38]/30',
    },
    {
      id: '02',
      title: '+1 & +2 Higher Secondary Tuition',
      subtitle: 'Exclusively for Mathematics',
      description: 'Specialized, rigorous coaching for 11th and 12th standard Mathematics. In-depth problem solving, formula mastery, step-by-step methodology, and board exam patterns.',
      icon: Calculator,
      badgeColor: 'bg-[#8A9A78]/15 text-[#6F795D] border-[#8A9A78]/30',
    },
    {
      id: '03',
      title: 'Mandatory Daily Tests & Evaluation',
      subtitle: 'Consistent Daily Practice',
      description: 'Every single evening session concludes with mandatory daily tests to reinforce that day’s lessons, eliminate exam fear, and pinpoint student doubt immediately.',
      icon: CalendarCheck,
      badgeColor: 'bg-[#B85C38]/15 text-[#B85C38] border-[#B85C38]/30',
    },
    {
      id: '04',
      title: 'Saturday Weekly Performance Tests',
      subtitle: 'Tracking Cumulative Progress',
      description: 'Every Saturday, students undertake scheduled weekly revision examinations reflecting standard school question paper patterns to guarantee high retention.',
      icon: Award,
      badgeColor: 'bg-[#8A9A78]/15 text-[#6F795D] border-[#8A9A78]/30',
    },
    {
      id: '05',
      title: 'Dedicated Handwriting Classes',
      subtitle: 'Neatness & Speed Presentation',
      description: 'Focused handwriting improvement sessions teaching correct letter formation, spacing, speed, and clean presentation to score bonus marks in board exams.',
      icon: PenTool,
      badgeColor: 'bg-[#493447]/15 text-[#493447] border-[#493447]/30',
    },
    {
      id: '06',
      title: 'Individual Academic Attention',
      subtitle: 'Personal Mentoring & Doubts',
      description: 'Warm, supportive classroom atmosphere where every student receives dedicated time for doubts, confidence-building, and personalized encouragement.',
      icon: Users,
      badgeColor: 'bg-[#B85C38]/15 text-[#B85C38] border-[#B85C38]/30',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF6ED] border border-[#E8D8BD] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B85C38]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#B85C38]">
              What We Provide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#493447] tracking-tight font-heading mb-4">
            A Complete Academic Ecosystem for Every Student
          </h2>
          <p className="text-base text-[#3B302A] leading-relaxed">
            From foundational school standards to rigorous +1 &amp; +2 Mathematics, our structured approach ensures continuous improvement, high scores, and disciplined study habits.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-7 bg-[#FBF6ED] border border-[#E8D8BD] shadow-xs hover:border-[#B85C38]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#F7F0E3] border border-[#E8D8BD] flex items-center justify-center text-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-[#F7F0E3] transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-[#E8D8BD] font-heading group-hover:text-[#B85C38]/40 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-3 ${item.badgeColor}`}>
                    {item.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-[#493447] mb-3 font-heading group-hover:text-[#B85C38] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#3B302A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-[#E8D8BD] flex items-center justify-between text-xs font-bold text-[#B85C38] group-hover:text-[#91452F]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                  >
                    <span>Contact for Admission</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[#8A9A78] font-semibold text-[11px]">₹500 / Month</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

