'use client';
import { useState } from 'react';
type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
import { myProjects } from '@/types/models';
export default function ProjectsHeader({ handleSelection }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:w-[10%] border border-black relative">
      <button onClick={toggleMenu} className="mx-5 font-nanum">
        Select Project
      </button>
      <div
        className={`absolute left-0 right-0 mt-2 bg-white border border-black transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 max-h-96'
            : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col mt-2">
          {myProjects.map((project, index) => (
            <button
              key={index}
              value={project.title}
              onClick={handleSelection}
              className="mx-5 font-nanum"
            >
              {project.title}
            </button>
          ))}
          <button className="mx-5 font-nanum">Another project</button>
        </div>
      </div>
    </div>
  );
}
