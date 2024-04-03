import { Badge, Row } from "antd";
import React from "react";

const BadgeTabs = ({ activeTab, statusTicket, badgeCount }) => {
  if (statusTicket.name === "Resuelto") badgeCount = 0;
  return (
    <Badge
      style={{
        background: "#16A07F",
        transform: "translate(90%, -70%)",
      }}
      count={activeTab === statusTicket.name ? 0 : badgeCount}
    >
      <Row
        style={{
          paddingInline: "0.3rem",
          color: activeTab === statusTicket.name && "#16A07F",
          borderLeft: activeTab === statusTicket.name && "3px solid #16A07F",
        }}
      >
        {statusTicket?.name?.toUpperCase()}
      </Row>
    </Badge>
  );
};

export default BadgeTabs;
