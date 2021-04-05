import { Col, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Upload } from 'components/Common/Upload/Upload';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';
import { gfErrors } from 'goldfish/gfErrors';

import { Training } from 'graphql/types';

type Props = {
	editableTraining: Partial<Training>;
	onSuccess: (data: Training, totalCount: number) => void;
	onClose: () => void;
};

export const TrainingModal: React.FC<Props> = ({ editableTraining, onClose, onSuccess }) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    video: null,
    preview: '',
  });
  const handleSave = async (formData) => {
    console.log('handleSave: ', formData);
    return {};
  };

  const onFileChange = (video: File, preview?: string) => {
    setState((prev) => ({ ...prev, video, preview }));
  };

  useEffect(() => {
    if (!editableTraining.id) return;
    console.log('editableTraining: ', editableTraining);
    // const formData = collectEditableData(editableRecipe);
    // form.setFieldsValue(formData);
    // setState((prev) => ({ ...prev, preview: editableRecipe.image }));
  }, [editableTraining.id]);

  return (
    <TableModal
      modalTitle="Add/Edit training"
      form={form}
      formName="training"
      onFinish={handleSave}
      submitButtonTitle="Save training"
			// loading={loading}
      onClose={onClose}
      openTrigger={!!editableTraining.id}
    >
      <Upload onChange={onFileChange} preview={state.preview} type="video" />
      <Col span={22}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: gfErrors.emptyField }]}
        >
          <Input placeholder="Title..." />
        </Form.Item>
      </Col>
    </TableModal>
  );
};
