import { getTableData } from 'components/Common/Table/helpers';

export const getFoodStuffTableData = ({
  totalCount,
}) => getTableData({
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} foodstuff`,
  },
});
