import React from 'react';
import { Form, Input } from 'antd';
import { gfErrors } from 'goldfish/gfErrors';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

export const DescriptionBlock = () => (
  <Form.List
    name="description"
    initialValue={[1]}
		>
    {(fields, { add, remove }) => (
      <>
        {fields.map((field) => (
          <div key={field.key}>
            <Form.Item
              {...field}
              label={field.key === 0 && 'Description'}
              name={[field.name, 'description']}
              fieldKey={[field.fieldKey, 'description']}
              rules={[{ required: true, message: gfErrors.emptyField }]}
            >
              <div className="flex">
                <Input.TextArea
                  placeholder="Description..."
                />
                <div className="flex-column align-center ml-2">
                  <PlusSquareOutlined onClick={add} className="mb-2 icon-md success" />
                  {field.key !== 0 && <MinusSquareOutlined onClick={() => remove(field.name)} className="icon-md error" />}
                </div>
              </div>
            </Form.Item>
          </div>
        ))}
      </>
    )}
  </Form.List>
);
