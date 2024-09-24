'use client';
import { useState, useRef, useEffect } from 'react';
import { Language } from '@/types/enum';
import Image from 'next/image';
import { HeaderStyles as HS } from '@/types/enum';
import HeaderLinks from '../client/HeaderLinks';
import { useOptions } from '@/context/OptionsContext';
export default function HeaderLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useOptions();
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    console.log('Menu toggled');
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedOption =
      e.currentTarget.value === 'sv' ? Language.sv : Language.en;
    console.log('Selected option:', selectedOption);
    dispatch({ type: 'SET_LANGUAGE', payload: selectedOption });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={HS.Container}>
      <section id="left-section-logo-or-name">
        <h1 className="font-nanum text-2xl font-bold max-w-[14vw] min-w-[10vw]">
          Michael Lennartz
        </h1>
      </section>

      <section id="middle-section-navigation">
        <HeaderLinks />
      </section>

      <section id="right-section-theme">
        <div
          className="md:w-[18%] md:ml-[5%] md:mr-auto z-20 relative"
          ref={dropdownRef}
        >
          <button
            onClick={toggleMenu}
            className="relative group max-w-[14vw] min-w-[10vw] flex flex-row justify-end"
          >
            <Image
              src="/cogwheelwhite.png"
              alt="cogwheel-picture"
              width={40}
              height={40}
              className={
                'transition-all duration-500 ease-in-out' +
                (isMenuOpen ? ' transform -rotate-45' : '')
              }
            />
          </button>
          <div
            className={`min-w-[13rem] absolute left-0 right-0 mt-2 bg-white border-2 border-black transition-all duration-500 ease-in-out rounded-md ${
              isMenuOpen
                ? 'opacity-100 max-h-[20rem] pointer-events-auto'
                : 'opacity-0 max-h-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col  font-nanum font-bold text-lg items-center">
              <div className="flex flex-row items-center justify-between w-full px-1">
                <h3 className="hover:cursor-default ml-auto">Lang</h3>
                <button
                  onClick={(e) => {
                    handleSelection(e);
                    toggleMenu();
                  }}
                  value={'en'}
                  className="ml-auto my-1 underlineAnimation w-[2rem]"
                >
                  EN
                </button>
                <button
                  onClick={(e) => {
                    handleSelection(e);
                    toggleMenu();
                  }}
                  value={'sv'}
                  className="mx-auto my-1 underlineAnimation w-[2rem]"
                >
                  SV
                </button>
              </div>

              {/* <div className="flex flex-row items-center justify-between">
                <h3>Theme</h3>
                <button
                  onClick={(e) => {
                    handleSelection(e);
                    toggleMenu();
                  }}
                  value={''}
                  className="mx-auto my-1 underlineAnimation"
                >
                  LI
                </button>
                <button
                  onClick={(e) => {
                    handleSelection(e);
                    toggleMenu();
                  }}
                  value={''}
                  className="mx-auto my-1 underlineAnimation"
                >
                  DR
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
