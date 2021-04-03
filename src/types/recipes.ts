import { Food } from './foodstaff';

export type Recipe = {
	id: string;
	title: string;
	image: string;
	description: string[];
	foods: Food[];
};
