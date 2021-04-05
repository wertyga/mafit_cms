import React, { useEffect, useMemo, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {
  Form, Button, FormInstance, Col,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FoodStuff } from 'graphql/types';
import { SelectValue } from 'antd/es/select';
import { DragRow } from 'components/Drag/DragRow';
import { getFormItemMeta } from './helpers';
import { FoodItem } from './FoodItem/FoodItem';

type Props = {
  foodstuffs: FoodStuff[];
  form: FormInstance<any>;
  parentFieldName?: string | number | (string | number)[];
};

export const FoodBlock: React.FC<Props> = ({ foodstuffs, parentFieldName }) => {
  const [units, setUnits] = useState({});
  const [foodsChosen, setFoodChosen] = useState({});

  const handleFoodSetChange = (key: number) => (title: SelectValue) => {
    setFoodChosen((prev) => ({ ...prev, [key]: title }));
  };

  const handleDeleteFoodField = (
    fieldName: number,
    fieldKey: number,
    remove: (index: number | number[]) => void,
  ) => () => {
    setFoodChosen((prev) => ({ ...prev, [fieldKey]: '' }));
    remove(fieldName);
  };

  useEffect(() => {
    if (!foodstuffs) return;
    const accumulateUnits = foodstuffs.reduce((acc, { unit, title }) => ({
      ...acc,
      [title]: unit,
    }), {});
    setUnits(accumulateUnits);
  }, [!!foodstuffs]);

  const options = useMemo(() => (
    foodstuffs
      ? foodstuffs.map(({ title, id }) => ({ label: title, value: title, id }))
      : []),
  [!!foodstuffs]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Form.List name={parentFieldName || 'foods'}>
        {(fields, { add, remove, move }) => (
          <div>
            {fields.map((field, i) => {
              const { fieldKey } = field;
              const {
                currentOptions,
                unit,
              } = getFormItemMeta(fieldKey, foodsChosen, units, options);
              return (
                <DragRow key={`foods-${fieldKey}`} index={i} moveRow={move} dragTypeName="food-drag">
                  <FoodItem
                    fieldKey={fieldKey}
                    field={field}
                    options={currentOptions}
                    handleFoodSetChange={handleFoodSetChange}
                    unit={unit}
                    foodSelectState={foodsChosen}
                    handleDeleteFoodField={handleDeleteFoodField}
                    remove={remove}
                  />
                </DragRow>
              );
            })}
            {fields.length < options.length && (
            <Form.Item>
              <Col span={12}>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Food Set
                </Button>
              </Col>
            </Form.Item>
            )}
          </div>
        )}
      </Form.List>
    </DndProvider>
  );
};
