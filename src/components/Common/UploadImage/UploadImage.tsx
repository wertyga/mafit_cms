import React, { useState, useEffect } from 'react';
import {
  Upload, Modal, Image, FormInstance,
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import { getBase64 } from 'utils/file';

type Props = {
	onChange: (file: File) => void;
	preview?: string;
};

export const UploadImage: React.FC<Props> = ({ onChange, preview }) => {
  const [state, setState] = useState({
    preview: '',
  });
  const handleChange = async ({ file }) => {
	  let { preview: filePreview } = file;
	  if (!file.url && !filePreview) {
		  filePreview = await getBase64(file.originFileObj);
	  }
	  setState((prev) => ({ ...prev, preview: filePreview }));
	  onChange(file);
  };

  const handleDeletePreview = () => {
	  setState((prev) => ({ ...prev, preview: '' }));
	  onChange(null);
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, preview }));
  }, [preview]);

  return (
    <div className="mb-4">
      {!state.preview
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
      {!!state.preview
	      && (
					<div className="flex align-center">
					  <Image src={state.preview} className="mr-4" />
					  <DeleteOutlined onClick={handleDeletePreview} />
					</div>
	      )}
    </div>
  );
};
