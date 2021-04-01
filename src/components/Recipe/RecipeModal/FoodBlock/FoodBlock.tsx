import React, { useEffect, useMemo, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {
  Form, Button, FormInstance,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { GetFoodStuffsQuery } from 'graphql/generated/foodstuff';
import { SelectValue } from 'antd/es/select';
import { DragRow } from 'components/Drag/DragRow';
import { getFormItemMeta } from './helpers';
import { FoodItem } from './FoodItem/FoodItem';

type Props = {
  data: GetFoodStuffsQuery;
  form: FormInstance<any>;
};

export const FoodBlock: React.FC<Props> = ({ data, form }) => {
  const [units, setUnits] = useState({});
  const handleFoodSetChange = (key: number) => (title: SelectValue) => {
    const foodSelectState = form.getFieldValue('foodSelectState');
    form.setFieldsValue({ foodSelectState: { ...foodSelectState, [key]: title } });
  };

  const handleDeleteFoodField = (
    fieldName: number,
    fieldKey: number,
    remove: (index: number | number[]) => void,
  ) => () => {
    const foodSelectState = form.getFieldValue('foodSelectState');
    form.setFieldsValue({ foodSelectState: { ...foodSelectState, [fieldKey]: '' } });
    remove(fieldName);
  };

  useEffect(() => {
    if (!data) return;
    const accumulateUnits = data.getFoodStuffs.foodstuff.reduce((acc, { unit, title }) => ({
      ...acc,
      [title]: unit,
    }), {});
    setUnits(accumulateUnits);
  }, [!!data]);

  const options = useMemo(() => (
    data
      ? data.getFoodStuffs.foodstuff.map(({ title, id }) => ({ label: title, value: title, id }))
      : []),
  [!!data]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Form.List name="foods">
        {(fields, { add, remove, move }) => {
          const foodSelectState = form.getFieldValue('foodSelectState') || {};
          return (
            <div>
              {fields.map((field, i) => {
                const { fieldKey } = field;
                const {
                  currentOptions,
                  unit,
                } = getFormItemMeta(fieldKey, foodSelectState, units, options);
                return (
                  <DragRow key={fieldKey} index={i} moveRow={move} dragTypeName="food-drag">
                    <FoodItem
                      fieldKey={fieldKey}
                      field={field}
                      options={currentOptions}
                      handleFoodSetChange={handleFoodSetChange}
                      unit={unit}
                      foodSelectState={foodSelectState}
                      handleDeleteFoodField={handleDeleteFoodField}
                      remove={remove}
                    />
                  </DragRow>
                );
              })}
              {fields.length < options.length && (
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Food Set
                  </Button>
                </Form.Item>
              )}
            </div>
          );
        }}
      </Form.List>
    </DndProvider>
  );
};
