import React, { useState } from 'react';
import { impactsGroup, solutionsGroup } from '../data/ecoData';
import { ShieldAlert, CheckCircle2, ChevronRight, Zap, Droplet, Globe, Leaf } from 'lucide-react';

export default function ImpactsSolutions() {
  const [activeTab, setActiveTab] = useState<'both' | 'impacts' | 'solutions'>('both');
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const getTopicIcon = (id: string, color: string) => {
    switch (id) {
      case 'i1': case 's1': return <Zap className={`h-4 w-4 ${color}`} />;
      case 'i2': case 's2': return <Droplet className={`h-4 w-4 ${color}`} />;
      case 'i3': case 's3': return <Globe className={`h-4 w-4 ${color}`} />;
      case 'i4': case 's4': return <Leaf className={`h-4 w-4 ${color}`} />;
      default: return <ChevronRight className={`h-4 w-4 ${color}`} />;
    }
  };

  return (
    <section id="impacts" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Visual background gradient accents */}
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-[#15803d]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Análise de Ativos e Passivos
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Estudo Comparativo: Impactos x Caminhos Verdes
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Entenda a relação de causa e efeito. Cada gargalo operacional gerado pela Inteligência Artificial conta com uma contrapartida de engenharia de software ou regulação para atenuar seus rastros.
          </p>

          {/* Tab Filter Control Buttons */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-[#0e0e11] border border-white/5">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg cursor-pointer transition-all duration-250 ${
                activeTab === 'both' ? 'bg-[#15803d] text-white shadow' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Exibir Ambos
            </button>
            <button
              onClick={() => setActiveTab('impacts')}
              className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg cursor-pointer transition-all duration-250 ${
                activeTab === 'impacts' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/20' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Apenas Impactos
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg cursor-pointer transition-all duration-250 ${
                activeTab === 'solutions' ? 'bg-[#15803d]/20 text-[#22c55e] border border-[#15803d]/20' : 'text-white/40 hover:text-white/80'
              }`}
            >
              Apenas Soluções
            </button>
          </div>
        </div>

        {/* Dual Column Comparative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Impacts Block Panel */}
          {(activeTab === 'both' || activeTab === 'impacts') && (
            <div
              className={`rounded-2xl border p-6 sm:p-8 text-left bg-[#0e0e11]/20 transition-all duration-300 ${
                activeTab === 'impacts' ? 'col-span-2 max-w-4xl mx-auto w-full' : ''
              } border-rose-500/10`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-rose-400 uppercase tracking-wider">
                    {impactsGroup.title}
                  </h3>
                  <p className="text-xs text-white/40 font-sans">
                    Os riscos para o ecossistema terrestre derivados da inovação irrefletida.
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {impactsGroup.items.map((item, idx) => {
                  const isHighlighted = highlightIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHighlightIndex(idx)}
                      onMouseLeave={() => setHighlightIndex(null)}
                      className={`p-5 rounded-xl border transition-all duration-250 bg-[#0e0e11]/40 ${
                        isHighlighted
                          ? 'border-rose-500/40 bg-rose-500/[0.01] shadow-sm transform scale-[1.01]'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2 rounded-lg bg-rose-500/10 mt-0.5">
                          {getTopicIcon(item.id, 'text-rose-400')}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white/90">
                              {item.title}
                            </h4>
                            {item.metric && (
                              <span className="text-[10px] font-mono text-rose-400/90 font-semibold px-2 py-0.5 rounded bg-rose-500/5 border border-rose-500/10">
                                {item.metric}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-xs text-white/60 font-sans font-light leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Solutions Block Panel */}
          {(activeTab === 'both' || activeTab === 'solutions') && (
            <div
              className={`rounded-2xl border p-6 sm:p-8 text-left bg-[#0e0e11]/20 transition-all duration-300 ${
                activeTab === 'solutions' ? 'col-span-2 max-w-4xl mx-auto w-full' : ''
              } border-[#15803d]/20`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-[#15803d]/10 border border-[#15803d]/20 text-[#22c55e]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#22c55e] uppercase tracking-wider">
                    {solutionsGroup.title}
                  </h3>
                  <p className="text-xs text-white/40 font-sans">
                    Mitigações de engenharia e regras de conduta rumo à sustentabilidade.
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {solutionsGroup.items.map((item, idx) => {
                  const isHighlighted = highlightIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHighlightIndex(idx)}
                      onMouseLeave={() => setHighlightIndex(null)}
                      className={`p-5 rounded-xl border transition-all duration-250 bg-[#0e0e11]/40 ${
                        isHighlighted
                          ? 'border-[#22c55e]/40 bg-[#15803d]/[0.01] shadow-sm transform scale-[1.01]'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className="p-2 rounded-lg bg-[#15803d]/10 mt-0.5">
                          {getTopicIcon(item.id, 'text-[#22c55e]')}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white/90">
                              {item.title}
                            </h4>
                            {item.metric && (
                              <span className="text-[10px] font-mono text-[#22c55e]/95 font-semibold px-2 py-0.5 rounded bg-[#15803d]/5 border border-[#15803d]/10">
                                {item.metric}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-xs text-white/60 font-sans font-light leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Dynamic educational feedback card */}
        {highlightIndex !== null && activeTab === 'both' && (
          <div className="mt-8 p-4 rounded-xl border border-[#15803d]/30 bg-[#0e0e11] text-left animate-fadeIn max-w-md mx-auto">
            <p className="text-[10px] font-mono font-bold text-[#22c55e] tracking-wider">RELAÇÃO DE EFEITO DIRECIONAL</p>
            <p className="text-xs font-sans text-white/60 mt-1">
              Note como a solução número <span className="font-bold text-[#22c55e]">#{highlightIndex + 1}</span> foi projetada para atenuar diretamente o impacto correspondente <span className="font-bold text-rose-300">#{highlightIndex + 1}</span> ao lado.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
