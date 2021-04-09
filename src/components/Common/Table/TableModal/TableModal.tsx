import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import _noop from 'lodash/noop';

import { Loader } from 'components/Common/Loader/Loader';
import { WModal } from 'components/Common/Modal/WModal';

import {
  Button, Form, FormInstance,
} from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';

type Props = {
  className?: string | Record<string, string | boolean>;
  form: FormInstance;
  onClose?: () => void;
  footer?: React.ReactElement;
  onFinish: (data: Record<string, string>) => Promise<{ error?: string }>;
  formName: string;
  modalTitle: string;
  submitButtonTitle: string;
  loading?: boolean;
  openTrigger?: boolean;
};

export const TableModal: React.FC<Props> = ({
  className,
  form,
  onClose = _noop,
  footer,
  onFinish,
  formName,
  modalTitle,
  submitButtonTitle,
  loading,
  openTrigger,
  children,
}) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));
  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false }));
    form.resetFields();
    onClose();
  };

  const onSubmitForm = async (tableData) => {
  	const { error: submitError } = await onFinish(tableData);
  	if (!submitError) handleClose();
  };

  useEffect(() => {
    if (!openTrigger) return;
    setState((prev) => ({ ...prev, isOpen: true }));
  }, [openTrigger]);

  return (
    <div className={classnames(className)}>
      <Button
        type="text"
        icon={<PlusSquareFilled className="success ml-2" style={{ fontSize: '2rem' }} />}
        onClick={handleOpen}
        size="large"
      />
      <Loader isActive={loading} />
      <WModal
        title={modalTitle}
        visible={state.isOpen}
        onCancel={handleClose}
        footer={footer || null}
      >
        <Form
          form={form}
          name={formName}
          onFinish={onSubmitForm}
          autoComplete="off"
          className="max-width-50"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          {children}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {submitButtonTitle}
            </Button>
          </Form.Item>
        </Form>
      </WModal>
    </div>
  );
};
