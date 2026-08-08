import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface AquaticHeaderProps {
  isActive: boolean;
  onOpenMenu: () => void;
}

export function AquaticHeader({ isActive, onOpenMenu }: AquaticHeaderProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Left Side: Water-drop Menu Button + SHREE Name */}
      <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto">
        {/* Glass Water-Drop Style Menu Button */}
        <motion.button
          onClick={onOpenMenu}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full rounded-tl-sm bg-cyan-950/40 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center group overflow-hidden transition-all duration-300 active:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          title="Open Menu"
        >
          {/* Water reflection highlight */}
          <div className="absolute top-1 left-2 w-4 h-2 bg-white/40 rounded-full blur-[0.5px]" />
          
          {/* 3 Minimal Horizontal Menu Lines */}
          <div className="flex flex-col gap-1.5 items-center justify-center z-10">
            <span className="w-5 h-[2px] bg-cyan-200 rounded-full group-hover:w-6 transition-all duration-300 group-hover:bg-cyan-100" />
            <span className="w-4 h-[2px] bg-cyan-300/80 rounded-full group-hover:w-5 transition-all duration-300 group-hover:bg-cyan-100" />
            <span className="w-5 h-[2px] bg-cyan-200 rounded-full group-hover:w-4 transition-all duration-300 group-hover:bg-cyan-100" />
          </div>

          {/* Liquid Ripple Effect on Hover */}
          <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </motion.button>

        {/* Brand Name SHREE with Letter-by-Letter Liquid Glow Animation */}
        <div className="flex items-center gap-0.5 sm:gap-1 pl-1">
          {['S', 'H', 'R', 'E', 'E'].map((letter, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -4, 0],
                scale: [1, 1.08, 1],
                color: ['#f0fdf4', '#22d3ee', '#38bdf8', '#f0fdf4'],
                textShadow: [
                  '0 0 10px rgba(34,211,238,0.6)',
                  '0 0 22px rgba(34,211,238,1), 0 0 35px rgba(6,182,212,0.8)',
                  '0 0 10px rgba(34,211,238,0.6)',
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
              className="inline-block text-2xl sm:text-3xl font-black tracking-[2px] sm:tracking-[4px] uppercase font-sans select-none drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Right Side: System Status Card */}
      <div className="pointer-events-auto">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30 rounded-2xl px-3.5 sm:px-4 py-2 flex items-center gap-3 sm:gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_15px_rgba(6,182,212,0.15)]">
          {/* Virtual System Labels */}
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-cyan-200/90 uppercase leading-tight font-mono">
              VIRTUAL
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-wider text-cyan-400/70 uppercase leading-tight font-mono">
              SYSTEM
            </span>
          </div>

          {/* Active Status Pulse Indicator */}
          <div className="flex items-center gap-1.5 bg-cyan-950/50 border border-cyan-400/30 px-2 py-1 rounded-full">
            <motion.span
              animate={
                isActive
                  ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }
                  : { opacity: 0.4 }
              }
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-2 h-2 rounded-full ${
                isActive
                  ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
                  : 'bg-cyan-600/50'
              }`}
            />
            <span className="text-[9px] font-bold tracking-wider text-cyan-100 uppercase font-mono">
              {isActive ? 'ACTIVE' : 'STANDBY'}
            </span>
          </div>

          <div className="w-px h-6 bg-cyan-500/20" />

          {/* Dynamic Time */}
          <span className="text-xs sm:text-sm font-bold font-mono tracking-wider text-cyan-100 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]">
            {currentTime || '21:11'}
          </span>
        </div>
      </div>
    </header>
  );
}
