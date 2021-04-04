import { getColumnSearchProps } from 'components/Common/Filter/helpers';
import { getDeleteEditColumn } from 'components/Common/Table/helpers';

export const gfHumans = {
  title: 'Human categories',
  columns: ({ filter: { currentFilter }, onEdit, onDelete }) => {
	  const deleteEditColumn = getDeleteEditColumn({ onEdit, onDelete, align: 'right' });
  	return [
		  {
			  title: 'Category',
			  key: 'category',
			  dataIndex: 'category',
			  ...getColumnSearchProps({ name: 'category', currentFilter }),
		  },
		  deleteEditColumn,
	  ];
  },
};
