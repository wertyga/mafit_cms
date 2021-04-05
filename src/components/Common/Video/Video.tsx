import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Modal, Button } from 'antd';

import './styles.css';

type Props = {
	src: string;
	className?: string | Record<string, boolean>;
};

export const Video: React.FC<Props> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!isOpen) {
	    videoRef.current.pause();
	    videoRef.current.currentTime = 0;
    } else {
	    videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <div className="video-component">
      <div role="presentation" className={classnames('video-component__preview', className)} onClick={toggleOpen}>
        <video>
          <source src={src} />
        </video>
      </div>
      <Modal
        visible={isOpen}
        onCancel={handleClose}
        closeIcon={<></>}
        footer={(
          <div className="flex">
            <Button type="primary" onClick={handleClose}>Ok</Button>
          </div>
        )}
        wrapClassName="video-modal"
        closable
      >
        <video controls ref={videoRef}>
          <source src={src} />
        </video>
      </Modal>
    </div>
  );
};
