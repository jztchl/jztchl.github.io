'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navItems = [
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#education', label: 'ACADEMICS' },
  { href: '#projects', label: 'ARCHIVES' },
  { href: '#experience', label: 'TIMELINE' },
  { href: '#contact', label: 'COMMS' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2' 
        : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Icebrick Navigation Bar */}
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'icebrick clip-corner shadow-[0_10px_30px_rgba(0,0,0,0.6)] px-6 py-2 border-t-0' : 'bg-transparent px-2'}`}>
          
          {/* Logo / System ID */}
          <a href="#" className="flex items-center space-x-3 text-xl font-black font-mono tracking-widest text-white hover:text-cyan-200 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            <Terminal className="w-5 h-5 text-cyan-300 drop-shadow-md" />
            <span>VISHNU<span className="text-cyan-400">_KM</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-2 py-1 text-xs font-mono font-bold tracking-[0.2em] text-cyan-50 hover:text-white transition-colors duration-200 drop-shadow-sm"
              >
                <span className="opacity-0 group-hover:opacity-100 text-cyan-400 absolute left-0 -translate-x-full transition-all">[</span>
                {item.label}
                <span className="opacity-0 group-hover:opacity-100 text-cyan-400 absolute right-0 translate-x-full transition-all">]</span>
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <div className="hidden md:flex items-center">
            <a href="#contact">
               <Button variant="ghost" className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white text-white font-mono text-xs tracking-widest clip-corner-reverse transition-all uppercase rounded-none shadow-[inner_0_0_10px_rgba(255,255,255,0.2)]">
                 [ INITIALIZE ]
               </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10 clip-corner rounded-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 drop-shadow-md" /> : <Menu className="w-6 h-6 drop-shadow-md" />}
          </Button>
        </div>

        {/* Mobile Menu (Frosted Dropdown) */}
        {isMobileMenuOpen && (
          <div className="md:hidden icebrick mt-2 clip-corner-reverse border-t-2 border-r-2 border-white/50 animate-fade-in shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-sm font-mono tracking-[0.2em] font-bold text-white bg-black/20 border border-white/10 hover:border-cyan-300 hover:bg-white/10 transition-all clip-corner shadow-inner"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  &gt; {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-6 border-t border-white/20">
                <a href="https://github.com/kmvishn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 transition-colors drop-shadow-[0_0_5px_white]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="http://linkedin.com/in/kmvishnu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-200 transition-colors drop-shadow-[0_0_5px_white]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kmvishnu625@gmail.com" className="text-white hover:text-cyan-200 transition-colors drop-shadow-[0_0_5px_white]">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}