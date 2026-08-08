import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Plus, Settings } from 'lucide-react';

interface AquaticControlsProps {
  isActive: boolean;
  isListening: boolean;
  isSpeaking: boolean;
  micLevel: number;
  outputLevel: number;
}

export function AquaticControls({
  isActive,
  isListening,
  isSpeaking,
  micLevel,
  outputLevel,
}: AquaticControlsProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-8 bg-gradient-to-t from-[#010714] via-[#020b18]/90 to-transparent flex flex-col items-center justify-end z-40 pointer-events-none">
      
      {/* Waveform Visualization & Status Text */}
      <div className="flex flex-col items-center mb-4 pointer-events-none">
        {/* Animated Audio Waveform Bars */}
        <div className="flex items-center gap-1.5 h-10 mb-2">
          {isSpeaking ? (
            // Waveform reacting to AI Speaking
            Array.from({ length: 14 }).map((_, i) => (
              <motion.div
                key={`speaking-bar-${i}`}
                initial={{ height: 4 }}
                animate={{
                  height: [
                    Math.random() * 20 + 8,
                    Math.random() * 38 + 14,
                    Math.random() * 12 + 6,
                  ],
                  opacity: [0.6, 1, 0.7],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.03,
                }}
                className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            ))
          ) : isListening ? (
            // Waveform reacting to user Microphone level
            Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`listening-bar-${i}`}
                animate={{
                  height: Math.max(4, micLevel * 220 * (0.8 + Math.random() * 0.8)),
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{ duration: 0.1 }}
                className="w-1 rounded-full bg-gradient-to-t from-blue-600 to-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
              />
            ))
          ) : (
            // Ambient subtle waveform
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`idle-bar-${i}`}
                className="w-1 rounded-full bg-cyan-400/30 transition-all duration-300"
                style={{
                  height: `${[10, 18, 26, 16, 24, 18, 12, 8][i]}px`,
                }}
              />
            ))
          )}
        </div>

        {/* Listening / Status Label */}
        <span className="text-xs sm:text-sm font-medium tracking-widest text-cyan-200/90 uppercase font-sans drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          {isActive
            ? isSpeaking
              ? "SHREE is speaking..."
              : isListening
              ? "I'm listening..."
              : "Processing..."
            : "Tap avatar to speak"}
        </span>
      </div>
    </div>
  );
}
