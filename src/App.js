import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./homepage";
import Login from "./login";
import Registration from "./registration";
import Base from "./Base";

function App() {

    const [direction, setDirection] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [Name, setName] = useState("");

    const setAuth = (Boolean) => {
        setIsAuthenticated(Boolean);
    };

    const setDir = (int) => {
        setDirection(int);
    }

    const setUserName = (string) => {
        setName(string);
    };

    async function isAuth() {
        try {
            const response = await fetch("http://localhost:3001/auth/verified ", {
                method: "GET",
                headers: { token: localStorage.token },
              });
            const parseRes = await response.json();
            console.log("parse res :" + parseRes);
            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (error) {
            console.log(error.message)             
        }
    } 

    useEffect (() => {
        isAuth()
    })

    return (
        <Fragment>
            <Router>
            <div className="container">
                <Switch>
                <Route exact path="/" render={props => direction === 0 ? <Base {...props} setDir={setDir}/> : (<Redirect to="/login"/>) } />
                <Route exact path="/login" render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} setUserName={setUserName} />) : (<Redirect to="/home"/>) } />
                <Route exact path="/register" render={props => !isAuthenticated ? (<Registration {...props} setAuth={setAuth} setUserName={setUserName} />) : (<Redirect to="/login"/> ) } />
                <Route exact path="/home" render={props => isAuthenticated ? (<Homepage {...props} setAuth={setAuth} Name={Name} />) : (<Redirect to="/login"/>) } />
                {/* <Route export path="/chat" render={props => (<Chat {...props} Name={Name}/>)}/> */}
                </Switch>
            </div>
            </Router>
        </Fragment>
    );
}

export default App;
