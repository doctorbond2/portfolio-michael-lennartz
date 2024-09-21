'use client';
import { ProjectLayoutStyles as STYLING } from '@/types/enum';
import { myProjects } from '@/types/models';
import ProjectsWelcome from './ProjectsWelcome';
import ProjectsHeader from './ProjectsHeader';
import { Project } from '@/types/types';
import ProjectShowCase from './ProjectShowcase';
import { useState } from 'react';
// import Link from 'next/link';
export default function ProjectsLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedProject(
      () =>
        myProjects.find(
          (project) => project.title === (e.target as HTMLButtonElement).value
        ) || null
    );
  };
  return (
    <div className={STYLING.Container}>
      <ProjectsHeader {...{ handleSelection }} />
      {selectedProject ? (
        <ProjectShowCase project={selectedProject} />
      ) : (
        <ProjectsWelcome />
      )}
    </div>
  );
}
