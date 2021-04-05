import React from 'react';
import { TrainingsExpandableContent } from 'components/Training/TrainingsExpandableContent/TrainingsExpandableContent';
import { getTableData } from 'components/Common/Table/helpers';
import { Training } from 'graphql/types';

export const getTrainingTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <TrainingsExpandableContent {...props} />,
    rowExpandable: ({ meal: { meal = [] } }: Training) => meal.length > 0,
  },
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} trainings`,
    onChange: handleChangePage,
  },
});
