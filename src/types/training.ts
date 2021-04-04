import { Human } from './human';
import { Meal } from './meal';

export type Training = {
	id: string;
	title: string;
	meal: {
		human: Human;
		meal: Meal[];
	};
	video: string;
}
