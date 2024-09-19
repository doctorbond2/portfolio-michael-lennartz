import Link from 'next/link';
import Image from 'next/image';
export default function FooterLinks() {
  return (
    <>
      <div className="flex justify-around w-[30%] items-center">
        <div id="github-image-wrapper">
          <Link href="https://github.com/doctorbond2" target="blank">
            <Image
              src="/githubblackborder.png"
              alt="github-picture"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div id="linkedin-image-wrapper">
          <Link
            href="https://www.linkedin.com/in/michael-lennartz-858a3427a/"
            target="blank"
          >
            <Image
              src="/linkedin1.png"
              alt="linkedin-picture"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
