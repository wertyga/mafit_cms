import React, { useState } from 'react';
import {
  Modal, Button, Input, Form, Col,
} from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import { useUploadRecipeMutation, Recipe } from 'graphql/generated/recipe';
import { UploadImage } from 'components/Common/UploadImage/UploadImage';
import { Loader } from 'components/Common/Loader/Loader';
import { gfRecipe } from 'goldfish/gfRecipe';
import { gfErrors } from 'goldfish/gfErrors';

import { useGetFoodStuffsQuery } from 'graphql/generated/foodstuff';

import { DescriptionBlock } from './DescriptionBlock/DescriptionBlock';
import { FoodBlock } from './FoodBlock/FoodBlock';

type Props = {
  onSuccess: (data: Recipe, totalCount: number) => void;
};

export const RecipeModal: React.FC<Props> = ({ onSuccess }) => {
  const [state, setState] = useState({
    isOpen: false,
    error: '',
    image: null,
  });
  const [addRecipe, { loading }] = useUploadRecipeMutation();
  const { data: foodstuffData } = useGetFoodStuffsQuery({ fetchPolicy: 'no-cache' });
  const [form] = Form.useForm();

  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false, image: null }));
    form.resetFields();
  };
  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));

  const handleSave = async (recipeData) => {
    setState((prev) => ({ ...prev, error: '' }));

    const description = recipeData.description.map((item) => item.description);
    const food = (recipeData.food || []).map(({ food: title, count }) => {
      const { id } = foodstuffData.getFoodStuffs.foodstuff
        .find((item) => item.title === title) || {};

      const qt = Number(count);
      return { id, qt: Number.isNaN(qt) ? 0 : qt };
    });
    const payload = {
      title: recipeData.title,
      description,
      image: state.image,
      food,
    };
    try {
      const { data: { uploadRecipe } } = await addRecipe({ variables: payload });
      handleClose();
      if (!uploadRecipe) return;

      const { recipes, totalCount } = uploadRecipe;
      onSuccess(recipes[0], totalCount);
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
          labelAlign="left"
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
              <Col span={22} key={name}>
                <Form.Item
                  name={name}
                  label={title}
                  rules={[{ required: true, message: gfErrors.emptyField }]}
                >
                  <Input placeholder={`${title}...`} />
                </Form.Item>
              </Col>
            );
          })}
          <DescriptionBlock />
          <FoodBlock data={foodstuffData} />
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
