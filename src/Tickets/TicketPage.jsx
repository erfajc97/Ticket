import { Button, Col, Row, Spin } from "antd";
import StatusTickets from "./components/StatusTickets";
import { PlusCircleOutlined } from "@ant-design/icons";
import useTickets from "./hooks/useTickets";
import { CustomNavigate } from './../UI/CustomComponentsAntD/CustomNavigate';
import useOpenCloseModal from './../hooks/useOpenCloseModal';

const TicketPage = () => {
  const { loading, roleType } = useTickets();
  const { isOpenModal, handleOpenCloseModal } = useOpenCloseModal();

  if (loading) return <Spin size="large" />;

  return (
    <div className="section-wrapper">      
      <CustomNavigate title={'TICKETS'}>
        {roleType === "admin" && (
          <Row>
            <Button
              className="btn-standard-green"
              shape="round"
              type="ghost"
              style={{ width: "248px" }}
              onClick={handleOpenCloseModal}
            >
              <Row justify="center" align="middle" gutter={12}>
                <Col style={{paddingTop:'0.5rem'}}>
                  <PlusCircleOutlined style={{ fontSize: "20px"}} />
                </Col>

                <Col>
                  <span>CREAR TAREA</span>
                </Col>
              </Row>
            </Button>
          </Row>
        )}
      </CustomNavigate>
      <StatusTickets />
      {/* <AverageTimeModal isOpenModal={isOpenModal} onClose={onCancel} /> */}
    </div>
  );
};

export default TicketPage;
