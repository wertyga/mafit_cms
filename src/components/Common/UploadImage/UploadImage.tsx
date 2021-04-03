import React from 'react';
import { Upload, Image } from 'antd';
import { PlusOutlined, DeleteFilled } from '@ant-design/icons';

import { getBase64 } from 'utils/file';

import './styles.css';

type Props = {
	onChange: (file: File, preview: string) => void;
	preview?: string;
};

export const UploadImage: React.FC<Props> = ({ onChange, preview }) => {
  const handleChange = async ({ file }) => {
	  let { preview: filePreview } = file;
	  if (!file.url && !filePreview) {
		  filePreview = await getBase64(file.originFileObj);
	  }
	  onChange(file, filePreview);
  };

  const handleDeletePreview = () => {
	  onChange(null, '');
  };

  return (
    <div className="mb-4">
      {!preview
		    && (
					<Upload
					  listType="picture-card"
					  onChange={handleChange}
					>
				  <div>
				    <PlusOutlined />
				    <div>Upload</div>
				  </div>
					</Upload>
          )}
          {!!preview
            && (
          	  <div className="upload__preview">
							  <Image src={preview} />
							  <DeleteFilled
							    onClick={handleDeletePreview}
							    className="ml-4 icon-md upload__preview__icon"
							  />
							</div>
	      )}
    </div>
  );
};
