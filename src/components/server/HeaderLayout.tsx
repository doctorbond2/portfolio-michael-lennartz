type Props = object;
import Image from 'next/image';
import { HeaderStyles as HS } from '@/types/enum';
import HeaderLinks from '../client/HeaderLinks';
export default function HeaderLayout({}: Props) {
  return (
    <div className={HS.Container}>
      <section id="left-section-logo-or-name">
        <h1 className="font-nanum text-2xl font-bold max-w-[10vw] min-w-[10vw]">
          Michael Lennartz
        </h1>
      </section>

      <section id="middle-section-navigation">
        <HeaderLinks />
      </section>
      <section id="right-section-theme">
        <div className="relative group max-w-[10vw] min-w-[10vw] flex flex-row justify-end">
          <Image
            src="/cogwheelwhite.png"
            alt="cogwheel-picture"
            width={40}
            height={40}
          />
          <div className="absolute right-10 transform translate-x-[-10px] top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-700 text-white text-md rounded-md py-1 px-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            Settings option coming soon!
          </div>
        </div>
      </section>
    </div>
  );
}
