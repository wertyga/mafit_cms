import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Input, Form, Col, message,
} from 'antd';
import { TrainingsBlock } from 'components/Maraphon/TrainingsBlock/TrainingsBlock';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';
import { gfErrors } from 'goldfish/gfErrors';
import {
  useGetLightTrainingListQuery, Marathon, useSaveMarathonMutation,
} from 'graphql/types';

import { MarathonDatePicker } from './MarathonDatePicker';

type Props = {
  editableMarathon?: Partial<Marathon>;
  onSuccess: (data: Marathon, totalCount: number) => void;
  onClose: () => void;
};

export const MarathonModal: React.FC<Props> = ({ onSuccess, editableMarathon, onClose }) => {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    trainings: [],
  });

  useGetLightTrainingListQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getLightTrainingList }) => {
      const { trainings = [] } = getLightTrainingList || {};
      setState((prev) => ({
	      ...prev,
	      trainings: trainings.map(({ id, title }) => ({ title, id, value: title })),
      }));
    },
    onError: (e: Error) => message.error(e.message),
  });
  const [saveMarathon, { loading }] = useSaveMarathonMutation({
    onCompleted: ({ saveMarathon: response }) => {
      const { marathon = {}, totalCount = 0 } = response || {};
      onSuccess(marathon as Marathon, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleSave = async (formData) => {
    try {
      const { title, description, trainings, dateStart } = formData;
      const trainingsId = [];
      state.trainings.forEach((item) => {
        const train = trainings.find((t) => t.training === item.title);
        if (train) trainingsId.push(item.id);
      });
      const payload = {
        id: editableMarathon.id,
        title,
        description,
        trainings: trainingsId,
        dateStart: new Date(dateStart).toString(),
      };
      await saveMarathon({ variables: payload });
      return {};
    } catch (e) {
      return { error: e.message };
    }
  };

  useEffect(() => {
    if (!editableMarathon.id) return;
    const formData = {
      title: editableMarathon.title,
      description: editableMarathon.description,
      trainings: (editableMarathon.trainings || []).map(({ title }) => ({ training: title })),
      dateStart: moment(editableMarathon.dateStart, 'YYYY-MM-DD'),
    };
    form.setFieldsValue(formData);
  }, [editableMarathon.id]);

  return (
    <TableModal
      modalTitle="Add/Edit marathon"
      form={form}
      formName="marathon"
      onFinish={handleSave}
      submitButtonTitle="Save marathon"
      loading={loading}
      onClose={onClose}
      openTrigger={!!editableMarathon.id}
		>
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
        <MarathonDatePicker />
      </Col>
      <Col span={22}>
        <TrainingsBlock options={state.trainings} />
      </Col>
    </TableModal>
  );
};
