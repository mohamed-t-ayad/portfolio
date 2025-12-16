import React from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { Section, SectionHeader } from '@/components/ui/section';
import { getAllProjects } from '@/data/projects';

export const metadata = {
  title: 'Projects - Mohamed Ayad',
  description: 'Browse all projects by Mohamed Ayad, Full-Stack Web Developer',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          tag="Portfolio"
          title="All Projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} showUrl />
          ))}
        </div>
      </Section>
    </div>
  );
}
