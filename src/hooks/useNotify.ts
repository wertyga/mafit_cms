import { useEffect } from 'react';
import _noop from 'lodash/noop';
import { message } from 'antd';

type MessageTypes = 'error' | 'warn' | 'info' | 'success';
const useNotify = (notify: string, type: MessageTypes = 'info', callback: () => void = _noop) => {
  useEffect(() => {
	  if (!notify) return;
	  message[type](notify);
	  callback();
  }, [notify]);
};

export default useNotify;
