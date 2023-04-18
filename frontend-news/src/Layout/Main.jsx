import React from "react";
import Header from "../Page/Header";
import Footer from "../Page/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Rightnav from "../Page/Rightnav";
import LeftNav from "../Page/LeftNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav> </Col>

          <Col lg={6}>middle side</Col>

          <Col lg={3}><Rightnav/></Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
