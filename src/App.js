import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import { createContext } from 'react';
import { useState } from 'react';
import Register from './Components/RegisterFrom/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/register/:id">
           <Register/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
);


}

export default App;
