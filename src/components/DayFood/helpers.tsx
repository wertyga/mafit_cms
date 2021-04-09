import React from 'react';
import { DayFoodExpandableContent } from 'components/DayFood/DayFoodExpandableContent/DayFoodExpandableContent';
import { getTableData, getPaginationTableProp } from 'components/Common/Table/helpers';

import { DayFoodFormData } from 'types/dayFood';
import { DayFood, DayFoodInput } from 'graphql/types';

export const FORM_SPAN = [3, 10];

export const getDayFoodTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <DayFoodExpandableContent {...props} />,
    rowExpandable: () => true,
  },
  ...getPaginationTableProp(totalCount, 'trainings', handleChangePage),
});

export const convertFormDataToRequest = (
  formData: DayFoodFormData,
  recipes: Record<string, string>,
): DayFoodInput => {
  const { title, ...humanTypes } = formData;
  const dayFoodMeal = Object.entries(humanTypes as Omit<DayFoodFormData, 'title'>).map(([human, { meals }]) => ({
    human,
    meal: meals.map((item) => ({
      title: item.title,
      description: item.description,
      type: item.mealType,
      recipes: item.recipes
        .map(({ recipe: recipeTitle }) => {
          console.log(recipeTitle);
          return recipeTitle && recipes[recipeTitle];
        })
        .filter((value) => !!value),
    })),
  }));
  return {
    title,
    meal: dayFoodMeal,
  };
};
export const convertDayFoodToFormData = (dayFood: DayFood): DayFoodFormData => {
  const { title, meal = [] } = dayFood;

  const meals = meal.reduce((acc, { human, meal: innerMeal }) => ({
    ...acc,
    [human.id]: {
      meals: innerMeal.map((item) => ({
        title: item.title,
        description: item.description,
        mealType: item.type,
        recipes: item.recipes.map((recipe) => ({ recipe: recipe.title })),
      })),
    },
  }), {});

  return {
    title,
    ...meals,
  } as DayFoodFormData;
};
