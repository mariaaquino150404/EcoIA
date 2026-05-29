import React, { useState } from 'react';
import { goodPractices } from '../data/ecoData';
import { Shovel, ShieldCheck, CheckSquare, Square, Award } from 'lucide-react';

export default function BestPractices() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = goodPractices.length;

  return (
    <section id="practices" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Accent vector shapes */}
      <div className="absolute top-1/4 left-1/10 w-[200px] h-[200px] rounded-full bg-[#15803d]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Código de Conduta Digital
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Boas Práticas para uma IA Consciente
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Como usuários e desenvolvedores de inteligência computacional, pequenas atitudes com as plataformas podem reduzir Gigawatts de desperdício em redes unificadas. Marque seus compromissos.
          </p>
        </div>

        {/* Commitment Badge Counter */}
        <div className="mb-10 max-w-md mx-auto p-4 rounded-xl bg-[#0e0e11] border border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 rounded-lg bg-[#15803d]/10 text-[#22c55e]">
              <Award className="h-5 w-5 animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-mono text-white/40 font-bold uppercase">Seu Pacto Ecológico</p>
              <p className="text-[11px] text-white/50">Marque as práticas recomendadas que você deseja adotar.</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-display text-2xl font-black text-[#22c55e]">{completedCount}</span>
            <span className="text-xs font-mono text-white/30 font-bold"> / {totalCount}</span>
          </div>
        </div>

        {/* Recommendations Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goodPractices.map((prac) => {
            const isChecked = !!checkedItems[prac.id];
            return (
              <div
                key={prac.id}
                onClick={() => toggleCheck(prac.id)}
                className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  isChecked
                    ? 'border-[#15803d] bg-[#15803d]/10 shadow-md shadow-[#15803d]/5'
                    : 'border-white/5 bg-[#0e0e11]/35 hover:bg-[#0e0e11]/60 hover:border-white/10'
                }`}
              >
                {/* Header Action Trigger */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Category Label */}
                    <span className="text-[9px] font-mono tracking-wider font-semibold uppercase text-white/40">
                      {prac.category}
                    </span>
                    
                    {/* Recommend title */}
                    <h3 className={`mt-2 font-display text-xs uppercase tracking-wider font-bold leading-snug transition-colors ${
                      isChecked ? 'text-[#22c55e]' : 'text-white/90'
                    }`}>
                      {prac.title}
                    </h3>
                  </div>

                  {/* Circle Checkbox feedback */}
                  <div className={`p-1 rounded-lg transition-colors ${
                    isChecked ? 'text-[#22c55e] bg-emerald-500/10' : 'text-white/30'
                  }`}>
                    {isChecked ? <CheckSquare className="h-5 w-5" /> : <Square className="h-5 w-5" />}
                  </div>
                </div>

                {/* Recommend details */}
                <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans font-light">
                  {prac.description}
                </p>

                {/* Rating Footnote tag */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/45">Impacto Individual:</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    prac.impactLevel === 'Alto'
                      ? 'bg-rose-500/10 text-rose-400'
                      : prac.impactLevel === 'Médio'
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'bg-emerald-500/10 text-[#22c55e]'
                  }`}>
                    {prac.impactLevel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational bottom banner */}
        {completedCount === totalCount && (
          <div className="mt-12 p-5 rounded-xl border border-[#15803d]/30 bg-[#15803d]/10 animate-pulse text-center max-w-md mx-auto">
            <p className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-widest">
              🎉 Parabéns! Atividade de Prática Concluída
            </p>
            <p className="text-[11px] text-white/65 mt-1 font-sans">
              Você se comprometeu com todas as boas práticas. Compartilhe essas reflexões na sua apresentação de Atividade Integradora.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
