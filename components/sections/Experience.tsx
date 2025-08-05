'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, GraduationCap } from 'lucide-react';
import Link from 'next/link';
const experiences = [
  {
    title: 'Software Engineer -Backend ',
    company: 'TiQR Labs Private Limited',
    period: 'Sep 2024 - Present',
    location: 'Hybrid',
    description: 'Designed and developed scalable backend services and RESTful APIs using Python and Django, working closely with cross-functional teams to deliver secure, high-quality solutions. Collaborated with front-end developers to ensure smooth API integration and system reliability',
    achievements: [
     'Enhanced system performance by optimizing backend data flow and reducing latency.',
    'Lowered bug rate by 15% through collaborative debugging and proactive testing strategies.',
    'Improved API reliability by refining response structure and syncing closely with frontend teams.'
    ],
    technologies: ['Python', 'Django','PostgreSQL','REST APIs','Retool']
  },
  {
    title: 'Project Intern ',
    company: 'CHANGE PAYMENTS',
    period: 'Jul 2022 - Sep 2022 ',
    location: 'Remote',
    description: 'Worked as a Project Intern to build a smart billing system aimed at improving retail efficiency. Integrated dynamic discount logic and a vaccine status scanner to streamline customer interaction and checkout processes.',
    achievements: [
     'Implemented flexible discount rules to boost shopkeeper engagement and drive sales.',
    'Improved system performance through testing and debugging for a smoother experience.',
    'Built a real-world solution combining automation and health compliance for retail.'
    ],
    technologies: ['Django', 'Django rest framework', 'MySQL', 'JavaScript']
  },
  {
    title: 'Python Developer Trainee ',
    company: 'BUSINESS TECHNOLOGY RESEARCH & ANALYTICS CENTRE',
    period: 'Nov 2021-Apr 2022 ',
    location: 'On-site',
    description: 'Contributed to the development of web applications using Python and Django, while gaining hands-on experience in real-world software implementation and backend development practices.',
    achievements: [
      'Assisted in building and maintaining Django-based web applications.',
      'Gained practical experience in backend logic, database operations, and debugging.',
      'Improved understanding of development workflows by collaborating with experienced developers.'
    ],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySQL']
  }
];

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Kannur University',
    period: '2022 - 2024',
    description: 'Focused on software engineering, algorithms, and data structures.',
    achievements: [
      'GPA: 8.268/10'
    ]
  },

  {
    degree: 'Bachelor of Computer Application',
    institution: 'Indira Gandhi National Open University',
    period: '2018 - 2021',
    description: 'Focused on software engineering, algorithms, and data structures.',
    achievements: [
      'GPA: 65%'
    ]
  }
];

const certifications = [
  {
    title: "REST API ",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/9a29708aadf4"
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/c7924454d6a1"
  },
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
              {certifications.map((cert, index) => (
    <div key={index} className="text-slate-300 text-sm">
      <div className="flex items-center gap-2">
        <span className="font-medium">{cert.title}</span>
        <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
          view
        </Link>
      </div>
      <div className="text-slate-400">{cert.issuer}</div>
    </div>
  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}