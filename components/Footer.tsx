'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Vishnu<span className="text-blue-400">KM</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building the future, one line of code at a time. 
              Passionate about creating innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:kmvishnu625@gmail.com"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kmvishnu625@gmail.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jztchl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="http://linkedin.com/in/kmvishnu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Vishnu KM. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}