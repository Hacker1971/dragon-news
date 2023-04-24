import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Provider";
import { FaUserCircle } from "react-icons/fa";

const NavigatorBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user.DisplayName);
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/">Home</Link>
                <Link className="mx-3" to="/about">
                  About
                </Link>
                <Link>Creear</Link>
                <Link>{user.DisplayName}</Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Button variant="secondary">
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigatorBar;
