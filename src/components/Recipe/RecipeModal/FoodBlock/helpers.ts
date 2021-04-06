export const collectSelectedFoods = (foods: { food: string, count: string }[]) => (
  foods
    .map(({ food }) => food)
    .filter((item) => !!item)
);
