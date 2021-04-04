import { HUMAN_ACTION_TYPES, HumanState } from 'types/human';

const initialState = {
  humans: [],
  totalCount: 0,
};

export const humanStore = (state: HumanState = initialState, { type, data }) => {
  switch (type) {
    case HUMAN_ACTION_TYPES.SET_HUMANS:
      return {
        humans: data.humans,
        totalCount: data.totalCount,
      };
    case HUMAN_ACTION_TYPES.ADD_HUMAN:
      return {
        humans: [data.human, ...state.humans],
        totalCount: data.totalCount || state.totalCount + 1,
      };
    case HUMAN_ACTION_TYPES.UPDATE_HUMAN:
      return {
        humans: state.humans.map((item) => (item.id === data.human.id ? data.human : item)),
        totalCount: data.totalCount || state.totalCount,
      };
    case HUMAN_ACTION_TYPES.DELETE_HUMAN:
      return {
        humans: state.humans.filter(({ id }) => id !== data.human.id),
        totalCount: data.totalCount || state.totalCount - 1,
      };

    default:
      return state;
  }
};
