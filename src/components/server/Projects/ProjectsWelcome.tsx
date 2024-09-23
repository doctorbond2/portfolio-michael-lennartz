import { myProjects } from '@/types/models';
import ProjectPreviewBox from './ProjectPreviewBox';
type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
};

export default function ProjectsWelcome({ handleSelection }: Props) {
  const projects = myProjects;

  return (
    <div className="flex flex-col items-center min-h-[60%] h-[90%]">
      <h1 className="text-4xl font-bold">My current projects</h1>
      <p className="text-lg">
        Here you can find all the projects I have produced and try to improve as
        much as time allows!
      </p>
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
