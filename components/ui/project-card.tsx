import React from 'react';
import Link from 'next/link';
import {
  Globe, ShoppingBag, Building2, Paintbrush, Server,
  Briefcase, UtensilsCrossed, Palette, Calendar, ExternalLink
} from 'lucide-react';
import { Project } from '@/data/projects';

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-20 h-20" />,
  'shopping-bag': <ShoppingBag className="w-20 h-20" />,
  building: <Building2 className="w-20 h-20" />,
  'paint-brush': <Paintbrush className="w-20 h-20" />,
  server: <Server className="w-20 h-20" />,
  briefcase: <Briefcase className="w-20 h-20" />,
  utensils: <UtensilsCrossed className="w-20 h-20" />,
  palette: <Palette className="w-20 h-20" />,
  calendar: <Calendar className="w-20 h-20" />,
};

interface ProjectCardProps {
  project: Project;
  showUrl?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, showUrl = false }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer">
      <div
        className="h-72 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        <div className="text-white opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          {iconMap[project.icon] || <Globe className="w-20 h-20" />}
        </div>

        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="text-center text-white transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-2xl font-bold mb-2">View Project</h4>
            <ExternalLink className="w-8 h-8 mx-auto" />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          {showUrl && project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {project.company && (
          <div className="text-blue-600 font-semibold mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {project.company}
          </div>
        )}

        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
