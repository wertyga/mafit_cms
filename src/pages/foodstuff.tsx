import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FoodStuffModal } from 'components/FoodStuff/FoodStuffModal/FoodStuffModal';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { Loader } from 'components/Common/Loader/Loader';
import { gfFoodStuff } from 'goldfish/gfFoodStuff';

import { getFoodStuffTableData } from 'components/FoodStuff/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';

import { useGetFoodStuffsLazyQuery, FoodStuff } from 'graphql/generated/foodstuff';

type State = {
	foodStuff: FoodStuff[];
	totalCount: number;
};

const Foodstuff = () => {
  const router = useRouter();
  const [getFoodStuffs, {
    loading, error, data, called,
  }] = useGetFoodStuffsLazyQuery({ fetchPolicy: 'no-cache' });
  const [state, setState] = useState<State>({
    foodStuff: [],
    totalCount: 0,
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
      foodStuff: [...prev.foodStuff, foodStuff],
      totalCount,
    }));
  };

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  useEffect(() => {
    if (loading || error || !called) return;
    const { getFoodStuffs: { foodstuff, totalCount } } = data;
    setState({ foodStuff: foodstuff, totalCount });
  }, [loading]);

  const tableConfig = getFoodStuffTableData({
    totalCount: state.totalCount,
    handleChangePage,
  });

  return (
    <div>
      <Loader isActive={loading} />
      <ContentTable
        title={gfFoodStuff.title}
        data={state.foodStuff}
        columns={gfFoodStuff.columns({ filter: { currentFilter: router.query } })}
        ModalComponent={<FoodStuffModal onSuccess={onSuccessAdd} />}
        {...tableConfig}
      />
    </div>
  );
};

export default Foodstuff;
