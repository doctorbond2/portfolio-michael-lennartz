'use client';
import { ProjectLayoutStyles as STYLING } from '@/types/enum';
import { myProjects, myProjectsSV } from '@/types/models';
import ProjectsWelcome from './ProjectsWelcome';
import { useOptions } from '@/context/OptionsContext';
import ProjectsHeader from './ProjectsHeader';
import { Project } from '@/types/types';
import ProjectShowCase from './ProjectShowcase';
import { useEffect, useState } from 'react';
export default function ProjectsLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { state } = useOptions();
  const handleSelection = (e: React.MouseEvent<HTMLButtonElement> | string) => {
    let value: string;
    const projects = state.language === 'sv' ? myProjectsSV : myProjects;
    if (typeof e === 'string') {
      value = e;
    } else {
      value = (e.target as HTMLButtonElement).value;
    }
    setSelectedProject(
      () => projects.find((project) => project.title === value) || null
    );
  };
  useEffect(() => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.language]);
  useEffect(() => {
    console.log('selected project: ', selectedProject);
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
