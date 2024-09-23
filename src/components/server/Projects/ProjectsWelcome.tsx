import { myProjects } from '@/types/models';
import ProjectPreviewBox from './ProjectPreviewBox';
type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
};

export default function ProjectsWelcome({ handleSelection }: Props) {
  const projects = myProjects;

  return (
    <div className="flex flex-col items-center min-h-[60%] h-[90%]">
      <h1 className="text-4xl font-bold">Welcome to my Projects Page</h1>
      <p className="text-lg">
        Here you can find all the projects I have produced and try to improve as
        much as time allows!
      </p>
      <div className="flex flex-wrap justify-center min-h-[85%] h-[85%] items-center border-b-2">
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
