import { ProjectLayoutStyles as STYLING } from '@/types/enum';
import Link from 'next/link';
export default function ProjectsLayout() {
  return (
    <div className={STYLING.Container}>
      <ul>
        <Link
          href="https://hakims-livs-2304-g06x-client.vercel.app/"
          target="blank"
        >
          <li>Online Food Store</li>
        </Link>
        <Link href="/projects/2">
          <li>Chat app</li>
        </Link>
        <Link
          href="https://ecommerce-headless-cms-storyblok-nextjs.vercel.app/"
          target="blank"
        >
          <li>Ecommerce</li>
        </Link>
      </ul>
    </div>
  );
}
