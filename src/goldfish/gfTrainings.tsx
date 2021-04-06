import React from 'react';
import { Video } from 'components/Common/Video/Video';
import { getDeleteEditColumn } from 'components/Common/Table/helpers';
import { getColumnSearchProps } from 'components/Common/Filter/helpers';
import { Training } from 'graphql/types';

export const gfTrainings = {
  title: 'Trainings',
  columns: ({ filter: { currentFilter }, onEdit, onDelete }) => {
  	const deleteEditColumn = getDeleteEditColumn({ onEdit, onDelete });
  	return [
		  {
			  title: 'Title',
			  dataIndex: 'title',
			  key: 'title',
			  sorter: (a, b) => {
				  const asc = a.title.toLowerCase() < b.title.toLowerCase();
				  if (asc) return 1;
				  if (!asc) return -1;
				  return 0;
			  },
			  align: 'left',
			  ...getColumnSearchProps({ name: 'title', currentFilter }),
		  },
		  {
			  title: 'Meal',
			  dataIndex: 'meal',
			  key: 'meal',
			  sorter: (a, b) => {
				  const asc = a.meal.length < b.meal.length;
				  if (asc) return 1;
				  if (!asc) return -1;
				  return 0;
			  },
			  align: 'left',
			  render: (_, record: Training) => {
			  	const { meal: { meal = [] } } = record || {};
			  	return (
					  <div>
						  {meal.map(({ type }) => <span key={type} className="mr-2">{type}</span>)}
					  </div>
				  );
			  },
			  ...getColumnSearchProps({ name: 'meal', currentFilter }),
		  },
		  {
			  title: 'Video',
			  dataIndex: 'video',
			  key: 'video',
			  align: 'center',
			  render: (url: string) => (url ? <Video className="image-table" src={url} /> : null),
		  },
		  deleteEditColumn,
	  ];
  },
};
