export type FoodStuff = {
	id: string;
	title: string;
	unit: string;
	calories: number;
	fats: number;
	carbs: number;
	protein: number;
};

export type Food = {
	foodstuff: FoodStuff;
	qt: number;
};
