import React, { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, Cpu, Globe } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [hoveredBadge, setHoveredBadge] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Abstract Glowing Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e0e11_1px,transparent_1px),linear-gradient(to_bottom,#0e0e11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_150%)]" />

      {/* Glow Rings & Tech Latices */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#15803d]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/4 w-[300px] h-[300px] rounded-full bg-[#22c55e]/5 blur-[90px] pointer-events-none" />

      {/* Floating Network Circuits Decor (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuits" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="#22c55e" fillOpacity="0.4" />
            <circle cx="60" cy="40" r="2.5" fill="#22c55e" fillOpacity="0.25" />
            <path d="M 10 10 L 40 10 L 60 30 L 60 40" fill="none" stroke="#15803d" strokeWidth="0.5" strokeOpacity="0.25" />
            <path d="M 60 40 L 90 40 L 90 70" fill="none" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuits)" />
        
        {/* Animated Custom Nodes */}
        <circle cx="15%" cy="30%" r="4" fill="#22c55e" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="15%" cy="30%" r="3" fill="#22c55e" />
        <circle cx="85%" cy="65%" r="4" fill="#15803d" className="animate-ping" style={{ animationDuration: '4.5s' }} />
        <circle cx="85%" cy="65%" r="3" fill="#15803d" />
      </svg>

      {/* Decorative leaf/tech floaties */}
      <div className="absolute top-20 right-12 text-[#22c55e] hover:scale-110 transition-transform pointer-events-none animate-bounce" style={{ animationDuration: '6s' }}>
        <LeafFloaty size={24} opacity={0.3} rotation={15} />
      </div>
      <div className="absolute bottom-1/4 left-8 text-[#22c55e] hover:rotate-45 transition-transform pointer-events-none animate-bounce" style={{ animationDuration: '8s' }}>
        <LeafFloaty size={32} opacity={0.25} rotation={-45} />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Academic / Interactive Badge */}
        <div
          onMouseEnter={() => setHoveredBadge(true)}
          onMouseLeave={() => setHoveredBadge(false)}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0e0e11] border border-white/5 mb-6 cursor-pointer hover:border-[#15803d]/40 transition-all duration-300 shadow-xl group"
          onClick={() => onScrollTo('ods')}
        >
          <span className="p-1 rounded-full bg-[#15803d]/20 text-[#22c55e]">
            <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '10s' }} />
          </span>
          <span className="text-xs font-mono text-white/75 tracking-wide font-medium">
            Disciplina de <span className="text-[#22c55e] font-semibold group-hover:text-[#22c55e]">Atividade Integradora</span>
          </span>
          <ArrowRight className={`h-3 w-3 text-white/40 transition-transform duration-300 ${hoveredBadge ? 'translate-x-1.5 text-[#22c55e]' : ''}`} />
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          Eco<span className="text-[#22c55e] neo-glow-text">IA</span>: A pegada ecológica <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-[#22c55e]">
            invisível
          </span>{' '}
          da Inteligência Artificial
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl font-sans font-light">
          Entenda como a IA consome energia, água e infraestrutura digital — e descubra caminhos para um uso mais consciente, sustentável e integrado aos Objetivos de Desenvolvimento Sustentável (ODS).
        </p>

        {/* Call to Actions Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full max-w-md">
          <button
            onClick={() => onScrollTo('timeline')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#15803d] to-[#22c55e] hover:from-[#166534] hover:to-[#15803d] text-white font-medium shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Iniciar Jornada</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => onScrollTo('articles')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0e0e11] hover:bg-[#0e0e11]/80 text-white/90 hover:text-white font-medium border border-white/5 hover:border-white/10 transition-all duration-350 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <BookOpen className="h-4 w-4 text-white/40 group-hover:text-[#22c55e] transition-colors" />
            <span>Ver Artigos</span>
          </button>
        </div>

        {/* Floating Mini Summary Cards (nature & server nodes) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl pt-8 border-t border-white/5">
          <div className="bg-[#0e0e11]/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex items-center space-x-3 text-left">
            <div className="p-2.5 rounded-lg bg-[#15803d]/10 text-[#22c55e]">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#22c55e]/80 uppercase tracking-widest font-semibold">Tecnologia</p>
              <p className="text-xs font-sans text-white/80 font-medium">Chips de Alta Engenharia</p>
            </div>
          </div>
          
          <div className="bg-[#0e0e11]/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex items-center space-x-3 text-left">
            <div className="p-2.5 rounded-lg bg-[#15803d]/10 text-[#22c55e]">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#22c55e]/80 uppercase tracking-widest font-semibold">Biosfera</p>
              <p className="text-xs font-sans text-white/80 font-medium">Sustentabilidade ONU</p>
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-1 bg-[#0e0e11]/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 flex items-center space-x-3 justify-center md:justify-start text-left">
            <div className="p-2.5 rounded-lg bg-[#15803d]/10 text-[#22c55e]">
              <span className="text-xs font-mono font-bold">12</span>
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#22c55e]/80 uppercase tracking-widest font-semibold">Atividade</p>
              <p className="text-xs font-sans text-white/80 font-medium">Consumo Coletivo</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Simple vector leaf floaty component to avoid extra deps
function LeafFloaty({ size, opacity, rotation }: { size: number; opacity: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ opacity, transform: `rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 7.5 22 12 22C17.5 22 22 17.5 22 12C22 7.5 17.5 5 12 2ZM12 4C16.4 6 20 9.2 20 12C20 14.2 18.2 16.5 16 18C16 15 14 11 11 9C9.5 8 7.5 7 5.7 6C7.5 4.7 9.8 4 12 4Z" />
    </svg>
  );
}
