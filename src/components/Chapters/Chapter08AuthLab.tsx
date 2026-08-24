import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SNEAKER_ARCHIVE } from '../../data/archiveData';
import { SneakerArtifact, AuthInspectionPoint } from '../../types';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { Scan, Sun, Moon, Sparkles, CheckCircle2, AlertTriangle, Search } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter08AuthLabProps {
  initialArtifact?: SneakerArtifact | null;
}

export const Chapter08AuthLab: React.FC<Chapter08AuthLabProps> = ({ initialArtifact }) => {
  const [selectedArtifact, setSelectedArtifact] = useState<SneakerArtifact>(
    initialArtifact || SNEAKER_ARCHIVE[2] // Jordan 5 by default
  );
  const [lightMode, setLightMode] = useState<'standard' | 'uv'>('standard');
  const [activeInspectionIndex, setActiveInspectionIndex] = useState<number>(0);

  const toggleLightMode = (mode: 'standard' | 'uv') => {
    sound.playMechanicalClick();
    if (mode === 'uv') {
      sound.playUVBeam();
    }
    setLightMode(mode);
  };

  const currentInspectionPoint: AuthInspectionPoint | undefined =
    selectedArtifact.authInspection[activeInspectionIndex] || selectedArtifact.authInspection[0];

  return (
    <section
      id="chapter-auth"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <Scan size={13} />
            <span>CHAPTER 08 // FORENSIC COUNTERFEIT INSPECTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            THE AUTHENTICATION LAB & <br />
            <span className="text-stroke-thick text-transparent">
              365NM UV LIGHT
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            In a market saturated with replica craftsmanship, forensic validation verifies thread tension, UV optical brighteners, mold flashings, and artisanal authenticity.
          </p>
        </ScrollReveal>

        {/* Specimen Picker Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 mr-2 flex-shrink-0">
            SPECIMEN:
          </span>
          {SNEAKER_ARCHIVE.slice(0, 10).map((shoe) => (
            <button
              key={shoe.id}
              onClick={() => {
                sound.playMechanicalClick();
                setSelectedArtifact(shoe);
                setActiveInspectionIndex(0);
              }}
              className={`px-3.5 py-1.5 border text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                selectedArtifact.id === shoe.id
                  ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] font-black'
                  : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/60 hover:text-white hover:bg-[#141414]'
              }`}
            >
              {shoe.brand} — {shoe.name}
            </button>
          ))}
        </div>

        {/* Inspection Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Examination Stage (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-[#1A1A1A] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-6 relative z-20 border-b border-[#1A1A1A] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/50">LIGHTING SPECTRUM:</span>
                <div className="p-1 bg-[#141414] border border-[#1A1A1A] flex items-center gap-1">
                  <button
                    onClick={() => toggleLightMode('standard')}
                    className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                      lightMode === 'standard'
                        ? 'bg-[#F7F5F0] text-[#0A0A0A]'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    <Sun size={13} />
                    <span>White Light (5500K)</span>
                  </button>
                  <button
                    onClick={() => toggleLightMode('uv')}
                    className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                      lightMode === 'uv'
                        ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.6)]'
                        : 'text-purple-300/60 hover:text-purple-300'
                    }`}
                  >
                    <Moon size={13} />
                    <span>365nm UV Mode</span>
                  </button>
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase hidden sm:inline">
                {lightMode === 'uv' ? 'SPECTROMETRIC UV ACTIVE' : 'FULL SPECTRUM 5500K'}
              </span>
            </div>

            {/* Main Shoe Inspection Plate */}
            <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border border-[#1A1A1A] p-4">
              {/* UV Atmosphere Glow */}
              {lightMode === 'uv' && (
                <div className="absolute inset-0 bg-purple-950/40 mix-blend-color pointer-events-none z-10 animate-pulse" />
              )}
              {lightMode === 'uv' && (
                <div className="absolute inset-0 uv-beam-glow pointer-events-none z-10" />
              )}

              {/* Sneaker Graphic */}
              <motion.img
                key={selectedArtifact.id + lightMode}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                src={selectedArtifact.primaryImage}
                alt={selectedArtifact.name}
                referrerPolicy="no-referrer"
                className={`max-h-[300px] w-auto max-w-full object-contain transition-all duration-500 drop-shadow-[0_20px_25px_rgba(0,0,0,0.95)] ${
                  lightMode === 'uv'
                    ? 'filter contrast-125 brightness-90 hue-rotate-15 saturate-150'
                    : ''
                }`}
              />

              {/* Forensic Marker Pins (Square pins) */}
              {selectedArtifact.authInspection.map((point, idx) => {
                const isSelected = activeInspectionIndex === idx;
                return (
                  <button
                    key={point.id}
                    onClick={() => {
                      sound.playMechanicalClick();
                      setActiveInspectionIndex(idx);
                    }}
                    style={{
                      top: `${point.coordinates.y}%`,
                      left: `${point.coordinates.x}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
                  >
                    <div
                      className={`w-6 h-6 border flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? lightMode === 'uv'
                            ? 'border-cyan-300 bg-cyan-400 text-black shadow-[0_0_20px_#22d3ee] scale-125'
                            : 'border-[#F7F5F0] bg-[#F7F5F0] text-[#0A0A0A] shadow-[0_0_20px_rgba(255,255,255,0.7)] scale-125'
                          : 'border-white/70 bg-[#0C0C0C] text-white hover:scale-110'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-black">{idx + 1}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inspection Checklist Selector */}
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedArtifact.authInspection.map((point, idx) => (
                <button
                  key={point.id}
                  onClick={() => {
                    sound.playMechanicalClick();
                    setActiveInspectionIndex(idx);
                  }}
                  className={`px-3 py-1.5 border text-[10px] font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeInspectionIndex === idx
                      ? 'bg-[#181818] border-[#F7F5F0] text-white'
                      : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/50 hover:text-white'
                  }`}
                >
                  <span className="text-white/40">0{idx + 1}:</span>
                  <span>{point.part}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Forensic Evidence Analysis (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              {currentInspectionPoint && (
                <motion.div
                  key={currentInspectionPoint.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-6 sm:p-8 bg-[#0C0C0C] border border-[#1A1A1A] shadow-2xl space-y-6"
                >
                  <div>
                    <div className="text-[9px] font-mono uppercase text-white/40 font-bold tracking-[0.25em] mb-1.5">
                      INSPECTION CHECKPOINT // 0{activeInspectionIndex + 1}
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase text-white tracking-tight">
                      {currentInspectionPoint.part}
                    </h3>
                    <p className="text-xs font-mono text-white/60 tracking-wide uppercase mt-1">
                      // {currentInspectionPoint.description}
                    </p>
                  </div>

                  {/* Authentic Marker */}
                  <div className="p-4 bg-[#0A1A10] border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold tracking-[0.2em] uppercase">
                      <CheckCircle2 size={14} />
                      <span>AUTHENTIC ARCHIVAL SPECIFICATION</span>
                    </div>
                    <p className="text-xs text-emerald-200/80 font-mono leading-relaxed">
                      {currentInspectionPoint.legitIndicator}
                    </p>
                  </div>

                  {/* Counterfeit Tell */}
                  <div className="p-4 bg-[#1A0A0A] border border-rose-500/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-rose-400 font-bold tracking-[0.2em] uppercase">
                      <AlertTriangle size={14} />
                      <span>COUNTERFEIT REPLICA DEFECT / TELL</span>
                    </div>
                    <p className="text-xs text-rose-200/80 font-mono leading-relaxed">
                      {currentInspectionPoint.counterfeitTell}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1A1A1A] text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase flex justify-between">
                    <span>FORENSIC PROTOCOL: 365NM</span>
                    <span className="text-white/70">STATUS: SPECIMEN CLEAR</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
