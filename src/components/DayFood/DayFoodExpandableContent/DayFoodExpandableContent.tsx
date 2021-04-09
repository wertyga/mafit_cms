import React from 'react';
import { Divider, Typography } from 'antd';
import { Description } from 'components/Common/Description/Description';
import { DayFood } from 'graphql/types';

const { Text } = Typography;

export const DayFoodExpandableContent: React.FC<DayFood> = ({ meal = [] }) => (
  <div className="border-cell">
    {meal.map(({ meal: meals, human }, i) => (
      <div key={human.category}>
        {i !== 0 && <Divider />}
        <Description label="Category" className="mb-2 flex align-center">
          <Text strong>{human.category.toUpperCase()}</Text>
        </Description>

        {meals.map(({
          type, title: mealTitle, description, recipes,
        }, i) => (
          <Description key={`${type}-meals-${i}`} className="flex align-start mb-2" label={type} light>
            <div className="flex-column">
              <Text strong className="mb-2">{mealTitle}</Text>
              <Text className="mb-4">{description}</Text>
              <div className="flex">
                {recipes.map(({ title: recipeTitle, id }, i) => (
                  <Text
                    key={`${id}-${i}`}
                    type="secondary"
                    className="mr-4"
                      >
                    {recipeTitle}
                  </Text>
                ))}
              </div>
            </div>
          </Description>
        ))}
      </div>
    ))}
  </div>
);
