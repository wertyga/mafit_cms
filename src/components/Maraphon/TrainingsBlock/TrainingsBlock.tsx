import { HTML5Backend } from 'react-dnd-html5-backend';
import { Form } from 'antd';
import { DndProvider } from 'react-dnd';
import React from 'react';
import { DragRow } from '../../Drag/DragRow';

import { TrainingBlockItem } from './TrainingBlockItem';

export const TrainingsBlock = ({ options }) => (
  <DndProvider backend={HTML5Backend}>
    <Form.List name="trainings" initialValue={['']}>
      {(fields, { add, remove, move }) => (
        <div>
          {fields.map((field, i) => (
            <DragRow key={`training-${field.fieldKey}`} index={i} moveRow={move} dragTypeName="training-drag">
              <TrainingBlockItem
                field={field}
                fields={fields}
                options={options}
                add={add}
                remove={remove}
              />
            </DragRow>
          ))}
        </div>
      )}
    </Form.List>
  </DndProvider>
);
