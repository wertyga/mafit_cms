import React, { useEffect } from 'react';
import { Loader } from 'components/Common/Loader/Loader';

import useSelector from 'hooks/useSelector';
import useConstructor from 'hooks/useConstructor';
import useNotify from 'hooks/useNotify';

import { useGetUserLazyQuery } from 'graphql/types';
import { saveUserAction } from 'redux/actions/user/userActions';

import { AuthForm } from 'components/AuthForm/AuthForm';
import { AppLayout } from './AppLayout';

export const App = ({ children }) => {
  const {
    userStore: { token: userToken },
    cookiesStore: { token: cookieToken },
  } = useSelector(['userStore', 'cookiesStore']);
  const [getUser, {
    loading,
    error = {} as Error,
    data,
  }] = useGetUserLazyQuery();

  useEffect(() => {
    if (!data || !data.getUser) return;
    saveUserAction(data.getUser);
  }, [data]);

  useConstructor(() => {
    if (!cookieToken) return;
    getUser({ variables: { token: cookieToken } });
  });
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
