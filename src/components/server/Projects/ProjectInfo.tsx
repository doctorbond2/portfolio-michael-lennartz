import Link from 'next/link';
import Image from 'next/image';
export default function ProjectInfo({
  description,
  technologies,
  full_title,
  deploy,
  link,
}: {
  description: string;
  technologies: string[];
  full_title: string;
  deploy: string | null;
  link: string;
}) {
  return (
    <>
      <div className="xl:mx-20 xl:mt-[5%] md:mt-3 md:mx-3">
        <h2 className="font-nanum xl:text-[2rem] md:text-[1.6rem] font-bold max-w-[80%]">
          {full_title}
        </h2>
        <br></br>
        <p>{description}</p>
        <div className="mt-20">
          <h3 className="text-gray-700 text-xl">Build with:</h3>
          {technologies.map((tech_title, index) => (
            <h4 key={'tech-' + index} className="italic">
              {tech_title}
            </h4>
          ))}
        </div>
        <br />
        {deploy ? (
          <div className="flex items-center">
            <h5 className="text-gray-700 text-xl italic mr-1">
              View the project now on
            </h5>
            <div className="xl:w-[40px] xl:h-[40px]">
              <Image
                width={40}
                height={40}
                src="/rightarrow.png"
                alt={'rightarrow'}
              />
            </div>
            <Link href={link} target="blank">
              <h5 className="text-gray-800 text-xl italic hover:text-blue-800">
                {deploy}
              </h5>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}
