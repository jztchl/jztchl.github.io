'use client';

import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, TerminalSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Python Backend Developer',
    company: 'Upwork',
    period: '2025 - Present',
    location: 'Remote',
    description: 'Developed and optimized custom backend solutions utilizing Python, Django, and FastAPI. Specializing in high-performance APIs, asynchronous tasks via Celery, and deploying full scalable systems.',
    achievements: [
      'Engineered an AI-powered conversational mesh system handling multi-agent workflows',
      'Optimized PostgreSQL queries reducing complex data retrieval by 30%',
      'Integrated WebSockets for real-time applications using Django Channels'
    ]
  },
  {
    title: 'Backend Developer Intern',
    company: 'Pixaura Global',
    period: 'Mar 2024 - Dec 2024',
    location: 'Remote',
    description: 'Designed and implemented secure, scalable RESTful APIs. Actively involved in DB schema design and troubleshooting core services.',
    achievements: [
      'Reduced customer support queries by 20% through extensive bug fixes',
      'Implemented robust JWT authentication strategies',
      'Actively participated in agile sprint planning and code reviews'
    ]
  },
  {
    title: 'Freelance Backend Engineer',
    company: 'Self-Employed',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Crafted full-stack platforms from scratch. Currently architecting scalable E-Commerce solutions and custom booking modules for international clients.',
    achievements: [
      'Delivered a fully-functional appointment system for a client in Japan',
      'Designed monolithic backend services prioritizing rapid MVP releases',
      'Set up and maintained automated testing and CI/CD'
    ]
  }
];

export default function Experience() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="relative py-24 z-10 lg:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-transparent to-transparent">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-20 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* HUD Frosted Tech Badge */}
          <div className="inline-flex items-center space-x-3 mb-6 icebrick px-4 py-2 clip-corner shadow-[0_0_20px_rgba(255,255,255,0.3)]">
             <TerminalSquare className="w-4 h-4 text-cyan-200 drop-shadow-md" />
             <span className="text-sm font-mono text-white tracking-[0.2em] font-bold uppercase pr-3 drop-shadow-sm">[SYS_LOG: TIMELINE]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] uppercase mb-4">
            Operational History
          </h2>
          <div className="mx-auto h-[2px] w-48 bg-white shadow-[0_0_15px_white]" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Frozen Neural Timeline Base (Pure White / Cyan glow) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/80 via-cyan-100 to-white/80 md:-translate-x-1/2 shadow-[0_0_20px_white]" />

          {/* Ice Scan Laser Timeline Effect */}
          <div className="absolute left-4 md:left-1/2 top-0 w-[4px] h-32 bg-white md:-translate-x-1/2 shadow-[0_0_30px_rgba(255,255,255,1)] animate-[hudScan_5s_linear_infinite] z-20 pointer-events-none mix-blend-screen" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Frozen HUD Node Block */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 icebrick border-t-2 border-l-2 border-white rounded-none z-30 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.8)] clip-corner">
                   <div className="w-3 h-3 bg-white shadow-[0_0_10px_white] animate-pulse" />
                </div>

                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  {/* Liquid Glass Log Card */}
                  <Card className="icebrick p-8 sm:p-10 shadow-[inner_0_0_40px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[inner_0_0_50px_rgba(255,255,255,0.2),0_25px_60px_rgba(0,0,0,0.9)] group rounded-none clip-corner-reverse transition-all duration-300 relative overflow-hidden">
                    
                    {/* Inner Sweep Hover Event */}
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent w-[300%] h-full -rotate-45 translate-x-[-150%] transition-transform duration-700 group-hover:translate-x-[150%] pointer-events-none z-0" />

                    {/* Targeting Angles */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white opacity-40 drop-shadow-sm z-10" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-200 opacity-40 drop-shadow-sm z-10" />
                    
                    <div className="relative z-20">
                       <h3 className="text-2xl font-black font-mono text-white uppercase tracking-widest mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                         {exp.title}
                       </h3>
                       
                       <div className="flex flex-col space-y-2 mb-6 text-xs text-white font-mono tracking-widest uppercase bg-black/40 p-3 border-l-4 border-white clip-corner shadow-inner">
                         <div className="flex items-center">
                           <Briefcase className="w-3.5 h-3.5 mr-2 text-white drop-shadow-md" /> [ORG:: {exp.company}]
                         </div>
                         <div className="flex items-center">
                           <Calendar className="w-3.5 h-3.5 mr-2 text-cyan-200 drop-shadow-md" /> [CYC:: {exp.period}]
                         </div>
                         <div className="flex items-center text-slate-300">
                           <MapPin className="w-3.5 h-3.5 mr-2" /> [LOC:: {exp.location}]
                         </div>
                       </div>
                       
                       <p className="text-white/80 font-mono text-sm leading-relaxed mb-6 mt-4 drop-shadow-sm font-light">
                         {exp.description}
                       </p>
                       
                       <div className="space-y-3">
                         {exp.achievements.map((achievement, i) => (
                           <div key={i} className="flex items-start bg-black/30 p-3 border border-white/10 hover:border-white/40 transition-colors group/item shadow-inner">
                             <ShieldCheck className="w-4 h-4 text-cyan-200 mr-3 mt-0.5 group-hover/item:text-white drop-shadow-[0_0_5px_cyan]" />
                             <span className="text-white font-mono text-xs leading-relaxed uppercase tracking-wider">{achievement}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}