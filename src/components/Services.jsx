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
      cardBg: 'bg-[#FFD6B8]',
      cardBorder: 'border-[#F8B878]',
      iconColor: 'bg-[#F26B5E] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#F26B5E] border-[#F8B878]',
    },
    {
      id: '02',
      title: '+1 & +2 Higher Secondary Tuition',
      subtitle: 'Exclusively for Mathematics',
      description: 'Specialized, rigorous coaching for 11th and 12th standard Mathematics. In-depth problem solving, formula mastery, step-by-step methodology, and board exam patterns.',
      icon: Calculator,
      cardBg: 'bg-[#D7EEDB]',
      cardBorder: 'border-[#A8D5BA]',
      iconColor: 'bg-[#8064A2] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#8064A2] border-[#A8D5BA]',
    },
    {
      id: '03',
      title: 'Mandatory Daily Tests & Evaluation',
      subtitle: 'Consistent Daily Practice',
      description: 'Every single evening session concludes with mandatory daily tests to reinforce that day’s lessons, eliminate exam fear, and pinpoint student doubt immediately.',
      icon: CalendarCheck,
      cardBg: 'bg-[#C9B6E4]/40',
      cardBorder: 'border-[#C9B6E4]',
      iconColor: 'bg-[#593B57] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#593B57] border-[#C9B6E4]',
    },
    {
      id: '04',
      title: 'Saturday Weekly Performance Tests',
      subtitle: 'Tracking Cumulative Progress',
      description: 'Every Saturday, students undertake scheduled weekly revision examinations reflecting standard school question paper patterns to guarantee high retention.',
      icon: Award,
      cardBg: 'bg-[#FFF4CC]',
      cardBorder: 'border-[#F6C945]',
      iconColor: 'bg-[#F28C38] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#F28C38] border-[#F6C945]',
    },
    {
      id: '05',
      title: 'Dedicated Handwriting Classes',
      subtitle: 'Neatness & Speed Presentation',
      description: 'Focused handwriting improvement sessions teaching correct letter formation, spacing, speed, and clean presentation to score bonus marks in board exams.',
      icon: PenTool,
      cardBg: 'bg-[#FFD8D4]',
      cardBorder: 'border-[#F26B5E]',
      iconColor: 'bg-[#F26B5E] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#F26B5E] border-[#F26B5E]',
    },
    {
      id: '06',
      title: 'Individual Academic Attention',
      subtitle: 'Personal Mentoring & Doubts',
      description: 'Warm, supportive classroom atmosphere where every student receives dedicated time for doubts, confidence-building, and personalized encouragement.',
      icon: Users,
      cardBg: 'bg-[rgba(248,184,120,0.35)]',
      cardBorder: 'border-[#F8B878]',
      iconColor: 'bg-[#8064A2] text-[#FFF0D5]',
      badgeColor: 'bg-[#FFF0D5] text-[#8064A2] border-[#F8B878]',
    },
  ];

  return (
    <section id="services" className="section-services py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D7EEDB] border border-[#A8D5BA] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F26B5E]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F26B5E]">
              What We Provide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#593B57] tracking-tight font-heading mb-4">
            A Complete Academic Ecosystem for Every Student
          </h2>
          <p className="text-base text-[#593B57] font-semibold leading-relaxed">
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
                className={`group relative rounded-2xl p-7 ${item.cardBg} border ${item.cardBorder} shadow-xs hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl ${item.iconColor} flex items-center justify-center shadow-md font-bold`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-[#593B57]/30 font-heading">
                      {item.id}
                    </span>
                  </div>

                  <span className={`inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border mb-3 ${item.badgeColor}`}>
                    {item.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-[#593B57] mb-3 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#593B57] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-[#593B57]/20 flex items-center justify-between text-xs font-bold text-[#F26B5E]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 hover:underline cursor-pointer font-extrabold"
                  >
                    <span>Contact for Admission</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[#8064A2] font-extrabold text-[11px]">₹500 / Month</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

