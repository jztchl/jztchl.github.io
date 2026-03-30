'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Send, Terminal, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/send_email', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
      });
      if (response.ok) {
         setStatus('success');
         setFormData({ name: '', email: '', message: '' });
      } else {
         setStatus('error');
      }
    } catch {
       setStatus('error');
    }
    
    setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 z-10 overflow-hidden lg:py-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent">
      
      {/* HUD Background Grid (Frosted) */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-15 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Holographic Form Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-3 mb-6 icebrick px-5 py-2 clip-corner drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Terminal className="w-4 h-4 text-white hover:animate-pulse" />
            <span className="text-sm font-mono text-cyan-50 tracking-widest uppercase pr-3 font-bold">/connect_mainframe</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest uppercase mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-100 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              Let&apos;s Build Together
            </span>
          </h2>
          <p className="text-white/80 text-lg font-mono tracking-wide max-w-xl mx-auto leading-relaxed drop-shadow-md">
            [SYS_PROMPT: Whether it&apos;s optimizing complex workflows or orchestrating AI systems, ping me.]
          </p>
        </motion.div>

        {/* Layout: Icebrick Terminal Form with frozen person rendering */}
        <div className="relative max-w-5xl mx-auto mt-10">

          {/* Frozen Avatar Hologram leaking into the form */}
          <div className="absolute -right-8 sm:right-0 bottom-0 w-[280px] sm:w-[340px] h-[500px] z-[2] hidden lg:block pointer-events-none">
            
            {/* Ice Fog Backglow */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-cyan-200/20 blur-[80px] rounded-full mix-blend-screen" />
            
            <div 
              className="relative w-full h-full mix-blend-screen"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 95%)'
              }}
            >
              <Image 
                src="/me/a2.png" 
                alt="Vishnu KM Terminal" 
                fill
                className="object-contain object-bottom drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
                priority
              />
            </div>
            {/* Frozen ground condensation */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[220%] h-32 bg-white/10 blur-[30px] rounded-full mix-blend-screen" />

            {/* Frost Social Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -left-12 bottom-32 flex flex-col space-y-5 z-30 pointer-events-auto"
            >
              {[
                { icon: Github, href: 'https://github.com/jztchl', color: 'hover:border-cyan-200' },
                { icon: Mail, href: 'mailto:vishnukm.dev@gmail.com', color: 'hover:border-blue-200' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vishnu-k-m-4ba69826a/', color: 'hover:border-sky-200' }
              ].map((social, i) => (
                 <Link key={i} href={social.href} target="_blank" className={`icebrick p-3 clip-corner border-t border-l border-white/60 hover:scale-[1.15] hover:bg-white/20 transition-all duration-300 ${social.color} shadow-[0_15px_30px_rgba(0,0,0,0.8)]`}>
                   <social.icon className="w-5 h-5 text-white drop-shadow-[0_0_5px_white]" />
                 </Link>
              ))}
            </motion.div>

            {/* Tactical Online Badge */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-16 -left-4 z-20 text-xs font-mono font-bold tracking-widest icebrick px-4 py-2 text-cyan-50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rotate-[-3deg]"
            >
              [🟢 ONLINE_NODE]
            </motion.div>
          </div>

          {/* Liquid Ice Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[1]"
          >
            <Card className="icebrick clip-corner p-0 border-t-2 border-l-2 border-white/50 border-r border-b border-white/10 shadow-[inner_0_0_60px_rgba(255,255,255,0.15),0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden">
              
              {/* Internal Glacial Sweep Animation */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent w-[300%] h-full -rotate-45 animate-[glacialSweep_12s_ease-in-out_infinite] pointer-events-none z-0" />

              {/* Frost Scanline */}
              <div className="absolute inset-0 hud-scanline opacity-30 z-0 pointer-events-none mix-blend-screen" />

              {/* Tactical Title Bar */}
              <div className="relative z-10 h-16 bg-white/[0.02] border-b border-white/20 flex items-center px-8 space-x-4">
                <div className="w-3 h-3 bg-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] shadow-inner clip-corner" />
                <div className="w-3 h-3 bg-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] shadow-inner clip-corner" />
                <div className="w-3 h-3 bg-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] shadow-inner clip-corner" />
                <div className="ml-6 font-mono text-sm text-white/50 tracking-[0.2em] uppercase hidden sm:block">~/tactical_comms/transmit.sh</div>
              </div>
              
              {/* Frozen Input Form */}
              <form onSubmit={handleSubmit} className="relative z-10 p-8 sm:p-12 lg:pr-[400px] space-y-8">
                
                {['name', 'email'].map((field) => (
                  <div key={field} className="space-y-3">
                    <label htmlFor={field} className="text-sm font-mono font-bold text-white uppercase tracking-widest drop-shadow-md">
                      {field} <span className="text-cyan-300">*</span>
                    </label>
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      required
                      value={(formData as any)[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full bg-black/40 border border-t-white/30 border-l-white/30 border-r-white/5 border-b-white/5 clip-corner-reverse px-6 py-5 text-white font-mono placeholder-white/30 focus:outline-none focus:border-cyan-300 focus:bg-white/10 transition-all shadow-inner"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-mono font-bold text-white uppercase tracking-widest drop-shadow-md">
                    Message <span className="text-cyan-300">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/40 border border-t-white/30 border-l-white/30 border-r-white/5 border-b-white/5 clip-corner-reverse px-6 py-5 text-white font-mono placeholder-white/30 focus:outline-none focus:border-cyan-300 focus:bg-white/10 transition-all shadow-inner resize-none"
                    placeholder="[AWAITING SYSTEM INPUT...]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border-t border-l border-white/50 border-b border-r border-white/10 clip-corner rounded-none px-6 py-8 font-mono font-bold tracking-[0.2em] shadow-[inner_0_0_15px_rgba(255,255,255,0.2),0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-300 disabled:opacity-50 text-base"
                >
                  {status === 'loading' ? (
                     <span className="flex items-center"><Loader2 className="w-5 h-5 mr-3 animate-spin drop-shadow-md" /> [ TRANSMITTING ]</span>
                  ) : status === 'success' ? (
                     <span className="flex items-center"><Sparkles className="w-5 h-5 mr-3 text-cyan-200 drop-shadow-md" /> [ PAYLOAD_DELIVERED ]</span>
                  ) : status === 'error' ? (
                     <span className="text-red-300 drop-shadow-md">[ TRANSMISSION_FAILED ]</span>
                  ) : (
                     <span className="flex items-center drop-shadow-md"><Send className="w-5 h-5 mr-3" /> [ SEND_COMMUNICATION ]</span>
                  )}
                </Button>
              </form>

              {/* Thick Frosted Corner Brackets inside terminal */}
              <div className="absolute top-16 left-0 w-24 h-24 border-l-4 border-white pointer-events-none drop-shadow-[0_0_8px_white]" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-white pointer-events-none drop-shadow-[0_0_8px_white]" />
            </Card>
          </motion.div>

          {/* Mobile tactical links */}
          <div className="flex justify-center space-x-5 mt-10 lg:hidden relative z-20">
            {[Github, Mail, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="icebrick p-5 clip-corner border-t-2 border-l-2 border-white/50 text-white hover:bg-white/20 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                <Icon className="w-6 h-6 drop-shadow-[0_0_5px_white]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}