import { Meal } from './meal';

type DayFoodMeal = {
  title: string;
  mealType: string;
  description: string;
  recipes: { recipe: string }[]; // Title
};
export type DayFoodFormData = {
  title: string;
  meals: Record<string, DayFoodMeal[]>; // ID for human type
};

export type DayFood = {
  id: string;
  title: string;
  video: File | string;
  meal: {
    human: string;
    meal: Meal[];
  };
};
