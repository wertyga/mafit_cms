import { useEffect } from 'react';
import { message } from 'antd';

type MessageTypes = 'error' | 'warn' | 'info' | 'success';
const useNotify = (notify: string, type: MessageTypes = 'info') => {
  useEffect(() => {
	  if (!notify) return;
	  message[type](notify);
  }, [notify]);
};

export default useNotify;
