import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'indicators', label: 'Indicadores' },
    { id: 'timeline', label: 'Jornada do Consumo' },
    { id: 'impacts', label: 'Impactos x Soluções' },
    { id: 'ods', label: 'ODS da ONU' },
    { id: 'articles', label: 'Artigos' },
    { id: 'practices', label: 'Boas Práticas' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('hero')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-[#15803d]/10 p-2 rounded-lg border border-[#15803d]/30 group-hover:border-emerald-400 transition-colors">
              <Leaf className="h-5 w-5 text-emerald-400 animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-[#15803d] flex items-center">
              Eco<span className="text-white/90 font-extrabold neo-glow-text">IA</span>
              <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-mono tracking-wider font-semibold rounded bg-[#15803d]/20 text-[#22c55e] border border-[#15803d]/30">
                AI Integrada
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'text-[#22c55e] bg-[#15803d]/20 border-[#15803d]/40 shadow-sm shadow-[#15803d]/10'
                      : 'text-white/60 border-transparent hover:text-[#22c55e] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-72 max-w-full bg-[#0a0a0c]/98 backdrop-blur-lg border-l border-white/5 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        <div className="flex flex-col space-y-4 pt-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'text-[#22c55e] bg-[#15803d]/10 border-[#15803d]/20 font-semibold'
                    : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-[11px] font-mono text-[#15803d] uppercase tracking-widest text-center">
              Tecnologia & Sustentabilidade
            </p>
            <p className="text-[11px] font-sans text-white/40 text-center mt-1">
              Atividade Integradora • 2026
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
