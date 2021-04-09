import React, { useEffect, useMemo, useState } from 'react';
import useSelector from 'hooks/useSelector';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Form, FormInstance } from 'antd';
import { SelectValue } from 'antd/es/select';
import { DragRow } from 'components/Drag/DragRow';
import { FoodForm } from 'types/foodstuff';

import { FoodItem } from './FoodItem/FoodItem';

type Props = {
  form: FormInstance<any>;
  parentFieldName?: string | number | (string | number)[];
  initialFoods: FoodForm[];
};

export const FoodBlock: React.FC<Props> = ({ parentFieldName, initialFoods }) => {
  const { foodstuffStore: { units, foodstuffs } } = useSelector('foodstuffStore');
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
      <Form.List name={parentFieldName || 'foods'} initialValue={['']}>
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
                    isCanAdd={fields.length < options.length}
                    options={filteredOptions}
                    handleFoodSetChange={handleFoodSetChange}
                    unit={units[foodsChosenState[field.fieldKey]]}
                    handleDeleteFoodField={handleDeleteFoodField}
                    remove={remove}
                    add={add}
                  />
                </DragRow>
              );
            })}
          </div>
        )}
      </Form.List>
    </DndProvider>
  );
};
