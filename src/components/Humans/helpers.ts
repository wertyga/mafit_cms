import { getTableData } from 'components/Common/Table/helpers';

export const getHumansTableData = ({
  totalCount,
}) => getTableData({
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} human types`,
  },
});
