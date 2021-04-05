import React from 'react';
import { Upload as AntdUpload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getBase64 } from 'utils/file';
import { UploadPreview } from './UploadPreview';

import './styles.css';

type Props = {
	onChange: (file: File, preview: string) => void;
	preview?: string;
	type?: 'image' | 'video';
};

export const Upload: React.FC<Props> = ({ onChange, preview, type = 'image' }) => {
  const handleChange = async ({ file }) => {
	  let { preview: filePreview } = file;
	  if (type === 'video') {
		  filePreview = file.name;
	  } else if (!file.url && !filePreview) {
		  filePreview = await getBase64(file.originFileObj);
	  }
	  onChange(file, filePreview);
  };

  const handleDeletePreview = () => {
	  onChange(null, '');
  };

  return (
    <div className="mb-4">
      {!preview &&
					<AntdUpload
					  listType="picture-card"
					  onChange={handleChange}
					>
				  <div>
				    <PlusOutlined />
				    <div>Upload</div>
				  </div>
					</AntdUpload>
      }
      {!!preview && (
	      <UploadPreview
	        preview={preview}
	        type={type}
	        handleDelete={handleDeletePreview}
	      />
      )}
    </div>
  );
};
