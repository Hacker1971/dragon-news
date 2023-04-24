import React from "react";
import { Button, Container} from "react-bootstrap";
import reactLogo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={reactLogo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM ,Do YYYY")}</p>
      </div>
      <div className="d-flex bg-gray p-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text...... I can be a React component, multiple React components, or
          just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
