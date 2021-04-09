import React from 'react';
import { Form, Select, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { gfErrors } from 'goldfish/gfErrors';
import { FormListFieldData } from 'antd/es/form/FormList';
import { OptionData } from 'rc-select/es/interface';

type Props = {
  options: OptionData[];
  field: FormListFieldData;
  fields: FormListFieldData[];
  remove: (index: number | number[]) => void;
  add: () => void;
};

export const TrainingBlockItem: React.FC<Props> = ({ options, field, fields, add, remove }) => (
  <Row className="flex align-center mb-4">
    <Col span={20}>
      <Form.Item
        name={[field.name, 'training']}
        label={`Training #${field.name + 1}`}
        labelAlign="left"
        className="mb-0"
        rules={[{ required: true, message: gfErrors.emptyField }]}
		  >
        <Select options={options} />
      </Form.Item>
    </Col>
    <Col span={2} className="flex pl-4">
      <PlusCircleOutlined className="mr-2 success icon-md" onClick={add} />
      {fields.length > 1
        && <MinusCircleOutlined className="danger icon-md" onClick={() => remove(field.name)} />}
    </Col>
  </Row>
);
