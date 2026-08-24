import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ShieldCheck, Compass, Eye, Cpu, Sliders, Scan, UserCheck, KeyRound, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';

interface ArchivalHeaderProps {
  currentChapter: string;
  onNavigate: (chapterId: string) => void;
  unlocked: boolean;
}

export const ArchivalHeader: React.FC<ArchivalHeaderProps> = ({
  currentChapter,
  onNavigate,
  unlocked,
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = sound.toggleMute();
    setIsMuted(!active);
  };

  const navItems = [
    { id: 'chapter-manifesto', label: '02 — Manifesto', icon: Compass },
    { id: 'chapter-archive', label: '03 — The Archive', icon: Eye },
    { id: 'chapter-timeline', label: '05 — Timeline', icon: Sparkles },
    { id: 'chapter-dna', label: '06 — DNA Lab', icon: Cpu },
    { id: 'chapter-resale', label: '07 — Resale Lab', icon: Sliders },
    { id: 'chapter-auth', label: '08 — Auth Lab', icon: Scan },
    { id: 'chapter-identity', label: '09 — Identity', icon: UserCheck },
    { id: 'chapter-vault', label: '10 — The Vault', icon: KeyRound },
  ];

  return (
    <header
      id="main-archival-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1A1A1A] py-3.5 shadow-2xl'
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm py-4 border-b border-[#1A1A1A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / System Status */}
        <div
          onClick={() => onNavigate('chapter-entry')}
          className="cursor-pointer group flex items-center gap-3.5"
          id="header-brand-logo"
        >
          <div className="w-8 h-8 rounded-none bg-[#0C0C0C] border border-[#1A1A1A] group-hover:border-[#F7F5F0] flex items-center justify-center transition-colors">
            <div className="w-2 h-2 bg-[#F7F5F0] rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-base sm:text-lg tracking-tighter text-[#F7F5F0] uppercase">
                The Sneaker Vault
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-[0.2em] font-bold uppercase border border-[#1A1A1A] bg-[#0C0C0C] text-[#F7F5F0]/70">
                Archival
              </span>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono tracking-[0.3em] uppercase opacity-50 hidden md:flex">
              <span>Status: Active</span>
              <span>•</span>
              <span>Obsidian Vault 01</span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Chapter Jump Links with Bold Typography */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentChapter === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  sound.playMechanicalClick();
                  onNavigate(item.id);
                }}
                className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-[0.25em] uppercase transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#F7F5F0] text-[#0A0A0A] shadow-sm'
                    : 'text-[#F7F5F0]/60 hover:text-[#F7F5F0] hover:bg-[#0C0C0C] border border-transparent hover:border-[#1A1A1A]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Sound, Vault Status, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Atmosphere Toggle */}
          <button
            id="header-sound-toggle"
            onClick={handleSoundToggle}
            title={isMuted ? 'Enable Atmospheric Audio' : 'Mute Audio'}
            className={`p-2 border border-[#1A1A1A] transition-all flex items-center gap-1.5 text-xs font-mono bg-[#0C0C0C] ${
              !isMuted
                ? 'border-[#F7F5F0]/40 text-[#F7F5F0]'
                : 'text-[#F7F5F0]/40 hover:text-[#F7F5F0] hover:border-[#1A1A1A]'
            }`}
          >
            {!isMuted ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span className="hidden sm:inline text-[9px] uppercase font-mono tracking-[0.2em] font-bold">
              {!isMuted ? 'Sound On' : 'Muted'}
            </span>
          </button>

          {/* Vault Status Indicator */}
          <div
            id="header-vault-status"
            className="flex items-center gap-2 px-3 py-1.5 bg-[#0C0C0C] border border-[#1A1A1A] text-[10px] font-mono tracking-[0.2em] font-bold uppercase"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${unlocked ? 'bg-emerald-400' : 'bg-red-500 animate-pulse'}`} />
            <span className="text-[#F7F5F0]/80 hidden sm:inline">
              {unlocked ? 'Vault Unlocked' : 'Vault Active'}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="header-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white border border-[#1A1A1A] bg-[#0C0C0C]"
          >
            <span className="sr-only">Open navigation menu</span>
            <div className="w-4 h-3 flex flex-col justify-between">
              <span className="block h-0.5 w-full bg-current"></span>
              <span className="block h-0.5 w-full bg-current"></span>
              <span className="block h-0.5 w-full bg-current"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C0C0C] border-b border-[#1A1A1A] px-4 py-4 mt-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                sound.playMechanicalClick();
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-[#1A1A1A] flex items-center justify-between"
            >
              <span>{item.label}</span>
              <item.icon size={14} className="text-white/40" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
