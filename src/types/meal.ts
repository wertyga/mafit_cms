import { FoodStuff } from './foodstaff';

export type Meal = {
	type: string;
	title: string;
	description: string;
	foodstuff: Partial<FoodStuff>[];
}
