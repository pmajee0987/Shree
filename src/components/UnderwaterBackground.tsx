import React, { useMemo } from 'react';
import { motion } from 'motion/react';

export function UnderwaterBackground() {
  // Generate random bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 6, // 6px - 18px
      left: `${Math.random() * 94 + 3}%`,
      duration: Math.random() * 10 + 8, // 8s - 18s
      delay: Math.random() * 8,
      wobble: Math.random() * 20 - 10,
    }));
  }, []);

  // Generate floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020b18]">
      {/* Base Deep Ocean Radial Gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'radial-gradient(circle at 50% 40%, #032147 0%, #020f26 55%, #010714 100%)'
        }}
      />

      {/* Top Underwater Surface Glow & Light Rays */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-cyan-500/15 via-blue-500/5 to-transparent blur-xl" />
      
      {/* Light Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[80vh] opacity-25 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="350,0 450,0 550,600 250,600" fill="url(#ray1)" opacity="0.6" />
          <polygon points="200,0 300,0 400,600 100,600" fill="url(#ray2)" opacity="0.4" />
          <polygon points="500,0 600,0 720,600 380,600" fill="url(#ray1)" opacity="0.5" />
          <defs>
            <linearGradient id="ray1" x1="400" y1="0" x2="400" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="0.6" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="1" stopColor="#020b18" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ray2" x1="250" y1="0" x2="250" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="1" stopColor="#020b18" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle Floating Water Particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute rounded-full bg-cyan-200/40 blur-[0.5px]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: '0 0 6px rgba(34, 211, 238, 0.6)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Rising Bubbles */}
      {bubbles.map((b) => (
        <motion.div
          key={`bubble-${b.id}`}
          className="absolute rounded-full border border-cyan-300/40 bg-cyan-400/10 backdrop-blur-[1px]"
          style={{
            left: b.left,
            bottom: '-20px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            boxShadow: 'inset 0 0 4px rgba(255,255,255,0.4), 0 0 8px rgba(6,182,212,0.3)',
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, b.wobble, 0, -b.wobble, 0],
            opacity: [0, 0.7, 0.8, 0.4, 0],
            scale: [0.8, 1, 1.1, 0.9],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: 'linear',
          }}
        >
          {/* Bubble reflection dot */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-white/70 rounded-full" />
        </motion.div>
      ))}

      {/* Faint Fish Silhouettes Swimming Across */}
      <motion.div
        className="absolute top-[35%] w-12 h-6 text-cyan-400/15 pointer-events-none"
        initial={{ x: '-10vw', y: 0 }}
        animate={{
          x: ['-10vw', '110vw'],
          y: [0, 15, -10, 5, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
      >
        <svg viewBox="0 0 48 24" fill="currentColor" className="w-full h-full opacity-30">
          <path d="M42 12C36 6 22 2 12 12C22 22 36 18 42 12ZM42 12L48 6V18L42 12Z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[65%] w-10 h-5 text-blue-300/10 pointer-events-none"
        initial={{ x: '110vw', y: 0, scaleX: -1 }}
        animate={{
          x: ['110vw', '-10vw'],
          y: [0, -20, 10, -5, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
          delay: 10,
        }}
      >
        <svg viewBox="0 0 48 24" fill="currentColor" className="w-full h-full opacity-25">
          <path d="M42 12C36 6 22 2 12 12C22 22 36 18 42 12ZM42 12L48 6V18L42 12Z" />
        </svg>
      </motion.div>

      {/* Subtle Vignette Edge */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
    </div>
  );
}
