import React, { useState } from 'react';
import {
  Modal, Button, Input, Form,
} from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { useUploadRecipeMutation, Recipe } from 'graphql/generated/recipe';
import { UploadImage } from 'components/Common/UploadImage/UploadImage';
import { Loader } from 'components/Common/Loader/Loader';
import { gfRecipe } from 'goldfish/gfRecipe';
import { gfErrors } from 'goldfish/gfErrors';

import { DescriptionBlock } from './DescriptionBlock/DescriptionBlock';

type Props = {
  onSuccess: (data: Recipe, totalCount: number) => void;
};

export const RecipeModal: React.FC<Props> = ({ onSuccess }) => {
  const [state, setState] = useState({
    isOpen: false,
    error: '',
    image: null,
  });
  const [addRecipe, { loading, data }] = useUploadRecipeMutation();
  const [form] = Form.useForm();

  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false, image: null }));
    form.resetFields();
  };
  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));

  const handleSave = async (recipeData) => {
    const description = recipeData.description.map((item) => item.description);
    setState((prev) => ({ ...prev, error: '' }));
    const payload = {
      title: recipeData.title,
      description,
      image: state.image,
    };
    try {
      const {
        data: { uploadRecipe: { recipes, totalCount } },
      } = await addRecipe({ variables: payload });
      handleClose();
      onSuccess(recipes, totalCount);
    } catch (e) {
      setState((prev) => ({ ...prev, error: e.message, isOpen: false }));
    }
  };

  const onFileChange = (image: File) => {
    setState((prev) => ({ ...prev, image }));
  };

  return (
    <div className="recipe-modal">
      <Button
        type="text"
        icon={<PlusSquareFilled className="success ml-2" style={{ fontSize: '2rem' }} />}
        onClick={handleOpen}
        size="large"
      />
      {!!state.error && <span className="error">{state.error}</span>}
      <Loader isActive={loading} />
      <Modal
        title="Add recipe"
        visible={state.isOpen}
        onCancel={handleClose}
        style={{ minWidth: 700 }}
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
          <UploadImage onChange={onFileChange} />
          {gfRecipe.recipeFields.map(({ name }) => {
            const title = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
            return (
              <Form.Item
                key={name}
                name={name}
                label={title}
                rules={[{ required: true, message: gfErrors.emptyField }]}
              >
                <Input placeholder={`${title}...`} />
              </Form.Item>
            );
          })}
          <DescriptionBlock />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
