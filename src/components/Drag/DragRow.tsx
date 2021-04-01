import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

type Props = {
  index: number;
  dragTypeName: string;
  moveRow: (from: number, to: number) => void;
};
type DragItemType = { index: number };

export const DragRow: React.FC<Props> = ({
  index,
  moveRow,
  dragTypeName,
  children,
}) => {
  const ref = useRef();
  const [_, drop] = useDrop(
    () => ({
      accept: dragTypeName,
      collect: (monitor) => {
        const { index: dragIndex } = (monitor.getItem() || {}) as DragItemType;
        if (dragIndex === index) return {};
        return {
          isOver: monitor.isOver(),
        };
      },
      drop: (item: DragItemType) => {
        moveRow(item.index, index);
      },
    }),
    [index],
  );
  const [, drag] = useDrag(
    () => ({
      type: dragTypeName,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index],
  );
  drop(drag(ref));

  return (
    <div draggable="true" ref={ref}>
      {children}
    </div>
  );
};
