import React from 'react';
import { Form } from 'antd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { DragRow } from 'components/Drag/DragRow';
import { DescriptionRow } from './DescriptionRow/DescriptionRow';

export const DescriptionBlock = () => (
  <DndProvider backend={HTML5Backend}>
    <Form.List
      name="description"
      initialValue={[1]}
    >
      {(fields, { add, remove, move }) => (
        <>
          {fields.map((field, i) => (
            <DragRow key={field.key} index={i} moveRow={move} dragTypeName="description-drag">
              <DescriptionRow
                key={field.key}
                index={i}
                field={field}
                addRow={add}
                removeRow={remove}
              />
            </DragRow>
	        ))}
        </>
	    )}
    </Form.List>
  </DndProvider>
);
