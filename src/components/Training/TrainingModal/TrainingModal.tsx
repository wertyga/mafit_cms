import React, { useState, useEffect } from 'react';
import {
  Input, Form, Col, message, Select,
} from 'antd';
import { Upload } from 'components/Common/Upload/Upload';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';
import { gfErrors } from 'goldfish/gfErrors';
import {
  useSaveTrainingMutation, Training, useGetDayFoodsLightListQuery,
} from 'graphql/types';

type Props = {
  editableTraining?: Partial<Training>;
  onSuccess: (data: Training, totalCount: number) => void;
  onClose: () => void;
};

export const TrainingModal: React.FC<Props> = ({ onSuccess, editableTraining, onClose }) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    dayFoods: [],
    video: null,
    preview: '',
  });

  useGetDayFoodsLightListQuery({
	  fetchPolicy: 'network-only',
    onCompleted: ({ getDayFoodsLightList }) => {
      const { dayFoods = [] } = getDayFoodsLightList || {};
      setState((prev) => ({ ...prev, dayFoods }));
    },
	  onError: (e: Error) => message.error(e.message),
  });
  const [saveTraining, { loading }] = useSaveTrainingMutation({
    onCompleted: ({ saveTraining: saveTrainingResponse }) => {
      const { training = {}, totalCount = 0 } = saveTrainingResponse || {};
      setState((prev) => ({ ...prev, video: null, preview: '' }));
      onSuccess(training as Training, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleSave = async () => {
    try {
      const { title, dayFood, description } = form.getFieldsValue(true);
      const payload = {
        id: editableTraining.id,
        title,
        video: state.video || state.preview,
        dayFood: (state.dayFoods.find((food) => food.title === dayFood) || {}).id,
        description,
      };
      await saveTraining({ variables: payload });
      return {};
    } catch (e) {
      return { error: e.message };
    }
  };

  const onFileChange = (video: File, preview?: string) => {
    setState((prev) => ({ ...prev, video, preview }));
  };
  const handleCloseModal = () => {
    setState((prev) => ({ ...prev, video: null, preview: '', }));
    onClose();
  };

  useEffect(() => {
    if (!editableTraining.id) return;
    const formData = {
      title: editableTraining.title,
      dayFood: editableTraining.dayFood && editableTraining.dayFood.title,
      description: editableTraining.description,
    };
    form.setFieldsValue(formData);
    setState((prev) => ({
      ...prev,
      preview: editableTraining.video,
    }));
  }, [editableTraining.id]);

  const dayFoodOptions = state.dayFoods.map(({ title }) => ({ title, value: title }));
  return (
    <TableModal
      modalTitle="Add/Edit training"
      form={form}
      formName="trainings"
      onFinish={handleSave}
      submitButtonTitle="Save training"
      loading={loading}
      onClose={handleCloseModal}
      openTrigger={!!editableTraining.id}
		>
      <Upload onChange={onFileChange} preview={state.preview} type="video" isFile={!!state.video} />
      <Col span={22}>
        <Form.Item
          name="title"
          label="Title"
          labelAlign="left"
          rules={[{ required: true, message: gfErrors.emptyField }]}
		    >
          <Input placeholder="Title..." />
        </Form.Item>
      </Col>
      <Col span={22}>
        <Form.Item
          name="description"
          label="Description"
          labelAlign="left"
        >
          <Input.TextArea placeholder="Description..." />
        </Form.Item>
      </Col>
      <Col span={22}>
        <Form.Item
          name="dayFood"
          label="Day food"
          labelAlign="left"
          rules={[{ required: true, message: gfErrors.emptyField }]}
		    >
          <Select options={dayFoodOptions} />
        </Form.Item>
      </Col>
    </TableModal>
  );
};
