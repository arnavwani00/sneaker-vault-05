import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../ReactBits/ScrollReveal';
import { PenTool, CheckCircle, Heart, Globe, Sparkles, Send, BookMarked } from 'lucide-react';
import { sound } from '../../utils/audio';

export const Chapter11Colophon: React.FC = () => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorCity, setVisitorCity] = useState('');
  const [visitorReflection, setVisitorReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [guestbook, setGuestbook] = useState([
    {
      name: 'KABIR S.',
      city: 'NEW DELHI',
      reflection: 'Seeing Banjaaran and Gully Labs displayed alongside Jordan 1s and Tokyo Design Studio validates the Indian street renaissance.',
      timestamp: '2026.08.24 // 14:02 IST',
    },
    {
      name: 'ELENA V.',
      city: 'MILAN',
      reflection: 'The Speedcat and F1 motorsport cross-pollination is documented with unbelievable curatorial precision.',
      timestamp: '2026.08.23 // 19:44 CET',
    },
    {
      name: 'KENJI T.',
      city: 'TOKYO',
      reflection: 'The Niobium MSNB1 modular breakdown is magnificent. A masterpiece of modern digital museum curation.',
      timestamp: '2026.08.22 // 11:15 JST',
    },
  ]);

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorReflection.trim()) return;
    sound.playMechanicalClick();

    const newEntry = {
      name: visitorName.toUpperCase(),
      city: visitorCity ? visitorCity.toUpperCase() : 'GLOBAL ARCHIVIST',
      reflection: visitorReflection,
      timestamp: new Date().toISOString().replace('T', ' // ').slice(0, 19),
    };

    setGuestbook([newEntry, ...guestbook]);
    setVisitorName('');
    setVisitorCity('');
    setVisitorReflection('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="chapter-colophon"
      className="relative min-h-screen py-24 sm:py-32 bg-[#0A0A0A] bg-vault-grain text-[#F7F5F0] border-t border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.25em] font-bold text-white/80 uppercase mb-6">
            <BookMarked size={13} />
            <span>CHAPTER 11 // FINAL EXPERIENCE & COLOPHON</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.88] mb-6">
            FOOTWEAR AS FINE ART: <br />
            <span className="text-stroke-thick text-transparent">
              THE CLOSING THESIS
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-mono uppercase tracking-wider leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
            The Sneaker Vault exists to memorialize the human narrative woven into every sole. From athletic stadiums to subcultural streets, these artifacts are physical proof of where we have stood.
          </p>
        </ScrollReveal>

        {/* Closing Manifesto Block */}
        <div className="p-8 sm:p-12 bg-[#0C0C0C] border border-[#1A1A1A] mb-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <div className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-white/40">
              CURATORIAL SUMMARY // PERMANENT RECORD
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase text-white tracking-tight">
              THE PERMANENT ARCHIVE DECLARATION
            </h3>
            <p className="font-mono text-sm sm:text-base text-[#F7F5F0] uppercase tracking-wide leading-relaxed border-l-2 border-[#F7F5F0] pl-4">
              “We do not preserve sneakers because of their monetary resale tickers or hype indices. We preserve them because they represent our aspirations, our rebellions, our regional craftsmanship, and our shared cultural memory.”
            </p>
            <p className="text-xs font-mono text-white/60 uppercase tracking-wider leading-relaxed">
              // Curated across 7 iconic design houses—Nike, Puma, Comet, Gully Labs, One8, Banjaaran, and New Balance—this archive captures the convergence of heritage sport, Japanese utilitarianism, Western counter-culture, and the contemporary Indian renaissance.
            </p>
          </div>
        </div>

        {/* Visitor Archival Guestbook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Guestbook Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#0C0C0C] border border-[#1A1A1A] p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#F7F5F0] uppercase font-bold tracking-[0.25em]">
              <PenTool size={14} />
              <span>SIGN THE MUSEUM LOGBOOK</span>
            </div>
            <h4 className="font-display font-black text-xl uppercase text-white tracking-tight">
              ARCHIVAL IMPRINT
            </h4>
            <p className="text-xs font-mono text-white/50 uppercase tracking-wider">
              // Leave your personal reflection on the exhibition for future visitors.
            </p>

            <form onSubmit={handleGuestbookSubmit} className="space-y-4 pt-2">
              <div>
                <input
                  type="text"
                  placeholder="YOUR NAME / MONIKER"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  required
                  className="w-full bg-[#141414] border border-[#1A1A1A] focus:border-[#F7F5F0] px-4 py-2.5 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none uppercase"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="CITY / ORIGIN (E.G. NEW DELHI, LONDON)"
                  value={visitorCity}
                  onChange={(e) => setVisitorCity(e.target.value)}
                  className="w-full bg-[#141414] border border-[#1A1A1A] focus:border-[#F7F5F0] px-4 py-2.5 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none uppercase"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="YOUR CURATORIAL REFLECTION..."
                  value={visitorReflection}
                  onChange={(e) => setVisitorReflection(e.target.value)}
                  required
                  className="w-full bg-[#141414] border border-[#1A1A1A] focus:border-[#F7F5F0] px-4 py-2.5 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none uppercase"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#F7F5F0] text-[#0A0A0A] font-mono text-xs font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={13} />
                <span>INSCRIBE IN LOGBOOK</span>
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 justify-center uppercase font-bold tracking-wider"
                >
                  <CheckCircle size={14} />
                  <span>Your reflection has been entered into the vault logbook.</span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Guestbook Entries Stream (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/40 mb-2">
              RECENT VISITOR INSCRIPTIONS // 03+
            </div>

            {guestbook.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 bg-[#0C0C0C] border border-[#1A1A1A] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-white uppercase">{entry.name}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-[#F7F5F0] font-bold uppercase">{entry.city}</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/30 tracking-wider">{entry.timestamp}</span>
                </div>
                <p className="text-xs font-mono text-white/80 uppercase tracking-wide leading-relaxed">
                  // “{entry.reflection}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curatorial Colophon & Footer */}
        <div className="pt-12 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-white/40">
          <div>
            <span className="text-white font-black tracking-widest uppercase text-sm">THE SNEAKER VAULT</span>
            <span className="block text-[9px] font-mono text-white/30 tracking-wider uppercase mt-0.5">
              NON-ECOMMERCE ARCHIVAL EXHIBITION & DIGITAL MUSEUM
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest text-white/60">
            <span>21 OBJECTS</span>
            <span>•</span>
            <span>07 DESIGN HOUSES</span>
            <span>•</span>
            <span>PERMANENT COLLECTION</span>
          </div>

          <div className="text-right text-[9px] font-mono font-bold tracking-widest text-white/30 uppercase">
            ALL IMAGERY SERVED AS HIGH-RES LUXURY ARTIFACT PHOTOGRAPHY
          </div>
        </div>
      </div>
    </section>
  );
};
