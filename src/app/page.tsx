"use client";
import { useState, useEffect, useRef } from 'react';
import personalInfo from '../data/personal_info.json';
import education from '../data/education.json';
import workExperience from '../data/work_experience.json';
import projects from '../data/projects.json';
import additionalInfo from '../data/additional_info.json';


const techIcons = [
  'git', 'github', 'vscode','react', 'python', 'javascript', 'typescript', 'nodejs', 
  'html5', 'css3',  'figma',
  'djangorestframework'
];


const codeSnippets = [
  `from django.http import HttpResponse\n\ndef hello_world(request):\n    return HttpResponse("Hello, Django World!")`,
  `from django.db import models\n\nclass BlogPost(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    published_date = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        return self.title`,
  `from rest_framework import serializers\nfrom .models import BlogPost\n\nclass BlogPostSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = BlogPost\n        fields = ['id', 'title', 'content', 'published_date']`,

  `from rest_framework import viewsets\nfrom .models import BlogPost\nfrom .serializers import BlogPostSerializer\n\nclass BlogPostViewSet(viewsets.ModelViewSet):\n    queryset = BlogPost.objects.all()\n    serializer_class = BlogPostSerializer`,

 
  `from rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom .models import BlogPost\nfrom .serializers import BlogPostSerializer\n\nclass BlogPostAPIView(APIView):\n    def get(self, request):\n        posts = BlogPost.objects.all()\n        serializer = BlogPostSerializer(posts, many=True)\n        return Response(serializer.data)`,


  `from django.urls import path\nfrom .views import hello_world\n\nurlpatterns = [\n    path('hello/', hello_world, name='hello_world'),\n]`,


  `from rest_framework.permissions import IsAuthenticated\nfrom rest_framework.decorators import permission_classes\n\n@permission_classes([IsAuthenticated])\nclass ProtectedView(APIView):\n    def get(self, request):\n        return Response({"message": "Authenticated!"})`,


  `<!DOCTYPE html>\n<html>\n<head>\n    <title>{{ post.title }}</title>\n</head>\n<body>\n    <h1>{{ post.title }}</h1>\n    <p>{{ post.content }}</p>\n</body>\n</html>`,


  `from rest_framework import filters\n\nclass BlogPostViewSet(viewsets.ModelViewSet):\n    queryset = BlogPost.objects.all()\n    serializer_class = BlogPostSerializer\n    filter_backends = [filters.SearchFilter]\n    search_fields = ['title', 'content']`,


  `from django import forms\nfrom .models import BlogPost\n\nclass BlogPostForm(forms.ModelForm):\n    class Meta:\n        model = BlogPost\n        fields = ['title', 'content']`
];

