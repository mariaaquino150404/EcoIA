import React, { useState } from 'react';
import { timelineEvents } from '../data/ecoData';
import { Cpu, Activity, Server, Smartphone, HardDrive, Trash2, RefreshCw, ChevronDown, ChevronUp, Plus, Minus, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Timeline() {
  const [expandedCard, setExpandedCard] = useState<string | null>('mining');

  // Safely grab icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="h-5 w-5 text-emerald-400" />;
      case 'Activity': return <Activity className="h-5 w-5 text-emerald-400" />;
      case 'Server': return <Server className="h-5 w-5 text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="h-5 w-5 text-emerald-400" />;
      case 'HardDrive': return <HardDrive className="h-5 w-5 text-emerald-400" />;
      case 'Trash2': return <Trash2 className="h-5 w-5 text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="h-5 w-5 text-emerald-400" />;
      default: return <Cpu className="h-5 w-5 text-emerald-400" />;
    }
  };

  const handleCardToggle = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="timeline" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Background Decorative glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-[#15803d]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Fluxo do Ciclo de Vida
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A Jornada Ecológica do Silício e Dados
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Da mineração de componentes raros até a reciclagem ou descarte de placas aceleradoras, cada etapa gera prós e contras essenciais para equilibrar inovação e ecologia.
          </p>
        </div>

        {/* Timeline Axis Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Connector Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/5 pointer-events-none transform md:-translate-x-1/2">
            {/* Pulsing neon overlay active scroll indicator */}
            <div className="absolute top-0 bottom-1/2 w-full bg-gradient-to-b from-[#22c55e] to-transparent animate-pulse" />
          </div>

          {/* Timeline Stages List */}
          <div className="space-y-12">
            {timelineEvents.map((stage, idx) => {
              const isOpen = expandedCard === stage.id;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`relative flex flex-col md:flex-row md:items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer Timeline Badge Icon (Center Anchor) */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div
                      onClick={() => handleCardToggle(stage.id)}
                      className={`h-9 w-9 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#15803d]/20 border-[#22c55e] shadow-md shadow-[#22c55e]/20 scale-110'
                          : 'bg-[#0e0e11] border-white/5 hover:border-[#15803d] hover:scale-105'
                      }`}
                    >
                      {getIcon(stage.iconName)}
                    </div>
                  </div>

                  {/* Empty Spacer Side block for Desktop symmetrical spacing */}
                  <div className="hidden md:block md:w-1/2 px-8" />

                  {/* Stage Card Side Box */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      onClick={() => handleCardToggle(stage.id)}
                      className={`p-6 sm:p-7 rounded-2xl border text-left transition-all duration-300 cursor-pointer group bg-gradient-to-br ${
                        isOpen
                          ? 'from-[#0e0e11] to-[#0a0a0c] border-[#15803d]/40 shadow-xl'
                          : 'from-[#0e0e11]/40 to-[#0a0a0c]/40 border-white/5 hover:border-white/10'
                      }`}
                    >
                      {/* Header Title with Indicator */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded text-[11px] font-mono font-bold bg-[#15803d]/10 text-[#22c55e] border border-[#15803d]/20">
                            {stage.stageNumber}
                          </span>
                          <h3 className="font-display font-bold text-base text-white group-hover:text-[#22c55e] transition-colors uppercase tracking-wider">
                            {stage.name}
                          </h3>
                        </div>
                        <button className="text-white/40 group-hover:text-[#22c55e]">
                          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>

                      {/* Main short description */}
                      <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans font-light">
                        {stage.description}
                      </p>

                      {/* Side by Side (Pros / Cons) columns inside the card */}
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        {/* Positive Solutions Column */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase font-semibold text-[#22c55e]">
                            <ThumbsUp className="h-3 w-3" />
                            <span>Vantagens / Soluções</span>
                          </div>
                          <ul className="text-xs text-white/50 space-y-1">
                            {stage.positives.map((pos, pIdx) => (
                              <li key={pIdx} className="flex items-start text-emerald-450/80 font-sans font-light text-[11px]">
                                <span className="mr-1.5 text-[#22c55e] font-bold">•</span>
                                <span>{pos}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Negative Impact Column */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase font-semibold text-rose-400">
                            <ThumbsDown className="h-3 w-3" />
                            <span>Gargalos / Riscos</span>
                          </div>
                          <ul className="text-xs text-white/50 space-y-1">
                            {stage.negatives.map((neg, nIdx) => (
                              <li key={nIdx} className="flex items-start text-rose-450/80 font-sans font-light text-[11px]">
                                <span className="mr-1.5 text-rose-450 font-bold">•</span>
                                <span>{neg}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Interactive Expandable Detailed Context Panel */}
                      {isOpen && (
                        <div className="mt-6 pt-5 border-t border-white/5 animate-fadeIn text-left">
                          <h4 className="text-[10px] font-mono font-semibold text-[#22c55e] uppercase tracking-wider">
                            Análise Acadêmica Detalhada
                          </h4>
                          <p className="mt-2 text-xs font-sans text-white/60 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                            {stage.details}
                          </p>
                        </div>
                      )}

                      {/* Micro interaction hint */}
                      {!isOpen && (
                        <div className="mt-4 flex items-center text-[10px] font-mono text-white/40 group-hover:text-[#22c55e] transition-colors">
                          <Plus className="h-3 w-3 mr-1" />
                          <span>Clique para expandir artigo acadêmico</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
