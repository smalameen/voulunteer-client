import React from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <Navbar bg="success" expand="lg">
          <Navbar.Brand href="/home">Volunteers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="home"><Nav.Link>Home</Nav.Link></Link>
              <Nav.Link href="#link">Donation</Nav.Link>
              <Nav.Link href="#link">Events</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop:"20px" }}>
          I GROW BY HELPING PEOPLE IN NEED
        </h2>
        
        {/* <Button style={{ textAlign: "center" }} color="primary">
          Search
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
