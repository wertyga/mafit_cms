import { getTableData } from 'components/Common/Table/helpers';

export const getFoodStuffTableData = ({
  totalCount,
  handleChangePage,
}) => getTableData({
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} foodstuff`,
    onChange: handleChangePage,
  },
});
