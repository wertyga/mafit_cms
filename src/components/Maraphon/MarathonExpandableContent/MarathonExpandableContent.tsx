import React from 'react';
import { Typography, Divider } from 'antd';
import { Marathon } from 'graphql/types';
import { Description } from '../../Common/Description/Description';

const { Text } = Typography;

export const MarathonExpandableContent: React.FC<Marathon> = ({
  description,
  dateStart,
  trainings,
}) => (
  <div>
    <Description label="Description" className="mb-2 flex align-center">
      <Text>{description}</Text>
    </Description>
    <Divider />
    <Description label="Date start" className="mb-2 flex align-center">
      <Text>{new Date(dateStart).toLocaleDateString()}</Text>
    </Description>
    <Divider />
    <Description label="Trainings" className="mb-2 flex align-center">
      <div className="flex">
        {trainings.map(({ title }) => (
          <div key={title}>
            <Text>{title}</Text>
            <Divider type="vertical" />
          </div>
        ))}
      </div>
    </Description>
  </div>
);
