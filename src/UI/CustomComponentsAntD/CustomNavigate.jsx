import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Tooltip, Button } from "antd";
import useRedirectTo from "../../hooks/useRedirectTo";

export const CustomNavigate = ({ className, title,justify='space-between', secondTitle, condition = false, showReturnButton = true, children, redirectTo, customRedirectTo = false, customCondition }) => {
  const { handleRedirectTo } = useRedirectTo();

  return (
    <Row justify={justify} className={`navigation-row ${className ? className : ''}`}>
      <Row>
        {
          showReturnButton &&
          <Tooltip title="Atrás">
            <Button
              style={{
                marginRight: "20px",
                backgroundColor: "#10B48C",
                borderRadius: "50px",
              }}
              icon={<ArrowLeftOutlined style={{ color: "white" }} size={32} />}
              onClick={() => !customRedirectTo ? handleRedirectTo(redirectTo ? redirectTo : -1) : customCondition(false)}
            />
          </Tooltip>
        }
        <h1 style={{display:'flex', flexDirection:'column' }}>
          {
            condition ? secondTitle : title
          }
        </h1>
      </Row>
      {
        children
      }
    </Row>
  );
};