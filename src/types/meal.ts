import { Food } from './foodstuff';

export enum MEAL_TYPES {
	BREAKFAST = 'Breakfast',
	LUNCH = 'Lunch',
	DINNER = 'Dinner',
}

export type Meal = {
	type: string;
	title: string;
	description: string;
	foods: Food[];
}
