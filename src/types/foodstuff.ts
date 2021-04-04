export enum FOODSTUFF_ACTION_TYPES {
	SET_FOODSTUFFS = 'SET_FOODSTUFFS',
	ADD_FOODSTUFF = 'ADD_FOODSTUFF',
	UPDATE_FOODSTUFF = 'UPDATE_FOODSTUFF',
	DELETE_FOODSTUFF = 'DELETE_FOODSTUFF',
}

export type FoodStuff = {
	id: string;
	title: string;
	unit: string;
	calories: number;
	fats: number;
	carbs: number;
	protein: number;
};

export type FoodstuffState = {
	foodstuffs: FoodStuff[];
	totalCount: number;
};

export type Food = {
	foodstuff: FoodStuff;
	qt: number;
};
