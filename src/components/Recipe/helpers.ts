import { Recipe } from 'graphql/generated/recipe';

export const getRecipeData = (recipes: Recipe[]) => (
  recipes.map(({
    title, description, image, foods,
  }) => ({
    key: title,
    title,
    description,
    image,
    foods: JSON.stringify(foods),
  }))
);
