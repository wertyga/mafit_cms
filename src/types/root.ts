import { UserState } from './user';
import { CookieState } from './cookies';

export type RootState = {
	userStore: UserState,
	cookiesStore: CookieState,
};
