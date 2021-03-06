import {FoodInput, FoodStuff, Recipe} from 'graphql/types';

type FormDataType = {
  description: { description: string }[];
  foods: { food: string, count: string }[];
  title: string;
};
export const collectFoods = (
  foods: { food: string, count: string }[] = [],
  foodstuffs: FoodStuff[],
): FoodInput[] => (
  foods.map(({ food: title, count }) => {
    const { id } = foodstuffs.find((item) => item.title === title) || {};

    const qt = Number(count);
    return { id, qt: Number.isNaN(qt) ? 0 : qt };
  })
);
export const collectRecipeFormData = (formData: FormDataType, foodstuffs: FoodStuff[]) => {
  const description = formData.description.map((item) => item.description);
  const foods = collectFoods(formData.foods, foodstuffs);

  return {
    title: formData.title,
    description,
    foods,
  };
};

export const collectEditableData = (state: Partial<Recipe>) => {
  const foods = state.foods.map(({ foodstuff, qt }) => ({ food: foodstuff.title, count: qt }));
  return {
    ...state,
    foods,
    description: state.description.map((text) => ({ description: text })),
    preview: state.image,
    foodSelectState: foods.reduce((acc, { food }, i) => ({
      ...acc,
      [i]: food,
    }), {}),
  };
};

export const getRecipeModalTitle = (isEdit: boolean) => (isEdit ? 'Edit recipe' : 'Add recipe');
