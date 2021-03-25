import React, { useEffect } from 'react';
import { Loader } from 'components/Common/Loader/Loader';

import useSelector from 'hooks/useSelector';
import useNotify from 'hooks/useNotify';

import { useGetUserQuery } from 'graphql/generated/user';
import { saveUserAction } from 'redux/actions/user/userActions';

import { AuthForm } from 'components/AuthForm/AuthForm';
import { AppLayout } from './AppLayout';

export const App = ({ children }) => {
  const {
    userStore: { token: userToken },
    cookiesStore: { token: cookieToken },
  } = useSelector(['userStore', 'cookiesStore']);
  const {
    loading,
    error = {} as Error,
    data,
  } = useGetUserQuery({ variables: { token: cookieToken } });

  useEffect(() => {
    if (!data || !data.getUser) return;
    saveUserAction(data.getUser);
  }, [data]);

  useNotify(error.message, 'error');
  if (loading) return <Loader isActive />;
  return (
    userToken
      ? (
        <AppLayout>
          {children}
        </AppLayout>
      )
      : <AuthForm />
  );
};
