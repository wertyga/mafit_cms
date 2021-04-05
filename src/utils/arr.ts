import { Recipe } from 'graphql/types';

export const getDataWithKeys = (recipes: Recipe[], prefix?: string) => (
  recipes.map((item, i) => ({
    ...item,
    key: `${prefix || ''}-${i}`,
  }))
);
