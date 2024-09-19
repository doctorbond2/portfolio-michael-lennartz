import { ParamsCatchAll } from '@/types/types';
import ProjectsLayout from '@/components/server/Projects/ProjectsLayout';
export default function Page({ params }: ParamsCatchAll) {
  const slug: string = params.slug.join('/');
  switch (slug) {
    case 'projects':
      return <ProjectsLayout />;
    default:
      return <div>Not found</div>;
  }
}
