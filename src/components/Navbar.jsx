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
          ? 'bg-[#F7F0E3]/95 backdrop-blur-md py-3 shadow-xs border-b border-[#E8D8BD]'
          : 'bg-[#F7F0E3]/85 backdrop-blur-md py-4 border-b border-[#E8D8BD]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/Apex.png"
              alt="APEX Tuition Center Logo"
              className="w-10 h-10 rounded-xl object-contain shadow-xs group-hover:scale-105 transition-transform duration-300 border border-[#E8D8BD] p-0.5 bg-[#FBF6ED]"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#493447] font-heading flex items-center gap-1.5">
                APEX
                <span className="inline-block w-2 h-2 rounded-full bg-[#B85C38] animate-pulse"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B85C38] uppercase -mt-1">
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
                className="text-sm font-semibold text-[#3B302A] hover:text-[#B85C38] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B85C38] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6382256206"
              className="flex items-center gap-2 text-xs font-semibold text-[#493447] bg-[#FBF6ED] hover:bg-[#E8D8BD] border border-[#E8D8BD] px-3.5 py-2 rounded-full transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B85C38]" />
              <span>6382256206</span>
            </a>
            
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-[#F7F0E3] bg-[#B85C38] hover:bg-[#91452F] rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4 mr-1.5 text-[#F7F0E3]" />
              Join APEX
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-[#F7F0E3] bg-[#B85C38] rounded-full shadow-xs"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#493447] hover:bg-[#E8D8BD] transition-colors border border-[#E8D8BD]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F0E3]/98 border-b border-[#E8D8BD] mt-3 px-4 pt-3 pb-6 shadow-md animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-[#493447] hover:text-[#B85C38] py-2 border-b border-[#E8D8BD]"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#8A9A78]" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:6382256206"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#493447] bg-[#FBF6ED] border border-[#E8D8BD] rounded-xl"
              >
                <Phone className="w-4 h-4 text-[#B85C38]" />
                <span>Call Now: 6382256206</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-sm font-bold text-[#F7F0E3] bg-[#B85C38] hover:bg-[#91452F] rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#F7F0E3]" />
                Enroll / Contact APEX
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

