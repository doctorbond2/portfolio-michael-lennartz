export enum HeaderStyles {
  Container = 'flex w-full justify-between items-center md:px-8 h-24',
  Logo = '',
  Nav = 'flex flex-row list-none',
  NavItem = 'space-x-8',
  ul = 'flex flex-row justify-around md:space-x-36 md: list-none',
}
export enum FooterStyles {
  Container = 'w-full border-black flex md:flex-wrap md:px-8 h-24',
}
export enum HomeLayoutStyles {
  Container = 'flex flex-col md:flex-row  border border-black min-h-[65vh] justify-center items-center',
  ProfileInfoSection = 'flex flex-col justify-center items-center md:ml-8 max-w-[40%] min-w-[30%]',
  ProfilePictureSection = 'flex flex-col justify-center items-center ',
}

export enum ProjectLayoutStyles {
  Container = ' border border-black min-h-[65vh]',
}

export enum ButtonStyles {
  Primary = 'bg-blue-500 text-white py-2 px-4 rounded',
  Secondary = 'bg-gray-500 text-black py-2 px-4 rounded',
}
export enum HREF {
  Home = '/',
  Projects = '/projects',
  Contact = '/contact',
  About = '/about',
}
