import React from 'react';
import { Description } from 'components/Common/Description/Description';
import { Recipe } from 'graphql/types';

export const RecipeExpandedContent: React.FC<Recipe> = ({ description = [], title, foods }) => (
  <div>
    <Description label="Foodstuff" className="mb-2">
      {foods.map(({ foodstuff, qt }) => (
        <div className="foodstuff nowrap mr-4" key={foodstuff.id}>
          <span className="mr-2">{`${foodstuff.title}:`}</span>
          <span>{`${qt} ${foodstuff.unit}.`}</span>
          <br />
        </div>
      ))}
    </Description>
    <Description label="Description">
      {description.map((text, i) => (
        <div className="mr-4" key={`${title}-description-${i}`}>
          {text}
          <br />
        </div>
      ))}
    </Description>
  </div>
);
