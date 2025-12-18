'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Project } from '@/data/projects';

interface ProjectFilterProps {
  projects: Project[];
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({ projects }) => {
  // Extract unique categories from all projects
  const categories = React.useMemo(() => {
    const categorySet = new Set<string>();
    projects.forEach((project) => {
      // Split categories if they contain commas (like "Landing Page , Front-End")
      const cats = project.category.split(',').map((cat) => cat.trim());
      cats.forEach((cat) => categorySet.add(cat));
    });
    return ['All', ...Array.from(categorySet).sort()];
  }, [projects]);

  // Filter projects based on selected category
  const filterProjects = (category: string) => {
    if (category === 'All') return projects;
    return projects.filter((project) => {
      const projectCategories = project.category
        .split(',')
        .map((cat) => cat.trim());
      return projectCategories.includes(category);
    });
  };

  return (
    <Tabs defaultValue="All" className="w-full">
      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <TabsList className="inline-flex h-auto flex-wrap gap-2 bg-gray-100/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 
                       data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 
                       data-[state=active]:to-purple-600 data-[state=active]:text-white 
                       data-[state=active]:shadow-xl data-[state=active]:scale-105
                       hover:bg-gray-200 hover:scale-102"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Project Grid for Each Category */}
      {categories.map((category) => (
        <TabsContent
          key={category}
          value={category}
          className="animate-in fade-in-50 duration-500"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterProjects(category).map((project) => (
              <div
                key={project.id}
                className="animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
                style={{
                  animationDelay: `${
                    filterProjects(category).indexOf(project) * 50
                  }ms`,
                }}
              >
                <ProjectCard project={project} showUrl />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filterProjects(category).length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                No projects match this category yet.
              </p>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};