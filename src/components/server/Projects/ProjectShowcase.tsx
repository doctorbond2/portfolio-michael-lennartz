import { Project } from '@/types/types';
import ImageSlideShow from './ImageSlideShow';
export default function ProjectShowCase({ project }: { project: Project }) {
  const { images } = project;
  return (
    <>
      <section id="project-showcase-section" className="flex-col">
        <ImageSlideShow images={images} />
        <h1 className="text-red-800">{project.title}</h1>
      </section>
    </>
  );
}
