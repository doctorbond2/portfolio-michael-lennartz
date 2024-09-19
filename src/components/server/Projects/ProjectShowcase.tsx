import { Project } from '@/types/types';
import ImageSlideShow from './ImageSlideShow';
import ProjectInfo from './ProjectInfo';
export default function ProjectShowCase({ project }: { project: Project }) {
  const { images, title, description, link, technologies, full_title, deploy } =
    project;
  return (
    <>
      <div id="project-showcase-container" className="flex md:flex-row">
        <section id="left-section-info md:w-[50%] md:max-w[50%]">
          <ProjectInfo
            {...{ full_title, description, technologies, deploy, link }}
          />
        </section>
        <section id="right-section-image md:w-[50%]">
          <ImageSlideShow images={images} />
        </section>
      </div>
    </>
  );
}
