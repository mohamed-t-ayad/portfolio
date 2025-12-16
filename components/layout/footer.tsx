import React from 'react';
import Link from 'next/link';
import { Code2, Linkedin, Github, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold mb-4 justify-center md:justify-start">
              <Code2 className="w-7 h-7" />
              <span>Mohamed Ayad</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Building exceptional web experiences with modern technologies
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mohamed-ayad-294295130/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mohamed-t-ayad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/201092869837"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mohamed Ayad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
