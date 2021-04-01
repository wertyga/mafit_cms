import React, { useEffect, useMemo, useState } from 'react';
import {
  Form, Input, Select, Button, Col, Row, FormInstance,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { GetFoodStuffsQuery } from 'graphql/generated/foodstuff';
import { gfErrors } from 'goldfish/gfErrors';

import { SelectValue } from 'antd/es/select';
import { getFormItemMeta } from './helpers';

type Props = {
  data: GetFoodStuffsQuery;
  form: FormInstance<any>;
}

export const FoodBlock: React.FC<Props> = ({ data, form }) => {
  const [units, setUnits] = useState({});
  const handleFoodSetChange = (key: number) => (title: SelectValue) => {
    const foodSelectState = form.getFieldValue('foodSelectState');
    form.setFieldsValue({ foodSelectState: { ...foodSelectState, [key]: title } });
  };

  const handleDeleteFoodField = (
    fieldName: number,
    fieldKey: number,
    remove: (index: number | number[]) => void,
  ) => () => {
    const foodSelectState = form.getFieldValue('foodSelectState');
    form.setFieldsValue({ foodSelectState: { ...foodSelectState, [fieldKey]: '' } });
    remove(fieldName);
  };

  useEffect(() => {
    if (!data) return;
    const accumulateUnits = data.getFoodStuffs.foodstuff.reduce((acc, { unit, title }) => ({
      ...acc,
      [title]: unit,
    }), {});
    setUnits(accumulateUnits);
  }, [!!data]);

  const options = useMemo(() => (
    data
      ? data.getFoodStuffs.foodstuff.map(({ title, id }) => ({ label: title, value: title, id }))
      : []),
  [!!data]);

  return (
    <Form.List name="foods">
      {(fields, { add, remove }) => {
        const foodSelectState = form.getFieldValue('foodSelectState') || {};
        return (
          <div>
            {fields.map((field) => {
              const { fieldKey } = field;
              const {
                currentOptions,
                unit,
              } = getFormItemMeta(fieldKey, foodSelectState, units, options);
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
                        disabled={!foodSelectState[fieldKey]}
                        addonAfter={unit}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2} className="align-center justify-center">
                    <MinusCircleOutlined
                      className="danger icon-md "
                      onClick={handleDeleteFoodField(field.name, fieldKey, remove)}
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
        );
      }}
    </Form.List>
  );
};
