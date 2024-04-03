import { Col, Row } from "antd";

const EmptyComponent = ({ label, Icon, height = '50vh' }) => (
  <Row
    justify="center"
    align="middle"
    style={{
      borderRadius: "20px",
      height,
      width: "100%",
    }}
  >
    <Col>
      {Icon && <Row justify="center">{Icon}</Row> } 
      <Row>
        <p
          style={{
            textAlign: "center",
            margin: "20px auto",
            color: "#929292",
            width: "100%",
          }}
        >
          {label}
        </p>
      </Row>
    </Col>
  </Row>
);

export default EmptyComponent;
