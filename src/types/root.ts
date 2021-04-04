import { UserState } from './user';
import { CookieState } from './cookies';
import { DeviceState } from './device';
import { HumanState } from './human';
import { FoodstuffState } from './foodstuff';

export type RootState = {
	userStore: UserState;
	cookiesStore: CookieState;
	deviceStore: DeviceState;
	humanStore: HumanState;
	foodstuffStore: FoodstuffState;
};
