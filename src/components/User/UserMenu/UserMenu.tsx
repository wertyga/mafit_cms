import React from 'react';
import { Typography } from 'antd';
import { logoutUserAction } from 'redux/actions/user/userActions';
import useSelector from 'hooks/useSelector';

const { Text } = Typography;

export const UserMenu = () => {
  const { userStore: { username } } = useSelector('userStore');

  const handleLogout = () => {
    logoutUserAction();
  };

  return (
    <div className="flex-column align-center justify-center">
      <Text className="light mb-2">{username}</Text>
      <span role="presentation" onClick={handleLogout}>
        <Text underline className="light pointer">Logout</Text>
      </span>
    </div>
  );
};
