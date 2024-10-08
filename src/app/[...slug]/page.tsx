import { ParamsCatchAll } from '@/types/types';
import ProjectsLayout from '@/components/server/Projects/ProjectsLayout';
import ContactLayout from '@/components/server/contact/ContactLayout';
export default function Page({ params }: ParamsCatchAll) {
  const slug: string = params.slug.join('/');
  switch (slug) {
    case 'projects':
      return <ProjectsLayout />;
    case 'contact':
      return <ContactLayout />;
    default:
      return <div>Not found</div>;
  }
}
