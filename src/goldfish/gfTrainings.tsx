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
			  sorter: (a, b) => {
				  const asc = a < b;
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
			  sorter: (a, b) => {
				  const asc = a.length < b.length;
				  if (asc) return 1;
				  if (!asc) return -1;
				  return 0;
			  },
			  align: 'left',
			  render: (_, { meal: { meal = [] } }: Training) => <span>{meal[0].title}</span>,
			  ...getColumnSearchProps({ name: 'meal', currentFilter }),
		  },
		  {
			  title: 'Video',
			  dataIndex: 'video',
			  align: 'center',
			  render: (url) => <Video className="image-table" src={url} />,
		  },
		  deleteEditColumn,
	  ];
  },
};
