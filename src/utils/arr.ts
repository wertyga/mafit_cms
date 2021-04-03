import { Recipe } from 'graphql/generated/recipe';

export const getDataWithKeys = (recipes: Recipe[], prefix?: string) => (
	recipes.map((item, i) => ({ ...item, key: `${prefix || ''}-${i}` }))
);
