import React, { useState } from 'react';
import { odsGoals } from '../data/ecoData';
import { Target, ArrowRight, ShieldCheck, Milestone } from 'lucide-react';

export default function OdsSection() {
  const [activeOds, setActiveOds] = useState<string | null>(null);

  return (
    <section id="ods" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Blurred background ecological circular elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#15803d]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Sustentabilidade ONU 2030
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            EcoIA & Objetivos de Desenvolvimento Sustentável
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Como o controle regulatório e ambiental da tecnologia de IA se articula diretamente com as metas globais da Organização das Nações Unidas para um ambiente sadio e igualitário.
          </p>
        </div>

        {/* Ods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {odsGoals.map((ods) => {
            const isSelected = activeOds === ods.id;
            return (
              <div
                key={ods.id}
                onClick={() => setActiveOds(isSelected ? null : ods.id)}
                className={`relative p-8 rounded-2xl border text-left bg-gradient-to-br from-[#0e0e11] to-[#0a0a0c]/70 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#15803d] shadow-xl shadow-[#15803d]/10'
                    : 'border-white/5 hover:border-white/10'
                }`}
                style={{
                  boxShadow: isSelected ? '0 0 25px rgba(34, 197, 94, 0.15)' : 'none'
                }}
              >
                {/* Official UN Styled Corner Numeral Badge */}
                <div className={`absolute top-0 right-0 px-4 py-2 font-display font-extrabold text-2xl rounded-tr-2xl rounded-bl-2xl ${ods.badgeColor}`}>
                  {ods.number}
                </div>

                {/* Subtitle / Small Badge Label */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block">
                  Objetivo {ods.number}
                </span>

                {/* Main Heading title */}
                <h3 className="mt-3 font-display font-bold text-base text-white pr-12">
                  {ods.name}
                </h3>

                {/* Official Tagline summary */}
                <p className="mt-3 text-xs font-sans text-[#22c55e] font-medium">
                  "{ods.tagline}"
                </p>

                {/* Deeply informative connection explanation text */}
                <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-light">
                  {ods.connectionText}
                </p>

                {/* UN Subtargets list toggle */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#22c55e]/90 font-medium group">
                    <span>{isSelected ? 'Ocultar metas oficiais' : 'Ver metas da Agenda 2030'}</span>
                    <ArrowRight className={`h-3 w-3 text-white/40 transition-transform ${isSelected ? 'rotate-90 text-[#22c55e]' : 'group-hover:translate-x-1'}`} />
                  </div>

                  {/* Accordion panel of meta numbers */}
                  {isSelected && (
                    <div className="space-y-3 pt-2 text-left animate-fadeIn">
                      <div className="flex items-center space-x-2 font-mono text-[10px] uppercase font-bold text-white/40">
                        <Target className="h-3 w-3" />
                        <span>Sub-metas de Impacto EcoIA</span>
                      </div>
                      <div className="space-y-2 text-xs text-white/60 font-sans font-light bg-[#0a0a0c] p-4 rounded-xl border border-white/5">
                        {ods.unTargets.map((tar, tIdx) => (
                          <div key={tIdx} className="flex items-start">
                            <span className="text-[#22c55e] font-mono font-bold mr-2">🎯</span>
                            <span>{tar}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Academic Bottom Quote */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e0e11] border border-white/5 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="p-3 bg-[#15803d]/10 text-[#22c55e] rounded-xl border border-[#15803d]/20">
            <Milestone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-white/95">
              Inovação aliada à responsabilidade
            </h4>
            <p className="text-xs font-sans text-white/60 leading-relaxed mt-0.5">
              Não existe ODS 9 (Inovação) completo que resulte na quebra do ODS 12 (Produção Consciente) ou aceleração do ODS 13 (Aquecimento Climático). Na Atividade Integradora, a interdisciplinaridade é o motor para reconciliar progresso científico com sustentabilidade climática planetária.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
