import React from "react";
import { Col, Row } from "antd";

const BodyAverageResult = () => {
  return (
    <div>
      <Row justify="space-around">
        <div style={{ width: "50%" }}>
          <h2
            style={{
              borderBottom: "4px solid #16A07F",
              fontWeight: "bold",
            }}
          >
            {" "}
            TIEMPO PROMEDIO DE RESOLUCION DE TICKET{" "}
          </h2>

          <p> Servicio al cliente </p>
          <p style={{ color: "#16A07F" }}> Plomeria </p>
        </div>
        <Col
          style={{
            border: "5px solid #16A07F",
            borderRadius: "100%",
            padding: "0.2rem 2.4rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#16A07F",
              fontWeight: "bold",
              fontSize: "4rem",
              margin: 0,
            }}
          >
            05
          </h2>
          <p
            style={{
              fontWeight: "bold",
              color: "#16A07F",
              textAlign: "center",
              fontSize: "1.5rem",
              marginTop: "-1rem",
            }}
          >
            HORAS
          </p>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "3.5rem",
          fontSize: "1rem",
          color: "#16A07F",
          fontWeight: "unset",
        }}
        justify="space-around"
      >
        <div style={{ borderLeft: "4px solid #16A07F", paddingLeft: "1rem" }}>
          <p> 35 </p>
          <p> Tickts Resueltos </p>
        </div>
        <div style={{ borderLeft: "4px solid #16A07F", paddingLeft: "1rem" }}>
          <p> 05 </p>
          <p> Tickts En Proceso </p>
        </div>
        <div style={{ borderLeft: "4px solid #16A07F", paddingLeft: "1rem" }}>
          <p> 00 </p>
          <p> Tickts Sin Resolver </p>
        </div>
      </Row>
    </div>
  );
};

export default BodyAverageResult;
