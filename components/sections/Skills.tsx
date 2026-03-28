'use client';

import { Card } from '@/components/ui/card';
import { Database, Globe, Cloud, GitBranch, Terminal, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Languages',
    icon: Terminal,
    skills: ['Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Framework Architect',
    icon: Globe,
    skills: ['Django', 'Django REST', 'FastAPI', 'Flask', 'Celery']
  },
  {
    title: 'Data Infrastructure',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite']
  },
  {
    title: 'System Optimization',
    icon: ShieldAlert,
    skills: ['REST API Design', 'DB Schema', 'Query Optimization', 'pytest']
  },
  {
    title: 'DevOps Context',
    icon: Cloud,
    skills: ['Git', 'Docker', 'Linux', 'GitHub Actions']
  },
  {
    title: 'Deployment Nodes',
    icon: GitBranch,
    skills: ['Postman', 'Retool', 'Jira']
  }
];

export default function Skills() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="relative py-24 z-10 lg:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900/30 via-transparent to-transparent">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-15 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          {/* HUD Frosted Tech Badge */}
          <div className="inline-flex items-center space-x-3 mb-6 icebrick p-2 px-4 clip-corner shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Terminal className="w-4 h-4 text-cyan-100 drop-shadow-[0_0_5px_white]" />
            <span className="text-sm font-mono text-cyan-50 tracking-widest uppercase pr-3 font-bold drop-shadow-md">[SYS: DETECTED_PAYLOADS]</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] uppercase mb-4">
            Technical Arsenal
          </h2>
          <div className="mx-auto h-[2px] w-40 bg-white shadow-[0_0_15px_white]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full icebrick clip-corner p-8 hover:bg-white/10 transition-all duration-300 relative group overflow-hidden drop-shadow-2xl hover:scale-105">
                  
                  {/* Glacial Inner Sweep */}
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent w-[300%] h-full -rotate-45 translate-x-[-150%] transition-transform duration-700 group-hover:translate-x-[150%] pointer-events-none z-10" />
                  
                  {/* Ice Corner Accents */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white opacity-50 drop-shadow-md" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white opacity-50 drop-shadow-md" />

                  {/* Faint background frost icon */}
                  <div className="absolute right-0 bottom-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity pointer-events-none text-white blur-[2px] group-hover:blur-[1px]">
                    <IconComponent className="w-32 h-32" />
                  </div>
                  
                  <div className="relative z-20 space-y-8">
                    <div className="flex items-center space-x-5">
                       {/* Boxy Tech Icon Structure */}
                      <div className="p-3 bg-white/10 border-t-2 border-l-2 border-white/60 border-r border-b border-white/10 shadow-[inner_0_0_10px_rgba(255,255,255,0.1)] clip-corner-reverse">
                        <IconComponent className="w-6 h-6 text-white drop-shadow-[0_0_5px_white]" />
                      </div>
                      <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-3">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-black/30 border-t border-l border-white/40 border-b border-r border-white/10 text-white hover:bg-white/10 transition-colors clip-corner-reverse cursor-default shadow-inner"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
