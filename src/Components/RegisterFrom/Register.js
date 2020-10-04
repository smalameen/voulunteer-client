import React, { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";

import fakeData from "../../../src/MyData";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";



const Register = () => {
  const { id } = useParams();
  console.log(id);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   console.log(loggedInUser);

  const newFakeData3 = fakeData.slice(0, 11);
//   console.log(newFakeData3);

  const orgDetailsData = newFakeData3.find((tr) => tr.id == id);
//   console.log(orgDetailsData);

  const handleTheOrg = () => {
    const newOrg = {...loggedInUser, ...orgDetailsData}
    // console.log(newOrg);
    fetch(`http://localhost:3002/addOrgInfo`,{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(newOrg)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

  return (
    <div className="container mb-2  p-5" style={{backgroundColor:"#FFA822", borderRadius:"20px"}}>
      
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" defaultValue={loggedInUser.email} />
         
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" defaultValue={loggedInUser.name} />
        </Form.Group>
        <Form.Label>Date</Form.Label>
          <Form.Control type="text" defaultValue={new Date()} /> <br/>
          <Form.Label> Importance of Volunteering</Form.Label> <br/>
          <Form.Control  size="lg" type="text" defaultValue={orgDetailsData.description} /> <br/>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control  size="lg" type="text" defaultValue={orgDetailsData.orgName} />
        <br/> 
        
        <Link to="/showOrg"><Button onClick= { ()=> handleTheOrg() } variant="primary">
          Register
        </Button></Link>
      </Form>
    </div>
  );
};

export default Register;
