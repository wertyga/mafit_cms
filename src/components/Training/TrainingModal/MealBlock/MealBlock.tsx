import useSelector from 'hooks/useSelector';
import {
  Col, Form, Select, Row, Input, Typography, FormInstance,
} from 'antd';
import { MinusCircleOutlined, PlusCircleFilled } from '@ant-design/icons';
import { gfErrors } from 'goldfish/gfErrors';
import React from 'react';
import { FoodBlock } from 'components/Recipe/RecipeModal/FoodBlock/FoodBlock';

const { Title } = Typography;

type Props = {
  form: FormInstance;
};

export const MealBlock: React.FC<Props> = ({ form }) => {
  const { humanStore: { humans }, foodstuffStore: { foodstuffs } } = useSelector(['humanStore', 'foodstuffStore']);
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
                  name={[field.name, 'mealType']}
                  label="Meal type"
                  labelAlign="left"
                  rules={[{ required: true, message: gfErrors.emptyField }]}
                >
                  <Input placeholder="Meal type..." />
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
              <FoodBlock foodstuffs={foodstuffs} form={form} parentFieldName={[field.name, 'foods']} />
            </div>
          ))}
        </div>
      )}
    </Form.List>
  );
};
