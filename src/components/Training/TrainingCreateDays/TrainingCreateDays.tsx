import React from 'react';
import { Input, Button, Tag, FormInstance, Row, Col, Form } from 'antd';

type Props = {
  form: FormInstance;
};

export const TrainingCreateDays: React.FC<Props> = ({ form }) => {
  const handleSubmit = () => {
    const { currentDay, trainingDays = [] } = form.getFieldsValue(['currentDay', 'trainingDays']);
    const numberedDay = Number(currentDay);
    if (trainingDays.includes(numberedDay) || Number.isNaN(numberedDay)) {
      form.resetFields(['currentDay']);
      return;
    }
    form.setFieldsValue({
      trainingDays: [numberedDay, ...trainingDays].sort((a, b) => (a > b ? 1 : -1)),
    });
    form.resetFields(['currentDay']);
  };

  const handleDeleteDay = (day: string) => () => {
    const trainingDays = form.getFieldValue('trainingDays') || [];
    form.setFieldsValue({
      trainingDays: trainingDays.filter((trainingDay) => trainingDay !== day),
    });
  };
  return (
    <div>
      <Form.Item shouldUpdate className="mb-0">
        {() => (
          (form.getFieldValue('trainingDays') || []).map((day) => (
            <Tag key={day} closable onClose={handleDeleteDay(day)}>{day}</Tag>
          ))
        )}
      </Form.Item>
      <Form.Item name="currentDay">
        <Row className="mb-4">
          <Col span={8} className="mr-4">
            <Input type="number" />
          </Col>
          <Button type="primary" onClick={handleSubmit}>Add training day</Button>
        </Row>
      </Form.Item>
    </div>
  );
};
