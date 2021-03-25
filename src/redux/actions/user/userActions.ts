import { UserState, UserTypes } from 'types/user';
import { CookiesTypes } from 'types/cookies';

import { rootAction } from '../rootAction';

export const saveUserAction = (data: UserState) => {
  const { dispatch } = rootAction();
  dispatch({
    type: UserTypes.SET_USER,
    data,
  });
  dispatch({
    type: CookiesTypes.SET_COOKIE,
    data: {
      name: 'token',
      value: data.token,
    },
  });
};

export const logoutUserAction = () => {
  const { dispatch } = rootAction();
  dispatch({
    type: UserTypes.USER_LOGOUT,
  });
  dispatch({
    type: CookiesTypes.REMOVE_COOKIE,
    data: {
      name: 'token',
    },
  });
};
