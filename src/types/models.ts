import { Project } from './types';
export const myProjects: Project[] = [
  {
    title: 'Headless CMS',
    full_title: 'Ecommerce with Headless CMS',
    description:
      'Using Storyblok API to manage content and Next.js to render the pages. Images taken from fantastic clothing store Colourful Standard.',
    images: ['/ecom1.png', '/ecom2.png', '/ecom3.png'],
    link: 'https://ecommerce-headless-cms-storyblok-nextjs.vercel.app/',
    technologies: ['Next.js', 'Storyblok', 'Tailwind CSS'],
    deploy: 'Vercel',
  },
  {
    title: 'Online Grocery Store',
    full_title: 'Ecommerce for Grocery Products',
    description:
      'Online store with a working database connected to the frontend. The site also includes a fully working custom made admin panel for working with products and orders.',
    images: ['/hakim1.png', '/hakim2.png', '/hakim3.png', '/hakim4.png'],
    link: 'https://hakims-livs-2304-g06x-client.vercel.app/',
    technologies: ['React/Vite', 'Node.js', 'Express', 'MongoDB/Atlas'],
    deploy: 'Vercel',
  },
];
