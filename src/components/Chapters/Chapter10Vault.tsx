import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SNEAKER_ARCHIVE } from '../../data/archiveData';
import { SneakerArtifact } from '../../types';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { DarkVeil } from '../ReactBits/DarkVeil';
import { LightRays } from '../ReactBits/LightRays';
import { KeyRound, Sparkles, Shield, Eye, Flame, Award } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter10VaultProps {
  onSelectArtifact: (artifact: SneakerArtifact) => void;
}

export const Chapter10Vault: React.FC<Chapter10VaultProps> = ({ onSelectArtifact }) => {
  const [activeGrailIndex, setActiveGrailIndex] = useState(0);

  // 3 Sanctum Holy Grails
  const sanctumGrails = [
    SNEAKER_ARCHIVE.find((s) => s.id === 'banjaaran-ashva-divine-steed') || SNEAKER_ARCHIVE[16],
    SNEAKER_ARCHIVE.find((s) => s.id === 'comet-x-farak-zameen') || SNEAKER_ARCHIVE[7],
    SNEAKER_ARCHIVE.find((s) => s.id === 'ald-x-new-balance-sc-elite-v5') || SNEAKER_ARCHIVE[18],
  ];

  const currentGrail = sanctumGrails[activeGrailIndex];

  return (
    <section
      id="chapter-vault"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A] overflow-hidden"
    >
      {/* ReactBits DarkVeil Particle Canvas */}
      <DarkVeil density={40} />

      {/* ReactBits LightRays Beam Atmospheric Shader */}
      <LightRays intensity="high" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <KeyRound size={13} />
            <span>CHAPTER 10 // THE INNERMOST SANCTUM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            THE VAULT <br />
            <span className="text-stroke-thick text-transparent">
              SANCTUM OF GRAILS
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed max-w-2xl mx-auto border-y border-[#1A1A1A] py-3">
            Beyond standard production lies the innermost sanctum: three cultural keystones that transcend consumer design to become modern sacred relics.
          </p>
        </ScrollReveal>

        {/* Sanctum Grail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Central Altar Display (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-[#1A1A1A] p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col items-center">
            {/* Ambient Backlight Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 blur-3xl pointer-events-none" />

            <div className="w-full flex items-center justify-between text-xs font-mono mb-4 text-[#F7F5F0] border-b border-[#1A1A1A] pb-3">
              <span className="flex items-center gap-1.5 font-black uppercase tracking-[0.2em] text-[10px]">
                <Award size={14} />
                <span>SANCTUM SPECIMEN 0{activeGrailIndex + 1} / 03</span>
              </span>
              <span className="text-white/40 uppercase font-mono text-[9px] tracking-widest">{currentGrail.collectorTier}</span>
            </div>

            {/* Sacred Specimen Image */}
            <div className="relative aspect-[4/3] w-full max-h-[380px] flex items-center justify-center my-4 bg-[#0A0A0A] border border-[#1A1A1A]/60 p-4">
              <motion.img
                key={currentGrail.id}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src={currentGrail.primaryImage}
                alt={currentGrail.name}
                referrerPolicy="no-referrer"
                className="max-h-[320px] w-auto max-w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.98)]"
              />
            </div>

            {/* Title & Lore */}
            <div className="text-center mt-2 max-w-lg">
              <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/50">{currentGrail.brand} ARCHIVE</div>
              <h3 className="font-display font-black text-2xl sm:text-4xl uppercase text-white tracking-tight mt-1">
                {currentGrail.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-white/70 mt-2">
                // “{currentGrail.headline}”
              </p>
            </div>

            {/* Inspect Specimen Trigger */}
            <button
              onClick={() => {
                sound.playMechanicalClick();
                onSelectArtifact(currentGrail);
              }}
              className="mt-6 py-3.5 px-8 bg-[#F7F5F0] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-2xl"
            >
              <Eye size={14} />
              <span>FULL ARCHIVAL INSPECTION</span>
            </button>
          </div>

          {/* Sanctum Relic Selector & Curatorial Thesis (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-white/40 mb-2">
              SELECT SANCTUM HOLY GRAIL:
            </p>

            {sanctumGrails.map((grail, idx) => {
              const isActive = activeGrailIndex === idx;
              return (
                <button
                  key={grail.id}
                  onClick={() => {
                    sound.playMechanicalClick();
                    setActiveGrailIndex(idx);
                  }}
                  className={`w-full p-5 border text-left transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? 'bg-[#181818] border-[#F7F5F0] text-white shadow-2xl scale-[1.02]'
                      : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  <img
                    src={grail.primaryImage}
                    alt={grail.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-12 object-contain bg-[#0A0A0A] border border-[#1A1A1A] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#F7F5F0]">
                        {grail.brand}
                      </span>
                      <span className="text-[9px] font-mono text-white/30">• {grail.releaseYear}</span>
                    </div>
                    <h4 className="font-display font-black text-sm uppercase text-white truncate mt-0.5">
                      {grail.name}
                    </h4>
                    <p className="text-[11px] font-mono text-white/50 truncate mt-0.5 uppercase tracking-wide">
                      // {grail.headline}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Sanctum Curatorial Principle Card */}
            <div className="p-6 bg-[#0C0C0C] border border-[#1A1A1A] mt-6 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#F7F5F0] uppercase font-bold tracking-[0.25em]">
                <Flame size={14} />
                <span>SANCTUM PRINCIPLE</span>
              </div>
              <p className="text-xs font-mono text-white/70 uppercase tracking-wide leading-relaxed">
                // A grail is not simply an expensive pair on a resale board. It is an artifact where human handcraft, cultural narrative, and uncompromising design vision coalesce into timeless permanence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
