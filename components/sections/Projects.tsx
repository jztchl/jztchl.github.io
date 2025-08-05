'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { title } from 'node:process';

function getCompressedImageURL(githubUrl: string, width = 500, height = 500, format = 'webp') {
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
    console.error('Invalid GitHub URL:', err);
    return '#';
  }
}



const projects = [
  {
    title: 'Terminal Styled Random Chat App',
    description: 'A real-time, scalable chat platform built with Django, Django Channels, and WebSockets—enabling anonymous, free-flowing conversations across dynamic chat rooms with live presence tracking and room management. On the frontend, a blazing-fast, terminal-inspired interface built with Next.js and Tailwind CSS delivers a retro hacker aesthetic with keyboard-first navigation, dark mode, and seamless real-time updates—crafted for those who live on the edge of the CLI.',
    image: 'https://github.com/jztchl/random-chat-front_end/raw/main/screenshots/logo.png?raw=true',
    technologies: ['django','django channels','redis','Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jztchl/random-chat-front_end',
    liveUrl: 'https://random-chat-front-end.vercel.app/',
    featured: true
  },
  {
    title: 'UNIX Task Manager',
    description: 'task management API built with Django and Django REST Framework. It allows users to create, manage, and cancel long-running tasks asynchronously using threading and asyncio. Ideal for managing background operations with an intuitive RESTful interface.',
    image: 'https://github.com/jztchl/unix_inspired_task_manager/raw/main/logo.png?raw=true',
    technologies: ['django','django rest framework','threading','asyncio'],
    githubUrl: 'https://github.com/jztchl/unix_inspired_task_manager',
    liveUrl: 'https://unixtask.koyeb.app/'
  },
  {
    title: 'Harmony Forge',
    description: "Harmony Forge is a music generation platform merging Flask and Flutter. Flask manages backend tasks like music generation, user authentication, and model oversight, while Flutter's Android app offers a user-friendly interface. Together, they empower users to create music seamlessly through machine learning models and modern design principles.",
    image: 'https://github.com/jztchl/Harmony-Forge/blob/main/icon.png?raw=true',
    technologies: ['Python', 'flask', 'flutter', 'TensorFlow','jwt','lstm'],
    githubUrl: 'https://github.com/jztchl/Harmony-Forge',
    liveUrl: '#'
  },
  {
    title: 'Smart FIR Generation System',
    description: 'The Smart FIR Generation System is an AI-powered web service designed to streamline the process of generating First Information Reports (FIRs). Leveraging computer vision, OCR, and deep learning, this system can extract text, detect objects, and identify faces from uploaded images to automatically generate an FIR.',
    image: 'https://github.com/jztchl/Smart-FIR-Generation-System/raw/main/logo.png?raw=true',
    technologies: ['openCV','ocr','python','django','yolo','drf','gemini'],
    githubUrl: 'https://github.com/jztchl/Smart-FIR-Generation-System',
    liveUrl: '#'
  },
  {
    title: 'Real-Time Weapon Detection',
    description: 'A compact real-time weapon detection system using Python and YOLOv8. It detects weapons from live streams, triggers customizable alerts, and offers a desktop GUI and Django interface. Powered by a pretrained YOLOv8 model with support for retraining and data collection, its modular design separates the detection server, GUI, and training logic',
    image: 'https://github.com/jztchl/realtime-weapon-detection/raw/main/weapon_detection.png?raw=true',
    technologies: ['python','yolo','django','opencv','tkinter','pytorch'],
    githubUrl: 'https://github.com/jztchl/realtime-weapon-detection',
    liveUrl: '#'
  },
  {
    title: 'User Registration and Management API',
    description: 'A simple REST API built with Django REST Framework for managing user accounts. It provides endpoints to create, update, retrieve, and delete users with a minimal structure. Designed for easy integration, it separates views, serializers, and models, making it easy to extend or customize. Ideal for projects needing basic user management functionality',
    image: 'https://github.com/jztchl/user_reg_manage_api/raw/main/favicon.ico?raw=true',
    technologies: ['python','django','rest framework'],
    githubUrl: 'https://github.com/jztchl/user_reg_manage_api',
    liveUrl: '#'
  },
  {
    title:'Leave Management System',
    description:'A Django-based Leave Management System for handling leave requests and approvals with role-based access control. Employees can apply for leave and track status, while managers can approve or reject requests. Built with a modular structure, it’s easy to integrate, extend, and customize for basic organizational leave management needs.',
    image:'https://github.com/jztchl/Leave-Management-API/raw/main/logo.png?raw=true',
    technologies: ['python','django','rest framework'],
    githubUrl: 'https://github.com/jztchl/Leave-Management-API',
    liveUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <Card key={project.title} className="bg-slate-800/30 border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={getCompressedImageURL(project.image)} 
                    alt={project.title}
                    className="w-800 h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-blue-600/20 text-blue-400 border-blue-500/30">
                    Featured Project
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-slate-800/30 border-slate-700 overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img 
                    src={getCompressedImageURL(project.image)} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"> 
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"> 
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Link href="https://github.com/jztchl?tab=repositories" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
// }