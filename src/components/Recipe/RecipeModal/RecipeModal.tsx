import React, { useState, useEffect } from 'react';
import {
  Button, Input, Form, Col,
} from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import useNotify from 'hooks/useNotify';
import { useUploadRecipeMutation, Recipe } from 'graphql/generated/recipe';
import { UploadImage } from 'components/Common/UploadImage/UploadImage';
import { Loader } from 'components/Common/Loader/Loader';
import { WModal } from 'components/Common/Modal/WModal';
import { gfRecipe } from 'goldfish/gfRecipe';
import { gfErrors } from 'goldfish/gfErrors';

import { useGetFoodStuffsQuery } from 'graphql/generated/foodstuff';

import { DescriptionBlock } from './DescriptionBlock/DescriptionBlock';
import { FoodBlock } from './FoodBlock/FoodBlock';

import { collectEditableData, collectRecipeFormData, getRecipeModalTitle } from './helpers';

type Props = {
  editableRecipe?: Partial<Recipe>;
  onSuccess: (data: Recipe, totalCount: number, editableRecipeID?: string) => void;
  onClose: () => void;
};

export const RecipeModal: React.FC<Props> = ({ onSuccess, editableRecipe, onClose }) => {
  const [state, setState] = useState({
    isOpen: false,
    error: '',
    image: null,
    preview: '',
  });
  const [addRecipe, { loading, error: saveError }] = useUploadRecipeMutation();
  const { data: foodstuffData, error: getFoodStuffError } = useGetFoodStuffsQuery({ fetchPolicy: 'no-cache' });
  const [form] = Form.useForm();

  const handleClose = () => {
    setState((prev) => ({ ...prev, isOpen: false, image: null, preview: '' }));
    onClose();
    form.resetFields();
  };
  const handleOpen = () => setState((prev) => ({ ...prev, isOpen: true }));

  const handleSave = async (recipeData) => {
    setState((prev) => ({ ...prev, error: '' }));

    const requestData = collectRecipeFormData(recipeData, foodstuffData.getFoodStuffs.foodstuff);
    const payload = {
      ...requestData,
      id: editableRecipe.id,
      image: state.image || state.preview,
    };

    try {
      const { data: { uploadRecipe } } = await addRecipe({ variables: payload });
      handleClose();
      if (!uploadRecipe) return;

      const { recipe, totalCount } = uploadRecipe;
      onSuccess(recipe, totalCount, editableRecipe.id);
    } catch (e) {
      setState((prev) => ({ ...prev, error: e.message }));
    }
  };

  const onFileChange = (image: File, preview?: string) => {
    setState((prev) => ({ ...prev, image, preview }));
  };

  useEffect(() => {
    if (!editableRecipe.id) return;
    setState((prev) => ({ ...prev, isOpen: true, preview: editableRecipe.image }));
    const formData = collectEditableData(editableRecipe);
    form.setFieldsValue(formData);
  }, [editableRecipe.id]);

  useNotify(saveError && saveError.message, 'error');

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
      <WModal
        visible={state.isOpen}
        onCancel={handleClose}
        title={getRecipeModalTitle(!!editableRecipe.id)}
        footer={null}
      >
        <Form
          form={form}
          labelAlign="left"
          name="dynamic_form_nest_item"
          className="max-width-50"
          onFinish={handleSave}
          autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <UploadImage onChange={onFileChange} preview={state.preview} />
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
          {getFoodStuffError
            && getFoodStuffError.message
            && <span className="error">{getFoodStuffError.message}</span>}
          {!!foodstuffData && <FoodBlock data={foodstuffData} form={form} />}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </WModal>
    </div>
  );
};
