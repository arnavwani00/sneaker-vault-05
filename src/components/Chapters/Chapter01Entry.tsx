import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DecryptedText } from '../ReactBits/DecryptedText';
import { Shield, Lock, Unlock, Fingerprint, ChevronDown, Binary } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter01EntryProps {
  unlocked: boolean;
  onUnlock: () => void;
  onEnter: () => void;
}

export const Chapter01Entry: React.FC<Chapter01EntryProps> = ({
  unlocked,
  onUnlock,
  onEnter,
}) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepText, setScanStepText] = useState('SYSTEM IDLE — AWAITING CLEARANCE');

  const startScanAndUnlock = () => {
    if (unlocked) {
      onEnter();
      return;
    }
    sound.init();
    sound.playScannerBeep();
    setIsScanning(true);
    setScanStepText('INITIALIZING SPECTROMETRIC ANALYSIS...');

    let p = 0;
    const interval = setInterval(() => {
      p += 4;
      setScanProgress(p);

      if (p === 28) {
        sound.playScannerBeep();
        setScanStepText('DECRYPTING ARCHIVAL BLOCK CIPHERS...');
      } else if (p === 60) {
        sound.playScannerBeep();
        setScanStepText('VERIFYING PROVENANCE & FORENSIC CERTIFICATES...');
      } else if (p === 88) {
        sound.playScannerBeep();
        setScanStepText('PRESSURIZING DEEP VAULT CHAMBERS...');
      }

      if (p >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setScanStepText('CLEARANCE GRANTED // VAULT UNLOCKED');
        sound.playUnlock();
        onUnlock();
      }
    }, 45);
  };

  return (
    <section
      id="chapter-entry"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] bg-vault-grain overflow-hidden pt-24 pb-16 px-4 border-b border-[#1A1A1A]"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-archival-grid opacity-25 pointer-events-none" />

      {/* Massive Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[280px] leading-[0.8] font-black tracking-tighter uppercase text-white/[0.03] select-none pointer-events-none">
        VAULT
      </div>

      {/* Vertical Archival Side Labels */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
        <div className="[writing-mode:vertical-lr] rotate-180 text-[9px] tracking-[0.4em] font-bold uppercase opacity-40">
          CULTURAL ARTIFACTS // CHAPTER 01
        </div>
        <div className="h-20 w-[1px] bg-[#F7F5F0] opacity-20" />
        <div className="w-1.5 h-1.5 bg-[#F7F5F0] rotate-45" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
        <div className="w-1.5 h-1.5 bg-[#F7F5F0] rotate-45" />
        <div className="h-20 w-[1px] bg-[#F7F5F0] opacity-20" />
        <div className="[writing-mode:vertical-lr] text-[9px] tracking-[0.4em] font-bold uppercase opacity-40">
          OBSIDIAN VAULT 01 // ARCHIVE MATRIX
        </div>
      </div>

      {/* Decorative Technical Border Stamps */}
      <div className="absolute top-24 left-8 hidden md:block text-[9px] font-mono text-white/40 tracking-[0.3em] font-bold uppercase">
        SYSTEM STATUS: ACTIVE
        <br />
        PROTOCOL: SV-2026-ARCHIVE
      </div>
      <div className="absolute top-24 right-8 hidden md:block text-[9px] font-mono text-white/40 text-right tracking-[0.3em] font-bold uppercase">
        21 SACRED OBJECTS
        <br />
        07 DESIGN HOUSES
      </div>

      {/* Center Vault Portal */}
      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Chapter Super-title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-8"
        >
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span>CHAPTER 01 // ENTRY CLEARANCE PROTOCOL</span>
        </motion.div>

        {/* Main Exhibit Title with Bold Typography & Outline Stroke */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-[#F7F5F0] uppercase leading-[0.88] mb-6"
        >
          THE SNEAKER <br />
          <span className="text-stroke-thick text-transparent">
            VAULT
          </span>
        </motion.h1>

        {/* Decrypted Metadata Subtitle */}
        <div className="max-w-2xl text-xs sm:text-sm md:text-base text-white/60 font-mono tracking-[0.1em] font-medium uppercase mb-10 leading-relaxed">
          <DecryptedText
            text="A NON-ECOMMERCE ARCHIVAL MUSEUM EXPLORING FOOTWEAR AS SCULPTURAL IDENTITY, ATHLETIC PROWESS, STREET CULTURE & MODERN ART."
            speed={25}
            maxIterations={8}
            className="text-white/80"
          />
        </div>

        {/* The Vault Split Door Visualizer & Scanner */}
        <div className="relative w-full max-w-xl p-6 sm:p-10 bg-[#0C0C0C] border border-[#1A1A1A] shadow-2xl overflow-hidden mb-10">
          {/* Top Status Banner */}
          <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4 mb-6">
            <div className="text-[9px] font-mono tracking-[0.3em] font-bold uppercase opacity-50 text-left">
              ACCESS PORTAL 01
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#F7F5F0] rotate-45" />
              <span className="text-[9px] font-mono tracking-[0.2em] font-bold uppercase text-white/70">
                {unlocked ? 'AUTHENTICATED' : 'LOCKED'}
              </span>
            </div>
          </div>

          {/* Laser Scan Beam */}
          {isScanning && (
            <motion.div
              animate={{ y: [0, 220, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
              className="absolute left-0 right-0 h-0.5 bg-[#F7F5F0] shadow-[0_0_15px_rgba(247,245,240,0.8)] z-30 pointer-events-none"
            />
          )}

          <div className="flex flex-col items-center">
            {/* Vault Dial / Lock Graphic */}
            <motion.div
              animate={
                unlocked
                  ? { rotate: 360, scale: 1.05 }
                  : isScanning
                  ? { rotate: [0, 90, 180, 270, 360] }
                  : { rotate: 0 }
              }
              transition={
                isScanning
                  ? { repeat: Infinity, duration: 2, ease: 'linear' }
                  : { duration: 1, ease: 'easeInOut' }
              }
              className={`w-24 h-24 sm:w-28 sm:h-28 border-2 flex items-center justify-center relative transition-colors duration-500 mb-6 ${
                unlocked
                  ? 'border-emerald-400 bg-[#121212] text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.2)]'
                  : isScanning
                  ? 'border-[#F7F5F0] bg-[#121212] text-[#F7F5F0] shadow-[0_0_25px_rgba(247,245,240,0.2)]'
                  : 'border-[#1A1A1A] bg-[#080808] text-white/70 hover:border-white/40'
              }`}
            >
              {/* Outer tick marks */}
              <div className="absolute inset-1 border border-dashed border-[#1A1A1A] animate-spin-slow" />
              {unlocked ? (
                <Unlock size={36} className="text-emerald-400" />
              ) : isScanning ? (
                <Fingerprint size={36} className="text-[#F7F5F0] animate-pulse" />
              ) : (
                <Lock size={36} className="text-white/70" />
              )}
            </motion.div>

            {/* Status Telemetry */}
            <div className="w-full space-y-3 mb-6">
              <div className="flex justify-between text-[10px] font-mono tracking-[0.2em] font-bold uppercase text-white/50">
                <span className="flex items-center gap-1.5">
                  <Binary size={13} />
                  <span>CIPHER STATUS</span>
                </span>
                <span className="text-[#F7F5F0] font-bold">{scanProgress}%</span>
              </div>

              {/* Minimal 2px Progress bar from Design HTML */}
              <div className="w-full h-[2px] bg-[#1A1A1A] overflow-hidden">
                <div
                  className={`h-full transition-all duration-150 ${
                    unlocked ? 'bg-emerald-400' : 'bg-[#F7F5F0]'
                  }`}
                  style={{ width: `${unlocked ? 100 : scanProgress}%` }}
                />
              </div>

              <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/70 h-5 flex items-center justify-center">
                {scanStepText}
              </p>
            </div>

            {/* Action Unlock Button with Bold High-Contrast Styling */}
            <button
              id="vault-unlock-trigger-btn"
              onClick={startScanAndUnlock}
              disabled={isScanning}
              className={`w-full py-4 px-8 font-mono text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group ${
                unlocked
                  ? 'bg-[#F7F5F0] text-[#0A0A0A] hover:bg-white shadow-[0_0_30px_rgba(255,255,255,0.25)]'
                  : isScanning
                  ? 'bg-[#1A1A1A] text-white/40 cursor-wait'
                  : 'bg-[#F7F5F0] text-[#0A0A0A] hover:bg-white border border-[#F7F5F0]'
              }`}
            >
              {unlocked ? (
                <>
                  <Unlock size={16} />
                  <span>STEP INSIDE THE VAULT ARCHIVE</span>
                </>
              ) : isScanning ? (
                <>
                  <Fingerprint size={16} className="animate-spin" />
                  <span>ANALYZING CREDENTIALS...</span>
                </>
              ) : (
                <>
                  <Shield size={16} />
                  <span>AUTHENTICATE & UNLOCK VAULT</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Down Indicator */}
        <button
          onClick={onEnter}
          className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.3em] font-bold uppercase"
        >
          <span>EXPLORE EXHIBITION</span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};
