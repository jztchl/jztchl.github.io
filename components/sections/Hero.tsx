'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Zap, Terminal, Snowflake, ChevronDown, Crosshair } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const texts = [
  'Backend Engineer',
  'Python Developer',
  'API Specialist',
  'Problem Solver',
  'Tech Enthusiast'
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const personScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const personY = useTransform(scrollY, [0, 600], [0, -60]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* ── Volumetric Scene & Frost Grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0 hud-grid opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sky-200/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 1: TEXT BEHIND THE PERSON  
          ══════════════════════════════════════════════════ */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-[1] pointer-events-none px-4"
      >
        {/* (SYS.ADMIN removed upon request) */}


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(6rem,20vw,16rem)] font-black text-white uppercase tracking-widest whitespace-nowrap select-none pointer-events-none drop-shadow-[0_0_50px_rgba(255,255,255,0.8)] mix-blend-overlay"
        >
          FROSTCODE
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════
          LAYER 2: THE HOLOGRAPHIC PERSON & RINGS
          ══════════════════════════════════════════════════ */}
      <motion.div 
        style={{ scale: personScale, y: personY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] w-[clamp(320px,55vw,700px)] h-[85vh] pointer-events-none flex justify-center items-end"
      >
        {/* Holographic HUD Rings Orbiting the Person */}
        <div className="absolute top-1/2 left-1/2 w-[120%] aspect-square -translate-x-1/2 -translate-y-[40%] mix-blend-screen opacity-70">
           {/* Outer Ring */}
           <svg className="absolute inset-0 w-full h-full animate-[spinSlow_20s_linear_infinite]" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.2" strokeDasharray="4 2 1 2" />
             <path d="M50 2L50 6M50 94L50 98M2 50L6 50M94 50L98 50" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.5" />
           </svg>
           {/* Inner Ring */}
           <svg className="absolute inset-[10%] w-[80%] h-[80%] animate-[spinSlowReverse_15s_linear_infinite]" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="0.1" strokeDasharray="1 3" />
             <circle cx="50" cy="2" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
             <circle cx="50" cy="98" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
           </svg>
        </div>

        {/* Thick Frozen Fog behind avatar */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[100%] h-[60%] bg-gradient-to-t from-cyan-200/30 via-white/10 to-transparent blur-[80px] rounded-full mix-blend-screen" />
        
        {/* The Avatar */}
        <div 
          className="relative w-full h-full z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 75%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 75%, transparent 98%)'
          }}
        >
          <Image 
            src="/me/a4.png" 
            alt="Vishnu KM" 
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            priority
          />
        </div>

        {/* Surface Freezing Fog right at the feet */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[250%] h-48 bg-gradient-to-t from-white/20 via-white/5 to-transparent blur-[40px] rounded-[100%] mix-blend-screen" />
      </motion.div>

      {/* ══════════════════════════════════════════════════
          LAYER 3: FOREGROUND ICEBRICK HUD 
          ══════════════════════════════════════════════════ */}
      <div className="relative z-[10] flex flex-col items-center justify-end min-h-screen w-full pb-8 sm:pb-12 pointer-events-none">
        
        <div className="flex-1" />

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto px-4 sm:px-8 pointer-events-auto"
        >
          {/* Liquid Glass Icebrick Panel */}
          <div className="relative icebrick clip-corner p-6 sm:p-10 shadow-[inner_0_0_50px_rgba(255,255,255,0.2),0_30px_60px_rgba(0,0,0,0.8)]">
            
            {/* Glacial Sweep Animation */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent w-[300%] h-full -rotate-45 animate-[glacialSweep_10s_ease-in-out_infinite] pointer-events-none" />

            {/* Corner Bracket Accents (Thick white frost lines) */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white drop-shadow-[0_0_5px_white]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-200 drop-shadow-[0_0_5px_white]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
              
              {/* Left Data Readout */}
              <div className="space-y-5">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 border border-white/30 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                >
                  <Crosshair className="w-4 h-4 text-white animate-spin-slow drop-shadow-md" />
                  <span className="text-xs font-mono text-white tracking-[0.2em] font-bold drop-shadow-sm">TARGET: VISHNU.KM // ONLINE</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] uppercase font-mono">
                  <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">IDENT:</span> <br className="sm:hidden" />
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">VISHNU KM</span>
                </h2>
                
                {/* Typing Logic Box */}
                <div className="flex items-center space-x-3 h-12 bg-black/20 px-5 border-l-4 border-cyan-400 backdrop-blur-md shadow-inner">
                  <Code className="w-5 h-5 text-cyan-200 shrink-0 drop-shadow-md" />
                  <span className="font-mono text-lg sm:text-xl text-white tracking-[0.1em] drop-shadow-sm">{currentText}</span>
                  <span className="w-2 h-5 bg-cyan-300 animate-pulse shadow-[0_0_10px_cyan]" />
                </div>

                <p className="text-cyan-50/80 text-sm sm:text-base leading-relaxed max-w-lg font-mono drop-shadow-md">
                  [LOG] Crafting highly optimized backend architectures.<br/>
                  [SYS] Awaiting input authorization for <strong className="text-white drop-shadow-[0_0_5px_white]">extraordinary builds</strong>.
                </p>
              </div>

              {/* Right: Tactical Buttons */}
              <div className="flex flex-row lg:flex-col gap-3">
                <Button 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/25 text-white border-t border-l border-white/50 border-b border-r border-white/10 hover:border-white px-6 sm:px-8 py-6 font-mono font-bold tracking-widest transition-all duration-300 clip-corner shadow-[inset_0_0_20px_rgba(255,255,255,0.3),0_5px_15px_rgba(0,0,0,0.5)] rounded-none"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  [ ACCESS_ARCHIVE ]
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-cyan-900/30 border-t border-l border-cyan-400/40 border-b border-r border-cyan-500/20 text-cyan-50 hover:text-white hover:bg-cyan-800/60 px-6 sm:px-8 py-6 font-mono font-bold tracking-widest transition-all duration-300 clip-corner rounded-none shadow-[inset_0_0_10px_rgba(6,182,212,0.3)]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  [ INITIATE_COMMS ]
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 pointer-events-auto cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-white hover:text-cyan-200 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating Tactical Readouts (Icebricks) ── */}
      <motion.div 
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[18%] right-[5%] z-[8] hidden lg:block"
      >
        <div className="icebrick p-5 clip-corner-reverse border-t-2 border-l-2 border-white/60 shadow-[inner_0_0_30px_rgba(255,255,255,0.2),0_15px_30px_rgba(0,0,0,0.6)]">
          <div className="text-[10px] text-white border-b border-white/30 pb-1 mb-2 font-mono tracking-widest drop-shadow-md">MODULE: SNOW.EXE</div>
          <pre className="text-xs text-white font-mono leading-relaxed drop-shadow-md">
            <code>
              <span className="text-purple-300">async</span> <span className="text-blue-300">def</span> <span className="text-green-300">build</span>():{'\n'}
              {'  '}<span className="text-purple-300">await</span> <span className="text-orange-300">snow</span>.fall(){'\n'}
              {'  '}<span className="text-blue-300">return</span> <span className="text-white">&quot;❄️ + 💻&quot;</span>
            </code>
          </pre>
        </div>
      </motion.div>

      {/* ── Floating Stats Badge (Icebricks) ── */}
      <motion.div 
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[28%] left-[5%] z-[8] hidden lg:block"
      >
        <div className="icebrick p-5 clip-corner border-t-2 border-l-2 border-cyan-200/60 shadow-[inner_0_0_30px_rgba(255,255,255,0.2),0_15px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center space-x-4">
             <div className="text-3xl font-mono font-bold text-white drop-shadow-[0_0_15px_white]">25<span className="text-cyan-300">+</span></div>
             <div className="text-[10px] text-white/80 font-mono tracking-widest uppercase drop-shadow-sm">Systems<br/>Deployed</div>
          </div>
          <div className="mt-3 h-[2px] w-full bg-slate-800">
             <div className="h-full bg-white w-[80%] animate-[pulse_2s_infinite] shadow-[0_0_10px_white]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}