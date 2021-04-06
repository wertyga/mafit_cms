import React from 'react';
import { Typography } from 'antd';
import { Description } from 'components/Common/Description/Description';
import { Training } from 'graphql/types';

import useSelector from 'hooks/useSelector';

const { Text } = Typography;

export const TrainingsExpandableContent: React.FC<Training> = ({
  title,
  meal: {
    human,
    meal = [],
  },
}) => {
  const { humanStore: { humans } } = useSelector('humanStore');
  const { category } = humans.find(({ id }) => id === human) || {};
  return (
    <div className="border-cell">
      <Description label="Title" className="mb-2 flex align-center">
        <Text strong>{title.toUpperCase()}</Text>
      </Description>
      <Description label="Category" className="mb-2 flex align-center">
        <Text strong>{category.toUpperCase()}</Text>
      </Description>

      {meal.map(({
        type, title: mealTitle, description, foods,
      }) => (
        <Description key={type} className="flex align-start mb-2" label={type}>
          <div className="flex-column">
            <Text strong className="mb-2">{mealTitle}</Text>
            <Text className="mb-4">{description}</Text>
            <div className="flex">
              {foods.map(({ foodstuff, qt }) => (
                <Text
                  key={foodstuff.id}
                  type="secondary"
                  className="mr-4"
                >
                  {`${foodstuff.title}: ${qt} ${foodstuff.unit}`}
                </Text>
              ))}
            </div>
          </div>
        </Description>
      ))}
    </div>
  );
};
