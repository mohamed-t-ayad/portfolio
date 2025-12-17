import React from 'react';
import { Code2, Server, Layout, CloudUpload } from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';

const skillCategories = [
  {
    icon: Code2,
    title: 'Front-End',
    skills: [
      'HTML5, CSS3',
      'Sass',
      'Bootstrap',
      'JavaScript (ES6+)',
      'React.js',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    icon: Server,
    title: 'Back-End & Tools',
    skills: [
      'PHP',
      'Laravel',
      'MySQL',
      'REST APIs',
      'Git/GitHub',
      'cPanel',
      'N8N & Automation',
    ],
  },
  {
    icon: Layout,
    title: 'WordPress',
    skills: [
      'Custom Themes',
      'Elementor',
      'WooCommerce',
      'WP Rocket',
      'SEO',
    ],
  },
  {
    icon: CloudUpload,
    title: 'Deployment & Hosting',
    skills: [
      'Vercel',
      'Netlify',
      'DNS Setup',
      'Migrations',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" gray>
      <SectionHeader tag="What I Do" title="Skills & Expertise" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:rotate-y-180 transition-all duration-500">
                <Icon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-black hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
