import { useState } from "react";
import { Form } from "antd";

const useOpenCloseModal = () => {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenCloseModal = () => setIsOpenModal((state) => !state);

  const onReset = () => form.resetFields();

  const onCancel = () => {
    onReset();
    handleOpenCloseModal();
  };

  const onFinish = (isSuccessfull) => {
    if (isSuccessfull) {
      onReset();
      handleOpenCloseModal();
      return;
    }
    return null;
  };

  return {
    form,
    isOpenModal,
    onReset,
    onCancel,
    onFinish,
    handleOpenCloseModal,
  };
};

export default useOpenCloseModal;
