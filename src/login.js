import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = ({ setAuth, setUserName }) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { username, password } = input;

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password };

      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
      setUserName(body.username);
      console.log("username = " + body.username);
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
        <h2>Connexion</h2>
        <form onSubmit={onSubmitForm}>
          <p id="inscription_email">Username</p>
          <input
            type="text"
            name="username"
            className="form-control my-3"
            value={username}
            onChange={(e) => onChange(e)}
          />
          <p id="inscription_mdp">Password</p>
          <input
            type="password"
            name="password"
            className="form-control my-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <button class="inscription_connexion_button">Login</button>
        </form>
      </div>
      <Link to="/register">Register</Link>
    </Fragment>
  );
};

export default Login;

//<button onClick={() => setAuth(true)}>Login</button>
