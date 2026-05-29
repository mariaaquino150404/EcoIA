import React, { useState } from 'react';
import { indicators } from '../data/ecoData';
import { Zap, Droplet, Gauge, Leaf, Calendar, ArrowUpRight } from 'lucide-react';

export default function Indicators() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [promptCount, setPromptCount] = useState<number>(10);

  // Map icon names safely
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="h-6 w-6" />;
      case 'Droplet': return <Droplet className="h-6 w-6" />;
      case 'Gauge': return <Gauge className="h-6 w-6" />;
      case 'Leaf': return <Leaf className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section id="indicators" className="relative py-24 bg-[#0a0a0c] border-t border-white/5">
      {/* Decorative Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#15803d]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-[#22c55e] font-semibold tracking-widest uppercase mb-3">
            Estatísticas Atuais
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Os números por trás da nuvem digital
          </p>
          <p className="mt-4 text-white/60 font-sans font-light">
            Mensurar o impacto da computação é o primeiro passo para o consumo consciente. Veja as métricas e clique nos cards para se aprofundar.
          </p>
        </div>

        {/* Indicators Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((ind) => {
            const isSelected = selectedMetric === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedMetric(isSelected ? null : ind.id)}
                className={`relative p-8 rounded-2xl border text-left cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isSelected
                    ? 'bg-[#0e0e11] border-[#15803d] shadow-lg shadow-[#15803d]/10'
                    : 'bg-[#0e0e11]/40 hover:bg-[#0e0e11]/70 border-white/5 hover:border-white/10'
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 20px rgba(34, 197, 94, 0.15)` : 'none'
                }}
              >
                {/* Visual Accent Corner for active cards */}
                <span className={`absolute top-0 right-0 h-2 w-2 rounded-bl-lg transition-colors ${isSelected ? 'bg-[#22c55e]' : 'bg-transparent'}`} />
                
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${ind.colorClass}`}>
                    {getIcon(ind.iconName)}
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider font-semibold rounded-full px-2 py-0.5 ${
                    ind.impactType === 'impact' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/10' : 'bg-emerald-500/10 text-[#22c55e] border border-emerald-500/10'
                  }`}>
                    {ind.impactType === 'impact' ? 'Impacto' : 'Benefício'}
                  </span>
                </div>

                {/* Big Stat Value */}
                <div className="mt-6 flex items-baseline">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {ind.value}
                  </span>
                  <span className="ml-2 font-mono text-xs text-white/50 font-medium">
                    {ind.unit}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="mt-4 text-sm uppercase tracking-wider font-semibold text-white/90">
                  {ind.label}
                </h3>

                {/* Brief description */}
                <p className="mt-2 text-xs font-sans text-white/60 leading-relaxed">
                  {ind.description}
                </p>

                {/* Action feedback */}
                <div className="mt-6 flex items-center text-[11px] font-mono text-[#22c55e]/90 font-medium hover:text-[#22c55e]">
                  <span>{isSelected ? 'Ocultar detalhes' : 'Ver reflexo prático'}</span>
                  <ArrowUpRight className={`ml-1 h-3.5 w-3.5 transition-transform ${isSelected ? 'rotate-45' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Explanation / Compound Simulator Card */}
        <div className="mt-10 max-w-4xl mx-auto bg-gradient-to-br from-[#0e0e11] to-[#0a0a0c] p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="text-left max-w-md">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-widest bg-[#15803d]/15 text-[#22c55e] font-semibold border border-[#15803d]/10">
                Simulador Dinâmico
              </span>
              <h3 className="text-lg font-display text-white font-bold mt-2">
                Simule seu impacto de uso diário de IA
              </h3>
              <p className="text-xs font-sans text-white/60 mt-1">
                Uma única consulta curta consome em média 10 Wh de energia e 500ml de água. Ajuste o controle para prever a pegada cumulativa mensal.
              </p>
            </div>
            
            {/* Range Slider for prompts */}
            <div className="w-full md:w-64 flex flex-col space-y-2">
              <div className="flex justify-between text-xs font-mono text-white/65">
                <span>Contador de Prompts</span>
                <span className="text-[#22c55e] font-bold">{promptCount} / dia</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={promptCount}
                onChange={(e) => setPromptCount(Number(e.target.value))}
                className="w-full accent-[#22c55e] h-1.5 bg-[#0a0a0c] rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Results Comparison and Educational insights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-wide">Água Consumida (Mês)</p>
              <p className="font-display text-2xl font-bold text-cyan-400 mt-1">
                {(promptCount * 0.5 * 30).toFixed(1)} <span className="text-sm font-sans text-white/40 font-normal">Litros</span>
              </p>
              <p className="text-[10px] font-sans text-white/45 mt-1">
                Equivale a {(promptCount * 0.5 * 30 / 150).toFixed(1)} banhos rápidos de chuveiro (150L).
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-wide">Energia Consumida (Mês)</p>
              <p className="font-display text-2xl font-bold text-amber-400 mt-1">
                {(promptCount * 0.01 * 30).toFixed(2)} <span className="text-sm font-sans text-white/40 font-normal">kWh</span>
              </p>
              <p className="text-[10px] font-sans text-white/45 mt-1">
                Igual a manter uma lâmpada acesa por {(promptCount * 0.01 * 30 / 0.01).toFixed(0)} horas seguidas.
              </p>
            </div>
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-wide">Pegada Estimada de Carbono</p>
              <p className="font-display text-2xl font-bold text-rose-400 mt-1">
                {(promptCount * 4 * 30 / 1000).toFixed(2)} <span className="text-sm font-sans text-white/40 font-normal">kg CO₂</span>
              </p>
              <p className="text-[10px] font-sans text-white/45 mt-1">
                O mesmo emitido ao dirigir um carro comum por {(promptCount * 4 * 30 / 200).toFixed(1)} km.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
