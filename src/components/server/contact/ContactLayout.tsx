'use client';
import { ContactLayoutStyles as STYLING } from '@/types/enum';
import { useOptions } from '@/context/OptionsContext';
export default function ContactLayout() {
  const { state } = useOptions();
  const TEXT_ENG = {
    h1: 'Would love to hear from you!',
    p: `Currently seeking employment or intership opportunities as a
        Frontend/Backend/Fullstack Developer.`,
  };
  const TEXT_SV = {
    h1: 'Ser fram emot att ta kontakt!',
    p: 'Söker för tillfället tjänst eller praktik som Frontend/Backend/Fullstack-utvecklare. ',
  };
  const TEXT = state.language === 'sv' ? TEXT_SV : TEXT_ENG;
  return (
    <div className={STYLING.Container}>
      <h1 className="text-5xl font-extrabold font-nanum mb-6 tracking-tight">
        {TEXT.h1}
      </h1>
      <p className="text-xl text-center mb-8 max-w-lg">{TEXT.p}</p>

      <div className="space-y-6 flex flex-col">
        <a
          href="mailto:michael.rostlund@hotmail.com"
          className={STYLING.ContactButton}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/michael-lennartz-858a3427a/"
          target="_blank"
          className={STYLING.ContactButton}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/doctorbond2"
          target="_blank"
          className={STYLING.ContactButton}
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="/CV_ENG_0001.pdf"
          download="Michael_Lennartz_CV.pdf"
          className={STYLING.ContactButton}
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
