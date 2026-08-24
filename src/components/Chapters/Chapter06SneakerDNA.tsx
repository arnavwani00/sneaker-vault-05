import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SNEAKER_ARCHIVE } from '../../data/archiveData';
import { SneakerArtifact } from '../../types';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { Cpu, Activity, Layers, Disc, Sparkles, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Chapter06SneakerDNAProps {
  initialArtifact?: SneakerArtifact | null;
}

export const Chapter06SneakerDNA: React.FC<Chapter06SneakerDNAProps> = ({ initialArtifact }) => {
  const [selectedArtifact, setSelectedArtifact] = useState<SneakerArtifact>(
    initialArtifact || SNEAKER_ARCHIVE[0]
  );
  const [activeNode, setActiveNode] = useState<'upper' | 'midsole' | 'outsole' | 'silhouette'>('upper');

  const nodes = [
    {
      id: 'upper',
      label: '01 // Upper Shell & Textile',
      title: 'Structural Upper Construction',
      content: selectedArtifact.dna.upperMaterial,
      details: selectedArtifact.materials.join(' • '),
      position: { top: '35%', left: '42%' },
    },
    {
      id: 'midsole',
      label: '02 // Midsole & Cushioning Matrix',
      title: 'Energy Damping Formulation',
      content: selectedArtifact.dna.midsoleTech,
      details: 'Supercritical injection foam, air chambers, and carbon/TPU torsion shanks.',
      position: { top: '65%', left: '55%' },
    },
    {
      id: 'outsole',
      label: '03 // Outsole Ground Contact',
      title: 'Tread & Tractive Architecture',
      content: selectedArtifact.dna.outsoleTraction,
      details: 'Directional siping, tire-compound vulcanization, and herringbone contact zones.',
      position: { top: '78%', left: '30%' },
    },
    {
      id: 'silhouette',
      label: '04 // Silhouette Geometry',
      title: 'Aesthetic Lineage & Stance',
      content: selectedArtifact.dna.silhouetteType,
      details: `Curated Heritage Origin: ${selectedArtifact.dna.craftOrigin}`,
      position: { top: '25%', left: '68%' },
    },
  ];

  // SVG Radar Polygon points calculator
  const getRadarPoints = () => {
    const stats = selectedArtifact.dna.radarStats;
    const values = [
      stats.scarcity,
      stats.culturalImpact,
      stats.technicalInnovation,
      stats.streetCred,
      stats.artisanCraft,
    ];
    const center = 110;
    const radius = 80;
    const numPoints = 5;

    return values
      .map((val, i) => {
        const angle = (Math.PI * 2 / numPoints) * i - Math.PI / 2;
        const r = (val / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(' ');
  };

  return (
    <section
      id="chapter-dna"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <Cpu size={13} />
            <span>CHAPTER 06 // BIOMECHANICAL & CULTURAL FORENSICS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            SNEAKER DNA <br />
            <span className="text-stroke-thick text-transparent">
              DECONSTRUCTION
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            Every sneaker is an intricate biological blueprint composed of aerodynamic profiles, proprietary cushioning polymers, and cultural symbolism.
          </p>
        </ScrollReveal>

        {/* Quick Specimen Picker Carousel */}
        <div className="mb-10">
          <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase mb-3 flex items-center gap-2">
            <SlidersHorizontal size={13} />
            <span>SELECT SPECIMEN FOR DNA DISSECTION:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {SNEAKER_ARCHIVE.map((shoe) => {
              const isSelected = selectedArtifact.id === shoe.id;
              return (
                <button
                  key={shoe.id}
                  onClick={() => {
                    sound.playMechanicalClick();
                    setSelectedArtifact(shoe);
                  }}
                  className={`px-3.5 py-2 border text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
                    isSelected
                      ? 'bg-[#F7F5F0] text-[#0A0A0A] border-[#F7F5F0] shadow-lg'
                      : 'bg-[#0C0C0C] border-[#1A1A1A] text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  <span>{shoe.brand}</span>
                  <span className="opacity-40">•</span>
                  <span className="max-w-[140px] truncate">{shoe.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Dissection Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive Node Canvas Stage (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-[#1A1A1A] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Background Grid & Scan Overlay */}
            <div className="absolute inset-0 bg-archival-grid opacity-20 pointer-events-none" />

            {/* Specimen Header */}
            <div className="flex items-center justify-between mb-4 relative z-10 border-b border-[#1A1A1A] pb-3">
              <div>
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-2 py-0.5 bg-[#141414] border border-[#1A1A1A] text-white/90">
                  {selectedArtifact.brand} ARCHIVE
                </span>
                <h3 className="font-display font-black text-xl uppercase text-white mt-2 tracking-tight">
                  {selectedArtifact.name}
                </h3>
              </div>
              <div className="text-right font-mono text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                DISSECTION MATRIX // 04 NODES
              </div>
            </div>

            {/* Interactive Shoe Image with Pinned Hotspot Nodes */}
            <div className="relative aspect-[4/3] flex items-center justify-center my-4 bg-[#0A0A0A] border border-[#1A1A1A]/50 p-4">
              <motion.img
                key={selectedArtifact.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedArtifact.primaryImage}
                alt={selectedArtifact.name}
                referrerPolicy="no-referrer"
                className="max-h-[300px] w-auto max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.95)]"
              />

              {/* Node Hotspots */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      sound.playMechanicalClick();
                      setActiveNode(node.id as 'upper' | 'midsole' | 'outsole' | 'silhouette');
                    }}
                    style={{ top: node.position.top, left: node.position.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                  >
                    <div
                      className={`w-6 h-6 border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'border-[#F7F5F0] bg-[#F7F5F0] text-[#0A0A0A] scale-125 shadow-[0_0_20px_rgba(255,255,255,0.6)]'
                          : 'border-white/60 bg-[#0C0C0C] text-white hover:scale-110 hover:border-[#F7F5F0]'
                      }`}
                    >
                      <span className="text-[9px] font-mono font-black">
                        {node.id === 'upper'
                          ? 'U'
                          : node.id === 'midsole'
                          ? 'M'
                          : node.id === 'outsole'
                          ? 'O'
                          : 'S'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <div className="mt-4 p-5 bg-[#141414] border border-[#1A1A1A] relative z-10">
              {nodes.map((node) => {
                if (node.id !== activeNode) return null;
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1.5"
                  >
                    <div className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#F7F5F0]/80">
                      {node.label}
                    </div>
                    <div className="font-display font-black text-base uppercase text-white tracking-tight">
                      {node.title}
                    </div>
                    <p className="text-xs text-white/90 font-mono leading-relaxed mt-1">
                      {node.content}
                    </p>
                    <p className="text-[11px] text-white/40 font-mono tracking-wide mt-1 uppercase">
                      // {node.details}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 5-Axis Radar Matrix & Cultural Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 5-Axis Radar Visualizer */}
            <div className="p-6 sm:p-8 bg-[#0C0C0C] border border-[#1A1A1A] shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-[#1A1A1A] pb-3">
                <div className="flex items-center gap-2">
                  <Activity size={15} className="text-white" />
                  <span className="font-display font-black text-sm uppercase tracking-wider text-white">
                    5-AXIS ARTIFACT RADAR
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase">WEIGHTED METRICS</span>
              </div>

              {/* Radar Graphic */}
              <div className="flex justify-center my-2">
                <svg width="220" height="220" className="overflow-visible">
                  {/* Concentric pentagons */}
                  {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                    <polygon
                      key={i}
                      points={[0, 1, 2, 3, 4]
                        .map((idx) => {
                          const angle = (Math.PI * 2 / 5) * idx - Math.PI / 2;
                          const r = 80 * scale;
                          return `${110 + r * Math.cos(angle)},${110 + r * Math.sin(angle)}`;
                        })
                        .join(' ')}
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Axis lines */}
                  {[0, 1, 2, 3, 4].map((idx) => {
                    const angle = (Math.PI * 2 / 5) * idx - Math.PI / 2;
                    return (
                      <line
                        key={idx}
                        x1="110"
                        y1="110"
                        x2={110 + 80 * Math.cos(angle)}
                        y2={110 + 80 * Math.sin(angle)}
                        stroke="rgba(255,255,255,0.15)"
                        strokeDasharray="2,2"
                      />
                    );
                  })}

                  {/* Dynamic Value Polygon */}
                  <polygon
                    points={getRadarPoints()}
                    fill="rgba(247, 245, 240, 0.15)"
                    stroke="#F7F5F0"
                    strokeWidth="2"
                    className="transition-all duration-500"
                  />
                </svg>
              </div>

              {/* Stat Metric Bars */}
              <div className="space-y-3 mt-4 pt-4 border-t border-[#1A1A1A] text-xs font-mono">
                {Object.entries(selectedArtifact.dna.radarStats).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-[2px] bg-[#1A1A1A] overflow-hidden">
                        <div
                          className="h-full bg-[#F7F5F0] transition-all duration-500"
                          style={{ width: `${v}%` }}
                        />
                      </div>
                      <span className="text-white font-bold w-7 text-right text-[10px]">{v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Pedigree Summary */}
            <div className="p-6 bg-[#0C0C0C] border border-[#1A1A1A] space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.25em] text-white/50 uppercase">
                <Sparkles size={13} />
                <span>CURATORIAL LINEAGE</span>
              </div>
              <p className="font-mono text-xs text-white/80 uppercase tracking-wider leading-relaxed">
                // “{selectedArtifact.whyItMatters}”
              </p>
              <div className="pt-2 text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 uppercase border-t border-[#1A1A1A]">
                ORIGIN ARCHIVE: {selectedArtifact.brandOrigin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
