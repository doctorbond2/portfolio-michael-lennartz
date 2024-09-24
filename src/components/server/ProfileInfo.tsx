'use client';
import { introductionENG, introductionSV } from '@/types/models';
import { useOptions } from '@/context/OptionsContext';
export default function ProfileInfo() {
  const { state } = useOptions();
  const introduction =
    state.language === 'sv' ? introductionSV : introductionENG;
  const student =
    state.language === 'sv'
      ? 'Studerande Fullstack Utvecklare'
      : 'Fullstack Development Student';

  return (
    <div>
      <h1 className="font-nanum xl:text-[4rem] lg:text-[2rem] font-bold ">
        Michael Lennartz
      </h1>
      <h2 className="font-nanum xl:text-[1.8rem] lg:text-[1rem] text-gray-400 max-w-[80%] font-bold">
        {student}
      </h2>
      <h3 className="font-nanum xl:text-[1.2rem] lg:text-[1rem] text-gray-600 max-w-[80%] font-bold">
        Nackademin
      </h3>
      <br></br>
      <p className="max-w-[80%] italic text-gray-700">{introduction}</p>
    </div>
  );
}
