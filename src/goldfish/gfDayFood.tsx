import React from 'react';
import { Divider } from 'antd';
import { getDeleteEditColumn } from 'components/Common/Table/helpers';
import { getColumnSearchProps } from 'components/Common/Filter/helpers';
import { DayFood } from 'graphql/types';

export const gfDayFood = {
  title: 'Day food',
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
			  title: 'Human category',
			  dataIndex: 'human',
			  key: 'human',
			  sorter: (a, b) => {
				  const asc = a.meal.length < b.meal.length;
				  if (asc) return 1;
				  if (!asc) return -1;
				  return 0;
			  },
			  align: 'left',
			  render: (_, record: DayFood) => {
			  	const { meal = [] } = record || {};
			  	return (
					  <div>
					    {meal.map(({ human }, i) => (
					      <>
					        <span key={`${human.category}-${i}`}>{human.category}</span>
					        <Divider type="vertical" />
					      </>
					    ))}
					  </div>
				  );
			  },
			  ...getColumnSearchProps({ name: 'human', currentFilter }),
		  },
		  deleteEditColumn,
	  ];
  },
};
