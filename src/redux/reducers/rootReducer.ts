import { combineReducers } from 'redux';
import { userStore } from './userStore/userStore';
import { cookiesStore } from './cookiesStore/cookiesStore';

export const rootReducer = combineReducers({
  userStore,
  cookiesStore,
});
