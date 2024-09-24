'use client';
import Link from 'next/link';
import { HeaderStyles as HS } from '@/types/enum';
import { usePathname } from 'next/navigation';
import { useOptions } from '@/context/OptionsContext';
export default function HeaderLinks() {
  const currentUrl = usePathname();
  const { state } = useOptions();
  const homeLinkTitle = state.language === 'sv' ? 'Hem' : 'Home';
  const projectsLinkTitle = state.language === 'sv' ? 'Projekt' : 'Projects';
  const contactLinkTitle = state.language === 'sv' ? 'Kontakt' : 'Contact';

  return (
    <nav>
      <ul className={HS.ul}>
        <Link href="/">
          <li
            key="nav-li-1"
            className={
              HS.NavItem +
              ' ' +
              (currentUrl === '/' ? 'linkActive' : 'underlineAnimation')
            }
          >
            {homeLinkTitle}
          </li>
          <div className=""></div>
        </Link>
        <Link href="/projects">
          <li
            key="nav-li-2"
            className={
              HS.NavItem +
              ' ' +
              (currentUrl === '/projects' ? 'linkActive' : 'underlineAnimation')
            }
          >
            {projectsLinkTitle}
          </li>
        </Link>
        <Link href="/contact">
          <li
            key="nav-li-3"
            className={
              HS.NavItem +
              ' ' +
              (currentUrl === '/contact' ? 'linkActive' : 'underlineAnimation')
            }
          >
            {contactLinkTitle}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
