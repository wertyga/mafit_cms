import { collectFoods } from 'components/Recipe/RecipeModal/helpers';
import {
  FoodStuff, HumanType, MealInput, Training, TrainingInput,
} from 'graphql/types';
import { TrainingRequestFormData } from 'types';

type FormMeal = {
	title: string;
	description: string;
	mealType: string;
	foods: { food: string, count: string }[];
};
type FormDataType = {
	title: string;
	humanType: string;
	meals: FormMeal[];
};
const collectMeals = (meals: FormMeal[], foodstuffs: FoodStuff[]): MealInput[] => (
  meals.map((meal) => ({
    title: meal.title,
    description: meal.description,
    type: meal.mealType,
    foods: collectFoods(meal.foods, foodstuffs),
  }))
);
export const collectTrainingRequest = (
  formData: FormDataType,
  foodstuffs: FoodStuff[],
  humanTypes: HumanType[],
): Omit<TrainingInput, 'id'> => {
  const meals = collectMeals(formData.meals, foodstuffs);
  const human = humanTypes.find(({ category }) => category === formData.humanType) || {};
  return {
    title: formData.title,
	  meal: {
    	human: (human as HumanType).id,
		  meal: meals,
	  },
  };
};

export const getHumanOptions = (humanTypes: HumanType[]) => (
  humanTypes.map(({ id, category }) => ({ title: id, value: category }))
);

export const getMealOptions = (humanTypes: HumanType[]) => ({
  humanOptions: getHumanOptions(humanTypes),
});

export const collectEditableTraining = (
  training: Training,
  humans: HumanType[],
): TrainingRequestFormData & { video: string | null } => {
  const { meal: { human, meal = [] }, title, video } = training;
  const humanCategory = (humans.find(({ id }) => id === human) || {}).category;

  const meals = meal.map(({
    description, title: mealTitle, type, foods,
  }) => ({
    title: mealTitle,
    description,
    mealType: type,
    foods: foods.map((food) => ({ food: food.foodstuff.title, count: food.qt.toString() })),
  }));

  return {
    humanType: humanCategory,
    title,
    video,
    meals,
  };
};
