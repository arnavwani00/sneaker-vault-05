import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { Sparkles, Calendar, ArrowUpRight, Flame, MapPin, Tag } from 'lucide-react';
import { sound } from '../../utils/audio';

export const Chapter05Timeline: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('ALL');

  const milestones = [
    {
      year: 1985,
      era: '1980s',
      title: 'The Hardwood Rebellion',
      location: 'Chicago / Beaverton',
      archetype: 'Basketball Icon',
      headline: 'The NBA "Banned" Letter & The Inception of Sneaker Lore',
      description:
        'When the NBA issued a fine per game for non-regulation color schemes, footwear shifted overnight from standard sporting uniform to an act of defiant individuality.',
      artifactsConnected: ['Air Jordan 1 Series'],
    },
    {
      year: 1990,
      era: '1990s',
      title: 'Aeronautics & 3M Luminescence',
      location: 'Portland, USA',
      archetype: 'Industrial Aerodynamics',
      headline: 'Mustang Fighter Jet Teeth & Reflective Flash Tongues',
      description:
        'Tinker Hatfield looks to WWII P-51 Mustang fighter planes to introduce aggressive shark-tooth midsole sculpting, molded thermoplastic mesh side cages, and 3M reflective flash tongues.',
      artifactsConnected: ['Air Jordan 5 Black Carolina'],
    },
    {
      year: 1999,
      era: '1990s',
      title: 'Formula 1 Paddock To European Clubwear',
      location: 'Herzogenaurach / Monza',
      archetype: 'Motorsport Heritage',
      headline: 'The Speedcat Reinvents Low-Profile Slim Footwear',
      description:
        'Engineered as a fireproof pedal shoe for Grand Prix drivers, the Puma Speedcat transitions from the pit lane to Parisian and Tokyo techno dance floors, defining 2000s low-profile racing style.',
      artifactsConnected: ['Puma Speedcat', 'Ferrari Neo Cat 2.0'],
    },
    {
      year: 2009,
      era: '2000s',
      title: 'The Commemorative Hybrid Era',
      location: 'Beaverton, USA',
      archetype: 'Archival Anthology',
      headline: 'Jordan Sixty Plus: Curating Statistical Mastery into Footwear',
      description:
        'Sneaker houses begin celebrating their own historic lore by fusing multiple design eras into single retrospective composite shoes.',
      artifactsConnected: ['Jordan Sixty Plus Low'],
    },
    {
      year: 2020,
      era: '2020s',
      title: 'Tokyo Design Studio & Modular Transformer Footwear',
      location: 'Nihonbashi, Tokyo',
      archetype: 'Japanese Tech Utility',
      headline: 'The Niobium MSNB1 3-in-1 Snow Peak Architecture',
      description:
        'New Balance’s confidential Tokyo Design Studio introduces the 3-in-1 modular footwear concept, transitioning effortlessly between waterproof mountaineering boot, clog, and indoor camp slipper.',
      artifactsConnected: ['TDS MSNB1'],
    },
    {
      year: 2023,
      era: '2020s',
      title: 'The Indian Subcontinent’s Sneaker Renaissance',
      location: 'New Delhi / Bengaluru / Agra',
      archetype: 'Indian Cultural Movement',
      headline: 'Homegrown Indie Studios Disrupt Global Monopolies',
      description:
        'Comet introduces raw deconstructed canvas; Gully Labs crafts Barfi Burgundy suede cross-stitch; Banjaaran hand-paints Mughal flora brogues and miniature equestrian loafers. The subcontinent takes center stage.',
      artifactsConnected: ['Comet X Orange', 'Gully Labs 001 Barfi Burgundy', 'Banjaaran Bageecha Brogues', 'one8 Seam XVIII OG'],
    },
    {
      year: 2024,
      era: '2024+',
      title: 'Collaborative Avant-Garde & High-End Synthesis',
      location: 'Global (Silverstone / Montreal / NYC / Delhi)',
      archetype: 'High-Fashion Crossover',
      headline: 'Carbon-Plated Super-Spikes, Aston Martin F1 & Handloom Jacquard',
      description:
        'From Aimé Leon Dore carbon super-shoes to JJJJound open-cell mesh minimalism and Farak Rajasthani indigo weaves, the sneaker achieves universal status as premier modern fine art.',
      artifactsConnected: ['ALD x NB SC Elite V5', 'JJJJound 1890', 'Comet x Farak Zameen', 'Puma x Aston Martin Speedcat'],
    },
  ];

  const eras = ['ALL', '1980s', '1990s', '2000s', '2020s', '2024+'];

  const filteredMilestones =
    selectedEra === 'ALL'
      ? milestones
      : milestones.filter((m) => m.era === selectedEra);

  return (
    <section
      id="chapter-timeline"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-archival-grid text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <Calendar size={13} />
            <span>CHAPTER 05 // CHRONOLOGICAL EVOLUTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            THE HISTORICAL <br />
            <span className="text-stroke-thick text-transparent">
              TIMELINE
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            Trace the seismic cultural inflection points that transformed utilitarian athletic footgear into coveted global sculptures and cultural signifiers.
          </p>
        </ScrollReveal>

        {/* Era Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-12">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 mr-2 flex-shrink-0">
            SELECT ERA:
          </span>
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => {
                sound.playMechanicalClick();
                setSelectedEra(era);
              }}
              className={`px-4 py-2 border text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all flex-shrink-0 ${
                selectedEra === era
                  ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] shadow-md'
                  : 'bg-[#0C0C0C] text-white/60 hover:text-white hover:bg-[#141414] border-[#1A1A1A]'
              }`}
            >
              {era === 'ALL' ? 'ALL ERAS (1985–PRESENT)' : era}
            </button>
          ))}
        </div>

        {/* Vertical Stepped Timeline Tree */}
        <div className="relative border-l border-[#1A1A1A] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {filteredMilestones.map((m, idx) => (
            <motion.div
              key={m.year + m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Pin Node (Square/Diamond) */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rotate-45 bg-[#0A0A0A] border-2 border-white/60 group-hover:border-[#F7F5F0] group-hover:bg-[#F7F5F0] transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 bg-[#0C0C0C] border border-[#1A1A1A] group-hover:border-[#F7F5F0] transition-all duration-300 shadow-2xl">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-[#1A1A1A] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-black text-2xl sm:text-4xl text-[#F7F5F0] tracking-tighter">
                      {m.year}
                    </span>
                    <span className="px-2.5 py-1 bg-[#141414] border border-[#1A1A1A] text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/80">
                      {m.archetype}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-white/40">
                    <MapPin size={13} />
                    <span>{m.location}</span>
                  </div>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white mb-1.5 tracking-tight">
                  {m.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-white/70 uppercase tracking-wider mb-4">
                  // “{m.headline}”
                </p>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                  {m.description}
                </p>

                {/* Connected Specimen Tags */}
                <div className="pt-4 border-t border-[#1A1A1A] flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 flex items-center gap-1">
                    <Tag size={11} /> SPECIMEN LINKS:
                  </span>
                  {m.artifactsConnected.map((art, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#141414] border border-[#1A1A1A] text-[10px] font-mono font-bold tracking-wider uppercase text-white/90"
                    >
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
