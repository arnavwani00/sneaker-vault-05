import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SneakerArtifact } from '../../types';
import { X, Layers, Award, Tag, Sparkles, ShieldCheck, ArrowRight, RotateCw } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter04ArtifactRevealProps {
  artifact: SneakerArtifact | null;
  onClose: () => void;
  onJumpToAuth: (artifact: SneakerArtifact) => void;
  onJumpToResale: (artifact: SneakerArtifact) => void;
  onJumpToDna: (artifact: SneakerArtifact) => void;
}

export const Chapter04ArtifactReveal: React.FC<Chapter04ArtifactRevealProps> = ({
  artifact,
  onClose,
  onJumpToAuth,
  onJumpToResale,
  onJumpToDna,
}) => {
  const [activeAngle, setActiveAngle] = useState<'primary' | 'secondary'>('primary');
  const [activeTab, setActiveTab] = useState<'lore' | 'design' | 'craft' | 'specs'>('lore');

  if (!artifact) return null;

  const currentImage = activeAngle === 'primary' ? artifact.primaryImage : artifact.secondaryImage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-start"
      id="chapter-artifact-reveal-modal"
    >
      {/* Top Bar Controls */}
      <div className="sticky top-0 z-50 bg-[#0C0C0C] border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#F7F5F0] rotate-45" />
          <span className="px-2.5 py-1 bg-[#141414] border border-[#1A1A1A] text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/90">
            {artifact.brand} // {artifact.codeName}
          </span>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 hidden sm:inline">
            RELEASE: {artifact.releaseYear} • ARCHIVAL TIER: {artifact.collectorTier}
          </span>
        </div>
        <button
          id="close-artifact-reveal-btn"
          onClick={() => {
            sound.playMechanicalClick();
            onClose();
          }}
          className="p-2.5 bg-[#141414] border border-[#1A1A1A] hover:bg-[#F7F5F0] text-white hover:text-[#0A0A0A] transition-all flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
        >
          <span>CLOSE ARTIFACT</span>
          <X size={15} />
        </button>
      </div>

      {/* Main Content Showcase */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: High-Res Dual Photography Stage (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Main Visual Display Frame */}
          <div className="relative w-full aspect-[4/3] max-h-[540px] bg-[#0C0C0C] border border-[#1A1A1A] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-2xl group">
            {/* Background Monolithic Brand Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[100px] sm:text-[140px] font-black tracking-tighter text-white/[0.03] select-none pointer-events-none uppercase">
              {artifact.brand}
            </div>

            {/* Corner Archival Code Stamps */}
            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase">
              SPECIMEN ID: {artifact.id}
            </div>
            <div className="absolute top-4 right-4 text-[9px] font-mono font-bold tracking-[0.25em] text-white/40 uppercase">
              STUDIO CAPTURE // 00{activeAngle === 'primary' ? '1' : '2'}
            </div>

            {/* Pristine Sneaker Image */}
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={currentImage}
              alt={`${artifact.name} ${activeAngle === 'primary' ? 'Main View' : 'Secondary Angle'}`}
              referrerPolicy="no-referrer"
              className="max-h-[380px] w-auto max-w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:scale-105"
            />

            {/* Image Overlay Angle Switcher Indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playMechanicalClick();
                  setActiveAngle(activeAngle === 'primary' ? 'secondary' : 'primary');
                }}
                className="px-3.5 py-2 bg-[#0C0C0C]/90 hover:bg-[#181818] border border-[#1A1A1A] text-[#F7F5F0] text-[10px] font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2 backdrop-blur-md transition-colors"
              >
                <RotateCw size={13} />
                <span>FLIP ANGLE ({activeAngle === 'primary' ? '01 / 02' : '02 / 02'})</span>
              </button>
            </div>
          </div>

          {/* Angle Thumbnail Selectors */}
          <div className="flex items-center gap-4 mt-4 w-full justify-center">
            <button
              onClick={() => {
                sound.playMechanicalClick();
                setActiveAngle('primary');
              }}
              className={`flex-1 max-w-[220px] p-2.5 border flex items-center gap-3 transition-all ${
                activeAngle === 'primary'
                  ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0]'
                  : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/50 hover:border-white/30'
              }`}
            >
              <img
                src={artifact.primaryImage}
                alt="Angle 1"
                referrerPolicy="no-referrer"
                className="w-12 h-10 object-contain bg-[#0A0A0A] p-1"
              />
              <div className="text-left text-[10px] font-mono uppercase tracking-wider">
                <span className="block font-black">ANGLE 01</span>
                <span className={`text-[9px] ${activeAngle === 'primary' ? 'text-[#0A0A0A]/70 font-semibold' : 'text-white/40'}`}>Profile Stance</span>
              </div>
            </button>

            <button
              onClick={() => {
                sound.playMechanicalClick();
                setActiveAngle('secondary');
              }}
              className={`flex-1 max-w-[220px] p-2.5 border flex items-center gap-3 transition-all ${
                activeAngle === 'secondary'
                  ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0]'
                  : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/50 hover:border-white/30'
              }`}
            >
              <img
                src={artifact.secondaryImage}
                alt="Angle 2"
                referrerPolicy="no-referrer"
                className="w-12 h-10 object-contain bg-[#0A0A0A] p-1"
              />
              <div className="text-left text-[10px] font-mono uppercase tracking-wider">
                <span className="block font-black">ANGLE 02</span>
                <span className={`text-[9px] ${activeAngle === 'secondary' ? 'text-[#0A0A0A]/70 font-semibold' : 'text-white/40'}`}>Top / Angle</span>
              </div>
            </button>
          </div>

          {/* Quick Lab Action Links for this Sneaker */}
          <div className="w-full mt-6 grid grid-cols-3 gap-3">
            <button
              onClick={() => {
                onClose();
                onJumpToDna(artifact);
              }}
              className="p-3.5 bg-[#0C0C0C] hover:bg-[#181818] border border-[#1A1A1A] hover:border-[#F7F5F0] text-left transition-all group"
            >
              <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Lab 06</div>
              <div className="text-xs font-mono font-bold tracking-[0.1em] text-white flex items-center justify-between mt-1 uppercase">
                <span>DNA Lab</span>
                <ArrowRight size={13} className="text-white/40 group-hover:text-white" />
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onJumpToResale(artifact);
              }}
              className="p-3.5 bg-[#0C0C0C] hover:bg-[#181818] border border-[#1A1A1A] hover:border-[#F7F5F0] text-left transition-all group"
            >
              <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Lab 07</div>
              <div className="text-xs font-mono font-bold tracking-[0.1em] text-white flex items-center justify-between mt-1 uppercase">
                <span>Resale Lab</span>
                <ArrowRight size={13} className="text-white/40 group-hover:text-white" />
              </div>
            </button>

            <button
              onClick={() => {
                onClose();
                onJumpToAuth(artifact);
              }}
              className="p-3.5 bg-[#0C0C0C] hover:bg-[#181818] border border-[#1A1A1A] hover:border-[#F7F5F0] text-left transition-all group"
            >
              <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">Lab 08</div>
              <div className="text-xs font-mono font-bold tracking-[0.1em] text-white flex items-center justify-between mt-1 uppercase">
                <span>Auth Check</span>
                <ArrowRight size={13} className="text-white/40 group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Deep Curatorial Analysis (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-[#F7F5F0]">
                {artifact.brand}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/50">{artifact.brandOrigin}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-white tracking-tighter leading-tight">
              {artifact.name}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-wider mt-2">
              // “{artifact.headline}”
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#1A1A1A] pb-2 gap-4">
            {[
              { id: 'lore', label: 'Cultural Lore' },
              { id: 'design', label: 'Design Story' },
              { id: 'craft', label: 'Craft & Materials' },
              { id: 'specs', label: 'DNA Metrics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playMechanicalClick();
                  setActiveTab(tab.id as 'lore' | 'design' | 'craft' | 'specs');
                }}
                className={`pb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] relative transition-colors ${
                  activeTab === tab.id
                    ? 'text-white font-black'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="artifact-tab-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F7F5F0]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Panes */}
          <div className="min-h-[220px]">
            {activeTab === 'lore' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/40 mb-1.5">Historical Context</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {artifact.culturalLore}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1A1A1A]">
                  <h4 className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/40 mb-1.5">Why It Matters to Footwear History</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {artifact.whyItMatters}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'design' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/40 mb-1.5">Design Architecture</h4>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {artifact.designStory}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1A1A1A]">
                  <h4 className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/40 mb-1.5">Lead Visionary / Studio</h4>
                  <p className="text-sm font-mono font-bold text-white/90 uppercase tracking-wider">
                    {artifact.designer}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'craft' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <h4 className="text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-white/40 mb-2">Material Composition</h4>
                <div className="flex flex-wrap gap-2">
                  {artifact.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#141414] border border-[#1A1A1A] text-[10px] font-mono font-bold uppercase tracking-wider text-white/90"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#1A1A1A] space-y-2 text-xs font-mono text-white/70">
                  <div className="flex justify-between">
                    <span className="text-white/40 uppercase text-[10px] font-bold">Upper Construction:</span>
                    <span className="text-white text-right max-w-[200px] uppercase font-medium">{artifact.dna.upperMaterial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 uppercase text-[10px] font-bold">Midsole Platform:</span>
                    <span className="text-white text-right max-w-[200px] uppercase font-medium">{artifact.dna.midsoleTech}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 uppercase text-[10px] font-bold">Outsole Traction:</span>
                    <span className="text-white text-right max-w-[200px] uppercase font-medium">{artifact.dna.outsoleTraction}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'specs' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {Object.entries(artifact.dna.radarStats).map(([key, val]) => (
                  <div key={key} className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono uppercase font-bold tracking-[0.2em]">
                      <span className="text-white/60">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-[#F7F5F0] font-bold">{val}/100</span>
                    </div>
                    {/* Minimal 2px Meter */}
                    <div className="w-full h-[2px] bg-[#1A1A1A] overflow-hidden">
                      <div
                        className="h-full bg-[#F7F5F0] transition-all duration-500"
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Curator Note Box */}
          <div className="p-4 bg-[#0C0C0C] border border-[#1A1A1A] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#F7F5F0] font-bold mb-1 text-[10px] tracking-[0.25em] uppercase">
              <Award size={14} />
              <span>CURATOR’S LOG // ARCHIVAL DISPATCH</span>
            </div>
            <p className="text-white/60 leading-relaxed text-xs">{artifact.curatorNotes}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
