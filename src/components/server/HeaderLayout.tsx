type Props = object;
import { HeaderStyles as HS } from '@/types/enum';
import HeaderLinks from '../client/HeaderLinks';
export default function HeaderLayout({}: Props) {
  return (
    <div className={HS.Container}>
      <section id="left-section-logo-or-name">
        <h1 className="font-nanum font-bold max-w-[5vw]">Michael Lennartz</h1>
      </section>

      <section id="middle-section-navigation">
        <HeaderLinks />
      </section>
      <section id="right-section-theme">
        {' '}
        <h1 className="font-nanum font-bold max-w-[5vw]">Right</h1>
      </section>
    </div>
  );
}
