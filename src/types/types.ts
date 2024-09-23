export type ParamsCatchAll = {
  params: {
    slug: string[];
  };
};
export type SlideShowProps = { images: string[] };
export type Project = {
  title: string;
  full_title: string;
  description: string;
  images: string[];
  link: string;
  technologies: string[];
  deploy: string | null;
  id: number;
  short_description: string;
  preview_image?: string;
};
