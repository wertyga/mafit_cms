import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, message } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { gfDayFood } from 'goldfish/gfDayFood';
import { getDayFoodTableData } from 'components/DayFood/helpers';

import {
  useGetDayFoodsLazyQuery,
  useDeleteDayFoodMutation,
  DayFood,
} from 'graphql/types';
import { ParsedUrlQuery } from 'querystring';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';

type StateTypes = {
  dayFoods: DayFood[];
  totalCount: number;
};

const TrainingPage = () => {
  const router = useRouter();
  const [state, setState] = useState<StateTypes>({
    dayFoods: [],
    totalCount: 0,
  });
  const [getDayFoods, { loading: getLoading }] = useGetDayFoodsLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getDayFoods: dayFoodResponse }) => {
      const { dayFoods = [], totalCount = 0 } = dayFoodResponse || {};
      setState((prev) => ({
        ...prev,
        dayFoods: dayFoods as DayFood[],
        totalCount,
      }));
    },
    onError: (e) => message.error(e.message),
  });
  const [deleteDayFood, { loading: deleteLoading }] = useDeleteDayFoodMutation({
    onCompleted: ({ deleteDayFood: deleteResponse }) => {
      const { dayFood, totalCount } = deleteResponse || {};
      setState((prev) => ({
        ...prev,
        dayFoods: prev.dayFoods.filter((item) => item.id !== dayFood.id),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by, human } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
      human,
    };
    getDayFoods({ variables: payload } as unknown as ParsedUrlQuery);
  };

  const handleDelete = (id: string) => () => deleteDayFood({ variables: { id } });

  const handleEdit = (dayFoodId: string) => () => {
    router.push(`/dayfood/create/${dayFoodId}`);
  };

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by, router.query.human]);

  const tableConfig = useMemo(() => getDayFoodTableData({
    totalCount: state.totalCount,
    handleChangePage,
  }), [state.totalCount]);

  const loading = getLoading || deleteLoading;
  return (
    <ContentTable
      title={gfDayFood.title}
      dataSource={state.dayFoods}
      columns={gfDayFood.columns({
        filter: { currentFilter: router.query },
        onDelete: handleDelete,
        onEdit: handleEdit,
      })}
      loading={loading}
      ModalComponent={(
        <Link href="/dayfood/create">
          <Button
            type="text"
            icon={<PlusSquareFilled className="success ml-2" style={{ fontSize: '2rem' }} />}
            size="large"
          />
        </Link>
      )}
      {...tableConfig}
    />
  );
};

export default TrainingPage;
