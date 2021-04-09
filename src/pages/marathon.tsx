import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { gfMarathon } from 'goldfish/gfMarathon';
import { MarathonModal } from 'components/Maraphon/MaraphonModal';
import { getMarathonTableData } from 'components/Maraphon/helpers';
import { ContentTable } from 'components/ContentTable/ContentTable';
import { DEFAULT_PAGE_SIZE } from 'components/Common/Table/helpers';
import { ParsedUrlQuery } from 'querystring';
import { useGetMarathonsLazyQuery, useDeleteMarathonMutation, Marathon } from 'graphql/types';

type StateType = {
  marathons: Marathon[];
  editableMarathon: Partial<Marathon>;
  totalCount: number;
};

const MarathonPage = () => {
  const router = useRouter();
  const [state, setState] = useState<StateType>({
    marathons: [],
    editableMarathon: {},
    totalCount: 0,
  });

  const [getMarathons, { loading: getLoading }] = useGetMarathonsLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getMarathons: response }) => {
      const { marathons = [], totalCount = 0 } = response || {};
      setState((prev) => ({ ...prev, marathons, totalCount }));
    },
  });
  const [deleteMarathon, { loading: deleteLoading }] = useDeleteMarathonMutation({
  	onCompleted: ({ deleteMarathon: response }) => {
  		const { marathon = {} as Marathon, totalCount = 0 } = response || {};
  		setState((prev) => ({
  			...prev,
  			marathons: prev.marathons.filter((item) => item.id !== marathon.id),
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
	  getMarathons({ variables: payload } as unknown as ParsedUrlQuery);
  };

  const onSuccessAdd = (marathon: Marathon, totalCount: number) => {
  	const editableId = state.editableMarathon.id;
  	setState((prev) => ({
  		...prev,
		  marathons: editableId
  			? prev.marathons.map((item) => (item.id === editableId ? marathon : item))
  			: [marathon, ...prev.marathons],
  		totalCount,
  		editableMarathon: {},
  	}));
  };

  const handleEdit = (id: string) => () => {
  	const editableMarathon = state.marathons.find((item) => item.id === id);
  	setState((prev) => ({ ...prev, editableMarathon }));
  };
  const handleDelete = (id: string) => async () => deleteMarathon({ variables: { id } });
  const onCloseModal = () => setState((prev) => ({ ...prev, editableMarathon: {} }));

  useEffect(() => {
  	handleChangePage();
  }, [router.query.search, router.query.by]);

  const tableConfig = getMarathonTableData({
  	totalCount: state.totalCount,
  	handleChangePage,
  });

  const loading = getLoading || deleteLoading;
  return (
    <ContentTable
      title={gfMarathon.title}
      dataSource={state.marathons}
      columns={gfMarathon.columns({
			  filter: { currentFilter: router.query },
			  onEdit: handleEdit,
			  onDelete: handleDelete,
      })}
      loading={loading}
      ModalComponent={(
        <MarathonModal
          onSuccess={onSuccessAdd}
          editableMarathon={state.editableMarathon}
          onClose={onCloseModal}
				/>
			)}
      {...tableConfig}
		/>
  );
};

export default MarathonPage;
