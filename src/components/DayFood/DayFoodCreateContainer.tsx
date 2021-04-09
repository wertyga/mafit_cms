import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Col, Form, Input, Button, message, Tabs, Typography,
} from 'antd';
import { DayFoodCreate } from 'components/DayFood/DayFoodCreate/DayFoodCreate';
import { Loader } from 'components/Common/Loader/Loader';
import { FORM_SPAN, convertFormDataToRequest } from 'components/DayFood/helpers';
import useSelector from 'hooks/useSelector';
import { gfErrors } from 'goldfish/gfErrors';
import { setHumansAction } from 'redux/actions/human/humanActions';

import { DayFoodFormData } from 'types/dayFood';
import { useGetLightRecipesListLazyQuery, useSaveDayFoodMutation, useGetHumanTypesLazyQuery } from 'graphql/types';

const { Title } = Typography;

type Props = {
  editableDayFood?: Partial<DayFoodFormData>;
};
type StateType = {
  recipes: Record<string, string>,
  recipeOptions: { title: string, value: string }[],
  currentDayFood: DayFoodFormData;
};

export const DayFoodCreateContainer: React.FC<Props> = ({ editableDayFood = {} }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { humanStore: { humans } } = useSelector('humanStore');
  const [state, setState] = useState<StateType>({
    recipes: {},
    recipeOptions: [],
    currentDayFood: {} as DayFoodFormData,
  });

  const [getHumanTypes] = useGetHumanTypesLazyQuery({
    onCompleted: ({ getHumanTypes: response }) => {
      const { humans: humanTypes = [], totalCount: humansCount } = response || {};
      setHumansAction(humanTypes, humansCount);
    },
    onError: (e) => message.error(e.message),
  });

  const [getLightRecipeList] = useGetLightRecipesListLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ getLightRecipesList: response }) => {
      const { recipes = [] } = response || {};
      setState((prev) => {
        const recipesObj = {};
        const recipeOptions = [];
        recipes.forEach(({ id, title }) => {
          recipesObj[title] = id;
          recipeOptions.push({ title, value: title });
        });
        return {
          ...prev,
          recipes: recipesObj,
          recipeOptions,
        };
      });
    },
    onError: (e) => message.error(e.message),
  });
  const [saveDayFoodMutation, { loading }] = useSaveDayFoodMutation({
    onCompleted: () => {
      router.replace('/dayfood');
    },
    onError: (e) => message.error(e.message),
  });

  const handleSave = async (formData) => {
    const requestData = convertFormDataToRequest(formData, state.recipes);
    await saveDayFoodMutation({
      variables: {
        id: router.query.id as string,
        data: requestData,
      },
    });
  };

  useEffect(() => {
    getHumanTypes();
    getLightRecipeList();
  }, []);

  useEffect(() => {
    form.setFieldsValue(editableDayFood);
  }, [editableDayFood.title]);

  return (
    <div>
      <Loader isActive={loading} />
      {state.currentDayFood.title && <Title level={3}>{state.currentDayFood.title}</Title>}
      <Form name="training" onFinish={handleSave} form={form}>
        <Col span={24} className="mb-4">
          <Form.Item
            name="title"
            label="Title"
            labelAlign="left"
            labelCol={{ span: FORM_SPAN[0] }}
            wrapperCol={{ span: FORM_SPAN[1] }}
            rules={[{ required: true, message: gfErrors.emptyField }]}
					>
            <Input placeholder="Title..." />
          </Form.Item>
        </Col>

        <Tabs type="card">
          {humans.map((human) => (
            <Tabs.TabPane tab={human.category} key={human.id}>
              <DayFoodCreate
                form={form}
                human={human}
                recipeOptions={state.recipeOptions}
							/>
            </Tabs.TabPane>
          ))}
        </Tabs>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save day food
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
