import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firbase.conig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import fakeData from "../../MyData";
import Register from "../RegisterFrom/Register";
import { Card } from "react-bootstrap";
import image from "../../Components/Header/Group 1329.png";
const style = {
  width: "300px",
  height: "40px",
  borderRadius: "20px",
  borderStyle: "none",
  backgroundColor: "#ffd57e",
  //   marginLeft: "100px",
  //   marginTop: "100px",
};
// const containers = {
//   height: "300px",
//   width: "500px",
//   backgroundColor: "#343090",
//   borderRadius: "50px",
//   marginTop: "100px",
// };

const LogIn = (id) => {
  const newFakeData3 = fakeData.slice(1, 10);
  console.log(newFakeData3);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: `/register` } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container" style={{ align: 'center'}}>

      <div className="container mt-3">
      <img style={{ height: "30px", width: "120px" }} src={image} alt="" />
      </div>
      <div className="mt-3">
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <button style={style} onClick={handleGoogleSignIn}>
            Google Sign in{" "}
          </button>
        </Card.Body>
      </Card>
      </div>
      
    </div>
  );
};

export default LogIn;
