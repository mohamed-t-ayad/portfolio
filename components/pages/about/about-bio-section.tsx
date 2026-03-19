import {
  Award,
  Download,
  FolderKanban,
  Users,
} from 'lucide-react';
import { aboutBio, aboutStats, cvLinks } from '@/data/about';

const statIconMap = {
  award: Award,
  projects: FolderKanban,
  clients: Users,
};

export function AboutBioSection() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
      <div>
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Professional Bio
        </h2>
        <div className="space-y-5 text-lg leading-8 text-gray-600">
          {aboutBio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={cvLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Download className="h-5 w-5" />
            Front-End CV
          </a>
          <a
            href={cvLinks.wordpress}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600"
          >
            <Download className="h-5 w-5" />
            WordPress CV
          </a>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
        {aboutStats.map((stat) => {
          const Icon = statIconMap[stat.icon];

          return (
            <div
              key={stat.label}
              className="rounded-3xl bg-white p-6 text-center shadow-lg"
            >
              <Icon className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <div className="mb-1 text-4xl font-extrabold text-gray-900">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
