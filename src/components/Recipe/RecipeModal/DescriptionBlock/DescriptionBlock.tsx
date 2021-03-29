import React from 'react';
import {
  Form, Input, Row, Col,
} from 'antd';
import { gfErrors } from 'goldfish/gfErrors';
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons';

export const DescriptionBlock = () => (
  <Form.List
    name="description"
    initialValue={[1]}
		>
    {(fields, { add, remove }) => (
      <>
        {fields.map((field) => (
          <Row key={field.key} gutter={16} className="mb-8">
            <Col span={22}>
              <Form.Item
                {...field}
	              className="mb-0"
                label={field.key === 0 && 'Description'}
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
              <PlusCircleFilled onClick={add} className="mb-2 icon-md success" />
              {field.key !== 0 && <MinusCircleFilled onClick={() => remove(field.name)} className="icon-md error" />}
            </Col>
          </Row>
        ))}
      </>
    )}
  </Form.List>
);
