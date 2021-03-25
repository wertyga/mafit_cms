import React, { useEffect } from 'react';
import {
  Form, Button, Input, Row, Col, Typography, message,
} from 'antd';
import { Loader } from 'components/Common/Loader/Loader';

import { saveUserAction, logoutUserAction } from 'redux/actions/user/userActions';
import useNotify from 'hooks/useNotify';
import { useAuthUserLazyQuery } from 'graphql/generated/user';

import { gfErrors } from 'goldfish/gfErrors';

import { FormType } from './types';
import './styles.css';

const { Title } = Typography;

export const AuthForm = () => {
  const [authUser, {
    loading, data = {}, error = {} as Error, called,
  }] = useAuthUserLazyQuery();

  const onSubmit = (values: FormType) => {
    authUser({ variables: values });
  };

  useEffect(() => {
	  if (!called || loading) return;
	  if (!data.authUser) {
      logoutUserAction();
		  message.error(gfErrors.noUser);
		  return;
	  }
    saveUserAction(data.authUser);
  }, [loading]);

  useNotify(error.message, 'error');

  return (
    <div>
      <Loader isActive={loading} />
      <Row justify="center">
        <Title>Mafit admin panel</Title>
      </Row>
      <Row justify="center" className="auth-form">
        <Col span={6}>
          <Form
            name="basic"
            onFinish={onSubmit}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: gfErrors.emptyField }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: gfErrors.emptyField }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
