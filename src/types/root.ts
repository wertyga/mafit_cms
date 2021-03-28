import { UserState } from './user';
import { CookieState } from './cookies';
import { DeviceState } from './device';

export type RootState = {
	userStore: UserState,
	cookiesStore: CookieState,
	deviceStore: DeviceState,
};
