import React from 'react';
import { gfErrors } from 'goldfish/gfErrors';
import {
  Col, Form, Input, Row, Select,
} from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { OptionData, OptionGroupData } from 'rc-select/es/interface';
import { SelectValue } from 'antd/es/select';
import { FormListFieldData } from 'antd/es/form/FormList';

export type FoodItemProps = {
	field: FormListFieldData;
	options: (OptionData | OptionGroupData)[];
	handleFoodSetChange: (key: number) => (title: SelectValue) => void;
	fieldKey: number;
	unit: string;
	handleDeleteFoodField: (
		fieldName: number,
		fieldKey: number,
		remove: (index: number | number[]) => void) => () => void;
	remove: (index: number | number[]) => void;
	foodSelectState: Record<string, string>;
};

export const FoodItem: React.FC<FoodItemProps> = ({
  field,
  options,
  handleFoodSetChange,
  fieldKey,
  unit,
  handleDeleteFoodField,
  remove,
  foodSelectState,
}) => (
  <Row gutter={16} className="mb-4">
    <Col span={16}>
      <Form.Item
        {...field}
        label="Type"
        className="mb-0"
        labelAlign="left"
        name={[field.name, 'food']}
        rules={[{ required: true, message: gfErrors.emptyField }]}
      >
        <Select options={options} onChange={handleFoodSetChange(fieldKey)} />
      </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item
        className="mb-0"
        name={[field.name, 'count']}
        rules={[{ required: true, message: gfErrors.emptyField }]}
      >
        <Input
          type="number"
          disabled={!foodSelectState[fieldKey]}
          addonAfter={unit}
        />
      </Form.Item>
    </Col>
    <Col span={2} className="align-center justify-center flex">
      <MinusCircleOutlined
        className="danger icon-md "
        onClick={handleDeleteFoodField(field.name, fieldKey, remove)}
      />
    </Col>
  </Row>
);
