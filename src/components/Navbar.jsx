import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, GraduationCap, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Routine', href: '#routine' },
    { name: 'About', href: '#about' },
    { name: 'Why APEX', href: '#why-apex' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-royal-gradient flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform duration-300 border border-blue-400/30">
              <Sparkles className="w-5 h-5 animate-star-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 font-heading flex items-center gap-1.5">
                APEX
                <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-800 uppercase -mt-1">
                Tuition Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-650 hover:text-blue-700 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6382256206"
              className="flex items-center gap-2 text-xs font-semibold text-blue-900 bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/70 px-3.5 py-2 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>6382256206</span>
            </a>
            
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-royal-gradient rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 mr-1.5 text-amber-300" />
              Join APEX
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-800 rounded-full shadow-sm"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 mt-3 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-blue-700 py-2 border-b border-slate-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:6382256206"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-blue-900 bg-blue-50 border border-blue-200 rounded-xl"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Now: 6382256206</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-sm font-bold text-white bg-royal-gradient rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                Enroll / Contact APEX
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
