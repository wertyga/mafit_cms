import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useTestUploadMutation } from 'graphql/generated/recipe';
import { createUploadLink } from 'apollo-upload-client';

import { getBase64 } from 'utils/file';

type Props = {
	onChange: (file: File) => void;
};

export const UploadImage: React.FC<Props> = ({ onChange }) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
	  fileList: [],
  });

  const handleCancel = () => setState((prev) => ({ ...prev, previewVisible: false }));
  const handleChange = ({ file, fileList }) => {
  	setState((prev) => ({ ...prev, fileList }));
	  onChange(file);
  };
  const handlePreview = async (file) => {
  	let { preview } = file;
	  if (!file.url && !preview) {
		  preview = await getBase64(file.originFileObj);
	  }

	  setState((prev) => ({
		  ...prev,
		  previewImage: file.url || preview,
		  previewVisible: true,
		  previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
	  }));
  };

  const [tt] = useTestUploadMutation();
  const testUpload = async () => {
  	try {
  	  const { data } = await tt({ variables: { file: state.fileList[0] } });
  	  console.log(data);
  	} catch (e) {
  	  console.log(e);
  	}
  };

  const imageTestChange = async ({ target: { files } }) => {
	  try {
	  	const { request } = createUploadLink(files[0]);
		  const { data } = await tt({ variables: { file: request } });
		  // console.log(data);
	  } catch (e) {
		  console.log(e);
	  }
  };

  const isCanUpload = state.fileList && state.fileList.length < 1;
  return (
    <div className="mb-4">
      <Upload
        listType="picture-card"
        onPreview={handlePreview}
        onChange={handleChange}
        customRequest={testUpload}
      >
        {isCanUpload && (
        <div>
          <PlusOutlined />
          <div>Upload</div>
        </div>
        )}
      </Upload>
      <input type="file" onChange={imageTestChange} />
      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="preview" className="fluid" src={state.previewImage} />
      </Modal>
    </div>
  );
};
