import { Form } from "antd";
import { useState } from "react";
import BodyAverageResult from "./BodyAverageResult";
import TimeModal from "./TimeModal";
import CustomModal from "../../../UI/CustomComponentsAntD/CustomModal";

const AverageTimeModal = ({ onClose, isOpenModal }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [form] = Form.useForm();

  const onFinish = () => {
    setLoading(true);
    setIsSuccessful(true);
    form.resetFields();
    setLoading(false);
  };

  const onCancel = () => {
    onClose();
    setIsSuccessful(false);
  };

  let body = <TimeModal onFinish={onFinish} loading={loading} />;
  if (isSuccessful) body = <BodyAverageResult />;

  return (
    <CustomModal onCancel={onCancel} isOpenModal={isOpenModal}>
      {body}
    </CustomModal>
  );
};

export default AverageTimeModal;
