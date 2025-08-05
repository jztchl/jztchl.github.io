'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          I’m a passionate problem solver who found purpose in building backends that actually matter. From local startups to real-world systems, I thrive on transforming complexity into clean architecture and meaningful tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-400" />
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed">
              Born and raised in Kannur, I carry my roots into every line of code. With an MCA and hands-on experience in production, I’ve evolved from a curious learner into a backend engineer who values scalability, performance, and long-term impact. Growth, consistency, and innovation define how I work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-cyan-400" />
                What I Do
              </h3>
              <p className="text-slate-300 leading-relaxed">
              I build robust backend systems using Python, Django, Flask, and REST. My expertise lies in crafting APIs, integrating real-time systems, and optimizing performance for production. From billing engines to AI-powered detection tools, my work solves real problems with clean, tested code.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((trait) => (
                <Badge key={trait} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-blue-400">1+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-cyan-400">25+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-slate-300">Technologies</div>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 sm:col-span-2">
              <div className="text-center space-y-2">
                <Lightbulb className="w-8 h-8 mx-auto text-yellow-400" />
                <div className="text-slate-300">Always learning and exploring new technologies</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}