import { useSelector as reduxSelector } from 'react-redux';
import { RootState } from 'types';

type Selector = keyof RootState;

const useSelector = (
  stores: Selector | Selector[],
): Pick<RootState, Selector> => {
  const arrayedSelector = Array.isArray(stores) ? stores : [stores];
  return (
    reduxSelector((reduxState: RootState) => (
      arrayedSelector.reduce(
        (acc, storeName) => ({
          ...acc,
          [storeName]: (reduxState[storeName]),
        }), {},
      )
    ))
  );
};

export default useSelector;
