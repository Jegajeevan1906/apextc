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
          ? 'bg-[#FFF0D5]/95 backdrop-blur-md py-3 shadow-xs border-b border-[#F8B878]'
          : 'bg-[#FFF0D5]/85 backdrop-blur-md py-4 border-b border-[#F8B878]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/Apex.png"
              alt="APEX Tuition Center Logo"
              className="w-10 h-10 rounded-xl object-contain shadow-xs group-hover:scale-105 transition-transform duration-300 border border-[#F8B878] p-0.5 bg-[#FFD6B8]"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#593B57] font-heading flex items-center gap-1.5">
                APEX
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F26B5E] animate-pulse"></span>
              </span>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#F26B5E] uppercase -mt-1">
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
                className="text-sm font-bold text-[#593B57] hover:text-[#F26B5E] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26B5E] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6382256206"
              className="flex items-center gap-2 text-xs font-bold text-[#593B57] bg-[#FFD6B8] hover:bg-[#F8B878] border border-[#F8B878] px-3.5 py-2 rounded-full transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26B5E]" />
              <span>6382256206</span>
            </a>
            
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-[#FFF0D5] bg-[#F26B5E] hover:bg-[#D9574D] rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 mr-1.5 text-[#FFF0D5]" />
              Join APEX
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-[#FFF0D5] bg-[#F26B5E] rounded-full shadow-xs"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#593B57] hover:bg-[#FFD6B8] transition-colors border border-[#F8B878]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF0D5]/98 border-b border-[#F8B878] mt-3 px-4 pt-3 pb-6 shadow-md animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-bold text-[#593B57] hover:text-[#F26B5E] py-2 border-b border-[#F8B878]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#8064A2]" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:6382256206"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#593B57] bg-[#FFD6B8] border border-[#F8B878] rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#F26B5E]" />
                <span>Call Now: 6382256206</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-sm font-bold text-[#FFF0D5] bg-[#F26B5E] hover:bg-[#D9574D] rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#FFF0D5]" />
                Enroll / Contact APEX
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

