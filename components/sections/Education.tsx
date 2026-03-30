'use client';

import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Fingerprint, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { title } from 'node:process';

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Kannur University',
    period: '2022 - 2024',
    focus: 'Focused on software engineering, algorithms, and data structures.',
    gpa: '8.268/10'
  },
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Indira Gandhi National Open University',
    period: '2018 - 2021',
    focus: 'Focused on software engineering, algorithms, and data structures.',
    gpa: '65%'
  }
];

const certifications = [
  { 
    title: 'Programming With Python',
    issuer: 'Open EDG Python Institute',
    year: '2025',
    url:'https://www.linkedin.com/learning/certificates/e2d4f7695ff8ee10cf400d32d7529dfe15c2dac21ea57ec9f14b16e0a1e3e1b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPnkQYNoT52VYZhJgZ2GjQ%3D%3D'
  },

  {
    title: 'Docker Foundation',
    issuer: 'Docker',
    year: '2025',
    url:'https://www.linkedin.com/learning/certificates/da9ec74a679b9e293832af0bfe41be3ed59df6214d4aa1d002cdcb20b8f58706?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPnkQYNoT52VYZhJgZ2GjQ%3D%3D'
  },
  {
    title: 'Github Career Essentials',
    issuer: 'Github',
    year: '2025',
    url:'https://www.linkedin.com/learning/certificates/2ca0219130e59c85aef79eafe11d076dd16f92b21e24461ca0ad8e485d6d1221?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdPnkQYNoT52VYZhJgZ2GjQ%3D%3D'
  },
  {
    title: 'Rest API Certificate',
    issuer: 'HackerRank',
    year: '2025',
    url:'https://www.hackerrank.com/certificates/9a29708aadf4'
  },
  {
    title: 'Django  Skill Up',
    issuer: 'GeeksforGeeks',
    year: '2025',
    url:'https://www.geeksforgeeks.org/certificate/f0846d4f2897195cdd954ac5fd976d55'
  }
];

export default function Education() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="education" className="relative py-24 z-10 lg:py-32 overflow-hidden bg-[radial-gradient(ellipse at top right,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-15 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* HUD Tech Badge */}
          <div className="inline-flex items-center space-x-3 mb-6 icebrick px-4 py-2 clip-corner shadow-[0_0_20px_rgba(255,255,255,0.2)]">
             <GraduationCap className="w-5 h-5 text-cyan-200 drop-shadow-md" />
             <span className="text-sm font-mono text-white tracking-[0.2em] font-bold uppercase pr-3 drop-shadow-sm">[DATA: ACADEMICS_&_CERTS]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] uppercase mb-4">
            Knowledge Base
          </h2>
          <div className="mx-auto h-[2px] w-48 bg-cyan-200 shadow-[0_0_15px_cyan]" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* ── LEFT: Education Data ── */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-8 space-y-8"
          >
            <h3 className="flex items-center text-2xl font-mono font-bold text-white mb-8 tracking-widest drop-shadow-[0_0_8px_white]">
               <BookOpen className="w-6 h-6 mr-3 text-cyan-300" />
               // FORMAL_EDUCATION
            </h3>
            
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="icebrick p-8 sm:p-10 shadow-[inner_0_0_40px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[inner_0_0_50px_rgba(255,255,255,0.2),0_25px_50px_rgba(0,0,0,0.8)] group rounded-none clip-corner transition-all duration-300 relative overflow-hidden">
                  
                  {/* Glacial Sweep */}
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent w-[300%] h-full -rotate-45 translate-x-[-150%] transition-transform duration-700 group-hover:translate-x-[150%] pointer-events-none z-0" />

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white opacity-20 drop-shadow-sm z-10 transition-colors group-hover:border-cyan-300" />
                  
                  <div className="relative z-20">
                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                       <div>
                         <h4 className="text-2xl font-black font-mono text-white uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                           {edu.degree}
                         </h4>
                         <div className="text-cyan-200 font-mono text-sm tracking-widest uppercase mt-2 drop-shadow-[0_0_5px_cyan]">
                           @ {edu.institution}
                         </div>
                       </div>
                       <div className="bg-black/40 border border-white/20 px-3 py-1.5 font-mono text-white text-xs tracking-widest uppercase clip-corner-reverse shadow-inner whitespace-nowrap">
                         [CYC: {edu.period}]
                       </div>
                     </div>
                     
                     <div className="flex items-start bg-black/20 p-4 border-l-2 border-cyan-300 mb-6 shadow-inner">
                       <Fingerprint className="w-5 h-5 text-cyan-300 mr-4 shrink-0 drop-shadow-[0_0_5px_cyan]" />
                       <p className="text-white/80 font-mono text-sm leading-relaxed drop-shadow-sm font-light">
                         {edu.focus}
                       </p>
                     </div>
                     
                     {/* GPA Metric */}
                     <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                       <div className="text-xs text-white/50 font-mono tracking-widest uppercase">Highlights_Extracted</div>
                       <div className="flex-1 h-[1px] bg-white/10" />
                       <div className="icebrick px-4 py-2 clip-corner-reverse shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          <span className="text-xs font-mono text-cyan-200 tracking-widest uppercase">GPA: </span>
                          <span className="text-white font-mono font-bold tracking-widest drop-shadow-[0_0_5px_white]">
                            {edu.gpa}
                          </span>
                       </div>
                     </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* ── RIGHT: Certifications Data ── */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-4 space-y-8 mt-12 lg:mt-0"
          >
            <h3 className="flex items-center text-2xl font-mono font-bold text-white mb-8 tracking-widest drop-shadow-[0_0_8px_white]">
               <Award className="w-6 h-6 mr-3 text-cyan-300" />
               // CERT_VAULT
            </h3>
            
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="icebrick border-t-2 border-l-2 border-white/40 p-6 clip-corner hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                    
                    {/* Background noise for certs */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />

                    <div className="relative z-10 flex flex-row h-full justify-between items-start">
                       <div className="flex flex-col h-full">
                         <h4 className="text-white font-mono font-bold text-sm leading-relaxed tracking-wider uppercase drop-shadow-sm mb-4">
                           {cert.title}
                         </h4>
                         <div className="mt-auto space-y-2">
                           <div className="text-xs text-cyan-100 font-mono tracking-widest flex items-center">
                              <span className="w-2 h-2 bg-cyan-300 rounded-full mr-2 shadow-[0_0_5px_cyan]"></span>
                              {cert.issuer}
                           </div>
                           <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
                              [VALIDATED: {cert.year}]
                           </div>
                         </div>
                       </div>
                       {cert.url && (
                         <a 
                           href={cert.url} 
                           target="_blank" 
                           className="inline-flex items-center text-xs text-cyan-200 hover:text-white transition-colors font-mono tracking-widest uppercase ml-4"
                         >
                           <ExternalLink className="w-3 h-3 mr-1" />
                           View
                         </a>
                       )}
                    </div>
                </div>
                </motion.div>
              ))}
            </div>

            {/* Frost Warning Box */}
            <motion.div variants={itemVariants} className="mt-8 bg-black/40 border border-dashed border-white/30 p-5 clip-corner-reverse text-center group hover:border-cyan-300 transition-colors cursor-default">
               <span className="text-white/40 group-hover:text-cyan-200 transition-colors font-mono text-xs tracking-widest uppercase drop-shadow-sm flex items-center justify-center">
                 <span className="animate-pulse mr-2">_</span>AWAITING_FURTHER_UPLOADS
               </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
