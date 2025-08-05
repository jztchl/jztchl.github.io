'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'blue',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'cyan',
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'green',
    skills: ['PWA', 'SEO', 'Web Performance', 'Accessibility', 'Browser APIs']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'purple',
    skills: ['Flutter']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'orange',
    skills: ['Docker', 'CI/CD', 'Vercel', 'Netlify', 'Linux', 'Monitoring']
  },
  {
    title: 'Tools & Workflow',
    icon: GitBranch,
    color: 'pink',
    skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Agile', 'Testing', 'Retool']
  }
];

const colorMap = {
  blue: 'text-blue-400',
  cyan: 'text-cyan-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  pink: 'text-pink-400'
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = colorMap[category.color as keyof typeof colorMap];
            
            return (
              <Card 
                key={category.title}
                className="bg-slate-800/30 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-slate-700/50`}>
                      <IconComponent className={`w-6 h-6 ${colorClass}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}