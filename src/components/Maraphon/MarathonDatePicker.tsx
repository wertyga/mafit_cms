import React from 'react';
import { Form, DatePicker } from 'antd';

export const MarathonDatePicker = () => (
  <div>
    <Form.Item
      name="dateStart"
      label="Start date"
      labelAlign="left"
      rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}
			>
      <DatePicker />
    </Form.Item>
    <Form.Item
      name="dateEnd"
      label="Finish date"
      labelAlign="left"
      rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}
		>
      <DatePicker />
    </Form.Item>
  </div>
);
