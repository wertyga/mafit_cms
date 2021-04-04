import { FOODSTUFF_ACTION_TYPES, FoodstuffState } from 'types/foodstuff';

const initialState = {
  foodstuffs: [],
  totalCount: 0,
};

export const foodstuffStore = (state: FoodstuffState = initialState, { type, data }) => {
  switch (type) {
    case FOODSTUFF_ACTION_TYPES.SET_FOODSTUFFS:
      return {
        foodstuffs: data.foodstuffs,
        totalCount: data.totalCount,
      };
    case FOODSTUFF_ACTION_TYPES.ADD_FOODSTUFF:
      return {
        foodstuffs: [data.foodstuff, ...state.foodstuffs],
        totalCount: data.totalCount || state.totalCount + 1,
      };
    case FOODSTUFF_ACTION_TYPES.UPDATE_FOODSTUFF:
      return {
        foodstuffs: state.foodstuffs.map((item) => (
          item.id === data.foodstuff.id ? data.foodstuff : item
        )),
        totalCount: data.totalCount || state.totalCount,
      };
    case FOODSTUFF_ACTION_TYPES.DELETE_FOODSTUFF:
      return {
        foodstuffs: state.foodstuffs.filter(({ id }) => id !== data.foodstuff.id),
        totalCount: data.totalCount || state.totalCount - 1,
      };

    default:
      return state;
  }
};
