import React, { useEffect, useState, useMemo } from 'react';
import {
  Form, Input, Select, Button, Col, Row,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { GetFoodStuffsQuery } from 'graphql/generated/foodstuff';
import { gfErrors } from 'goldfish/gfErrors';

import { SelectValue } from 'antd/es/select';
import { getFormItemMeta } from './helpers';

type Props = {
  data: GetFoodStuffsQuery;
}

export const FoodBlock: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState<Record<string, string>>({});
  const [units, setUnits] = useState<Record<string, string>>({});

  const handleFoodSetChange = (key: number) => (title: SelectValue) => {
    setState((prev) => ({ ...prev, [key]: title }));
  };

  useEffect(() => {
    if (!data) return;
    setUnits(data.getFoodStuffs.foodstuff.reduce((acc, { unit, title }) => ({
      ...acc,
      [title]: unit,
    }), {}));
  }, [!!data]);

  const options = useMemo(() => (
    data
      ? data.getFoodStuffs.foodstuff.map(({ title, id }) => ({ label: title, value: title, id }))
      : []),
  [!!data]);

  return (
    <Form.List name="food">
      {(fields, { add, remove }) => (
        <div>
          {fields.map((field) => {
            const { fieldKey } = field;
            const {
              currentOptions,
              unit,
            } = getFormItemMeta(fieldKey, state, units, options);
            return (
              <Row key={fieldKey} gutter={16} className="mb-4">
                <Col span={16}>
                  <Form.Item
                    {...field}
                    label="Type"
                    className="mb-0"
                    name={[field.name, 'food']}
                    rules={[{ required: true, message: gfErrors.emptyField }]}
                  >
                    <Select options={currentOptions} onChange={handleFoodSetChange(fieldKey)} />
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
                      disabled={!state[fieldKey]}
                      addonAfter={unit}
                    />
                  </Form.Item>
                </Col>
                <Col span={2} className="align-center justify-center">
                  <MinusCircleOutlined
                    className="danger icon-md "
                    onClick={() => remove(field.name)}
                  />
                </Col>
              </Row>
            );
          })}
          {fields.length < options.length && (
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Food Set
              </Button>
            </Form.Item>
          )}
        </div>
      )}
    </Form.List>
  );
};
