import React from 'react';

export const gfRecipe = {
  title: 'Recipes',
  columns: [
    {
      title: 'Title',
      dataIndex: 'title',
	    colSpan: 1,
	    responsive: ['md'],
    },
    {
      title: 'Image',
      dataIndex: 'image',
	    colSpan: 1,
	    responsive: ['md'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
	    colSpan: 1,
	    render: (text: string[]) => (
			  <div>
			    {text.map((item, i) => <div key={i}>{item}</div>)}
			  </div>
	    ),
    },
	  {
		  title: 'Foods',
		  dataIndex: 'foods',
		  colSpan: 1,
		  responsive: ['md'],
	  },
  ],
};
