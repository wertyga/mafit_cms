import React from 'react';
import { Image } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

type Props = {
	type: 'image' | 'video';
	handleDelete: () => void;
	preview: string;
};

export const UploadPreview: React.FC<Props> = ({ type, handleDelete, preview }) => (
  <div className="upload__preview">
    {type === 'image' && <Image src={preview} />}
    {type === 'video' && <span>{preview}</span>}
    <DeleteFilled
      onClick={handleDelete}
      className="ml-4 icon-md upload__preview__icon"
    />
  </div>
);
