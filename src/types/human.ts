export enum HUMAN_ACTION_TYPES {
  SET_HUMANS = 'SET_HUMANS',
  ADD_HUMAN = 'ADD_HUMAN',
  DELETE_HUMAN = 'DELETE_HUMAN',
  UPDATE_HUMAN = 'UPDATE_HUMAN',
}

export type Human = {
  id: string;
  category: string;
};

export type HumanState = {
  humans: Human[];
  totalCount: number;
};
