import { UserAction, UserState, UserTypes } from 'types';

const initialState = {
  token: '',
  username: '',
  email: '',
};

export const userStore = (state: UserState = initialState, {
  type,
  data
}: UserAction) => {
  switch (type) {
    case UserTypes.SET_USER:
      return data;

    case UserTypes.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
