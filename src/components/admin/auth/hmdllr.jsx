/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Heimdallr = () => {
  const [vis, setVis] = useState(false);
  const history = useHistory();
  const {
    register, handleSubmit, // watch, formState,
  } = useForm();

  useEffect(() => {
    setTimeout(() => setVis(true), 500);
  }, []);

  const handleCancel = () => {
    setVis(false);
    history.push('/');
  };

  const onSubmit = () => { };

  return (
    <Modal
      title="Editors, Contributors, General Narcissist's Sign In"
      visible={vis}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel (woop woop woop woop)
        </Button>,
      ]}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input id="username" defaultValue="authors" name="username" {...register('username')} />
      </form>
    </Modal>
  );
};
export default Heimdallr;
