import type { NextApiRequest } from 'next';
import Cookies from 'universal-cookie';

const getCookies = (req) => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.getAll();
};

export const getInitialState = (req: NextApiRequest) => {
  const cookiesStore = getCookies(req);

  return {
    cookiesStore,
  };
};
