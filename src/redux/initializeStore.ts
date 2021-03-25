import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { RootState } from 'types/root';

import { rootReducer } from './reducers/rootReducer';

const devEnv = process.env.NODE_ENV === 'development';

const middlewares = [thunk];

export const initializeStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  devEnv
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares),
);

let reduxStore;
export const getOrInitializeStore = (initialState?: RootState) => {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};
