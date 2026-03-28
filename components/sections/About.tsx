'use client';

import { Card } from '@/components/ui/card';
import { User, Target, Coffee, Server, Code2, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageX = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const contentX = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 z-10 lg:py-40 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900/30 to-transparent">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-15 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Holographic Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 icebrick clip-corner shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Cpu className="w-5 h-5 text-white mr-3 animate-pulse drop-shadow-md" />
            <span className="text-sm font-mono text-white tracking-[0.3em] font-bold drop-shadow-md">MODULE: ABOUT_ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest uppercase">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              System Architect
            </span>
          </h2>
        </motion.div>

        {/* Layout: Person on left blending into scene, text on right */}
        <div className="grid lg:grid-cols-12 gap-0 items-center relative">
          
          {/* ── LEFT: Hologram Avatar Overlay ── */}
          <motion.div
            style={{ x: imageX, opacity: imageOpacity }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-[320px] sm:w-[380px] h-[500px] sm:h-[580px]">
              
              {/* Frozen Backlight for Avatar */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-cyan-200/20 blur-[100px] rounded-full mix-blend-screen z-0" />

              {/* The person with seamless bottom fade */}
              <div 
                className="relative w-full h-full z-10 mix-blend-screen"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 60%, transparent 100%)'
                }}
              >
                <Image 
                  src="/me/a1.png" 
                  alt="Vishnu KM Avatar" 
                  fill
                  className="object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                  priority
                />
              </div>

              {/* HUD Glitch Reticle Over Avatar (Icebrick style) */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-0 z-20"
              >
                <div className="text-[10px] text-white font-mono bg-white/10 backdrop-blur-xl border-l-2 border-white px-3 py-2 shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex flex-col clip-corner">
                  <span className="drop-shadow-sm">TRK: 98.42</span>
                  <span className="drop-shadow-sm">SYNC: STABLE</span>
                </div>
                <div className="w-16 h-[2px] bg-white mt-2 shadow-[0_0_10px_white]" />
              </motion.div>

              {/* Animated Target Box behind avatar */}
              <div className="absolute top-[30%] left-[10%] w-[80%] h-[50%] border-2 border-white/20 z-0 animate-pulse pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                 <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-white" />
                 <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-cyan-200" />
              </div>

            </div>
          </motion.div>
          
          {/* ── RIGHT: Icebrick Data Panels ── */}
          <motion.div 
            style={{ x: contentX }}
            className="lg:col-span-7 space-y-8 lg:-ml-8"
          >
            {/* Terminal Definition Log */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="icebrick p-3 clip-corner w-max shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                <span className="text-sm font-mono text-white drop-shadow-md">&gt; EXEC: fetch_profile_data()</span>
              </div>
            </motion.div>
              
            {/* Main Icebrick Data Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="icebrick p-8 sm:p-10 clip-corner-reverse shadow-[inner_0_0_50px_rgba(255,255,255,0.15),0_25px_50px_rgba(0,0,0,0.7)] group relative overflow-hidden"
            >
              {/* Internal Glacial Specular Light */}
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent w-[300%] h-full -rotate-45 animate-[glacialSweep_8s_ease-in-out_infinite] pointer-events-none z-10" />

              <div className="absolute right-0 top-0 h-full w-[2px] bg-white/30" />
              <div className="absolute right-0 top-0 h-1/4 w-[4px] bg-white animate-[hudScan_3s_linear_infinite] shadow-[0_0_10px_white]" />
              
              <p className="text-white text-lg sm:text-lg font-mono leading-[1.8] relative z-20 drop-shadow-md">
                <strong className="text-cyan-200 drop-shadow-[0_0_5px_cyan]">LOC:</strong> Kannur, Kerala [IN]<br/>
                <strong className="text-cyan-200 drop-shadow-[0_0_5px_cyan]">EDU:</strong> Master of Computer Applications<br/><br/>
                I architect and scale backend systems. I deliver real business impact by owning features end-to-end—from DB schema design to API orchestration. I thrive building systems that handle high throughput using <strong className="text-white bg-black/20 px-1 border border-white/20">Python, Django, FastAPI,</strong> and <strong className="text-white bg-black/20 px-1 border border-white/20">PostgreSQL.</strong>
              </p>
            </motion.div>

            {/* Tactical IceGrid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Server, value: '25+', label: 'Servers Deployed' },
                { icon: Code2, value: '15+', label: 'Tech Stacks' },
              ].map((stat, i) => (
                <div key={i} className="icebrick clip-corner p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 group hover:shadow-[inner_0_0_30px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white shadow-[0_0_5px_white] group-hover:animate-ping" />
                  <stat.icon className="w-8 h-8 text-white mb-3 drop-shadow-[0_0_10px_white] relative z-20" />
                  <div className="text-3xl font-extrabold font-mono text-white drop-shadow-[0_0_15px_white] relative z-20">{stat.value}</div>
                  <div className="text-cyan-100 font-mono text-xs uppercase tracking-widest mt-2 relative z-20">{stat.label}</div>
                  <div className="mt-4 w-full h-[2px] bg-black/40 relative z-20">
                    <div className="h-full bg-white shadow-[0_0_8px_white]" style={{ width: i === 0 ? '85%' : '60%' }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}