import { combineReducers } from 'redux';
import { userStore } from './userStore/userStore';
import { cookiesStore } from './cookiesStore/cookiesStore';
import { humanStore } from './humanStore/humanStore';
import { foodstuffStore } from './foodstuffStore/foodstuffStore';

export const rootReducer = combineReducers({
  userStore,
  cookiesStore,
  humanStore,
  foodstuffStore,
});
