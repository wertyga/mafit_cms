import React, { useState, useEffect } from 'react';
import { Button, Input, Form } from 'antd';
import { WModal } from 'components/Common/Modal/WModal';
import useNotify from 'hooks/useNotify';
import { PlusSquareFilled } from '@ant-design/icons';
import { useAddFoodstuffMutation, FoodStuff } from 'graphql/generated/foodstuff';
import { Loader } from 'components/Common/Loader/Loader';
import { FOODSTUFF_PROPS } from 'goldfish/gfFoodStuff';
import { gfErrors } from 'goldfish/gfErrors';

import { capitalFirst } from 'utils/string';

import { collectFoodStuffSaveData } from './helpers';

type Props = {
	onSuccess: (data: FoodStuff, totalCount: number, ID: string) => void;
  editableFoodstuff: Partial<FoodStuff>;
  onClose: () => void;
};

export const FoodStuffModal: React.FC<Props> = ({ onSuccess, editableFoodstuff, onClose }) => {
  const [state, setState] = useState({
    isOpen: false,
    ...FOODSTUFF_PROPS.reduce((acc, { name, number }) => ({
      ...acc,
      [name]: number ? 0 : '',
    }), {}),
  });
  const [addFoodStuff, { loading, error }] = useAddFoodstuffMutation();
  const [form] = Form.useForm();

  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false, image: null }));
    form.resetFields();
    onClose();
  };
  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));

  const handleSave = async (foodStuffData) => {
    try {
      const dataWithNumeric = collectFoodStuffSaveData(foodStuffData);
      const payload = {
        ...dataWithNumeric,
        id: editableFoodstuff.id,
      };
      const {
        data: { addFoodstuff: { foodstuff, totalCount } },
      } = await addFoodStuff({ variables: payload });
      handleClose();
      onSuccess(foodstuff, totalCount, editableFoodstuff.id);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!editableFoodstuff.id) return;
    setState((prev) => ({ ...prev, isOpen: true }));
    form.setFieldsValue(editableFoodstuff);
  }, [editableFoodstuff.id]);

  useNotify(error && error.message, 'error');

  return (
    <div className="recipe-modal">
      <Button
        type="text"
        icon={<PlusSquareFilled className="success ml-2" style={{ fontSize: '2rem' }} />}
        onClick={handleOpen}
        size="large"
      />
      <Loader isActive={loading} />
      <WModal
        title="Add foodstuff"
        visible={state.isOpen}
        onCancel={handleClose}
        footer={null}
      >
        <Form
          form={form}
          name="dynamic_form_nest_item"
          onFinish={handleSave}
          autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 24 }}
        >
          {FOODSTUFF_PROPS.map(({ name, number }) => (
            <Form.Item
              key={name}
              name={name}
              label={capitalFirst(name)}
              rules={[{ required: true, message: gfErrors.emptyField }]}
            >
              <Input
                type={number ? 'number' : 'text'}
                name={name}
                placeholder={`${capitalFirst(name)}...`}
              />
            </Form.Item>
          ))}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add foodStuff
            </Button>
          </Form.Item>
        </Form>
      </WModal>
    </div>
  );
};
