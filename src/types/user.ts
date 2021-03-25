export enum UserTypes {
	SET_USER = 'SET_USER',
	USER_LOGOUT = 'USER_LOGOUT',
}

export type UserState = {
	token?: string,
	username: string,
};

export type UserAction = {
	type: UserTypes,
	data: Record<keyof UserState, string>,
};

export type GetUserVars = {
  id: number;
};
export type GetUserData = {
  id: number;
  username: string;
};
