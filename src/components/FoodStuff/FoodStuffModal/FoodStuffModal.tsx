import React, { useEffect } from 'react';
import { Input, Form, message } from 'antd';
import { useAddFoodstuffMutation, FoodStuff } from 'graphql/types';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';

import { FOODSTUFF_PROPS } from 'goldfish/gfFoodStuff';
import { gfErrors } from 'goldfish/gfErrors';
import { capitalFirst } from 'utils/string';

import { collectFoodStuffSaveData } from './helpers';

type Props = {
	onSuccess: (data: FoodStuff, totalCount: number) => void;
  editableFoodstuff: Partial<FoodStuff>;
  onClose: () => void;
};

export const FoodStuffModal: React.FC<Props> = ({ onSuccess, editableFoodstuff, onClose }) => {
  const [form] = Form.useForm();
  const [addFoodStuff, { loading }] = useAddFoodstuffMutation({
    onCompleted: ({ addFoodstuff }) => {
      const { foodstuff, totalCount } = addFoodstuff || {};
      onSuccess(foodstuff, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleSave = async (foodStuffData) => {
    try {
      const dataWithNumeric = collectFoodStuffSaveData(foodStuffData);
      const payload = {
        ...dataWithNumeric,
        id: editableFoodstuff.id,
      };
      await addFoodStuff({ variables: payload } as unknown as any);

      return {};
    } catch (e) {
      return { error: e.message };
    }
  };

  useEffect(() => {
    if (!editableFoodstuff.id) return;
    form.setFieldsValue(editableFoodstuff);
  }, [editableFoodstuff.id]);

  return (
    <TableModal
      modalTitle="Add/Edit foodstuff"
      form={form}
      formName="foodstuff"
      onFinish={handleSave}
      submitButtonTitle="Save foodstuff"
      loading={loading}
      onClose={onClose}
      openTrigger={!!editableFoodstuff.id}
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
    </TableModal>
  );
};
