import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../ui/section';
import { ProjectCard } from '../ui/project-card';
import { getFeaturedProjects } from '@/data/projects';

export const FeaturedProjectsSection: React.FC = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <Section id="projects">
      <SectionHeader tag="My Work" title="Featured Projects" />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project}  />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
        >
          View All Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
};
