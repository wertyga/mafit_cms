import { capitalFirst } from 'utils/string';
import { getColumnSearchProps } from 'components/Common/Filter/helpers';

export const FOODSTUFF_PROPS = [
  {
    name: 'title',
  },
  {
    name: 'unit',
  },
  {
    name: 'calories',
    number: true,
  },
  {
    name: 'fats',
    number: true,
  },
  {
    name: 'carbs',
    number: true,
  },
  {
    name: 'protein',
    number: true,
  },
];
export const gfFoodStuff = {
  title: 'Food stuff',
  columns: ({ filter: { currentFilter } }) => (
    FOODSTUFF_PROPS.map(({ name, number }) => ({
      title: capitalFirst(name),
      dataIndex: name,
      sorter: (a, b) => {
        const asc = !number ? a[name] < b[name] : Number(a[name]) < Number(b[name]);
        if (asc) return 1;
        if (!asc) return -1;
        return 0;
      },
      ...getColumnSearchProps({ name, currentFilter }),
    }))),
};
