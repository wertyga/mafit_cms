import React, { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table } from 'antd';
import { Recipe } from 'types/recipes';

import { DraggableBodyRow } from './DraggableBodyRow/DraggableBodyRow';
import { getDataWithKeys } from './helpers';

type Props = {
	data: Record<string, string | number>[];
	columns: Recipe[];
};

export const DraggableTable: React.FC<Props> = (tableProps) => {
  const [dataSource, setDataSource] = useState(getDataWithKeys(tableProps.data));

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = dataSource[dragIndex];
      setDataSource(
        update(dataSource, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [dataSource],
  );

  useEffect(() => {
    setDataSource(getDataWithKeys(tableProps.data));
  }, [tableProps.data]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        {...tableProps}
        dataSource={dataSource}
        columns={tableProps.columns}
        components={{
				  body: {
				    row: DraggableBodyRow,
				  },
        }}
        onRow={(record, index) => ({ index, moveRow })}
      />
    </DndProvider>
  );
};
