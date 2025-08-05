'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Leading full-stack development of enterprise applications, mentoring junior developers, and implementing best practices for scalable architecture.',
    achievements: [
      'Improved application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2021 - 2022',
    location: 'Hybrid',
    description: 'Developed and maintained web applications using modern JavaScript frameworks, collaborated with cross-functional teams.',
    achievements: [
      'Built 15+ responsive web applications',
      'Reduced load times by 50%',
      'Integrated payment systems and APIs'
    ],
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Docker']
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2020 - 2021',
    location: 'On-site',
    description: 'Started career building frontend components and learning backend technologies while contributing to various client projects.',
    achievements: [
      'Completed 20+ projects successfully',
      'Learned multiple programming languages',
      'Received Employee of the Month award'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  }
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2020',
    description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List for 3 semesters',
      'Computer Science Society President'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-8">
              <Building className="w-6 h-6 mr-3 text-blue-400" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.title} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-950" />
                    
                    <Card className="bg-slate-800/30 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <div className="text-blue-400 font-medium">{exp.company} • {exp.location}</div>
                        <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-slate-200">Key Achievements:</h5>
                          <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-8">
              <GraduationCap className="w-6 h-6 mr-3 text-cyan-400" />
              Education
            </h3>

            {education.map((edu) => (
              <Card key={edu.degree} className="bg-slate-800/30 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <div className="text-cyan-400 font-medium">{edu.institution}</div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-slate-200">Highlights:</h5>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}

            {/* Certifications */}
            <Card className="bg-slate-800/30 border-slate-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="text-slate-300 text-sm">
                  <div className="font-medium">AWS Certified Developer</div>
                  <div className="text-slate-400">Amazon Web Services</div>
                </div>
                <div className="text-slate-300 text-sm">
                  <div className="font-medium">Google Cloud Professional</div>
                  <div className="text-slate-400">Google Cloud Platform</div>
                </div>
                <div className="text-slate-300 text-sm">
                  <div className="font-medium">Meta Frontend Developer</div>
                  <div className="text-slate-400">Meta (Facebook)</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}