'use client';
import Link from 'next/link';
import { HeaderStyles as HS } from '@/types/enum';
import { usePathname } from 'next/navigation';
export default function HeaderLinks() {
  const currentUrl = usePathname();
  console.log(currentUrl);
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
            Home
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
            Projects
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
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
