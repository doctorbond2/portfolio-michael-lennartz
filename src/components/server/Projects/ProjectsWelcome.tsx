'use client';
import { useOptions } from '@/context/OptionsContext';
import { myProjects, myProjectsSV } from '@/types/models';
import ProjectPreviewBox from './ProjectPreviewBox';
type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
};

export default function ProjectsWelcome({ handleSelection }: Props) {
  const { state } = useOptions();
  const projects = state.language === 'sv' ? myProjectsSV : myProjects;
  const welcomeTitle =
    state.language === 'sv' ? 'Mina nuvarande projekt' : 'My current projects';
  const welcomeText =
    state.language === 'sv'
      ? 'Här kan du hitta alla projekt jag har producerat och försöker förbättra så mycket som tiden tillåter!'
      : 'Here you can find all the projects I have produced and try to improve as much as time allows!';
  return (
    <div className="flex flex-col items-center min-h-[60%] h-[90%]">
      <h1 className="text-4xl font-bold">{welcomeTitle}</h1>
      <p className="text-lg">{welcomeText}</p>
      <div className="flex flex-nowrap justify-start max-w-full min-h-[85%] h-[85%] items-center border-b-2 mt-[2%] overflow-x-auto whitespace-nowrap">
        {projects.map((project) => (
          <ProjectPreviewBox
            key={project.id}
            project={project}
            handleSelection={handleSelection}
          />
        ))}
      </div>
    </div>
  );
}
