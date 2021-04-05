import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import useSelector from 'hooks/useSelector';
import { setHumansAction, updateHumansAction } from 'redux/actions/human/humanActions';
import { useGetHumanTypesLazyQuery, useDeleteHumanTypeMutation, HumanType } from 'graphql/types';
import { HumansModal } from 'components/Humans/HumansModal/HumansModal';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { getHumansTableData } from 'components/Humans/helpers';
import { gfHumans } from 'goldfish/gfHumans';
import { ParsedUrlQuery } from 'querystring';

type StateType = {
  editableHuman: Partial<HumanType>;
};
const Humans = () => {
  const router = useRouter();
  const { humanStore } = useSelector('humanStore');
  const [state, setState] = useState<StateType>({
    editableHuman: {},
  });
  const [getHumans, { loading: getLoading }] = useGetHumanTypesLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getHumanTypes }) => {
      const { humans = [], totalCount = 0 } = getHumanTypes || {};
      setHumansAction(humans, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });
  const [deleteHuman, { loading: deleteLoading }] = useDeleteHumanTypeMutation({
    onCompleted: ({ deleteHumanType }) => {
      const { human = {}, totalCount = 0 } = deleteHumanType || {};
      updateHumansAction(human, totalCount, 'delete');
    },
    onError: (e: Error) => message.error(e.message),
  });

  const onSuccessAdd = (human: HumanType, totalCount: number) => {
    const updateType = state.editableHuman.id ? 'update' : 'add';
    updateHumansAction(human, totalCount, updateType);
    setState((prev) => ({
      ...prev,
      editableHuman: {},
    }));
  };

  const handleDelete = (id: string) => async () => deleteHuman({ variables: { id } });
  const handleEdit = (id: string) => () => {
    const editableHuman = humanStore.humans.find((human) => human.id === id);
    setState((prev) => ({ ...prev, editableHuman }));
  };
  const onCloseModal = () => setState((prev) => ({ ...prev, editableHuman: {} }));

  useEffect(() => {
    const { query: { search, by } } = router;
    getHumans({ variables: { search, by } as ParsedUrlQuery });
  }, [router.query.search, router.query.by]);

  const tableConfig = useMemo(() => getHumansTableData({
    totalCount: humanStore.totalCount,
  }), [humanStore.totalCount]);

  const loading = getLoading || deleteLoading;
  return (
    <div>
      <ContentTable
        title={gfHumans.title}
        dataSource={humanStore.humans}
        columns={gfHumans.columns({
          filter: { currentFilter: router.query },
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
        {...tableConfig}
      />
    </div>
  );
};

export default Humans;
