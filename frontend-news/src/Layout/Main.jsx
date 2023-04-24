import React from "react";
import Header from "../Page/Header";
import Footer from "../Page/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Rightnav from "../Page/Rightnav";
import LeftNav from "../Page/LeftNav";
import { Outlet } from "react-router-dom";
import NavigatorBar from "../shared/NavigatorBar";


const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigatorBar></NavigatorBar>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav> </Col>

          <Col lg={6}><Outlet></Outlet></Col>

          <Col lg={3}><Rightnav/></Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
