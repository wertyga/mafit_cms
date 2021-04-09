import { getTableData } from '../Common/Table/helpers';

export const getTrainingTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} trainings`,
    onChange: handleChangePage,
  },
});
