import React from 'react';
import {
  Col, Form, Input, Row,
} from 'antd';
import { gfErrors } from 'goldfish/gfErrors';
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons';
import { FormListFieldData } from 'antd/es/form/FormList';

type Props = {
	field: FormListFieldData;
	removeRow: (index: number | number[]) => void;
	addRow: () => void;
	index: number;
};

export const DescriptionRow: React.FC<Props> = ({ field, removeRow, addRow, index }) => (
  <Row key={field.key} gutter={16} className="mb-8">
    <Col span={22}>
      <Form.Item
        {...field}
        className="mb-0"
        label={`Description #${index + 1}`}
        name={[field.name, 'description']}
        fieldKey={[field.fieldKey, 'description']}
        rules={[{ required: true, message: gfErrors.emptyField }]}
      >
        <Input.TextArea
          placeholder="Description..."
        />
      </Form.Item>
    </Col>
    <Col span={2} className="align-center justify-center flex-column">
      <PlusCircleFilled onClick={addRow} className="mb-2 icon-md success" />
      {field.key !== 0 && <MinusCircleFilled onClick={() => removeRow(field.name)} className="icon-md error" />}
    </Col>
  </Row>
);
