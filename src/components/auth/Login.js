import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import { requestLogin } from "../../redux/ducks/auth";
import { login } from "../../redux/ducks/users";

import "./Auth.css";

export default function Login() {
  const isAuth = localStorage.getItem("auth");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmition = (e) => {
    e.preventDefault();
    dispatch(requestLogin());
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
    history.push("/dashboard");
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form__container">
      <form action="submit" className="form" onSubmit={handleSubmition}>
        <div className="form__header">Login</div>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="current-password"
          id="current-password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <div className="link">
        <Link to="/registration">registration</Link>
      </div>
    </div>
  );
}
