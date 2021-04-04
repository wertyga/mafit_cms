import React from 'react';
import _noop from 'lodash/noop';
import { Image } from 'antd';
import { Food } from 'graphql/generated/foodstuff';

import { getColumnSearchProps } from 'components/Common/Filter/helpers';
import { getDeleteEditColumn } from 'components/Common/Table/helpers';

export const gfRecipe = {
  title: 'Recipes',
  columns: ({ filter: { currentFilter }, onEdit = _noop, onDelete = _noop }) => {
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
        ...getColumnSearchProps({ name: 'title', currentFilter }),
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        responsive: ['lg'],
        render: (url: string) => <Image src={url} className="image-table" />,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text: string[]) => <span>{(text || [])[0]}</span>,
        responsive: ['lg'],
        ...getColumnSearchProps({ name: 'description', currentFilter }),
      },
      {
        title: 'Foods',
        dataIndex: 'foods',
        key: 'foods',
        responsive: ['lg'],
        render: (foods: Food[]) => (
          <div>
            {(foods || []).slice(0, 1).map(({ foodstuff: { title, id, unit }, qt }, i) => (
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
      deleteEditColumn,
    ];
  },
  recipeFields: [
    {
      name: 'title',
    },
  ],
};
