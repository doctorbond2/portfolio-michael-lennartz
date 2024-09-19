import FooterLinks from './FoooterLinks';
import { FooterStyles as FS } from '@/types/enum';
export default function FooterLayout() {
  return (
    <div id="footer-wrapper" className={FS.Container}>
      <nav
        id="footer-content"
        className="flex md:flex-wrap w-full justify-between"
      >
        <FooterLinks />
        <p>© 2024 - ML Portfolio</p>
      </nav>
    </div>
  );
}
