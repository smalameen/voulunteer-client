import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import fakeData from "../../../src/MyData";
import Register from "../RegisterFrom/Register";

const Home = () => {
  const newFakeData3 = fakeData.slice(0, 3);
  // console.log(newFakeData3);
  const newFakeData6 = fakeData.slice(4, 7);

  const newFakeData11 = fakeData.slice(8, 11);


  const history = useHistory();

  const goingToLogin = (id) => {
    const url = `register/${id}`;
    history.push(url);
  };


 

  return (
    
    <div className="container">
     
        <div className="d-flex justify-content-center">
          {newFakeData3.map((organization) => (
            <Card
              style={{ width: "18rem", className: "d-flex", margin: "1rem" }}
            >
              <Card.Img variant="top" src={organization.img} />
              <Card.Body>
                <Card.Title>{organization.orgName}</Card.Title>
                {/* <Card.Text>{organization.text}</Card.Text> */}
              </Card.Body>
              <Button
                onClick={() => goingToLogin(organization.id)}
                variant="primary"
              >
                Go to Login
              </Button>
            </Card>
          ))}
        </div>
      

      {/* <Link to="/login"> */}
        <div className="d-flex justify-content-center">
          {newFakeData6.map((organization) => (
            <Card
              style={{ width: "18rem", className: "d-flex", margin: "1rem" }}
            >
              <Card.Img variant="top" src={organization.img} />
              <Card.Body>
                <Card.Title classnames="bg-dark">
                  {organization.orgName}
                </Card.Title>
              </Card.Body>
              <Button
                onClick={() => goingToLogin(organization.id)}
                variant="primary"
              >
                Go to Login
              </Button>
            </Card>
            
          ))}
        </div>
        
      {/* </Link> */}
      <div className="d-flex justify-content-center">
          {newFakeData11.map((organization) => (
            <Card
              style={{ width: "18rem", className: "d-flex", margin: "1rem" }}
            >
              <Card.Img variant="top" src={organization.img} />
              <Card.Body>
                <Card.Title classnames="bg-dark">
                  {organization.orgName}
                </Card.Title>
              </Card.Body>
              <Button
                onClick={() => goingToLogin(organization.id)}
                variant="primary"
              >
                Go to Login
              </Button>
            </Card>
            
          ))}
        </div>
    </div>
    
  );
};

export default Home;
