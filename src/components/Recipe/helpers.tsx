import React from 'react';
import { getTableData } from 'components/Common/Table/helpers';
import { RecipeExpandedContent } from './RecipeExpandedContent/RecipeExpandedContent';

export const getRecipeTableData = ({
  totalCount, handleChangePage,
}) => getTableData({
  expandable: {
    expandedRowRender: (props) => <RecipeExpandedContent {...props} />,
    rowExpandable: ({ description = [], foods = [] }) => description.length > 1 || foods.length > 1,
  },
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} recipes`,
    onChange: handleChangePage,
  },
});
