import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { Sliders, TrendingUp, DollarSign, Activity, AlertCircle, Sparkles, Scale, RefreshCw } from 'lucide-react';
import { sound } from '../../utils/audio';

export const Chapter07ResaleLab: React.FC = () => {
  const [supply, setSupply] = useState<number>(1500); // 100 to 50000
  const [demand, setDemand] = useState<number>(85); // 1 to 100
  const [hypeVelocity, setHypeVelocity] = useState<number>(90); // 1 to 100
  const [collabWeight, setCollabWeight] = useState<number>(3.5); // 1.0 to 5.0

  // Calculate Cultural Value & Multipliers
  const scarcityFactor = Math.max(1, (50000 - supply) / 5000);
  const calculatedMultiplier = ((demand / 20) * (hypeVelocity / 25) * (collabWeight / 2) * (scarcityFactor / 2.5)).toFixed(2);
  const baselineRetail = 160;
  const simulatedPerceivedValue = Math.round(baselineRetail * Math.max(1, parseFloat(calculatedMultiplier)));
  const liquidityScore = Math.min(100, Math.round((demand * 0.6) + (hypeVelocity * 0.4)));
  const hypeHalfLifeMonths = (collabWeight > 3 ? (collabWeight * 6.5) : (collabWeight * 3)).toFixed(1);

  const presets = [
    {
      name: 'Micro-Run Artisan (e.g., Banjaaran)',
      supply: 250,
      demand: 80,
      hype: 70,
      collab: 4.8,
    },
    {
      name: 'Subcontinental Cult Drop (e.g., Comet / Gully)',
      supply: 800,
      demand: 95,
      hype: 92,
      collab: 3.8,
    },
    {
      name: 'Global Collaborative Titan (e.g., JJJJound / ALD)',
      supply: 3000,
      demand: 98,
      hype: 95,
      collab: 4.5,
    },
    {
      name: 'Mainstream Commercial General Release',
      supply: 35000,
      demand: 40,
      hype: 30,
      collab: 1.2,
    },
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    sound.playMechanicalClick();
    setSupply(preset.supply);
    setDemand(preset.demand);
    setHypeVelocity(preset.hype);
    setCollabWeight(preset.collab);
  };

  return (
    <section
      id="chapter-resale"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <Sliders size={13} />
            <span>CHAPTER 07 // VALUATION ECONOMICS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            THE RESALE LAB & <br />
            <span className="text-stroke-thick text-transparent">
              VALUATION ENGINE
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            Examine how manufactured rarity, subcultural prestige, and demand shocks create secondary market valuation dynamics.
          </p>
        </ScrollReveal>

        {/* Preset Quick Selectors */}
        <div className="mb-10">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 mb-3 block">
            LOAD ARCHIVAL VALUATION SCENARIOS:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => applyPreset(p)}
                className="p-4 bg-[#0C0C0C] hover:bg-[#141414] border border-[#1A1A1A] hover:border-[#F7F5F0] text-left text-xs font-mono transition-all group"
              >
                <div className="text-[#F7F5F0] font-black uppercase tracking-wide mb-1 text-[11px] group-hover:text-white">
                  {p.name}
                </div>
                <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase">
                  UNITS: {p.supply.toLocaleString()} • DEMAND: {p.demand}%
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Simulation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0C0C0C] border border-[#1A1A1A] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
              <span className="font-display font-black text-sm uppercase tracking-wider text-white">
                VARIABLE LEVERS
              </span>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">CALIBRATION PROTOCOL</span>
            </div>

            {/* Slider 1: Production Supply */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70 uppercase font-bold text-[10px] tracking-wider">1. Physical Production Run (Units)</span>
                <span className="text-[#F7F5F0] font-bold">{supply.toLocaleString()} PAIRS</span>
              </div>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={supply}
                onChange={(e) => setSupply(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1A1A1A] appearance-none cursor-pointer accent-[#F7F5F0]"
              />
              <div className="flex justify-between text-[9px] font-mono tracking-wider uppercase text-white/40">
                <span>Hyper-Limited (100)</span>
                <span>Mass Allocation (50,000)</span>
              </div>
            </div>

            {/* Slider 2: Global Demand */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70 uppercase font-bold text-[10px] tracking-wider">2. Global Buyer Demand Index</span>
                <span className="text-[#F7F5F0] font-bold">{demand} / 100</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={demand}
                onChange={(e) => setDemand(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1A1A1A] appearance-none cursor-pointer accent-[#F7F5F0]"
              />
              <div className="flex justify-between text-[9px] font-mono tracking-wider uppercase text-white/40">
                <span>Niche Collector</span>
                <span>Worldwide Frenzy</span>
              </div>
            </div>

            {/* Slider 3: Hype Velocity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70 uppercase font-bold text-[10px] tracking-wider">3. Social Hype Velocity (Viral Spread)</span>
                <span className="text-[#F7F5F0] font-bold">{hypeVelocity} / 100</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={hypeVelocity}
                onChange={(e) => setHypeVelocity(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1A1A1A] appearance-none cursor-pointer accent-[#F7F5F0]"
              />
              <div className="flex justify-between text-[9px] font-mono tracking-wider uppercase text-white/40">
                <span>Organic Quiet</span>
                <span>Viral Sensation</span>
              </div>
            </div>

            {/* Slider 4: Cultural / Collaborator Weight */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/70 uppercase font-bold text-[10px] tracking-wider">4. Collaborator & Cultural Provenance Weight</span>
                <span className="text-[#F7F5F0] font-bold">{collabWeight}x Multiplier</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.1"
                value={collabWeight}
                onChange={(e) => setCollabWeight(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1A1A1A] appearance-none cursor-pointer accent-[#F7F5F0]"
              />
              <div className="flex justify-between text-[9px] font-mono tracking-wider uppercase text-white/40">
                <span>Inline Non-Collab (1.0x)</span>
                <span>Historic Institution (5.0x)</span>
              </div>
            </div>
          </div>

          {/* Output Analysis Display (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Output Metric Card */}
            <div className="p-6 sm:p-8 bg-[#0C0C0C] border border-[#1A1A1A] shadow-2xl relative overflow-hidden">
              <div className="text-[9px] font-mono uppercase text-white/40 font-bold tracking-[0.25em] mb-2">
                SIMULATED PERCEIVED CULTURAL VALUE
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
                  ${simulatedPerceivedValue.toLocaleString()}
                </span>
                <span className="text-xs font-mono font-bold text-[#F7F5F0]">
                  ({calculatedMultiplier}x Index)
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-1">
                // Baseline retail standard benchmark: ${baselineRetail}
              </p>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#1A1A1A]">
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-white/40">LIQUIDITY SCORE</span>
                  <div className="text-xl font-mono font-black text-white mt-1">
                    {liquidityScore}%
                  </div>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-white/40">HYPE HALF-LIFE</span>
                  <div className="text-xl font-mono font-black text-white mt-1">
                    {hypeHalfLifeMonths} MOS
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Theory Analysis Box */}
            <div className="p-6 bg-[#0C0C0C] border border-[#1A1A1A] space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#F7F5F0] font-bold tracking-[0.25em] uppercase">
                <Scale size={14} />
                <span>CURATORIAL ECONOMIC INSIGHT</span>
              </div>
              <p className="text-xs font-mono text-white/70 uppercase tracking-wide leading-relaxed">
                // {parseFloat(calculatedMultiplier) > 3
                  ? 'High cultural gravity and low production create an asset that behaves more like fine art auction lots than consumer apparel. Market liquidity remains intense.'
                  : 'Mass allocation dampens secondary speculative premium, returning the artifact to its foundational purpose: an accessible lifestyle and sporting instrument.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
