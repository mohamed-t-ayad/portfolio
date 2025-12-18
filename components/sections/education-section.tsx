import React from 'react';
import { GraduationCap, Award, Code2, Database, Layers, PenTool } from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';
// import Link from 'next/link';

const certifications = [
  {
    icon: GraduationCap,
    title: 'Computer Science',
    subtitle: 'Faculty of Computer and Information, Menufia, Egypt (2017-2021)',
    badge: "Bachelor's Degree",
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    icon: Code2,
    title: 'HTML + CSS',
    subtitle: 'Professional Certification',
    badge: 'Certified',
    gradient: 'from-orange-400 to-red-500',
    url: 'https://drive.google.com/file/d/1O8Zp_92sYyX0L63HZIJnPEXtzJ73QVCo/view?usp=sharing',
  },
  {
    icon: Code2,
    title: 'JavaScript & ES6',
    subtitle: 'Advanced JavaScript Certification',
    badge: 'Certified',
    gradient: 'from-yellow-400 to-orange-500',
    url : 'https://drive.google.com/file/d/1xg8OiPlWAW0xxAIK2dFstelh4b6mfEfG/view?usp=sharing'
  },
  {
    icon: Layers,
    title: 'MEAN Stack Developer',
    subtitle: 'Full-Stack Development',
    badge: 'Certified',
    gradient: 'from-green-400 to-teal-500',
    url: 'https://drive.google.com/file/d/1d1OTgjRg1T7scVyQF6TpshTjmqxjYVT5/view?usp=sharing'
  },
  {
    icon: PenTool,
    title: 'UX Design',
    subtitle: 'User Experience Design',
    badge: 'Certified',
    gradient: 'from-pink-400 to-purple-500',
    url: 'https://drive.google.com/file/d/17BqArGsB3Q9vHgdo-ycsL0R8TNhcdjCl/view?usp=sharing'
  },
  {
    icon: Database,
    title: 'Database Management',
    subtitle: 'Database Design & Implementation',
    badge: 'Certified',
    gradient: 'from-cyan-400 to-blue-500',
    url: 'https://drive.google.com/file/d/1HoQ2kU3az_YCi3kRiZfJl7hTrKMGhQQd/view?usp=sharing'
  },
];

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" gray>
      <SectionHeader tag="Qualifications" title="Education & Certifications" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-600 text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${cert.gradient} rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-360 transition-all duration-500`}>
                <Icon className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {cert.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {cert.subtitle}
              </p>

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                <a href={cert.url} target='_blank' className="hover:underline">
                  {cert.badge}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
