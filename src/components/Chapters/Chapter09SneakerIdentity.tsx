import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { UserCheck, Sparkles, Shield, QrCode, Copy, Check, RefreshCw } from 'lucide-react';
import { sound } from '../../utils/audio';

export const Chapter09SneakerIdentity: React.FC = () => {
  const [collectorName, setCollectorName] = useState<string>('ARCHIVIST');
  const [step, setStep] = useState<number>(1);
  const [subculture, setSubculture] = useState<string>('Indian Renaissance');
  const [aesthetic, setAesthetic] = useState<string>('Raw Deconstructed');
  const [material, setMaterial] = useState<string>('Raw Denim & Handloom');
  const [copied, setCopied] = useState<boolean>(false);

  const subcultures = [
    { title: 'Indian Renaissance', desc: 'Rooted in subcontinental handloom, Gully hip-hop, and indie studios' },
    { title: 'Tech Minimalist', desc: 'Obsessed with Tokyo Design Studio, Japanese utility, and clean lines' },
    { title: 'Basketball Purist', desc: '1985–1990 court heritage, Tinker Hatfield aerospace architecture' },
    { title: 'Motorsport Speed', desc: 'Formula 1 paddock slim profiles, Scuderia Italian racing pedigree' },
    { title: 'Artisanal Avant-Garde', desc: 'Hand-painted Mughal flora, miniature art, and Goodyear-welted leather' },
  ];

  const aesthetics = [
    { title: 'Raw Deconstructed', desc: 'Frayed canvas edges, exposed foam, industrial typography' },
    { title: 'Monochrome Brutalist', desc: 'Stealth obsidian, tonal suede textures, architectural silhouette' },
    { title: 'Vibrant Subcultural', desc: 'Carolina cyan, marigold orange, indigo jacquard prints' },
    { title: 'Precision Luxury', desc: 'Pebbled calfskin, gold foil hot-stamps, handcrafted wooden stacks' },
  ];

  const materials = [
    { title: 'Raw Denim & Handloom', desc: 'Rajasthani indigo, coarse jute weaves, frayed raw cotton' },
    { title: 'Durabuck & Suede', desc: 'Porous velvety nap, micro-perforations, contrast stitching' },
    { title: 'Carbon & Sonic Foam', desc: 'Supercritical PEBA matrix, tungsten spikes, energy return arcs' },
    { title: 'Full-Grain Pebble Leather', desc: 'Supple Italian calfskin with hand-painted lacquer finishes' },
  ];

  // Synthesized Archetype Name
  const getArchetype = () => {
    if (subculture === 'Indian Renaissance' && material.includes('Handloom')) {
      return 'The Heritage Avant-Garde Vanguard';
    }
    if (subculture === 'Artisanal Avant-Garde') {
      return 'The Bespoke Courtly Connoisseur';
    }
    if (subculture === 'Tech Minimalist') {
      return 'The Tokyo Functionalist';
    }
    if (subculture === 'Motorsport Speed') {
      return 'The Grand Prix Aerodynamicist';
    }
    return 'The Archival Streetwear Purist';
  };

  const badgeId = `SV-${(subculture.charCodeAt(0) * 17 + aesthetic.charCodeAt(0) * 13).toString(16).toUpperCase()}-2026`;

  const copyCredential = () => {
    sound.playMechanicalClick();
    const text = `THE SNEAKER VAULT CREDENTIAL // ID: ${badgeId} | ARCHETYPE: ${getArchetype()} | OWNER: ${collectorName}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="chapter-identity"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <UserCheck size={13} />
            <span>CHAPTER 09 // BESPOKE SNEAKER ARCHETYPE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            BUILD YOUR <br />
            <span className="text-stroke-thick text-transparent">
              SNEAKER IDENTITY
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            Synthesize your individual cultural affinities, material preferences, and aesthetic philosophy into an official Museum Archival Collector Credential.
          </p>
        </ScrollReveal>

        {/* Identity Synthesizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form / Builder (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Step 1: Collector Name */}
            <div>
              <label className="block text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-white/40 mb-2">
                01 // COLLECTOR NAME OR MONIKER
              </label>
              <input
                type="text"
                value={collectorName}
                maxLength={24}
                onChange={(e) => setCollectorName(e.target.value.toUpperCase())}
                placeholder="ENTER YOUR NAME..."
                className="w-full bg-[#141414] border border-[#1A1A1A] focus:border-[#F7F5F0] px-4 py-3 text-xs font-mono text-white tracking-widest focus:outline-none uppercase"
              />
            </div>

            {/* Step 2: Subcultural Affinity */}
            <div>
              <label className="block text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-white/40 mb-2">
                02 // SUBCULTURAL CORE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subcultures.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => {
                      sound.playMechanicalClick();
                      setSubculture(s.title);
                    }}
                    className={`p-3.5 border text-left transition-all ${
                      subculture === s.title
                        ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] font-bold shadow-md'
                        : 'bg-[#141414] border-[#1A1A1A] text-white/70 hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold uppercase tracking-wider">{s.title}</div>
                    <div className={`text-[10px] mt-1 line-clamp-1 font-mono ${subculture === s.title ? 'text-black/70' : 'text-white/40'}`}>
                      {s.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Aesthetic Alignment */}
            <div>
              <label className="block text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-white/40 mb-2">
                03 // AESTHETIC PHILOSOPHY
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aesthetics.map((a) => (
                  <button
                    key={a.title}
                    onClick={() => {
                      sound.playMechanicalClick();
                      setAesthetic(a.title);
                    }}
                    className={`p-3.5 border text-left transition-all ${
                      aesthetic === a.title
                        ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] font-bold shadow-md'
                        : 'bg-[#141414] border-[#1A1A1A] text-white/70 hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold uppercase tracking-wider">{a.title}</div>
                    <div className={`text-[10px] mt-1 line-clamp-1 font-mono ${aesthetic === a.title ? 'text-black/70' : 'text-white/40'}`}>
                      {a.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Material Matrix */}
            <div>
              <label className="block text-[10px] font-mono uppercase font-bold tracking-[0.2em] text-white/40 mb-2">
                04 // SACRED MATERIAL VECTOR
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {materials.map((m) => (
                  <button
                    key={m.title}
                    onClick={() => {
                      sound.playMechanicalClick();
                      setMaterial(m.title);
                    }}
                    className={`p-3.5 border text-left transition-all ${
                      material === m.title
                        ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] font-bold shadow-md'
                        : 'bg-[#141414] border-[#1A1A1A] text-white/70 hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold uppercase tracking-wider">{m.title}</div>
                    <div className={`text-[10px] mt-1 line-clamp-1 font-mono ${material === m.title ? 'text-black/70' : 'text-white/40'}`}>
                      {m.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Preview: Physical Archival ID Badge Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 bg-[#0C0C0C] border-2 border-[#1A1A1A] shadow-2xl relative overflow-hidden group">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F7F5F0]" />

              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-[#1A1A1A] pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.25em] text-[#F7F5F0] uppercase font-bold">
                    THE SNEAKER VAULT // ARCHIVAL ID
                  </div>
                  <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase mt-0.5">
                    EXHIBITION IDENTITY CARD
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#141414] border border-[#1A1A1A] flex items-center justify-center font-mono font-black text-white text-xs">
                  SV
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-5 mb-8">
                <div>
                  <div className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-white/40">CREDENTIAL HOLDER</div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-0.5">
                    {collectorName || 'ANONYMOUS ARCHIVIST'}
                  </div>
                </div>

                <div>
                  <div className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-white/40">SYNTHESIZED ARCHETYPE</div>
                  <div className="font-mono text-sm uppercase tracking-wider font-bold text-[#F7F5F0] mt-0.5">
                    // {getArchetype()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1A1A1A] text-xs font-mono">
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-white/40 uppercase block">SUBCULTURE</span>
                    <span className="text-white font-bold uppercase mt-0.5 block">{subculture}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-white/40 uppercase block">AESTHETIC</span>
                    <span className="text-white font-bold uppercase mt-0.5 block">{aesthetic}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Serial & QR placeholder */}
              <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-white/40">VAULT SPECIMEN NUMBER</div>
                  <div className="text-xs font-mono font-bold text-white tracking-widest">{badgeId}</div>
                </div>
                <div className="p-1.5 bg-[#141414] border border-[#1A1A1A] text-white/80">
                  <QrCode size={24} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={copyCredential}
                className="flex-1 py-3 px-4 bg-[#F7F5F0] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'COPIED TO CLIPBOARD' : 'EXPORT CREDENTIAL'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
