import React from 'react';
import moment from 'moment';
import { MarathonExpandableContent } from 'components/Maraphon/MarathonExpandableContent/MarathonExpandableContent';
import { getTableData, getPaginationTableProp } from 'components/Common/Table/helpers';

import { Marathon } from 'graphql/types';
import { MarathonFormData } from 'types/marathon';

export const getMarathonTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <MarathonExpandableContent {...props} />,
    rowExpandable: () => true,
  },
  ...getPaginationTableProp(totalCount, 'marathons', handleChangePage),
});

export const collectEditableData = (marathon: Marathon): MarathonFormData => {
  const { title, description, trainings = [], dateStart, dateEnd, progressIn } = marathon;
  return {
    title,
    description,
    trainings: trainings.map(({ title: trainingTitle }) => ({ training: trainingTitle })),
    dateStart: moment(new Date(dateStart).toLocaleDateString(), 'YYYY-MM-DD'),
    dateEnd: moment(new Date(dateEnd).toLocaleDateString(), 'YYYY-MM-DD'),
    progressIn,
  };
};
