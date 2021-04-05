import React, { useEffect } from 'react';
import {
  Col, Form, Input, message,
} from 'antd';
import { gfErrors } from 'goldfish/gfErrors';
import { useSaveHumanTypeMutation, HumanType } from 'graphql/types';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';

import { getModalTitle } from './helpers';

type Props = {
	onSuccess?: (human: HumanType, totalCount: number) => void;
	onClose?: () => void;
	editableHuman: Partial<HumanType>;
};

export const HumansModal: React.FC<Props> = ({ onSuccess, editableHuman, onClose }) => {
  const [form] = Form.useForm();
  const [saveHumanCategory, { loading }] = useSaveHumanTypeMutation({
    onCompleted: ({ saveHumanType }) => {
      const { human = {}, totalCount = 0 } = saveHumanType || {};
      onSuccess(human as HumanType, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleSave = async ({ humanCategory }: Record<string, string>) => {
    try {
      await saveHumanCategory({ variables: { category: humanCategory, id: editableHuman.id } });
      return {};
    } catch (e) {
		  return { error: e.message };
    }
  };

  useEffect(() => {
    if (!editableHuman.id) return;
    form.setFieldsValue({ humanCategory: editableHuman.category });
  }, [editableHuman.id]);

  return (
    <TableModal
      modalTitle={getModalTitle(!!editableHuman.id)}
      form={form}
      formName="humanCategory"
      onFinish={handleSave}
      submitButtonTitle="Save human category"
      loading={loading}
      onClose={onClose}
      openTrigger={!!editableHuman.id}
    >
      <Col span={22} key="category">
        <Form.Item
          name="humanCategory"
          label="Category"
          rules={[{ required: true, message: gfErrors.emptyField }]}
        >
          <Input placeholder="Category..." />
        </Form.Item>
      </Col>
    </TableModal>
  );
};
