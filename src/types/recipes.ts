import { Food } from './foodstuff';

export type Recipe = {
	id: string;
	title: string;
	image: string;
	description: string[];
	foods: Food[];
};
