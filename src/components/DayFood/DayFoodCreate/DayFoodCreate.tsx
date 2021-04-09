/*eslint-disable*/
import React from 'react';
import {
  Form, FormInstance, Select, Input, Typography,
} from 'antd';
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons';
import { HumanType } from 'graphql/types';
import { FoodForm } from 'types/foodstuff';
import { MEAL_TYPES } from 'types/meal';

import { DayFoodCreateRecipe } from './DayFoodCreateRecipe/DayFoodCreateRecipe';
import { FORM_SPAN } from '../helpers';

const { Title } = Typography;

type Props = {
  recipeOptions: { title: string, value: string }[];
  form: FormInstance<any>;
  initialFoods?: FoodForm[];
  human: HumanType;
};

export const DayFoodCreate: React.FC<Props> = ({
  recipeOptions, human, form,
}) => {
  const mealTypeOptions = Object.values(MEAL_TYPES).map((name) => ({ title: name, value: name }));
  return (
    <Form.List name={[human.id, 'meals']} initialValue={['']} className="max-width-50">
      {(fields, { add, remove }) => (
			  fields.map((field) => (
          <div key={`meals-${field.fieldKey}`} className="flex-column mb-8">
            <div className="flex">
              <Title level={5}>{`Meals for ${human.category}`}</Title>
              <div className="ml-4">
                <PlusCircleFilled className="success icon-md mr-2" onClick={add} />
                {fields.length > 1 && <MinusCircleFilled className="danger icon-md" onClick={() => remove(field.name)} />}
              </div>
            </div>
            <div>
              <Form.Item
                name={[field.name, 'title']}
                label="Meal title"
                labelAlign="left"
                labelCol={{ span: FORM_SPAN[0] }}
                wrapperCol={{ span: FORM_SPAN[1] }}
                    >
                <Input placeholder="Meal title..." />
              </Form.Item>
              <Form.Item
                name={[field.name, 'description']}
                label="Meal description"
                labelAlign="left"
                labelCol={{ span: FORM_SPAN[0] }}
                wrapperCol={{ span: FORM_SPAN[1] }}
                    >
                <Input.TextArea placeholder="Meal description..." />
              </Form.Item>
              <Form.Item
                name={[field.name, 'mealType']}
                label="Meal type"
                labelAlign="left"
                labelCol={{ span: FORM_SPAN[0] }}
                wrapperCol={{ span: FORM_SPAN[1] }}
                    >
                <Select options={mealTypeOptions} />
              </Form.Item>
            </div>
        
            <DayFoodCreateRecipe
              recipeOptions={recipeOptions}
              parentFieldName={[field.name, 'recipes']}
            />
          </div>
			  ))
		  )}
    </Form.List>
  );
};
