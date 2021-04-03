import React, { useState } from 'react';
import { message } from 'antd';
import { useGetHumanTypesQuery, useDeleteHumanTypeMutation, HumanType } from 'graphql/generated/human';
import { HumansModal } from 'components/Humans/HumansModal/HumansModal';
import { ContentTable } from '../components/ContentTable/ContentTable';
import { gfHumans } from '../goldfish/gfHumans';

type StateType = {
  humans: HumanType[];
  editableHuman: Partial<HumanType>;
  totalCount: number;
};
const Humans = () => {
  const [state, setState] = useState<StateType>({
    humans: [],
    editableHuman: {},
    totalCount: 0,
  });
  const { loading: getLoading } = useGetHumanTypesQuery({
    fetchPolicy: 'no-cache',
    onCompleted: ({ getHumanTypes }) => {
      const { humans = [], totalCount = 0 } = getHumanTypes || {};
      setState((prev) => ({ ...prev, humans, totalCount }));
    },
    onError: (e: Error) => message.error(e.message),
  });
  const [deleteHuman, { loading: deleteLoading }] = useDeleteHumanTypeMutation({
    onCompleted: ({ deleteHumanType }) => {
      const { human = {}, totalCount = 0 } = deleteHumanType || {};
      setState((prev) => ({
        ...prev,
        humans: prev.humans.filter((item) => item.id !== human.id),
        totalCount,
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });

  const onSuccessAdd = (human: HumanType, totalCount: number) => {
    const updatedHumans = state.editableHuman.id
      ? state.humans.map((item) => (item.id === state.editableHuman.id ? human : item))
      : [human, ...state.humans];
    setState((prev) => ({
      ...prev,
      humans: updatedHumans,
      totalCount,
      editableHuman: {},
    }));
  };

  const handleDelete = (id: string) => async () => deleteHuman({ variables: { id } });

  const handleEdit = (id: string) => () => {
    const editableHuman = state.humans.find((human) => human.id === id);
    setState((prev) => ({ ...prev, editableHuman }));
  };

  const onCloseModal = () => setState((prev) => ({ ...prev, editableHuman: {} }));

  const loading = getLoading || deleteLoading;
  return (
    <div>
      <ContentTable
        title={gfHumans.title}
        dataSource={state.humans}
        columns={gfHumans.columns({
          onDelete: handleDelete,
          onEdit: handleEdit,
        })}
        loading={loading}
        ModalComponent={(
          <HumansModal
            onSuccess={onSuccessAdd}
            editableHuman={state.editableHuman}
            onClose={onCloseModal}
          />
        )}
      />
    </div>
  );
};

export default Humans;