const predefinedPositions = [
  { x: 15, y: 20, size: 50, speed: 18, delay: 0 },
  { x: 85, y: 30, size: 60, speed: 22, delay: 1 },
  { x: 25, y: 70, size: 45, speed: 20, delay: 2 },
  { x: 75, y: 65, size: 55, speed: 19, delay: 0.5 },
  { x: 50, y: 40, size: 65, speed: 25, delay: 1.5 }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showNav, setShowNav] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const sections = ["home", "education", "experience", "projects", "skills"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleMouseMove = (e) => {
   
      setMousePosition(prev => {
        const distance = Math.sqrt(Math.pow(e.clientX - prev.x, 2) + Math.pow(e.clientY - prev.y, 2));
        if (distance > 20) { // Only update if mouse moved significantly
          return { x: e.clientX, y: e.clientY };
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const ParallaxBackground = () => {
    const animationStyles = predefinedPositions.map((pos, i) => ({
      width: `${pos.size}px`,
      height: `${pos.size}px`,
      top: `${pos.y}%`,
      left: `${pos.x}%`,
      animation: `float${i} ${pos.speed}s ${pos.delay}s infinite ease-in-out`,
      filter: 'blur(12px)',
    }));

    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-95"></div>

        {animationStyles.map((style, i) => {
          const colors = [
            'from-cyan-400/30 to-blue-600/30',
            'from-purple-500/30 to-fuchsia-600/30',
            'from-emerald-400/30 to-teal-600/30',
            'from-rose-500/30 to-pink-600/30'
          ];
          const color = colors[i % colors.length];
          
          return (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r ${color}`}
              style={style}
            />
          );
        })}

        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>

        <style jsx>{`
          .bg-grid-pattern {
            background-size: 50px 50px;
            background-image:
              linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
            animation: moveGrid 20s linear infinite;
          }

          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }

          ${animationStyles.map((_, i) => `
            @keyframes float${i} {
              0% { transform: translate(0, 0) rotate(0deg); }
              25% { transform: translate(${5 + i}px, ${-5 - i}px) rotate(${2 + i}deg); }
              50% { transform: translate(${-5 - i}px, ${5 + i}px) rotate(${-2 - i}deg); }
              75% { transform: translate(${3 + i}px, ${3 + i}px) rotate(${1 + i}deg); }
              100% { transform: translate(0, 0) rotate(0deg); }
            }
          `).join('')}
        `}</style>
      </div>
    );
  };

  const FloatingTechElements = () => {
    if (!isClient) return null;

    const elements = techIcons.slice(0, 5).map((icon, i) => {
      const pos = predefinedPositions[i % predefinedPositions.length];
      return {
        icon,
        size: pos.size,
        speed: pos.speed,
        delay: pos.delay,
        x: pos.x,
        y: pos.y,
        rotation: i * 15,
        animation: `floatTech${i} ${pos.speed}s ${pos.delay}s infinite ease-in-out`,
        glowColor: `rgba(34, 211, 238, 0.3)`
      };
    });

    return (
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {elements.map((el, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
            style={{
              width: `${el.size}px`,
              height: `${el.size}px`,
              top: `${el.y}%`,
              left: `${el.x}%`,
              transform: `translate(-50%, -50%) rotate(${el.rotation}deg)`,
              animation: el.animation,
              filter: `drop-shadow(0 0 8px ${el.glowColor})`
            }}
          >
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${el.icon}/${el.icon}-original.svg`} 
              alt={el.icon}
              className="w-full h-full object-contain"
            />
            <style jsx>{`
              @keyframes floatTech${i} {
                0% { transform: translate(-50%, -50%) rotate(${el.rotation}deg) translateY(0); }
                50% { transform: translate(-50%, -50%) rotate(${el.rotation + 5}deg) translateY(-15px); }
                100% { transform: translate(-50%, -50%) rotate(${el.rotation}deg) translateY(0); }
              }
            `}</style>
          </div>
        ))}

        {[0, 1, 2].map((i) => {
          const pos = predefinedPositions[(i + 3) % predefinedPositions.length];
          return (
            <div
              key={`code-${i}`}
              className="absolute bg-black/30 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-2 overflow-hidden"
              style={{
                width: `${pos.size * 2}px`,
                top: `${pos.y + 5}%`,
                left: `${pos.x - 5}%`,
                transform: `translate(-50%, -50%) rotate(${i * 5}deg)`,
                animation: `floatCode${i} ${pos.speed}s ${pos.delay}s infinite ease-in-out`,
                opacity: 0.3
              }}
            >
              <div className="text-xs font-mono text-cyan-300/80 whitespace-pre">
                {codeSnippets[i % codeSnippets.length]}
              </div>
              <style jsx>{`
                @keyframes floatCode${i} {
                  0% { transform: translate(-50%, -50%) rotate(${i * 5}deg) translateY(0); }
                  50% { transform: translate(-50%, -50%) rotate(${i * 5 + 1}deg) translateY(-10px); }
                  100% { transform: translate(-50%, -50%) rotate(${i * 5}deg) translateY(0); }
                }
              `}</style>
            </div>
          );
        })}
      </div>
    );
  };

  const Navigation = () => {
    const sections = [
      { id: "home", label: "Home" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" }
    ];

    return (
      <>
        {/* Mobile navigation */}
        <div className="fixed top-4 right-4 z-50 md:hidden">
          <button
            onClick={() => setShowNav(!showNav)}
            className="bg-black/50 backdrop-blur-lg border border-cyan-400/30 p-3 rounded-full text-cyan-300 shadow-lg hover:bg-cyan-400/10 hover:text-cyan-200 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {showNav ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          <div className={`fixed inset-0 bg-black/90 backdrop-blur-md z-40 transition-opacity duration-300 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex h-full items-center justify-center">
              <ul className="text-center space-y-8">
                {sections.map(section => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-2xl font-medium transition-all duration-300 ${activeSection === section.id ? 'text-cyan-400 neon-text' : 'text-white/70 hover:text-cyan-300'}`}
                      onClick={() => setShowNav(false)}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden md:block">
          <ul className="space-y-6">
            {sections.map(section => (
              <li key={section.id} className="relative group">
                <a
                  href={`#${section.id}`}
                  className="flex items-center justify-end gap-3"
                >
                  <span className={`absolute right-8 opacity-0 font-medium group-hover:opacity-100 transition-all duration-300 ${activeSection === section.id ? 'text-cyan-400 neon-text' : 'text-white'}`}>
                    {section.label}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125 ${
                      activeSection === section.id ? 'bg-cyan-400 w-4 h-4 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]' : 'bg-white/50 group-hover:bg-cyan-400'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  const CursorTrail = () => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        setTrail(prev => [mousePosition, ...prev.slice(0, 5)]);
      }, 50);

      return () => clearInterval(interval);
    }, [mousePosition]);

    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
        {trail.map((pos, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 rounded-full bg-cyan-400 mix-blend-screen"
            style={{
              top: pos.y,
              left: pos.x,
              opacity: 1 - (i * 0.2),
              transform: `translate(-50%, -50%) scale(${1 - (i * 0.15)})`,
              transition: 'all 0.1s ease-out',
              filter: `blur(${i * 0.5}px)`
            }}
          />
        ))}
      </div>
    );
  };

  const AnimatedCard = ({ children, className, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <div
        ref={cardRef}
        className={`transition-all duration-700 ${className} ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <AnimatedCard
        delay={index * 100}
        className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-blue-900/50 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>

        <div className="h-48 w-full overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/70 to-transparent">
          <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:text-cyan-300">
            {project.title}
          </h3>

          <div className={`transition-all duration-500 ease-out overflow-hidden ${isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="text-white/90 text-sm space-y-1 mb-4">
              {project.description.map((desc, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1 text-cyan-300">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-cyan-400/10 hover:bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </AnimatedCard>
    );
  };

  const TimelineItem = ({ job, index, isLast }) => {
    return (
      <AnimatedCard delay={index * 150} className="relative pl-6 pb-8">
        {!isLast && (
          <div className="absolute left-2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
        )}
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-600/30"></div>

        <div className="bg-gray-900/70 backdrop-blur-md rounded-lg p-5 border border-gray-800 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <h3 className="text-lg font-bold text-white">{job.role}</h3>
          <h4 className="text-cyan-300 mb-1">{job.company}</h4>
          <p className="text-white/70 mb-3 text-sm">{job.duration}</p>
          <ul className="space-y-1 text-white/80">
            {job.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 mt-1 text-cyan-300">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedCard>
    );
  };

  const EducationCard = ({ edu, index }) => {
    return (
      <AnimatedCard
        delay={index * 150}
        className="bg-gray-900/70 backdrop-blur-md rounded-lg p-5 border border-gray-800 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-1"
      >
        <h3 className="font-bold text-white">
          {edu.degree}
        </h3>
        <p className="text-cyan-200">{edu.institution}</p>
        <p className="text-white/60 text-sm">{edu.location} • {edu.completion_date}</p>
      </AnimatedCard>
    );
  };

  const SkillTag = ({ skill, index }) => {
    return (
      <AnimatedCard
        delay={index * 50}
        className="bg-gray-900/70 backdrop-blur-md rounded-full px-4 py-2 text-white border border-gray-800 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-1"
      >
        {skill}
      </AnimatedCard>
    );
  };

  const Header = () => {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-32 relative">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/30"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                top: `${(i * 5) % 100}%`,
                left: `${(i * 7) % 100}%`,
                animation: `floatParticle ${10 + (i * 2)}s ${i % 5}s infinite linear`,
                opacity: 0.3 + (i % 10) * 0.05
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          <div className="mb-6 inline-block relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center font-bold text-3xl text-white">
                {personalInfo.name.split(' ').map(word => word[0]).join('')}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 blur-md mix-blend-screen animate-pulse"></div>
            </div>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-6 tracking-tighter"
            style={{
              textShadow: '0 5px 20px rgba(34, 211, 238, 0.5)'
            }}
          >
            {personalInfo.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
            {personalInfo.title}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 mb-8">
            <span>{personalInfo.location}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{personalInfo.phone}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{personalInfo.email}</span>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/jztchl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-md border border-gray-700 hover:border-cyan-400/50 rounded-full p-3 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kmvishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 hover:bg-gray-700/70 backdrop-blur-md border border-gray-700 hover:border-cyan-400/50 rounded-full p-3 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <div className="relative inline-block group">
            <a
              href="#education"
              className="relative z-10 bg-cyan-400/10 backdrop-blur-md border border-cyan-400/30 hover:bg-cyan-400/20 rounded-full px-8 py-3 text-cyan-300 font-medium transition-all duration-300 inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Explore My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-1 transition-transform duration-300"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}</style>
      </section>
    );
  };

  return (
    <div className="text-white" ref={contentRef}>
      <ParallaxBackground />
      <FloatingTechElements />
      <Navigation />
      <CursorTrail />

      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        <Header />

        {/* Education Section */}
        <section id="education" className="my-24 scroll-mt-16 relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 neon-text">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="my-24 scroll-mt-16 relative">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 neon-text">Work Experience</span>
          </h2>

          <div className="space-y-2">
            {workExperience.map((job, index) => (
              <TimelineItem
                key={index}
                job={job}
                index={index}
                isLast={index === workExperience.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-24 scroll-mt-16 relative">
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 neon-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-24 scroll-mt-16 relative">
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 neon-text">Skills & Additional Info</span>
          </h2>

          <div className="space-y-8">
            <AnimatedCard>
              <h3 className="text-xl font-bold text-white/90 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {additionalInfo.technical_skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} index={index} />
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={100}>
              <h3 className="text-xl font-bold text-white/90 mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {additionalInfo.certifications.map((cert, index) => (
                  <SkillTag key={index} skill={cert} index={index + 5} />
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <h3 className="text-xl font-bold text-white/90 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {additionalInfo.languages.map((lang, index) => (
                  <SkillTag key={index} skill={lang} index={index + 10} />
                ))}
              </div>
            </AnimatedCard>
          </div>
        </section>

        <footer className="text-center text-white/60 py-12 mt-16 border-t border-gray-800 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>
          <p>© {new Date().getFullYear()} {personalInfo.name} | Interactive Resume</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/jztchl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-cyan-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kmvishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-cyan-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </footer>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .neon-text {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.7), 0 0 20px rgba(34, 211, 238, 0.5);
        }
        body {
          background-color: #0a0a0a;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
}