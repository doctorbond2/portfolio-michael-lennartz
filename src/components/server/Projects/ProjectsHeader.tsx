'use client';
import { useState, useRef, useEffect } from 'react';
type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
import { myProjects } from '@/types/models';
export default function ProjectsHeader({ handleSelection }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      className="md:w-[15%] md:ml-[5%] md:mr-auto z-20 relative"
      ref={dropdownRef}
    >
      <button
        onClick={toggleMenu}
        className="font-bold w-fit  border border-black text-white bg-black rounded-md p-1 hover:bg-white hover:text-black"
      >
        Projects Menu
      </button>
      <div
        className={`absolute left-0 right-0 mt-2 bg-white border-2 border-black transition-all duration-500 ease-in-out rounded-md ${
          isMenuOpen
            ? 'opacity-100 max-h-[20rem] pointer-events-auto'
            : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col mt-2 font-nanum font-bold text-lg">
          <button
            onClick={(e) => {
              handleSelection(e);
              toggleMenu();
            }}
            value={''}
            className="mx-[30%] my-1 underlineAnimation"
          >
            All projects
          </button>
          {myProjects.map((project, index) => (
            <button
              key={index}
              value={project.title}
              onClick={(e) => {
                handleSelection(e);
                toggleMenu();
              }}
              className="underlineAnimation mx-auto my-1"
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
