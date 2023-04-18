import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGofore, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import Qzone from "./Qzone";
import bg from '../assets/bg.png'

const Rightnav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGofore /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <GoMarkGithub /> Login with Github
      </Button>
      <div className="my-3">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
           
            <FaInstagram /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Rightnav;
