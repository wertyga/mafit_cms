import { Dispatch } from 'redux';
import { RootState } from 'types/root';
import { getOrInitializeStore } from '../initializeStore';

export const rootAction = (): { rootState: RootState, dispatch: Dispatch } => {
  const rootStore = getOrInitializeStore();
  return {
    rootState: rootStore.getState(),
    dispatch: rootStore.dispatch,
  };
};
