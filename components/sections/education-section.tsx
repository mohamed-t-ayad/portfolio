import React from 'react';
import {
  Award,
  Code2,
  Database,
  GraduationCap,
  Layers,
  PenTool,
} from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';
import { certifications } from '@/data/about';

const certificationIconMap = {
  'graduation-cap': GraduationCap,
  code: Code2,
  layers: Layers,
  'pen-tool': PenTool,
  database: Database,
};

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" gray>
      <SectionHeader tag="Qualifications" title="Education & Certifications" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const Icon = certificationIconMap[cert.icon];

          return (
            <div
              key={cert.title}
              className="border-2 border-transparent bg-white p-8 text-center rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${cert.gradient} text-white transition-all duration-500`}
              >
                <Icon className="h-10 w-10" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {cert.title}
              </h3>

              <p className="mb-4 text-sm text-gray-600">{cert.subtitle}</p>

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white"
                >
                  <Award className="h-4 w-4" />
                  {cert.badge}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
                  <Award className="h-4 w-4" />
                  {cert.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
