import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { FoodStuffModal } from 'components/FoodStuff/FoodStuffModal/FoodStuffModal';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { Loader } from 'components/Common/Loader/Loader';
import { gfFoodStuff } from 'goldfish/gfFoodStuff';
import { message } from 'antd';

import { getFoodStuffTableData } from 'components/FoodStuff/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';

import { useGetFoodStuffsLazyQuery, useDeleteFoodStuffMutation, FoodStuff } from 'graphql/generated/foodstuff';
import { getDataWithKeys } from '../utils/arr';

type State = {
	foodStuff: FoodStuff[];
	totalCount: number;
	loading: boolean;
  editableFoodstuff: Partial<FoodStuff>;
};

const Foodstuff = () => {
  const router = useRouter();
  const [getFoodStuffs, {
    loading, error, data, called,
  }] = useGetFoodStuffsLazyQuery({ fetchPolicy: 'no-cache' });
  const [deleteFoodStuffHandler] = useDeleteFoodStuffMutation();
  const [state, setState] = useState<State>({
    foodStuff: [],
    totalCount: 0,
    editableFoodstuff: {},
    loading: false,
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

  const onSuccessAdd = (foodStuff: FoodStuff, totalCount: number, editableID: string) => {
    setState((prev) => ({
      ...prev,
      foodStuff: editableID
        ? prev.foodStuff.map((item) => (item.id === editableID ? foodStuff : item))
        : [...prev.foodStuff, foodStuff],
      totalCount,
    }));
  };

  const handleDelete = (id: string) => async () => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      await deleteFoodStuffHandler({ variables: { id } });

      setState((prev) => ({
        ...prev,
        foodStuff: prev.foodStuff.filter((foodstuff) => foodstuff.id !== id),
        loading: false,
      }));
    } catch (e) {
      message.error(e.message);
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleEdit = (foodStuffID: string) => () => {
    const editableFoodstuff = state.foodStuff.find(({ id }) => foodStuffID === id);
    setState((prev) => ({ ...prev, editableFoodstuff }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableFoodstuff: {} }));

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  useEffect(() => {
    if (loading || error || !called) return;
    const { getFoodStuffs: { foodstuff, totalCount } } = data;
    setState((prev) => ({
      ...prev,
      foodStuff: getDataWithKeys(foodstuff, 'foodstuff') as unknown as FoodStuff[],
      totalCount,
    }));
  }, [loading]);

  const tableConfig = useMemo(() => getFoodStuffTableData({
    totalCount: state.totalCount,
    handleChangePage,
  }), [state.totalCount]);

  return (
    <div>
      <Loader isActive={loading} />
      <ContentTable
        title={gfFoodStuff.title}
        dataSource={state.foodStuff}
        columns={gfFoodStuff.columns({
          filter: { currentFilter: router.query },
          onDelete: handleDelete,
          onEdit: handleEdit,
        })}
        loading={state.loading}
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
