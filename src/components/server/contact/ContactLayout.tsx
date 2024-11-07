'use client';
import { ContactLayoutStyles as STYLING } from '@/types/enum';
import { useOptions } from '@/context/OptionsContext';
import { useState } from 'react';
export default function ContactLayout() {
  const { state } = useOptions();
  const [modalOpen, setModalOpen] = useState(false);
  const TEXT_ENG = {
    h1: 'Would love to hear from you!',
    p: `Currently seeking employment or intership opportunities as a
        Frontend/Backend/Fullstack Developer.`,
    modal_close: 'Close',
    modal_text: 'Choose language:',
  };
  const TEXT_SV = {
    h1: 'Kontakta mig!',
    p: 'Söker för tillfället tjänst eller praktik som Frontend/Backend/Fullstack-utvecklare. ',
    modal_close: 'Stäng',
    modal_text: 'Välj språk:',
  };
  const TEXT = state.language === 'sv' ? TEXT_SV : TEXT_ENG;
  return (
    <>
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

          <button
            className={STYLING.ContactButton}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            CV
          </button>
        </div>
      </div>

      <div id="cv-choice-modal">
        <div
          className={`${
            modalOpen ? 'block' : 'hidden'
          } fixed z-20 inset-0 overflow-y-auto`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start justify-center">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 mx-auto"
                      id="modal-headline"
                    >
                      {TEXT.modal_text}
                    </h3>
                    <div className="mt-2">
                      <a
                        href="/CV_ENG_0001.pdf"
                        download="Michael_Lennartz_CV_ENG.pdf"
                        className={STYLING.ContactButton}
                      >
                        ENG
                      </a>
                    </div>
                    <div className="mt-2">
                      <a
                        href="/CV_SV_0001.pdf"
                        download="Michael_Lennartz_CV_SV.pdf"
                        className={STYLING.ContactButton}
                      >
                        SV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setModalOpen(false)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-slate-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-gray-200 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {TEXT.modal_close}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
