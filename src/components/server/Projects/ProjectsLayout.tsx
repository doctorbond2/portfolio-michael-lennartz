'use client';
import { ProjectLayoutStyles as STYLING } from '@/types/enum';
import { myProjects } from '@/types/models';
import ProjectsWelcome from './ProjectsWelcome';
import ProjectsHeader from './ProjectsHeader';
import { Project } from '@/types/types';
import ProjectShowCase from './ProjectShowcase';
import { useEffect, useState } from 'react';
export default function ProjectsLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement> | string) => {
    let value: string;

    if (typeof e === 'string') {
      value = e;
    } else {
      value = (e.target as HTMLButtonElement).value;
    }
    setSelectedProject(
      () => myProjects.find((project) => project.title === value) || null
    );
  };
  useEffect(() => {
    console.log(selectedProject);
  }, [selectedProject]);
  return (
    <div className={STYLING.Container}>
      <ProjectsHeader {...{ handleSelection }} />
      {selectedProject ? (
        <ProjectShowCase project={selectedProject} />
      ) : (
        <ProjectsWelcome {...{ handleSelection }} />
      )}
    </div>
  );
}
