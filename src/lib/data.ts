import club from './club.json';
import menu from './menu.json';
import DataProps from '@/interfaces/data';

export const DATA: DataProps = {
  club,
  menu,
  socialLinks: club.socialLinks,
};
