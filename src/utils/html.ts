export const dragSortRows = (
  state: Record<string, any>[],
  itemIndex: number,
  dropIndex: number,
  keyInState = 'index',
) => {
  if (itemIndex === dropIndex) return state;
  
  const movableRow = state.find((item) => item[keyInState] === itemIndex);
  let startIndex = 0;
  state.find((item, i) => {
    if (item[keyInState] === dropIndex) {
      startIndex = i;
      return true;
    }
    return false;
  });
  const filteredState = state.filter((item) => itemIndex !== item[keyInState]);
  return [...filteredState.slice(0, startIndex), movableRow, ...filteredState.slice(startIndex)];
};
