import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { convertDayFoodToFormData } from 'components/DayFood/helpers';
import { Loader } from 'components/Common/Loader/Loader';
import { DayFoodCreateContainer } from 'components/DayFood/DayFoodCreateContainer';

import { DayFood, useGetDayFoodsQuery } from 'graphql/types';
import { DayFoodFormData } from 'types/dayFood';

const DayFoodEditPage = () => {
  const router = useRouter();
  const [editableDayFood, setEditableDayFood] = useState<Partial<DayFoodFormData>>({});
  const { loading } = useGetDayFoodsQuery({
    fetchPolicy: 'network-only',
    variables: { id: router.query.id as string },
    onCompleted: ({ getDayFoods }) => {
      const { dayFoods = [{}] } = getDayFoods || {};
      const dayFood = convertDayFoodToFormData(dayFoods[0] as DayFood);
      setEditableDayFood(dayFood);
    },
    onError: (e) => message.error(e.message),
  });

  return (
    <div>
      <Loader isActive={loading} />
      <DayFoodCreateContainer editableDayFood={editableDayFood} />
    </div>
  );
};

export default DayFoodEditPage;
