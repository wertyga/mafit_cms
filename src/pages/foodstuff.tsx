import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { FoodStuffModal } from 'components/FoodStuff/FoodStuffModal/FoodStuffModal';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { gfFoodStuff } from 'goldfish/gfFoodStuff';
import { message } from 'antd';

import { getFoodStuffTableData } from 'components/FoodStuff/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';

import { useGetFoodStuffsLazyQuery, useDeleteFoodStuffMutation, FoodStuff } from 'graphql/generated/foodstuff';
import { getDataWithKeys } from '../utils/arr';

type State = {
	foodStuff: FoodStuff[];
	totalCount: number;
  editableFoodstuff: Partial<FoodStuff>;
};

const Foodstuff = () => {
  const router = useRouter();
  const [state, setState] = useState<State>({
    foodStuff: [],
    totalCount: 0,
    editableFoodstuff: {},
  });
  const [getFoodStuffs, { loading: getLoading }] = useGetFoodStuffsLazyQuery(
    {
      fetchPolicy: 'no-cache',
      onCompleted: ({ getFoodStuffs: foodStuffRes }) => {
        const { foodstuff, totalCount } = foodStuffRes || {};
        setState((prev) => ({
          ...prev,
          foodStuff: getDataWithKeys(foodstuff, 'foodstuff') as unknown as FoodStuff[],
          totalCount,
        }));
      },
      onError: (e: Error) => message.error(e.message),
    },
  );
  const [deleteFoodStuffHandler, { loading: deleteLoading }] = useDeleteFoodStuffMutation({
    onCompleted: ({ deleteFoodStuff }) => {
      const { foodstuff, totalCount } = deleteFoodStuff || {};
      setState((prev) => ({
        ...prev,
        foodStuff: prev.foodStuff.filter((item) => item.id !== foodstuff.id),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
    };
    getFoodStuffs({ variables: payload });
  };

  const onSuccessAdd = (foodStuff: FoodStuff, totalCount: number) => {
    setState((prev) => ({
      ...prev,
      foodStuff: state.editableFoodstuff.id
        ? prev.foodStuff.map((item) => (item.id === state.editableFoodstuff.id ? foodStuff : item))
        : [foodStuff, ...prev.foodStuff],
      totalCount,
      editableFoodstuff: {},
    }));
  };

  const handleDelete = (id: string) => async () => deleteFoodStuffHandler({ variables: { id } });

  const handleEdit = (foodStuffID: string) => () => {
    const editableFoodstuff = state.foodStuff.find(({ id }) => foodStuffID === id);
    setState((prev) => ({ ...prev, editableFoodstuff }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableFoodstuff: {} }));

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  const tableConfig = useMemo(() => getFoodStuffTableData({
    totalCount: state.totalCount,
    handleChangePage,
  }), [state.totalCount]);

  const loading = getLoading || deleteLoading;
  return (
    <div>
      <ContentTable
        title={gfFoodStuff.title}
        dataSource={state.foodStuff}
        columns={gfFoodStuff.columns({
          filter: { currentFilter: router.query },
          onDelete: handleDelete,
          onEdit: handleEdit,
        })}
        loading={loading}
        ModalComponent={(
          <FoodStuffModal
            onSuccess={onSuccessAdd}
            editableFoodstuff={state.editableFoodstuff}
            onClose={onCloseModal}
          />
        )}
        {...tableConfig}
      />
    </div>
  );
};

export default Foodstuff;
