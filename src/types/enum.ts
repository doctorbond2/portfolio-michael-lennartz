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
  Container = 'flex flex-col md:flex-row  min-h-[65vh] justify-center items-center',
  ProfileInfoSection = 'flex flex-col justify-center items-center md:ml-8 max-w-[40%] min-w-[30%]',
  ProfilePictureSection = 'flex flex-col justify-center items-center ',
}
export enum ContactLayoutStyles {
  Container = 'flex flex-col items-center justify-center  min-h-[65vh] bg-gradient-to-b p-8 text-black',
  ContactInfoSection = 'flex flex-col items-center justify-center h- bg-gradient-to-b p-8 text-black border-t',
  ContactButton = 'block w-full text-center border border-black py-3 px-6 bg-white font-semibold rounded-lg shadow-lg transition-all hover:bg-slate-200',
}

export enum ProjectLayoutStyles {
  Container = 'min-h-[65vh]',
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

export enum Theme {
  dark = 'dark',
  light = 'light',
}
export enum Language {
  en = 'en',
  sv = 'sv',
}
export enum OPTION_ACTIONS {
  SET_THEME = 'SET_THEME',
  SET_LANGUAGE = 'SET_LANGUAGE',
}
