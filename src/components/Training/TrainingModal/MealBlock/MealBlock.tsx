import useSelector from 'hooks/useSelector';
import {
  Col, Form, Row, Input, Typography, FormInstance, Select,
} from 'antd';
import { MinusCircleOutlined, PlusCircleFilled } from '@ant-design/icons';
import { gfErrors } from 'goldfish/gfErrors';
import React from 'react';
import { FoodBlock } from 'components/Recipe/RecipeModal/FoodBlock/FoodBlock';

import { FoodForm } from 'types/foodstuff';
import { MEAL_TYPES } from 'types/meal';

const { Title } = Typography;

type Props = {
  form: FormInstance;
  initialFoods?: FoodForm[][];
};

export const MealBlock: React.FC<Props> = ({ form, initialFoods }) => {
  const { foodstuffStore: { foodstuffs } } = useSelector(['humanStore', 'foodstuffStore']);
  const mealOptions = Object.values(MEAL_TYPES).map((type) => ({ title: type, value: type }));
  return (
    <Form.List name="meals" initialValue={['']}>
      {(fields, { add, remove }) => (
        <div>
          {fields.map((field, i) => (
            <div key={`meals-${i}`}>
              <Row className="mb-4 flex justify-between align-center">
                <Title level={5}>Meal:</Title>
                <div>
                  <PlusCircleFilled onClick={add} className="success icon-md" />
                  {fields.length > 1 && <MinusCircleOutlined onClick={() => remove(field.name)} className="danger icon-md ml-2" />}
                </div>
              </Row>
              <Col span={24}>
                <Form.Item
                  name={[field.name, 'title']}
                  label="Meal title"
                  labelAlign="left"
                  rules={[{ required: true, message: gfErrors.emptyField }]}
                >
                  <Input placeholder="Meal title..." />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name={[field.name, 'mealType']}
                  label="Meal type"
                  labelAlign="left"
                  rules={[{ required: true, message: gfErrors.emptyField }]}
                >
                  <Select options={mealOptions} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name={[field.name, 'description']}
                  label="Description"
                  labelAlign="left"
                  rules={[{ required: true, message: gfErrors.emptyField }]}
                >
                  <Input.TextArea placeholder="Description..." />
                </Form.Item>
              </Col>
              <FoodBlock
                foodstuffs={foodstuffs}
                form={form}
                parentFieldName={[field.name, 'foods']}
                initialFoods={(initialFoods || [])[field.fieldKey]}
              />
            </div>
          ))}
        </div>
      )}
    </Form.List>
  );
};
