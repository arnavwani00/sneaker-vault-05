import React, { useState } from 'react';
import { ArchivalHeader } from './components/Navigation/ArchivalHeader';
import { Chapter01Entry } from './components/Chapters/Chapter01Entry';
import { Chapter02Manifesto } from './components/Chapters/Chapter02Manifesto';
import { Chapter03Archive } from './components/Chapters/Chapter03Archive';
import { Chapter04ArtifactReveal } from './components/Chapters/Chapter04ArtifactReveal';
import { Chapter05Timeline } from './components/Chapters/Chapter05Timeline';
import { Chapter06SneakerDNA } from './components/Chapters/Chapter06SneakerDNA';
import { Chapter07ResaleLab } from './components/Chapters/Chapter07ResaleLab';
import { Chapter08AuthLab } from './components/Chapters/Chapter08AuthLab';
import { Chapter09SneakerIdentity } from './components/Chapters/Chapter09SneakerIdentity';
import { Chapter10Vault } from './components/Chapters/Chapter10Vault';
import { Chapter11Colophon } from './components/Chapters/Chapter11Colophon';
import { SneakerArtifact } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentChapter, setCurrentChapter] = useState('chapter-entry');
  const [selectedArtifact, setSelectedArtifact] = useState<SneakerArtifact | null>(null);
  const [dnaSelectedArtifact, setDnaSelectedArtifact] = useState<SneakerArtifact | null>(null);
  const [authSelectedArtifact, setAuthSelectedArtifact] = useState<SneakerArtifact | null>(null);

  const scrollToChapter = (chapterId: string) => {
    setCurrentChapter(chapterId);
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUnlockVault = () => {
    setUnlocked(true);
  };

  const handleEnterMuseum = () => {
    setUnlocked(true);
    scrollToChapter('chapter-manifesto');
  };

  const handleJumpToDna = (artifact: SneakerArtifact) => {
    setDnaSelectedArtifact(artifact);
    scrollToChapter('chapter-dna');
  };

  const handleJumpToResale = (_artifact: SneakerArtifact) => {
    scrollToChapter('chapter-resale');
  };

  const handleJumpToAuth = (artifact: SneakerArtifact) => {
    setAuthSelectedArtifact(artifact);
    scrollToChapter('chapter-auth');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F7F5F0] relative selection:bg-[#F7F5F0] selection:text-[#0A0A0A]">
      {/* Sticky Archival Navigation Header */}
      <ArchivalHeader
        currentChapter={currentChapter}
        onNavigate={scrollToChapter}
        unlocked={unlocked}
      />

      {/* Main Continuous Single-Screen Exhibition Flow */}
      <main className="w-full">
        {/* Chapter 01 — THE ENTRY (Scanner & Vault Door Unlock) */}
        <Chapter01Entry
          unlocked={unlocked}
          onUnlock={handleUnlockVault}
          onEnter={handleEnterMuseum}
        />

        {/* Chapter 02 — WHY DOES A SHOE MATTER? (Cultural Manifesto) */}
        <Chapter02Manifesto />

        {/* Chapter 03 — THE ARCHIVE (Horizontal & Grid Gallery of 21 Objects) */}
        <Chapter03Archive onSelectArtifact={(artifact) => setSelectedArtifact(artifact)} />

        {/* Chapter 05 — THE TIMELINE (1985 to 2024+ Evolution) */}
        <Chapter05Timeline />

        {/* Chapter 06 — SNEAKER DNA (Anatomy Deconstruction & Radar) */}
        <Chapter06SneakerDNA initialArtifact={dnaSelectedArtifact} />

        {/* Chapter 07 — THE RESALE LAB (Valuation & Hype Physics Simulator) */}
        <Chapter07ResaleLab />

        {/* Chapter 08 — THE AUTHENTICATION LAB (Forensic 365nm UV Scanning) */}
        <Chapter08AuthLab initialArtifact={authSelectedArtifact} />

        {/* Chapter 09 — BUILD YOUR SNEAKER IDENTITY (Archetype Synthesizer) */}
        <Chapter09SneakerIdentity />

        {/* Chapter 10 — THE VAULT (Sanctum of Grails with Dark Veil & Light Rays) */}
        <Chapter10Vault onSelectArtifact={(artifact) => setSelectedArtifact(artifact)} />

        {/* Chapter 11 — FINAL EXPERIENCE (Colophon, Declaration & Guestbook) */}
        <Chapter11Colophon />
      </main>

      {/* Chapter 04 — THE ARTIFACT REVEAL (Deep-Dive Modal Takeover) */}
      <AnimatePresence>
        {selectedArtifact && (
          <Chapter04ArtifactReveal
            artifact={selectedArtifact}
            onClose={() => setSelectedArtifact(null)}
            onJumpToDna={handleJumpToDna}
            onJumpToResale={handleJumpToResale}
            onJumpToAuth={handleJumpToAuth}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
