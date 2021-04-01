import { Modal, ModalProps } from 'antd';
import React from 'react';
import { ModalTitle } from './ModalTitle';

import './styles.css';

type Props = ModalProps & {
	onCancel: () => void;
	title: string;
};

export const WModal: React.FC<Props> = ({
  onCancel, title, children, ...restProps
}) => (
  <Modal
    title={(
      <ModalTitle
        title={title}
        onClose={onCancel}
      />
      )}
    closeIcon={<></>}
    onCancel={onCancel}
    wrapClassName="w-modal"
    {...restProps}
		>
    {children}
  </Modal>
);
