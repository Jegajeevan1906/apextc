import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfoStrip from './components/QuickInfoStrip';
import Services from './components/Services';
import AcademicRoutine from './components/AcademicRoutine';
import About from './components/About';
import WhyApex from './components/WhyApex';
import LocationSection from './components/LocationSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 selection:bg-amber-100 selection:text-blue-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Quick Information 4-Card Strip */}
        <QuickInfoStrip />

        {/* Services / What We Provide */}
        <Services />

        {/* Academic Routine Roadmap */}
        <AcademicRoutine />

        {/* About Section */}
        <About />

        {/* Why Choose APEX? */}
        <WhyApex />

        {/* Location & Directions */}
        <LocationSection />

        {/* Final CTA Banner */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Contact Call Button */}
      <FloatingCallButton />
    </div>
  );
}
