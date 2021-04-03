import { Meal } from './meal';

export type Training = {
	id: string;
	title: string;
	humanCategory: string;
	meal: Meal[];
	video: string;
}
