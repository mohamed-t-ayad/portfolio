import Link from 'next/link';
import {
  Award,
  Code2,
  Database,
  GraduationCap,
  Layers,
  PenTool,
} from 'lucide-react';
import { certifications, educationHistory } from '@/data/about';

const certificationIconMap = {
  'graduation-cap': GraduationCap,
  code: Code2,
  layers: Layers,
  'pen-tool': PenTool,
  database: Database,
};

export function AboutEducationSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
      <div>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Education</h2>
        <div className="space-y-6">
          {educationHistory.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 text-sm font-semibold text-blue-600">
                <GraduationCap className="h-4 w-4" />
                {item.period}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                {item.degree}
              </h3>
              <p className="mb-4 font-medium text-blue-600">{item.school}</p>
              <p className="leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => {
            const Icon = certificationIconMap[cert.icon];

            return (
              <div
                key={cert.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.gradient} text-white shadow-md`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {cert.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-600">
                  {cert.subtitle}
                </p>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
                  >
                    <Award className="h-4 w-4" />
                    {cert.badge}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white">
                    <Award className="h-4 w-4" />
                    {cert.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
