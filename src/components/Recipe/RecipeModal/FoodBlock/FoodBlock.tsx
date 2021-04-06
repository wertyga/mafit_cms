import React, { useEffect, useMemo, useState } from 'react';
import useSelector from 'hooks/useSelector';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {
  Form, Button, FormInstance, Col,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FoodStuff } from 'graphql/types';
import { SelectValue } from 'antd/es/select';
import { DragRow } from 'components/Drag/DragRow';
import { FoodForm } from 'types/foodstuff';

import { FoodItem } from './FoodItem/FoodItem';

type Props = {
  foodstuffs: FoodStuff[];
  form: FormInstance<any>;
  parentFieldName?: string | number | (string | number)[];
  initialFoods: FoodForm[];
};

export const FoodBlock: React.FC<Props> = ({ foodstuffs, parentFieldName, initialFoods }) => {
  const { foodstuffStore: { units } } = useSelector('foodstuffStore');
  const [foodsChosenState, setFoodChosen] = useState({});

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
    if (!initialFoods) return;
    const foods = initialFoods.reduce((acc, { food }, i) => ({
      ...acc,
      [i]: food,
    }), {});
    setFoodChosen(foods);
  }, [initialFoods]);

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
              const filteredOptions = options
                .filter(({ value }) => !Object.values(foodsChosenState).includes(value));
              return (
                <DragRow key={`foods-${field.fieldKey}`} index={i} moveRow={move} dragTypeName="food-drag">
                  <FoodItem
                    countDisabled={!foodsChosenState[field.fieldKey]}
                    field={field}
                    options={filteredOptions}
                    handleFoodSetChange={handleFoodSetChange}
                    unit={units[foodsChosenState[field.fieldKey]]}
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
