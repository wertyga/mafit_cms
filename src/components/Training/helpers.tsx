import React from 'react';
import { TrainingsExpandableContent } from 'components/Training/TrainingsExpandableContent/TrainingsExpandableContent';
import { getTableData } from 'components/Common/Table/helpers';

export const getTrainingTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <TrainingsExpandableContent {...props} />,
    rowExpandable: () => true,
  },
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} trainings`,
    onChange: handleChangePage,
  },
});
