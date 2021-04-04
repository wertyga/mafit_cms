import { Food } from './foodstuff';

export type Meal = {
	type: string;
	title: string;
	description: string;
	foods: Food[];
}
