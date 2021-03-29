import React from 'react';
import { Image } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { Food } from 'graphql/generated/foodstuff';

import { getColumnSearchProps } from 'components/Common/Filter/helpers';

export const gfRecipe = {
  title: 'Recipes',
  columns: ({ filter: { currentFilter } }) => ([
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
	    width: '10%',
	    ...getColumnSearchProps({ name: 'title', currentFilter }),
    },
    {
      title: 'Image',
      dataIndex: 'image',
	    key: 'image',
	    responsive: ['lg'],
	    render: (url: string) => <Image src={url} />,
	    width: '7%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
	    key: 'description',
	    render: (text: string[] = []) => <span>{text[0]}</span>,
	    responsive: ['lg'],
	    ...getColumnSearchProps({ name: 'description', currentFilter }),
    },
	  {
		  title: 'Foods',
		  dataIndex: 'foods',
		  key: 'foods',
		  responsive: ['lg'],
		  width: '10%',
		  render: (foods: Food[]) => (
			  <div>
			    {foods.slice(0, 1).map(({ foodstuff: { title, id, unit }, qt }, i) => (
			      <div className="foodstuff" key={`${id}-${i}`}>
			        <span className="mr-2">{`${title}:`}</span>
			        <span className="nowrap">{`${qt} ${unit}.`}</span>
				      <br />
			      </div>
			    ))}
			  </div>
		  ),
		  sorter: (a, b) => {
			  const asc = a.length < b.length;
			  if (asc) return 1;
			  if (!asc) return -1;
			  return 0;
		  },
	  },
	  {
	  	title: null,
		  dataIndex: 'delete',
		  key: 'x',
		  align: 'center',
		  render: () => <CloseCircleFilled className="danger icon-md pointer" />,
	  },
  ]),
  recipeFields: [
    {
      name: 'title',
    },
  ],
};
