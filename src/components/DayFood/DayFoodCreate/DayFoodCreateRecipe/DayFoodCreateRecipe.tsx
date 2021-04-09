import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {
  Form, Col, Select, Typography,
} from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { DragRow } from 'components/Drag/DragRow';

const { Title } = Typography;

type Props = {
  parentFieldName: [number, string];
  recipeOptions: { title: string, value: string }[];
};

export const DayFoodCreateRecipe: React.FC<Props> = ({ parentFieldName, recipeOptions }) => (
  <DndProvider backend={HTML5Backend}>
    <Form.List name={parentFieldName} initialValue={['']}>
      {(fields, { add, remove, move }) => (
        <div>
          <Title level={5}>Recipes</Title>
          {fields.map((field, i) => (
            <DragRow key={`foods-${field.fieldKey}`} index={i} moveRow={move} dragTypeName="recipe-drag" className="mb-2">
              <Col span={10} className="flex">
                <Form.Item
                  name={[field.name, 'recipe']}
                  className="mb-0 fluid"
                  label={`Recipe #${i + 1}`}
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Select options={recipeOptions} />
                </Form.Item>
                <Col span={2} className="pl-4 flex align-center">
                  <PlusCircleOutlined className="success icon-md" onClick={add} />
                  <MinusCircleOutlined className="danger icon-md ml-2" onClick={() => remove(field.name)} />
                </Col>
              </Col>
            </DragRow>
          ))}
        </div>
      )}
    </Form.List>
  </DndProvider>
);
