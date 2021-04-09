import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { gfTraining } from 'goldfish/gfTraining';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { TrainingModal } from 'components/Training/TrainingModal/TrainingModal';
import { getTrainingTableData } from 'components/Training/helpers';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';
import { ParsedUrlQuery } from 'querystring';
import { Training, useGetTrainingsLazyQuery, useDeleteTrainingMutation } from 'graphql/types';

type StateType = {
  trainings: Training[];
  editableTraining: Partial<Training>;
  totalCount: number;
};

const TrainingPage = () => {
  const router = useRouter();
  const [state, setState] = useState<StateType>({
    trainings: [],
	  editableTraining: {},
    totalCount: 0,
  });

  const [getTrainings, { loading: getLoading }] = useGetTrainingsLazyQuery({
	  fetchPolicy: 'network-only',
    onCompleted: ({ getTrainings: getTrainingsResponse }) => {
      const { trainings = [], totalCount = 0 } = getTrainingsResponse || {};
      setState((prev) => ({ ...prev, trainings, totalCount }));
    },
  });
  const [deleteTraining, { loading: deleteLoading }] = useDeleteTrainingMutation({
	  onCompleted: ({ deleteTraining: deleteTrainingResponse }) => {
	  	const { training = {} as Training, totalCount = 0 } = deleteTrainingResponse || {};
	  	setState((prev) => ({
			  ...prev,
			  trainings: prev.trainings.filter((item) => item.id !== training.id),
			  totalCount,
		  }));
	  },
  });

  const handleChangePage = async (page = 1, pageSize = DEFAULT_PAGE_SIZE) => {
    const { query: { search, by } } = router;
    const payload = {
      offset: (page - 1) * pageSize,
      limit: pageSize,
      search,
      by,
    };
    getTrainings({ variables: payload } as unknown as ParsedUrlQuery);
  };

  const onSuccessAdd = (training: Training, totalCount: number) => {
    const editableId = state.editableTraining.id;
	  setState((prev) => ({
		  ...prev,
		  trainings: editableId
			  ? prev.trainings.map((item) => (item.id === editableId ? training : item))
			  : [training, ...prev.trainings],
		  totalCount,
		  editableTraining: {},
	  }));
  };

  const handleEdit = (id: string) => () => {
    const editableTraining = state.trainings.find((training) => training.id === id);
    setState((prev) => ({ ...prev, editableTraining }));
  };
  const handleDelete = (id: string) => async () => deleteTraining({ variables: { id } });
  const onCloseModal = () => setState((prev) => ({ ...prev, editableTraining: {} }));

  useEffect(() => {
    handleChangePage();
  }, [router.query.search, router.query.by]);

  const tableConfig = getTrainingTableData({
	  totalCount: state.totalCount,
	  handleChangePage,
  });

  const loading = getLoading || deleteLoading;
  return (
    <ContentTable
      title={gfTraining.title}
      dataSource={state.trainings}
      columns={gfTraining.columns({
			  filter: { currentFilter: router.query },
			  onEdit: handleEdit,
			  onDelete: handleDelete,
      })}
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

export default TrainingPage;
