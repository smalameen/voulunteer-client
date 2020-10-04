import React from "react";
import { Button, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Group 1329.png";

const styles = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { logo } + ")"
}

const Header = () => {
  return (
    <div>
      <div style={{backgroundColor:"#E3E3E3"}}>
      
        <Navbar  expand="lg">
        <Link to="/home"><img style={{height:"30px", width:"120px"}} src={logo} alt=""/></Link>
          
         <div  className ="d-flex ml-3 justify-content-between">
         <Navbar.Brand href="/home">Volunteers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="home"><Nav.Link>Home</Nav.Link></Link>
              <Nav.Link href="#link">Donation</Nav.Link>
              <Nav.Link href="#link">Events</Nav.Link>
              <Button color="primary">Register</Button>
            </Nav>
          </Navbar.Collapse>
         </div>
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
