import React, { useState, useEffect } from 'react';
import {
  Input, Form, Col, message,
} from 'antd';
import { Upload } from 'components/Common/Upload/Upload';
import { TableModal } from 'components/Common/Table/TableModal/TableModal';
import { setFoodStuffsAction } from 'redux/actions/foodstuff/foodstuffActions';
import { gfRecipe } from 'goldfish/gfRecipe';
import { gfErrors } from 'goldfish/gfErrors';
import {
  useUploadRecipeMutation, Recipe, useGetFoodStuffsQuery,
} from 'graphql/types';

import useSelector from 'hooks/useSelector';
import { DescriptionBlock } from './DescriptionBlock/DescriptionBlock';
import { FoodBlock } from './FoodBlock/FoodBlock';

import { collectEditableData, collectRecipeFormData } from './helpers';

type Props = {
  editableRecipe?: Partial<Recipe>;
  onSuccess: (data: Recipe, totalCount: number) => void;
  onClose: () => void;
};

export const RecipeModal: React.FC<Props> = ({ onSuccess, editableRecipe, onClose }) => {
  const [form] = Form.useForm();
  const { foodstuffStore } = useSelector('foodstuffStore');
  const [state, setState] = useState({
    image: null,
    preview: '',
    initialFoods: null,
  });
  const [addRecipe, { loading }] = useUploadRecipeMutation({
    onCompleted: ({ uploadRecipe }) => {
      const { recipe = {}, totalCount = 0 } = uploadRecipe || {};
      setState((prev) => ({ ...prev, image: null, preview: '' }));
      onSuccess(recipe as Recipe, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });
  useGetFoodStuffsQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getFoodStuffs }) => {
      const { foodstuffs = [], totalCount = 0 } = getFoodStuffs || {};
      setFoodStuffsAction(foodstuffs, totalCount);
    },
    onError: (e: Error) => message.error(e.message),
  });

  const handleSave = async (recipeData) => {
    try {
      const requestData = collectRecipeFormData(recipeData, foodstuffStore.foodstuffs);
      const payload = {
        ...requestData,
        id: editableRecipe.id,
        image: state.image || state.preview,
      };

      await addRecipe({ variables: payload });
      return {};
    } catch (e) {
      return { error: e.message };
    }
  };

  const onFileChange = (image: File, preview?: string) => {
    setState((prev) => ({ ...prev, image, preview }));
  };

  const handleCloseModal = () => {
    setState((prev) => ({ ...prev, image: null, preview: null, initialFoods: null }));
    onClose();
  };

  useEffect(() => {
    if (!editableRecipe.id) return;
    const formData = collectEditableData(editableRecipe);
    form.setFieldsValue(formData);
    setState((prev) => ({
      ...prev,
      preview: editableRecipe.image,
      initialFoods: formData.foods,
    }));
  }, [editableRecipe.id]);

  return (
    <TableModal
      modalTitle="Add/Edit recipe"
      form={form}
      formName="recipes"
      onFinish={handleSave}
      submitButtonTitle="Save recipe"
      loading={loading}
      onClose={handleCloseModal}
      openTrigger={!!editableRecipe.id}
    >
      <Upload onChange={onFileChange} preview={state.preview} isFile={!!state.image} />
      {gfRecipe.recipeFields.map(({ name }) => {
        const title = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        return (
          <Col span={22} key={name}>
            <Form.Item
              name={name}
              label={title}
              labelAlign="left"
              rules={[{ required: true, message: gfErrors.emptyField }]}
            >
              <Input placeholder={`${title}...`} />
            </Form.Item>
          </Col>
        );
      })}
      <DescriptionBlock />
      {!!foodstuffStore.foodstuffs
        && (
        <FoodBlock
          form={form}
          initialFoods={state.initialFoods}
        />
        )}
    </TableModal>
  );
};
