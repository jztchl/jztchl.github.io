'use client';

import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative  border-t-4 border-white overflow-hidden backdrop-blur-3xl z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-30 mix-blend-screen" />
      
      {/* Glacial Sweep over footer edge */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 overflow-hidden shadow-[0_0_15px_cyan]">
         <div className="h-full bg-white w-[50%] animate-[glacialSweep_10s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand & Systems Arch */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="flex items-center space-x-3 text-2xl font-black font-mono tracking-widest text-white drop-shadow-[0_0_10px_white]">
               <Terminal className="w-6 h-6 text-cyan-200 drop-shadow-md" />
               <span>VISHNU<span className="text-cyan-400">_KM</span></span>
            </h3>
            <p className="text-white/60 font-mono text-sm leading-relaxed max-w-sm drop-shadow-sm font-light">
              Architecting high-performance backend systems and deploying scalable infrastructure. 
              Always building, always optimizing.
            </p>
            
            {/* Icebrick Tactical Status */}
            <div className="icebrick px-4 py-3 clip-corner w-max border-t border-l border-white/50 shadow-[inner_0_0_10px_rgba(255,255,255,0.1)]">
              <span className="flex items-center text-xs font-mono font-bold tracking-widest text-cyan-50">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-cyan-200 shadow-[0_0_5px_white]"></span>
                </span>
                SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* Quick Nav Arrays */}
          <div className="space-y-6">
            <h4 className="text-sm font-black font-mono tracking-[0.2em] text-cyan-200 uppercase drop-shadow-[0_0_5px_cyan]">Directories</h4>
            <div className="flex flex-col space-y-3">
              {[
                 { title: 'ABOUT', href: '#about' },
                 { title: 'SKILLS', href: '#skills' },
                 { title: 'ARCHIVES', href: '#projects' },
                 { title: 'TIMELINE', href: '#experience' }
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="group flex items-center text-white/50 hover:text-white transition-colors font-mono text-sm font-bold tracking-wider w-max"
                >
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-300 transition-all duration-300 mr-2">&gt;</span>
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Comm Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black font-mono tracking-[0.2em] text-cyan-200 uppercase drop-shadow-[0_0_5px_cyan]">Comms_Relay</h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:kmvishnu625@gmail.com"
                className="flex items-center text-white/50 hover:text-white transition-colors font-mono text-sm hover:drop-shadow-[0_0_5px_white]"
              >
                <Mail className="w-4 h-4 mr-3" />
                INITIATE_EMAIL
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/jztchl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icebrick p-3 clip-corner border-white/30 hover:border-white text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-md"
                >
                  <Github className="w-5 h-5 drop-shadow-[0_0_5px_white]" />
                </a>
                <a
                  href="http://linkedin.com/in/kmvishnu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icebrick p-3 clip-corner border-white/30 hover:border-white text-cyan-200/80 hover:text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 shadow-md"
                >
                  <Linkedin className="w-5 h-5 drop-shadow-[0_0_5px_white]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Matrix */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center bg-black/40 px-6 py-4 clip-corner-reverse shadow-[inner_0_0_15px_rgba(255,255,255,0.05)]">
          <p className="text-white/40 font-mono text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} VISHNU_KM [ALL_RIGHTS_RESERVED]
          </p>
          <p className="text-cyan-200/60 font-mono text-xs tracking-widest uppercase flex items-center mt-4 sm:mt-0 font-bold">
            [ COMPILED WITH <Heart className="w-3 h-3 mx-2 text-white animate-pulse drop-shadow-[0_0_10px_white]" fill="currentColor" /> IN TERMINAL ]
          </p>
        </div>
      </div>
    </footer>
  );
}