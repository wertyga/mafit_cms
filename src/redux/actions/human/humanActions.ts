import { Human, HUMAN_ACTION_TYPES } from 'types/human';
import { rootAction } from '../rootAction';

export const setHumansAction = (humans: Human[], totalCount: number) => {
  const { dispatch } = rootAction();
  dispatch({
    type: HUMAN_ACTION_TYPES.SET_HUMANS,
    data: {
      humans,
      totalCount,
    },
  });
};

export const updateHumansAction = (human: Human, totalCount: number, requestType: 'add' | 'update' | 'delete') => {
  const { dispatch } = rootAction();
  let type;
  if (requestType === 'add') type = HUMAN_ACTION_TYPES.ADD_HUMAN;
  if (requestType === 'update') type = HUMAN_ACTION_TYPES.UPDATE_HUMAN;
  if (requestType === 'delete') type = HUMAN_ACTION_TYPES.DELETE_HUMAN;
  dispatch({
    type,
    data: {
      human,
      totalCount,
    },
  });
};
