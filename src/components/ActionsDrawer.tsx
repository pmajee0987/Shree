import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Gamepad2, Upload, Bug, X, Sparkles, Check, Palette } from 'lucide-react';

interface ActionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onStartGame: () => void;
  onUploadImage: () => void;
  onToggleScreen: () => void;
  isScreenSharing: boolean;
  showDebug: boolean;
  onToggleDebug: () => void;
  themes?: Record<string, { name: string; primary: string; secondary: string }>;
  currentTheme?: string;
  onSelectTheme?: (themeKey: string) => void;
}

export function ActionsDrawer({
  isOpen,
  onClose,
  title,
  onStartGame,
  onUploadImage,
  onToggleScreen,
  isScreenSharing,
  showDebug,
  onToggleDebug,
  themes,
  currentTheme,
  onSelectTheme,
}: ActionsDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] pointer-events-auto"
          />

          {/* Glass Drawer Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-0 inset-x-0 z-[85] max-h-[85vh] bg-slate-950/90 border-t border-cyan-400/40 rounded-t-3xl backdrop-blur-2xl p-5 sm:p-6 overflow-y-auto pointer-events-auto shadow-[0_-10px_40px_rgba(6,182,212,0.3)] max-w-xl mx-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-cyan-400 animate-pulse" size={20} />
                <h2 className="text-lg font-bold font-mono tracking-widest text-cyan-100 uppercase">
                  {title || "SHREE MENU & SETTINGS"}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-300 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Language Support Banner */}
            <div className="mb-5 bg-cyan-950/50 border border-cyan-400/30 rounded-2xl p-3 flex items-center justify-between shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">🇮🇳</span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold font-mono tracking-wider text-cyan-200 uppercase">
                    INDIAN BENGALI (বাংলা) & HINDI
                  </span>
                  <span className="text-[9px] text-cyan-400/80 font-mono">
                    West Bengal Bangla, Hinglish & English Voice Enabled
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-bold font-mono px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/40">
                ACTIVE
              </span>
            </div>

            {/* Quick Action Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {/* Screen Share */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onToggleScreen();
                  onClose();
                }}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all group ${
                  isScreenSharing
                    ? 'bg-cyan-500/25 border-cyan-300 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    : 'bg-gradient-to-b from-cyan-900/30 to-blue-950/50 border-cyan-400/30 text-cyan-200'
                }`}
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:text-white group-hover:bg-cyan-400/20 transition-all">
                  <Monitor size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold">
                  {isScreenSharing ? 'SCREEN ON' : 'SHARE SCREEN'}
                </span>
              </motion.button>

              {/* Play Ludo */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onStartGame();
                  onClose();
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-b from-cyan-900/30 to-blue-950/50 border border-cyan-400/30 hover:border-cyan-300 text-center transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:text-white group-hover:bg-cyan-400/20 transition-all">
                  <Gamepad2 size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-200">
                  PLAY LUDO
                </span>
              </motion.button>

              {/* Upload Image */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  onUploadImage();
                  onClose();
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-b from-cyan-900/30 to-blue-950/50 border border-cyan-400/30 hover:border-cyan-300 text-center transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:text-white group-hover:bg-cyan-400/20 transition-all">
                  <Upload size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-200">
                  UPLOAD PIC
                </span>
              </motion.button>

              {/* Debug HUD Toggle */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onToggleDebug}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all group ${
                  showDebug
                    ? 'bg-cyan-500/20 border-cyan-300 text-white'
                    : 'bg-gradient-to-b from-cyan-900/30 to-blue-950/50 border-cyan-400/30 text-cyan-200'
                }`}
              >
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:text-white transition-all">
                  <Bug size={22} />
                </div>
                <span className="text-[10px] font-mono font-bold">
                  {showDebug ? 'DEBUG ON' : 'DEBUG HUD'}
                </span>
              </motion.button>
            </div>

            {/* Theme Selector Section */}
            {themes && onSelectTheme && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-cyan-400" />
                  <h3 className="text-xs font-bold font-mono tracking-wider text-cyan-200 uppercase">
                    COLOR THEMES
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(themes).map(([key, t]) => {
                    const isSelected = currentTheme === key;
                    return (
                      <button
                        key={key}
                        onClick={() => onSelectTheme(key)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-300 text-white shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                            : 'bg-cyan-950/30 border-cyan-500/20 text-cyan-200 hover:border-cyan-400/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/30"
                            style={{ backgroundColor: t.primary }}
                          />
                          <span className="text-xs font-mono font-medium">{t.name}</span>
                        </div>
                        {isSelected && <Check size={14} className="text-cyan-300" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
