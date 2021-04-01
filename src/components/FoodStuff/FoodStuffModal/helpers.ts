import { FOODSTUFF_PROPS } from 'goldfish/gfFoodStuff';
import { FoodStuff } from 'types/foodstaff';

export const collectFoodStuffSaveData = (foodStuffData: FoodStuff) => (
  Object.entries(foodStuffData)
    .reduce((acc, [key, value]) => {
      const isNumeric = FOODSTUFF_PROPS
        .find(({ name, number }) => key === name && number);
      const valueProp = isNumeric ? Number(value) : value;

      return { ...acc, [key]: valueProp };
    }, {})
);
