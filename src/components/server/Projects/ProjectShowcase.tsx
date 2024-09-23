import { Project } from '@/types/types';
import ImageSlideShow from './ImageSlideShow';
import ProjectInfo from './ProjectInfo';
export default function ProjectShowCase({ project }: { project: Project }) {
  const { images, description, link, technologies, full_title, deploy } =
    project;
  return (
    <>
      <div
        id="project-showcase-container"
        className="flex md:flex-row w-full animate-fadeIn min-h-[80%] md:min-h-[90%] "
      >
        <section id="left-section-info" className="md:w-1/2 flex-1 min-h-[80%]">
          <ProjectInfo
            {...{ full_title, description, technologies, deploy, link }}
          />
        </section>
        <section id="right-section-image" className="md:w-[50%] md:max-w-[50%]">
          <ImageSlideShow images={images} />
        </section>
      </div>
    </>
  );
}
