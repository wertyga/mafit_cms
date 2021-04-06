import { Meal } from './meal';

export type TrainingRequestFormData = {
	title: string;
	humanType: string;
	meals: {
		title: string;
		description: string;
		mealType: string;
		foods: { food: string, count: string }[];
	}[];
};

export type Training = {
  id: string;
  title: string;
	video: File | string;
	meal: {
		human: string;
		meal: Meal[];
	};
};
