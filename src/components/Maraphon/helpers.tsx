import React from 'react';
import { MarathonExpandableContent } from 'components/Maraphon/MarathonExpandableContent/MarathonExpandableContent';
import { getTableData, getPaginationTableProp } from 'components/Common/Table/helpers';

export const getMarathonTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <MarathonExpandableContent {...props} />,
    rowExpandable: () => true,
  },
  ...getPaginationTableProp(totalCount, 'marathons', handleChangePage),
});
