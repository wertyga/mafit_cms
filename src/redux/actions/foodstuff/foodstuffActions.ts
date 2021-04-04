import { FoodStuff, FOODSTUFF_ACTION_TYPES } from 'types/foodstuff';
import { rootAction } from '../rootAction';

export const setFoodStuffsAction = (foodstuffs: FoodStuff[], totalCount: number) => {
  const { dispatch } = rootAction();
  dispatch({
    type: FOODSTUFF_ACTION_TYPES.SET_FOODSTUFFS,
    data: {
      foodstuffs,
      totalCount,
    },
  });
};

export const updateFoodStuffsAction = (foodstuff: FoodStuff, totalCount: number, requestType: 'add' | 'update' | 'delete') => {
  const { dispatch } = rootAction();
  let type;
  if (requestType === 'add') type = FOODSTUFF_ACTION_TYPES.ADD_FOODSTUFF;
  if (requestType === 'update') type = FOODSTUFF_ACTION_TYPES.UPDATE_FOODSTUFF;
  if (requestType === 'delete') type = FOODSTUFF_ACTION_TYPES.DELETE_FOODSTUFF;
  dispatch({
    type,
    data: {
      foodstuff,
      totalCount,
    },
  });
};
