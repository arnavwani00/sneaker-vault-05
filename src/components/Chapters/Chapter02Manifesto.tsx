import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { BookOpen, Sparkles, Feather, Globe2, Compass, Layers } from 'lucide-react';
import { sound } from '../../utils/audio';

export const Chapter02Manifesto: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'sculpture',
      icon: Feather,
      title: 'Wearable Sculpture',
      subtitle: 'Form Above Functional Utility',
      quote: '“A sneaker is the only piece of industrial design that absorbs your weight, flexes with your anatomy, and projects your social philosophy simultaneously.”',
      author: 'Archival Curatorial Board',
      essay:
        'When rubber meets vulcanized canvas, a utilitarian tool transforms into a mobile kinetic sculpture. Unlike garments that drape loosely across the torso, a sneaker is a rigid architectural chassis. Every millimeter of stack height, arch radius, and toe-spring curve dictates posture, gait, and societal presence.',
    },
    {
      id: 'renaissance',
      icon: Globe2,
      title: 'The Subcontinent’s Renaissance',
      subtitle: 'From Heritage Handloom to Global Streetwear',
      quote: '“We are no longer simply consuming Western sneaker nostalgia. We are encoding our own streets, our sweetshops, our indigo dyes, and our royal warhorses into the global footwear lexicon.”',
      author: 'Indian Streetwear Design Manifesto',
      essay:
        'For decades, global footwear was dominated by Beaverton, Herzogenaurach, and Boston. Today, an unstoppable cultural renaissance is unfolding across New Delhi, Bengaluru, Rajasthan, and Mumbai. Studios like Gully Labs, Comet, Banjaaran, and One8 are integrating Kashmiri jacquard, raw jute weaves, Rajasthani miniature painting, and cricket ball test seams into forward-looking contemporary design.',
    },
    {
      id: 'scarcity',
      icon: Sparkles,
      title: 'The Anatomy of Scarcity',
      subtitle: 'Manufactured Rarity & Collective Desire',
      quote: '“Value is not dictated by raw leather cost; it is forged in the furnace of cultural resonance, tight distribution, and collective myth-making.”',
      author: 'Economic Anthropologist Notes',
      essay:
        'Why does a pair of vulcanized sneakers originally produced for ninety dollars command thousands on the secondary market? Because footwear has become the stock certificate of cultural relevancy. Scarcity operates as a social cryptographic handshake between those who understand the code.',
    },
    {
      id: 'provenance',
      icon: Compass,
      title: 'Athletic Provenance',
      subtitle: 'Moments of Glory Crystallized in Leather',
      quote: '“When Michael Jordan took flight or Virat Kohli executed a flawless cover drive, their footgear ceased to be sporting equipment—it became historical relic.”',
      author: 'Sporting History Archive',
      essay:
        'Every scuff, crease, and traction pattern holds the memory of human physical triumph. From 1985 Chicago court dominance to Silverstone Grand Prix pit lanes, performance sneakers are physical time capsules of human kinetic excellence.',
    },
    {
      id: 'craft',
      icon: Layers,
      title: 'Artisan vs Assembly Line',
      subtitle: 'The Return of the Master Cobbler',
      quote: '“In an era of hyper-fast polyester fashion, the stroke of an artisan’s hand-painted floral brush or a hand-welted oak sole is a radical act of resistance.”',
      author: 'Banjaaran Atelier Philosophy',
      essay:
        'While mass manufacturing churns out millions of identical injected foam units, the avant-garde fringe of footwear design is returning to the master artisan. Hand-stacked wooden heels, hand-painted courtly miniatures, and Goodyear-welted pebbled coal leathers prove that shoes belong in fine art museums.',
    },
  ];

  return (
    <section
      id="chapter-manifesto"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span>CHAPTER 02 // CULTURAL CURATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-[#F7F5F0] leading-[0.88] mb-6">
            WHY DOES A SHOE <br />
            <span className="text-stroke-thick text-transparent">
              MATTER?
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/60 font-mono tracking-[0.05em] uppercase leading-relaxed max-w-2xl">
            Footwear is neither disposable utility nor simple protection from the ground. It is identity, subculture, architectural geometry, and social currency.
          </p>
        </ScrollReveal>

        {/* Interactive Cultural Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Nav (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.3em] font-bold uppercase opacity-50 mb-3">
              <span>Select Cultural Pillar</span>
              <span>01 — 05</span>
            </div>
            {pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  id={`manifesto-pillar-${pillar.id}`}
                  onClick={() => {
                    sound.playMechanicalClick();
                    setActivePillar(idx);
                  }}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 flex items-start justify-between group ${
                    isActive
                      ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] shadow-xl translate-x-2'
                      : 'bg-[#0C0C0C] text-white/70 border-[#1A1A1A] hover:border-white/30 hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 ${
                        isActive ? 'bg-[#0A0A0A] text-white' : 'bg-[#141414] text-white/70 border border-[#1A1A1A]'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold tracking-[0.2em] opacity-60">0{idx + 1}</span>
                        <h3 className="font-display font-black text-sm sm:text-base uppercase tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p
                        className={`text-xs font-mono tracking-wider mt-1 line-clamp-1 uppercase ${
                          isActive ? 'text-[#0A0A0A]/70 font-semibold' : 'text-white/40'
                        }`}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center self-center pl-2">
                    <div className={`w-2 h-2 rotate-45 ${isActive ? 'bg-[#0A0A0A]' : 'bg-transparent border border-[#1A1A1A] group-hover:bg-[#F7F5F0]'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Editorial Display Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 bg-[#0C0C0C] border border-[#1A1A1A] relative overflow-hidden shadow-2xl"
              >
                {/* Background Monolithic Watermark */}
                <div className="absolute top-0 right-4 font-display text-9xl sm:text-[140px] font-black tracking-tighter text-white/[0.03] select-none pointer-events-none">
                  0{activePillar + 1}
                </div>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#141414] border border-[#1A1A1A] text-[9px] font-mono tracking-[0.25em] font-bold uppercase text-white/80 mb-6">
                  <div className="w-1 h-1 bg-[#F7F5F0] rotate-45" />
                  <span>{pillars[activePillar].subtitle}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tighter mb-6">
                  {pillars[activePillar].title}
                </h3>

                {/* Blockquote */}
                <blockquote className="border-l-2 border-[#F7F5F0] pl-5 py-2 my-6 font-mono text-sm sm:text-base text-white/90 leading-relaxed uppercase tracking-wider">
                  {pillars[activePillar].quote}
                  <footer className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#F7F5F0]/60 mt-3">
                    // AUTHOR: {pillars[activePillar].author}
                  </footer>
                </blockquote>

                {/* Essay */}
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
                  {pillars[activePillar].essay}
                </p>

                {/* Archival Seal with Bold Status Bar */}
                <div className="pt-6 border-t border-[#1A1A1A] flex items-center justify-between text-[9px] font-mono tracking-[0.25em] font-bold text-white/40 uppercase">
                  <span>MUSEUM THESIS // ARTIFACT SERIES</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>AUTHENTICATED</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
