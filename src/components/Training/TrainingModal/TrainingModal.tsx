import React, { useEffect, useState } from 'react';
import useSelector from 'hooks/useSelector';
import {
  Col, Form, Input, Select, Row, Typography, message,
} from 'antd';
import { Upload } from 'components/Common/Upload/Upload';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';
import { gfErrors } from 'goldfish/gfErrors';

import { Training, useSaveTrainingMutation } from 'graphql/types';
import { MealBlock } from './MealBlock/MealBlock';
import { collectTrainingRequest, getHumanOptions, collectEditableTraining } from './helpers';

const { Title } = Typography;

type Props = {
	editableTraining: Partial<Training>;
	onSuccess: (data: Training, totalCount: number) => void;
	onClose: () => void;
};

export const TrainingModal: React.FC<Props> = ({ editableTraining, onClose, onSuccess }) => {
  const [form] = Form.useForm();
  const {
    humanStore: { humans },
    foodstuffStore: { foodstuffs },
  } = useSelector(['humanStore', 'foodstuffStore']);
  const [state, setState] = useState({
    video: null,
    preview: '',
    editableFoods: null,
  });
  const [handleSaveTraining, { loading }] = useSaveTrainingMutation({
    onCompleted: ({ saveTraining }) => {
      const { training = {}, totalCount = 0 } = saveTraining || {};
      onSuccess(training as Training, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });
  const handleSave = async (formData) => {
    try {
      const requestData = collectTrainingRequest(formData, foodstuffs, humans);
      await handleSaveTraining({
        variables: {
          id: editableTraining.id,
          video: editableTraining.id ? state.preview : state.video,
          data: requestData,
        },
      });
      return {};
    } catch (e) {
      return { error: e.message };
    }
  };

  const onFileChange = (video: File, preview?: string) => {
    setState((prev) => ({ ...prev, video, preview }));
  };

  const onModalClose = () => {
    onFileChange(null, '');
    onClose();
  };

  useEffect(() => {
    if (!editableTraining.id) return;
    const formData = collectEditableTraining(editableTraining as Training, humans);
    const selectedFoods = formData.meals.map(({ foods }) => foods);
    form.setFieldsValue(formData);
    setState((prev) => ({
      ...prev,
      preview: editableTraining.video,
      editableFoods: selectedFoods,
    }));
  }, [editableTraining.id]);

  const humanOptions = getHumanOptions(humans);
  return (
    <TableModal
      modalTitle="Add/Edit training"
      form={form}
      formName="training"
      onFinish={handleSave}
      submitButtonTitle="Save training"
      loading={loading}
      onClose={onModalClose}
      openTrigger={!!editableTraining.id}
    >
      <Row className="mb-4">
        <Title level={5}>Training:</Title>
      </Row>
      <Upload onChange={onFileChange} preview={state.preview} type="video" />
      <Col span={24} className="mb-4">
        <Form.Item
          name="title"
          label="Title"
          labelAlign="left"
          rules={[{ required: true, message: gfErrors.emptyField }]}
        >
          <Input placeholder="Title..." />
        </Form.Item>
      </Col>
      <Col span={24} className="mb-4">
        <Form.Item
          name="humanType"
          label="HumanType"
          labelAlign="left"
          rules={[{ required: true, message: gfErrors.emptyField }]}
        >
          <Select options={humanOptions} />
        </Form.Item>
      </Col>
      <MealBlock form={form} initialFoods={state.editableFoods} />

    </TableModal>
  );
};
