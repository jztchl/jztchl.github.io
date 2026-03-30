'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Activity, Network, Database, Settings } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function getCompressedImageURL(githubUrl: string, width = 800, height = 500, format = 'webp') {
  try {
    if (githubUrl.includes('github.com') && githubUrl.includes('/blob/')) {
      githubUrl = githubUrl
        .replace('github.com', 'raw.githubusercontent.com')
        .replace('/blob/', '/');
    }
    githubUrl = githubUrl.replace(/\?raw=true$/, '');
    const encodedURL = encodeURIComponent(githubUrl);
    return `https://images.weserv.nl/?url=${encodedURL}&w=${width}&h=${height}&output=${format}`;
  } catch (err) {
    return '#';
  }
}

const projects = [
{
  title: 'Dream Store Kannur',
  description: 'E-commerce platform for Dream Store Kannur, built with Django and deployed on Google Cloud Run.',
  image: 'https://assets.dreamstorekannur.com/static/img/hero.png',
  technologies: ['Django','PostgreSQL','Docker','Google Cloud Run'],
  githubUrl: '#',
  liveUrl: 'https://dreamstorekannur.com'
},

  {
    title: 'Ghost Mesh',
    description: 'Multi-agent AI chat system where characters maintain persistent personality and memory across conversations. Built with JWT auth, Redis rate limiting, Alembic migrations, and Celery tasks.',
    image: 'https://github.com/jztchl/Ghost-Mesh/raw/main/icon.png?raw=true',
    technologies: ['FastAPI', 'Celery', 'Redis', 'Gemini API', 'Docker'],
    githubUrl: 'https://github.com/jztchl/Ghost-Mesh',
    liveUrl: '#'
  },
  {
    title: 'AI Security Advisor',
    description: 'File vulnerability scanner that runs Semgrep static analysis and enriches findings with Mistral AI. Features async processing via Celery and real-time SSE updates on a React frontend.',
    image: 'https://github.com/jztchl/AI-Security-Advisor/raw/main/logo.png?raw=true',
    technologies: ['FastAPI', 'Celery', 'Redis', 'Mistral AI', 'Semgrep', 'React'],
    githubUrl: 'https://github.com/jztchl/AI-Security-Advisor',
    liveUrl: '#'
  },
  {
    title: 'Terminal Styled Random Chat',
    description: 'A real-time, scalable chat platform built with Django Channels and WebSockets. On the frontend, a blazing-fast, terminal-inspired interface built with Next.js delivers a retro hacker aesthetic.',
    image: 'https://github.com/jztchl/random-chat-front_end/raw/main/screenshots/logo.png?raw=true',
    technologies: ['Django', 'Django Channels', 'Next.js', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com/jztchl/random-chat-front_end',
    liveUrl: '#'
  },
  {
    title: 'UNIX Task Manager',
    description: 'Task management API built with Django and DRF. Allows users to create, manage, and cancel long-running tasks asynchronously using threading and asyncio.',
    image: 'https://github.com/jztchl/unix_inspired_task_manager/raw/main/logo.png?raw=true',
    technologies: ['Django', 'DRF', 'Threading', 'Asyncio'],
    githubUrl: 'https://github.com/jztchl/unix_inspired_task_manager',
    liveUrl: '#'
  },
  {
    title: 'Harmony Forge',
    description: "Music generation platform merging Flask and Flutter. Flask manages backend tasks like generation and model oversight, while Flutter offers a modern UI.",
    image: 'https://github.com/jztchl/Harmony-Forge/blob/main/icon.png?raw=true',
    technologies: ['Python', 'Flask', 'Flutter', 'TensorFlow', 'LSTM'],
    githubUrl: 'https://github.com/jztchl/Harmony-Forge',
    liveUrl: '#'
  },
  {
    title: 'Real-Time Weapon Detection',
    description: 'A real-time weapon detection system using Python and YOLOv8 from live streams featuring customizable alerts and a Django admin interface.',
    image: 'https://github.com/jztchl/realtime-weapon-detection/raw/main/weapon_detection.png?raw=true',
    technologies: ['Python', 'YOLOv8', 'Django', 'OpenCV', 'PyTorch'],
    githubUrl: 'https://github.com/jztchl/realtime-weapon-detection',
    liveUrl: '#'
  }
];

export default function Projects() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const projectVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="relative py-24 z-10 lg:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-transparent to-transparent">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none hud-grid opacity-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Holographic Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center sm:text-left"
        >
          <div className="inline-flex items-center space-x-3 mb-6 icebrick px-4 py-2 clip-corner">
            <Network className="w-5 h-5 text-cyan-200" />
            <span className="text-sm font-mono text-cyan-100 tracking-widest uppercase pr-3 font-bold">[NODE: DEPLOYED_SYSTEMS]</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] uppercase mb-4">
            Digital Archives
          </h2>
          <div className="h-[2px] w-32 bg-cyan-200 shadow-[0_0_15px_white] mx-auto sm:mx-0" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-16"
        >
          {/* Featured Core Systems (Icebricks) */}


          {/* Fragmented Icebricks Grid (Secondary projects) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {projects.map((project) => (
              <motion.div key={project.title} variants={projectVariants}>
                <div className="h-full icebrick clip-corner hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 flex flex-col relative group">
                  
                  <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none" />
                    <img 
                      src={getCompressedImageURL(project.image)} 
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-screen opacity-60 group-hover:opacity-100 grayscale transition-all duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  
                  <div className="p-6 sm:p-8 flex-1 flex flex-col z-10 bg-slate-900/30">
                    <h3 className="text-xl font-bold font-mono text-white mb-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">{project.title}</h3>
                    <p className="text-slate-300 font-mono text-xs leading-relaxed mb-6 flex-1">{project.description}</p>
                    
                     {/* Tech Stack Matrix */}
                  <div className="flex flex-wrap gap-2.5 mb-10 bg-black/30 p-4 border-l-2 border-cyan-400">
                    <Settings className="w-5 h-5 text-cyan-200 mr-2 opacity-70" />
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-white/5 border border-white/20 text-cyan-50 font-mono text-xs px-2.5 py-1 uppercase shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                   
                    <div className="flex space-x-3 mt-auto pt-4 border-t border-white/10">
                     {project.githubUrl!=='#'&&(
                      <Link href={project.githubUrl} target="_blank" className="flex-1"> 
                        <Button variant="ghost" className="w-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-white font-mono text-xs tracking-widest uppercase transition-all rounded-none shadow-sm">
                          <Github className="w-3 h-3 mr-2" /> Code
                        </Button>
                      </Link>
                      )}

                      {project.liveUrl !== '#' && (
                        <Link href={project.liveUrl} target="_blank" className="flex-1"> 
                          <Button variant="ghost" className="w-full bg-cyan-900/40 hover:bg-cyan-800/60 border border-cyan-500/40 text-cyan-100 hover:text-white font-mono text-xs tracking-widest uppercase transition-all rounded-none shadow-[inset_0_0_8px_rgba(6,182,212,0.2)]">
                            <ExternalLink className="w-3 h-3 mr-2" /> Live
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View Vault Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24"
        >
          <Link href="https://github.com/jztchl?tab=repositories" target="_blank">
            <Button 
              size="lg"
              className="icebrick text-white hover:text-cyan-200 hover:brightness-125 clip-corner-reverse transition-all px-12 py-8 font-mono font-black tracking-[0.2em] text-lg rounded-none"
            >
              [ QUERY_FROZEN_ARCHIVE ]
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}