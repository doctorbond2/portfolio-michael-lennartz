type Props = {
  handleSelection: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
import { myProjects } from '@/types/models';
export default function ProjectsHeader({ handleSelection }: Props) {
  return (
    <div className="flex md:flex-wrap w-full border border-black justify-around">
      <div className="flex flex-wrap">
        {myProjects.map((project, index) => (
          <button
            key={index}
            value={project.title}
            onClick={handleSelection}
            className="mx-5"
          >
            {project.title}
          </button>
        ))}
        <button>Another project</button>
      </div>
    </div>
  );
}
