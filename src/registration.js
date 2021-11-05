import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Registration = ({ setAuth, setUserName }) => {
  //const Registration = ({ setAuth, setName }) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { username, password, email } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password, email };

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log("Submit step 1");
      const parseRes = await response.json();

      console.log(parseRes);
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
      setUserName(body.username);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div id="header">
        <h1>M'en fous</h1>
      </div>
      <div id="inscription_rectangle">
        <h2>Registration</h2>
        <form onSubmit={onSubmitForm}>
          <p id="inscription_email">Username</p>
          <input
            type="text"
            name="username"
            className="form-control my-3"
            value={username}
            onChange={(e) => onChange(e)}
          />
          <p id="inscription_email">Password</p>
          <input
            type="password"
            name="password"
            className="form-control my-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <p id="inscription_email">Email</p>
          <input
            type="email"
            name="email"
            className="form-control my-3"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <button className="inscription_connexion_button">Registration</button>
        </form>
      </div>
      <Link to="/login">Login</Link>
    </Fragment>
  );
};

export default Registration;
