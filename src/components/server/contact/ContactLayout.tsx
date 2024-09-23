import { ContactLayoutStyles as STYLING } from '@/types/enum';
export default function ContactLayout() {
  return (
    <div className={STYLING.Container}>
      <h1 className="text-5xl font-extrabold font-nanum mb-6 tracking-tight">
        Would love to hear from you!
      </h1>
      <p className="text-xl text-center mb-8 max-w-lg">
        Currently seeking employment or intership opportunities as a
        Frontend/Backend/Fullstack Developer.
      </p>

      <div className="space-y-6">
        <a
          href="mailto:michael.rostlund@hotmail.com"
          className={STYLING.ContactButton}
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile/"
          target="_blank"
          className={STYLING.ContactButton}
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          className={STYLING.ContactButton}
          rel="noopener noreferrer"
        >
          Visit My GitHub
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
