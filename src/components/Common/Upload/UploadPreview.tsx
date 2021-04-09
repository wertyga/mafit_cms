import React from 'react';
import { Image } from 'antd';
import { Video } from 'components/Common/Video/Video';
import { DeleteFilled } from '@ant-design/icons';

type Props = {
  type: 'image' | 'video';
  handleDelete: () => void;
  preview: string;
  file: boolean;
};

export const UploadPreview: React.FC<Props> = ({ type, handleDelete, preview, file }) => (
  <div className="upload__preview">
    {type === 'image' && <Image src={preview} />}
    {type === 'video' && preview && !file && <Video src={preview} />}
    {type === 'video' && preview && file && <span>{preview}</span>}
    <DeleteFilled
      onClick={handleDelete}
      className="ml-4 icon-md upload__preview__icon"
    />
  </div>
);
