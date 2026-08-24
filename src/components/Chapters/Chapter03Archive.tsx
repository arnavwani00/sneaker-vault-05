import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SNEAKER_ARCHIVE } from '../../data/archiveData';
import { SneakerArtifact } from '../../types';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { Search, Eye, Grid, Columns3, RotateCw, Sparkles, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter03ArchiveProps {
  onSelectArtifact: (artifact: SneakerArtifact) => void;
}

export const Chapter03Archive: React.FC<Chapter03ArchiveProps> = ({ onSelectArtifact }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [cardAngles, setCardAngles] = useState<Record<string, 'primary' | 'secondary'>>({});

  const sliderRef = useRef<HTMLDivElement>(null);

  const brands = ['ALL', 'NIKE', 'PUMA', 'COMET', 'GULLY LABS', 'ONE8', 'BANJAARAN', 'NEW BALANCE'];

  const categories = [
    'ALL',
    'Indian Subculture',
    'Motorsport Heritage',
    'Basketball Icon',
    'Artisan Avant-Garde',
    'Running & Performance',
    'Streetwear Collab',
  ];

  const filteredArtifacts = useMemo(() => {
    return SNEAKER_ARCHIVE.filter((item) => {
      const matchBrand = selectedBrand === 'ALL' || item.brand === selectedBrand;
      const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.designer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchBrand && matchCategory && matchSearch;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  const toggleCardAngle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playMechanicalClick();
    setCardAngles((prev) => ({
      ...prev,
      [id]: prev[id] === 'secondary' ? 'primary' : 'secondary',
    }));
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sound.playMechanicalClick();
    const scrollAmount = direction === 'left' ? -420 : 420;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="chapter-archive"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-archival-grid text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span>CHAPTER 03 // THE COMPLETE ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88]">
              ARCHIVAL <br />
              <span className="text-stroke-thick text-transparent">
                INDEX & GALLERY
              </span>
            </h2>
          </div>
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#F7F5F0] pl-4 md:pl-0 md:pr-4">
            <p className="text-[10px] font-mono tracking-[0.3em] font-bold text-white/40 uppercase">
              SPECIMEN DATABASE // 21 ARTIFACTS
            </p>
            <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/90 mt-1">
              DISPLAYING {filteredArtifacts.length} CURATED OBJECTS
            </p>
          </div>
        </ScrollReveal>

        {/* Curation Filter Bar */}
        <div className="space-y-4 mb-10">
          {/* Top Row: Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="text"
                placeholder="SEARCH BY SILHOUETTE, MATERIAL, OR LORE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C0C0C] border border-[#1A1A1A] focus:border-[#F7F5F0] pl-10 pr-4 py-3 text-xs font-mono font-bold tracking-[0.1em] text-white placeholder:text-white/30 focus:outline-none transition-colors uppercase"
              />
            </div>

            {/* View Mode Toggle & Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              {viewMode === 'slider' && (
                <div className="flex items-center gap-1 mr-2">
                  <button
                    onClick={() => scrollSlider('left')}
                    className="p-2 bg-[#0C0C0C] border border-[#1A1A1A] hover:border-[#F7F5F0] text-white/70 hover:text-white transition-colors"
                    title="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => scrollSlider('right')}
                    className="p-2 bg-[#0C0C0C] border border-[#1A1A1A] hover:border-[#F7F5F0] text-white/70 hover:text-white transition-colors"
                    title="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              <div className="p-1 bg-[#0C0C0C] border border-[#1A1A1A] flex items-center gap-1">
                <button
                  onClick={() => {
                    sound.playMechanicalClick();
                    setViewMode('slider');
                  }}
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 transition-colors ${
                    viewMode === 'slider'
                      ? 'bg-[#F7F5F0] text-[#0A0A0A]'
                      : 'text-white/50 hover:text-white'
                  }`}
                  title="Horizontal Exhibition Gallery"
                >
                  <Columns3 size={13} />
                  <span className="hidden sm:inline">Gallery</span>
                </button>
                <button
                  onClick={() => {
                    sound.playMechanicalClick();
                    setViewMode('grid');
                  }}
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-1.5 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#F7F5F0] text-[#0A0A0A]'
                      : 'text-white/50 hover:text-white'
                  }`}
                  title="Catalog Grid"
                >
                  <Grid size={13} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* Brand Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[9px] font-mono font-bold tracking-[0.3em] uppercase text-white/40 mr-2 flex-shrink-0">
              HOUSES:
            </span>
            {brands.map((brand) => (
              <button
                key={brand}
                id={`brand-filter-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  sound.playMechanicalClick();
                  setSelectedBrand(brand);
                }}
                className={`px-3.5 py-1.5 text-[10px] font-mono font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-all flex-shrink-0 border ${
                  selectedBrand === brand
                    ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] shadow-md'
                    : 'bg-[#0C0C0C] text-white/60 hover:text-white hover:bg-[#141414] border-[#1A1A1A]'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[9px] font-mono font-bold tracking-[0.3em] uppercase text-white/40 mr-2 flex-shrink-0">
              CURATIONS:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playMechanicalClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1 text-[10px] font-mono font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-all flex-shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-[#181818] text-[#F7F5F0] border-[#F7F5F0]'
                    : 'bg-transparent text-white/40 hover:text-white/80 border-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredArtifacts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-[#1A1A1A] bg-[#0C0C0C]">
            <Sparkles size={32} className="mx-auto text-white/30 mb-3" />
            <h3 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-white/80">No Artifacts Found</h3>
            <p className="text-[10px] font-mono tracking-[0.1em] text-white/40 mt-1 uppercase">
              Try adjusting your search criteria or brand filter.
            </p>
          </div>
        )}

        {/* SLIDER VIEW MODE */}
        {viewMode === 'slider' && filteredArtifacts.length > 0 && (
          <div
            ref={sliderRef}
            className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-8 pt-2 scroll-smooth"
          >
            {filteredArtifacts.map((artifact, idx) => {
              const currentAngle = cardAngles[artifact.id] || 'primary';
              const displayImg = currentAngle === 'primary' ? artifact.primaryImage : artifact.secondaryImage;

              return (
                <motion.div
                  key={artifact.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 6) * 0.08 }}
                  onClick={() => {
                    sound.playMechanicalClick();
                    onSelectArtifact(artifact);
                  }}
                  className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[380px] bg-[#0C0C0C] border border-[#1A1A1A] hover:border-[#F7F5F0] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl relative"
                >
                  {/* Card Header & Brand Badge */}
                  <div className="p-5 pb-0 flex items-center justify-between border-b border-[#1A1A1A]/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-[0.2em] uppercase bg-[#141414] border border-[#1A1A1A] text-white/90">
                        {artifact.brand}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-white/40">{artifact.releaseYear}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 bg-[#F7F5F0] rotate-45" />
                      <span className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-[#F7F5F0]/70">
                        {artifact.collectorTier}
                      </span>
                    </div>
                  </div>

                  {/* Shoe Photography Frame */}
                  <div className="relative h-60 sm:h-68 px-6 flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
                    {/* Archival Halo Glow */}
                    <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />

                    <img
                      src={displayImg}
                      alt={artifact.name}
                      referrerPolicy="no-referrer"
                      className="max-h-48 sm:max-h-52 w-auto max-w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Angle Switcher Icon Button */}
                    <button
                      onClick={(e) => toggleCardAngle(artifact.id, e)}
                      title="Switch Perspective Angle"
                      className="absolute bottom-3 right-3 p-2 bg-[#0C0C0C] hover:bg-[#181818] border border-[#1A1A1A] text-white/70 hover:text-white transition-colors"
                    >
                      <RotateCw size={13} />
                    </button>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-5 pt-4 space-y-3 border-t border-[#1A1A1A]">
                    <div>
                      <h3 className="font-display font-black text-lg sm:text-xl uppercase text-white tracking-tight group-hover:text-[#F7F5F0] transition-colors line-clamp-1">
                        {artifact.name}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-white/50 line-clamp-1 mt-0.5">
                        // {artifact.headline}
                      </p>
                    </div>

                    <p className="text-xs font-light text-white/50 line-clamp-2 leading-relaxed">
                      {artifact.culturalLore}
                    </p>

                    <div className="pt-3 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono">
                      <span className="text-white/40 uppercase text-[9px] font-bold tracking-[0.2em]">{artifact.category}</span>
                      <span className="text-white group-hover:underline flex items-center gap-1 font-bold text-[10px] tracking-[0.2em] uppercase">
                        INSPECT →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* GRID VIEW MODE */}
        {viewMode === 'grid' && filteredArtifacts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtifacts.map((artifact, idx) => {
              const currentAngle = cardAngles[artifact.id] || 'primary';
              const displayImg = currentAngle === 'primary' ? artifact.primaryImage : artifact.secondaryImage;

              return (
                <motion.div
                  key={artifact.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 6) * 0.05 }}
                  onClick={() => {
                    sound.playMechanicalClick();
                    onSelectArtifact(artifact);
                  }}
                  className="bg-[#0C0C0C] border border-[#1A1A1A] hover:border-[#F7F5F0] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group shadow-lg"
                >
                  {/* Card Header */}
                  <div className="p-5 pb-0 flex items-center justify-between border-b border-[#1A1A1A]/60 pb-3">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-[0.2em] uppercase bg-[#141414] border border-[#1A1A1A] text-white/90">
                      {artifact.brand}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white/40">{artifact.releaseYear}</span>
                  </div>

                  {/* Image Frame */}
                  <div className="relative h-56 px-6 flex items-center justify-center bg-[#0A0A0A]">
                    <img
                      src={displayImg}
                      alt={artifact.name}
                      referrerPolicy="no-referrer"
                      className="max-h-44 w-auto max-w-full object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => toggleCardAngle(artifact.id, e)}
                      className="absolute bottom-2 right-2 p-1.5 bg-[#0C0C0C] hover:bg-[#181818] border border-[#1A1A1A] text-white/70 hover:text-white"
                    >
                      <RotateCw size={12} />
                    </button>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 pt-4 space-y-2 border-t border-[#1A1A1A]">
                    <h3 className="font-display font-black text-base uppercase text-white tracking-tight group-hover:text-[#F7F5F0] transition-colors line-clamp-1">
                      {artifact.name}
                    </h3>
                    <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                      {artifact.culturalLore}
                    </p>
                    <div className="pt-3 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono">
                      <span className="text-[9px] font-bold tracking-[0.2em] text-[#F7F5F0]/70 uppercase">{artifact.collectorTier}</span>
                      <span className="text-white group-hover:underline font-bold text-[10px] tracking-[0.2em] uppercase">REVEAL →</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
