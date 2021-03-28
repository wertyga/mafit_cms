import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Input, Form, Button,
} from 'antd';

type Props = {
	name: string;
  confirm: () => void;
};

export const SearchField: React.FC<Props> = ({ name, confirm }) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSearch = ({ search }) => {
    const { query } = router;
    if (query.search === search && query.by === name) return;
    router.replace(`${router.pathname}?search=${search}&by=${name}`);
    confirm();
  };

  const handleDelete = () => {
    router.replace(router.pathname);
    confirm();
  };

  useEffect(() => {
    form.setFieldsValue({ search: router.query.by === name ? router.query.search : '' });
  }, [router.query.search, router.query.by]);

  return (
    <Form
      onFinish={handleSearch}
      form={form}
    >
      <div className="flex pa-2">
        <Form.Item name="search" className="ma-0">
          <Input
            placeholder={`Filter by ${name}`}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">Search</Button>
        <Button type="primary" onClick={handleDelete}>Delete</Button>
      </div>
    </Form>
  );
};
