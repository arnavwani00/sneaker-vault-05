import React from 'react';
import { motion } from 'motion/react';

interface LightRaysProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'high';
}

export const LightRays: React.FC<LightRaysProps> = ({ className = '', intensity = 'medium' }) => {
  const getOpacity = () => {
    switch (intensity) {
      case 'subtle':
        return 'opacity-20';
      case 'high':
        return 'opacity-60';
      default:
        return 'opacity-35';
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${getOpacity()} ${className}`}>
      {/* Central God-Ray Beam */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-white/20 via-[#F7F5F0]/5 to-transparent blur-3xl transform -rotate-12"
      />
      {/* Secondary Accent Beam */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-0 right-1/4 w-[500px] h-[700px] bg-gradient-to-b from-[#C8A97E]/15 via-white/5 to-transparent blur-2xl transform rotate-6"
      />
    </div>
  );
};
