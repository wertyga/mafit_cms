import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useSelector from 'hooks/useSelector';
import { setFoodStuffsAction, updateFoodStuffsAction } from 'redux/actions/foodstuff/foodstuffActions';
import { FoodStuffModal } from 'components/FoodStuff/FoodStuffModal/FoodStuffModal';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { gfFoodStuff } from 'goldfish/gfFoodStuff';
import { message } from 'antd';

import { getFoodStuffTableData } from 'components/FoodStuff/helpers';
import { useGetFoodStuffsLazyQuery, useDeleteFoodStuffMutation, FoodStuff } from 'graphql/types';
import { ParsedUrlQuery } from 'querystring';

type State = {
  editableFoodstuff: Partial<FoodStuff>;
};

const Foodstuff = () => {
  const router = useRouter();
  const { foodstuffStore } = useSelector('foodstuffStore');
  const [state, setState] = useState<State>({
    editableFoodstuff: {},
  });
  const [getFoodStuffs, { loading: getLoading }] = useGetFoodStuffsLazyQuery(
    {
      fetchPolicy: 'network-only',
      onCompleted: ({ getFoodStuffs: foodStuffRes }) => {
        const { foodstuff, totalCount } = foodStuffRes || {};
        setFoodStuffsAction(foodstuff, totalCount);
      },
      onError: (e: Error) => message.error(e.message),
    },
  );
  const [deleteFoodStuffHandler, { loading: deleteLoading }] = useDeleteFoodStuffMutation({
    onCompleted: ({ deleteFoodStuff }) => {
      const { foodstuff = {}, totalCount } = deleteFoodStuff || {};
      updateFoodStuffsAction(foodstuff, totalCount, 'delete');
    },
    onError: (e: Error) => message.error(e.message),
  });

  const onSuccessAdd = (foodStuff: FoodStuff, totalCount: number) => {
    const type = state.editableFoodstuff.id ? 'update' : 'add';
    updateFoodStuffsAction(foodStuff, totalCount, type);
    setState((prev) => ({
      ...prev,
      editableFoodstuff: {},
    }));
  };

  const handleDelete = (id: string) => async () => deleteFoodStuffHandler({ variables: { id } });

  const handleEdit = (foodStuffID: string) => () => {
    const editableFoodstuff = foodstuffStore.foodstuffs.find(({ id }) => foodStuffID === id);
    setState((prev) => ({ ...prev, editableFoodstuff }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableFoodstuff: {} }));

  useEffect(() => {
    const { query: { search, by } } = router;
    getFoodStuffs({ variables: { search, by } as ParsedUrlQuery });
  }, [router.query.search, router.query.by]);

  const tableConfig = useMemo(() => getFoodStuffTableData({
    totalCount: foodstuffStore.totalCount,
  }), [foodstuffStore.totalCount]);

  const loading = getLoading || deleteLoading;
  return (
    <ContentTable
      title={gfFoodStuff.title}
      dataSource={foodstuffStore.foodstuffs}
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
  );
};

export default Foodstuff;
