import React from 'react';
import { ProjectFilter } from '@/components/ui/ProjectFilter';
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

        <ProjectFilter projects={projects} />
      </Section>
    </div>
  );
}