import React, { useState, useEffect } from 'react';
import { Leaf, ArrowUp, Globe, Cpu, BookOpen, Eye } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visitCount, setVisitCount] = useState<number>(41);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Lógica do contador partindo de 41
  useEffect(() => {
    const INITIAL_COUNT = 41;
    const storedCount = localStorage.getItem('ecoia_visit_count');
    const hasVisitedInSession = sessionStorage.getItem('ecoia_visited_session');

    let currentCount = storedCount ? parseInt(storedCount, 10) : INITIAL_COUNT;

    // Incrementa apenas se for uma nova sessão de navegação
    if (!hasVisitedInSession) {
      currentCount = storedCount ? currentCount + 1 : INITIAL_COUNT;
      localStorage.setItem('ecoia_visit_count', currentCount.toString());
      sessionStorage.setItem('ecoia_visited_session', 'true');
    }

    setVisitCount(currentCount);
  }, []);

  const footerLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'indicators', label: 'Indicadores' },
    { id: 'timeline', label: 'Jornada' },
    { id: 'impacts', label: 'Impactos x Soluções' },
    { id: 'ods', label: 'Metas ODS' },
    { id: 'articles', label: 'Artigos' },
    { id: 'practices', label: 'Boas Práticas' }
  ];

  return (
    <footer className="relative bg-[#0a0a0c] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Decorative light overlay lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#22c55e]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="flex flex-col items-start text-left">
            <div
              onClick={() => onScrollTo('hero')}
              className="flex items-center space-x-2 cursor-pointer group mb-4"
            >
              <div className="bg-[#15803d]/10 p-2 rounded-lg border border-[#15803d]/30">
                <Leaf className="h-5 w-5 text-[#22c55e]" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white flex items-center">
                Eco<span className="text-[#22c55e] font-extrabold neo-glow-text">IA</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/60 font-sans font-light leading-relaxed max-w-sm">
              “Tecnologia consciente para um futuro sustentável.”
            </p>
            <p className="mt-4 text-xs font-sans text-white/40 font-light">
              Plataforma desenvolvida para incentivar o debate interdisciplinar da ética tecnológica e mitigação climática.
            </p>
          </div>

          {/* Navigation Anchors Links Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-widest mb-4">
              Navegação Rápida
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 w-full">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onScrollTo(link.id)}
                  className="text-left text-xs font-sans text-white/40 hover:text-[#22c55e] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Academic Meta Details Column */}
          <div className="flex flex-col items-start text-left md:border-l md:border-white/5 md:pl-8">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-widest mb-4">
              Informações Acadêmicas
            </h4>
            <div className="space-y-3 font-sans text-xs font-light text-white/60">
              <p className="flex items-center">
                <span className="text-[#22c55e] font-bold mr-2">✏️</span>
                Disciplina: <span className="font-semibold text-white ml-1">Atividade Integradora</span>
              </p>
              <p className="flex items-center">
                <span className="text-[#22c55e] font-bold mr-2">🎓</span>
                Foco: <span className="text-white ml-1">Sustentabilidade & Tecnologia</span>
              </p>
              <p className="flex items-center">
                <span className="text-[#22c55e] font-bold mr-2">📅</span>
                Ano Letivo: <span className="text-white ml-1">2026</span>
              </p>

              {/* Badges: Projeto e Contador de Visitantes */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-[#0e0e11] border border-white/5 text-white/40">
                  Projeto Acadêmico
                </span>

                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wide bg-[#15803d]/10 border border-[#22c55e]/25 text-[#22c55e]">
                  <Eye className="w-3 h-3 text-[#22c55e]" />
                  <span>{visitCount} acessos</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* License & Bottom notes bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© 2026 EcoIA. Desenvolvido para Atividade Integradora. Todos os direitos reservados.</p>
          <p className="flex items-center text-[10px] text-white/30">
            Conexão com ODS 9, 12 e 13
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top button on bottom right */}
      {showScrollTop && (
        <button
          onClick={() => onScrollTo('hero')}
          className="fixed bottom-6 right-6 z-40 p-3.5 cursor-pointer rounded-xl bg-[#0e0e11] hover:bg-[#15803d] hover:text-white border border-white/10 hover:border-[#15803d] text-[#22c55e] shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fadeIn"
          aria-label="Back to top arrow pointer"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}