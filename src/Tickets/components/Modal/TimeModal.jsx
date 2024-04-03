import { Form, Button, Select, Row } from "antd";
const TimeModal = ({ onFinish, loading }) => {
  const { Item } = Form;
  const { Option } = Select;
  const [form] = Form.useForm();
  const options = [
    {
      value: 1,
      label: "Jack",
    },
    {
      value: 2,
      label: "Lucy",
    },
    {
      value: 3,
      disabled: true,
      label: "Disabled",
    },
    {
      value: 4,
      label: "yiminghe",
    },
  ];

  return (
    <div>
      <Row justify="center">
        <h3> TIEMPO PROMEDIO </h3>
      </Row>

      <Form
        onFinish={onFinish}
        disabled={loading}
        layout="vertical"
        form={form}
        name="formulario"
      >
        <Item label="Categoria" name="category1">
          <Select options={options}></Select>
        </Item>
        <Item label="Categoria" name="category2">
          <Select>
            <Option value={1}></Option>
          </Select>
        </Item>
        <Row justify="center">
          <Item style={{ marginTop: "2rem" }}>
            <Button
              htmlType="submit"
              shape="round"
              style={{
                backgroundColor: "#16A07F",
                padding: "0 4rem",
                color: "#fff",
              }}
            >
              {" "}
              Aceptar{" "}
            </Button>
          </Item>
        </Row>
      </Form>
    </div>
  );
};

export default TimeModal;
