import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Rightnav from "../Page/Rightnav";

const NewsLayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <Rightnav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
