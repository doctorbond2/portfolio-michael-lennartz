'use client';
import { ProjectLayoutStyles as STYLING } from '@/types/enum';
import { myProjects } from '@/types/models';
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

      {/* <ul>
        <Link
          href="https://hakims-livs-2304-g06x-client.vercel.app/"
          target="blank"
        >
          <li>Online Food Store</li>
        </Link>
        <Link href="/projects/2">
          <li>Chat app</li>
        </Link>
        <Link
          href="https://ecommerce-headless-cms-storyblok-nextjs.vercel.app/"
          target="blank"
        >
          <li>Ecommerce</li>
        </Link>
      </ul> */}
      {/* className={STYLING.SelectedProject} */}
      {selectedProject ? (
        <div>
          <ProjectShowCase project={selectedProject} />
        </div>
      ) : (
        <h2>Select a project!</h2>
      )}
    </div>
  );
}
