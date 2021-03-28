import React from 'react';
import { Descriptions } from 'antd';
import { Recipe } from 'graphql/generated/recipe';

export const RecipeExpandedContent: React.FC<Recipe> = ({ description = [], title, foods }) => (
  <div>
    <Descriptions title={title} bordered className="mb-4">
      <Descriptions.Item label="Foodstuff" className="flex-wrap">
        {foods.map(({ foodstuff, qt }) => (
          <div className="foodstuff nowrap mr-4" key={foodstuff.id}>
            <span className="mr-2">{`${foodstuff.title}:`}</span>
            <span>{`${qt} ${foodstuff.unit}.`}</span>
            <br />
          </div>
        ))}
      </Descriptions.Item>
    </Descriptions>
    <Descriptions bordered>
      <Descriptions.Item label="Description" className="flex-column">
        {description.map((text, i) => <p key={`${title}-${i}`}>{text}</p>)}
      </Descriptions.Item>
    </Descriptions>
  </div>
);
