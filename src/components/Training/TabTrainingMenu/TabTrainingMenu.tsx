import React from 'react';
import { constructUrl } from 'w-querify';
import { useRouter } from 'next/router';
import { Radio } from 'antd';
import useSelector from 'hooks/useSelector';

import './styles.css';

export const TabTrainingMenu = () => {
  const { query: { human, ...restQuery }, push, pathname } = useRouter();
  const { humanStore: { humans } } = useSelector('humanStore');

  const onChange = (id: string) => () => {
    const redirectUrl = constructUrl(pathname, {
      ...restQuery,
      human: human === id ? '' : id,
    });
    push(redirectUrl);
  };

  return (
    <Radio.Group value={human} className="tab-training mb-4">
      {humans.map(({ id, category }) => (
        <Radio.Button value={id} key={id} onClick={onChange(id)} className="flex nowrap align-center">{category}</Radio.Button>
      ))}
    </Radio.Group>
  );
};
