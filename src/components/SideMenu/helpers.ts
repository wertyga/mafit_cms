import { gfMenu } from 'goldfish/gfMenu';

export const getDefaultMenuChosen = (pathname: string): string => {
  const menuTitle = (gfMenu.find(({ href }) => href === pathname) || {}).title;
  return menuTitle || '';
};
