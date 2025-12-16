'use client';

import React from 'react';
import { Briefcase, Send, ChevronDown, UserCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-10" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-60 blur-3xl animate-float top-0 -left-20" />
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 to-red-500 opacity-60 blur-3xl animate-float-delay-1 bottom-0 -right-20" />
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 opacity-60 blur-3xl animate-float-delay-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-4xl text-center z-10 animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 animate-pulse-slow">
            <UserCircle2 className="w-32 h-32" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Mohamed Ayad
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full-Stack Web Developer
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Front-End & WordPress Specialist | Laravel Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-600 origin-center" />
            <span className="relative flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              View Portfolio
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Contact Me
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-blue-600" />
        </div>
      </div>
    </section>
  );
};
