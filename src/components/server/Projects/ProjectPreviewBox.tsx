import { Project } from '@/types/types';
import Image from 'next/image';
export default function ProjectPreviewBox({
  project,
  handleSelection,
}: {
  project: Project;
  handleSelection: (e: React.MouseEvent<HTMLButtonElement> | string) => void;
}) {
  const { short_description, title, id, preview_image } = project;

  return (
    <>
      <div
        key={'project-' + id}
        className={`min-h-[70%] h-[80%] w-[30%] min-w-[30%] mx-[2%] flex flex-col items-center justify-between opacity-0 text-center text-lg font-semibold animate-fadeIn 
            hover:-translate-y-2 transform transition-transform duration-500 ease-in-out hover:shadow-xl hover:scale-110 cursor-pointer hover:border-2 border-gray-400 rounded-lg group`}
        style={{ animationDelay: `${(id - 1) * 0.2}s` }}
        onClick={() => {
          handleSelection(title);
        }}
      >
        <div className="parent relative w-full max-h-[90%] min-h-[80%] h-[80%] mb-2  border-b-2 border-gray-400  group-hover:border-none rounded-lg shadow-md hover:shadow-none">
          <Image
            src={preview_image || '/ecom-preview.png'}
            alt={'image-' + title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg hover:rounded-md"
          />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <h3 className="text-md">{short_description}</h3>
      </div>
    </>
  );
}
