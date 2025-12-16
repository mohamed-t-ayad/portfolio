'use client';

import React from 'react';
import { Award, FolderKanban, Users, LaptopMinimal, GitBranch, Download } from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';

export const AboutSection: React.FC = () => {
  const stats = [
    { icon: Award, value: '4+', label: 'Years Experience' },
    { icon: FolderKanban, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
  ];

  return (
    <Section id="about">
      <SectionHeader tag="Get to know me" title="My Experience" />

      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-500">
            <LaptopMinimal className="w-32 h-32 md:w-40 md:h-40" />
          </div>

          <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-xl animate-float">
            <GitBranch className="w-10 h-10" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
            Full-Stack Web Developer specializing in building high-performance, responsive web applications.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I develop pixel-perfect UIs from Figma/PSD designs using modern HTML/CSS/JS, and build scalable backend solutions with Laravel and MySQL. My expertise spans front-end development, WordPress customization, and full-stack applications.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            With experience in React.js, Next.js, and WordPress, I deliver complete digital solutions focused on SEO, performance, and user experience. I've successfully completed 50+ projects for clients worldwide.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </Section>
  );
};
