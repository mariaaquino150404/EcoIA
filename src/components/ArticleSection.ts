import React, { useState, useEffect } from 'react';
import { articles } from '../data/ecoData';
import { Article } from '../types';
import { User, Clock, Calendar, X, ArrowRight, BookOpen } from 'lucide-react';

export default function ArticlesSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Close modal when hitting ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="articles" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Visual neon-green background halo */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#15803d]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Biblioteca de Textos
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Artigos Educacionais e Ensaios Acadêmicos
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Leia ensaios autorais sobre consumo e energia no século XXI, escritos para fomentar reflexões no contexto de Atividade Integradora. Clique nos cards abaixo.
          </p>
        </div>

        {/* Articles Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="flex flex-col sm:flex-row rounded-2xl bg-[#0e0e11]/35 border border-white/5 hover:border-white/10 hover:bg-[#0e0e11]/60 transition-all duration-300 overflow-hidden cursor-pointer group hover:-translate-y-1"
            >
              {/* Image side block */}
              <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img
                  src={art.imgUrl}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Micro category overlay */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono tracking-wide font-semibold bg-emerald-950/80 backdrop-blur border border-[#15803d]/25 text-[#22c55e]">
                  {art.category}
                </div>
              </div>

              {/* Informative text block */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between text-left">
                <div>
                  {/* Meta tag credits line */}
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-white/40">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {art.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {art.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-display font-medium text-white group-hover:text-[#22c55e] transition-colors line-clamp-2 text-base leading-snug tracking-tight">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-xs text-white/60 font-sans font-light line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                {/* Read button visual trigger */}
                <div className="mt-6 flex items-center text-xs font-mono font-medium text-[#22c55e]/90 group-hover:text-[#22c55e]">
                  <span>Abrir leitura completa</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Modal functional popup */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fadeIn">
            {/* Modal Clickaway backdrop boundary */}
            <div className="absolute inset-0" onClick={() => setActiveArticle(null)} />

            {/* Modal card wrapper */}
            <div className="relative bg-[#0e0e11] border border-white/5 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl z-10 text-left animate-slideUp">
              
              {/* Header Image and close floating trigger */}
              <div className="relative h-48 md:h-64">
                <img
                  src={activeArticle.imgUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/20 to-transparent" />
                
                {/* Close Button Top Edge */}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full cursor-pointer bg-black/85 hover:bg-black border border-white/10 text-white/45 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-450/40"
                  aria-label="Delete Modal window"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Tag Header overlay details */}
                <div className="absolute bottom-4 left-6">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest font-semibold bg-[#15803d] text-white shadow-sm shadow-[#15803d]/35">
                    {activeArticle.category}
                  </span>
                </div>
              </div>

              {/* Informative Body Content Container */}
              <div className="p-6 md:p-8">
                
                {/* Meta stats line */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/40 mb-4 border-b border-white/5 pb-4">
                  <span className="flex items-center">
                    <User className="h-3.5 w-3.5 mr-1 text-[#22c55e]" />
                    Autor: {activeArticle.author}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1 text-[#22c55e]" />
                    Data: {activeArticle.date}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1 text-[#22c55e]" />
                    Leitura: {activeArticle.readTime}
                  </span>
                </div>

                {/* Dynamic Title */}
                <h3 className="font-display font-medium text-xl md:text-2xl text-white leading-tight">
                  {activeArticle.title}
                </h3>

                {/* Reading Paragraph list iterator */}
                <div className="mt-6 space-y-4 text-white/70 font-sans font-light text-xs sm:text-sm leading-relaxed">
                  {activeArticle.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Educational Quote sidebar note */}
                <div className="mt-8 p-4 rounded-xl bg-[#0a0a0c] border-l-4 border-[#15803d] text-left">
                  <span className="text-[10px] font-mono font-bold text-[#22c55e] block uppercase">Conclusão Acadêmica</span>
                  <p className="text-xs text-white/60 italic font-sans mt-0.5">
                    "O uso consciente de tecnologia não visa o atraso, mas sim a excelência operacional limpa. Ao lermos sobre a pegada material de LLMs, despertamos para a reflexão crítica interdisciplinar da Atividade Integradora."
                  </p>
                </div>

                {/* Footer Modal button close trigger */}
                <div className="mt-8 flex justify-end border-t border-white/5 pt-5">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 cursor-pointer rounded-xl bg-black border border-white/5 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Fechar Janela
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
