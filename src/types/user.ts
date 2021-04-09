export enum UserTypes {
  SET_USER = 'SET_USER',
  USER_LOGOUT = 'USER_LOGOUT',
}

export type UserState = {
  token?: string,
  username: string,
  email: string;
  role?: 'admin' | 'foodman' | 'fitnessMan' | 'client';
};

export type UserAction = {
  type: UserTypes,
  data: Record<keyof UserState, string>,
};
