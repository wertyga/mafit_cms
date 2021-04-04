import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';

import useConstructor from 'hooks/useConstructor';

import { message } from 'antd';
import { gfTrainings } from 'goldfish/gfTrainings';
import { getTrainingTableData } from 'components/Training/helpers';
import { setHumansAction } from 'redux/actions/human/humanActions';
import { setFoodStuffsAction } from 'redux/actions/foodstuff/foodstuffActions';
import { TrainingModal } from 'components/Training/TrainingModal/TrainingModal';
import { TabTrainingMenu } from 'components/Training/TabTrainingMenu/TabTrainingMenu';

import { Training } from 'types/training';
import { useGetTrainingsLazyQuery, useDeleteTrainingMutation } from 'graphql/generated/training';
import { GetFoodStuffsDocument } from 'graphql/generated/foodstuff';
import { GetHumanTypesDocument } from 'graphql/generated/human';
import { ContentTable } from '../components/ContentTable/ContentTable';
import { DEFAULT_PAGE_SIZE } from '../components/Common/Table/helpers';

type StateTypes = {
  trainings: Training[];
  totalCount: number;
  editableTraining: Partial<Training>;
};

const Trainings = () => {
  const router = useRouter();
  const apolloClient = useApolloClient();
  const [state, setState] = useState<StateTypes>({
    trainings: [],
    totalCount: 0,
    editableTraining: {},
  });
  const [getTrainings, { loading: getLoading }] = useGetTrainingsLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getTrainings: trainingResponse }) => {
      const { trainings = [], totalCount = 0 } = trainingResponse || {};
      setState((prev) => ({
        ...prev,
        trainings,
        totalCount,
      }));
    },
    onError: (e) => message.error(e.message),
  });
  const [deleteTraining, { loading: deleteLoading }] = useDeleteTrainingMutation({
    onCompleted: ({ deleteTraining: deleteResponse }) => {
      const { training, totalCount } = deleteResponse || {};
      setState((prev) => ({
        ...prev,
        trainings: prev.trainings.filter((item) => item.id !== training.id),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });

  const initialFetchData = async () => {
    try {
      const [
        { data: { getFoodStuffs: foodstuffResponse } },
        { data: { getHumanTypes: humanResponse } },
      ] = await Promise.all([
        apolloClient.query({ query: GetFoodStuffsDocument, fetchPolicy: 'network-only' }),
        apolloClient.query({ query: GetHumanTypesDocument, fetchPolicy: 'network-only' }),
      ]);
      const { humans = [], totalCount: humansCount } = humanResponse || {};
      const { foodstuffs = [], totalCount: foodsCount } = foodstuffResponse || {};
      setHumansAction(humans, humansCount);
      setFoodStuffsAction(foodstuffs, foodsCount);
    } catch (e) {
      message.error(e.message);
    }
  };

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by, humanType } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
      humanType,
    };
    getTrainings({ variables: payload });
  };

  const onSuccessAdd = (foodStuff: Training, totalCount: number) => {
    // setState((prev) => ({
    //   ...prev,
    //   foodStuff: state.editableFoodstuff.id
    //     ? prev.foodStuff
    //        .map((item) => (item.id === state.editableFoodstuff.id ? foodStuff : item))
    //     : [foodStuff, ...prev.foodStuff],
    //   totalCount,
    //   editableFoodstuff: {},
    // }));
  };

  const handleDelete = (id: string) => () => deleteTraining({ variables: { id } });

  const handleEdit = (foodStuffID: string) => () => {
    const editableTraining = state.trainings.find(({ id }) => foodStuffID === id);
    setState((prev) => ({ ...prev, editableTraining }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableTraining: {} }));

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by, router.query.humanType]);

  useConstructor(initialFetchData);

  const tableConfig = useMemo(() => getTrainingTableData({
    totalCount: state.totalCount,
    handleChangePage,
  }), [state.totalCount]);

  const loading = getLoading || deleteLoading;
  return (
    <ContentTable
      title={gfTrainings.title}
      dataSource={state.trainings}
      columns={gfTrainings.columns({
        filter: { currentFilter: router.query },
        onDelete: handleDelete,
        onEdit: handleEdit,
      })}
      preTableSlot={<TabTrainingMenu />}
      loading={loading}
      ModalComponent={(
        <TrainingModal
          onSuccess={onSuccessAdd}
          editableTraining={state.editableTraining}
          onClose={onCloseModal}
        />
      )}
      {...tableConfig}
    />
  );
};

export default Trainings;
