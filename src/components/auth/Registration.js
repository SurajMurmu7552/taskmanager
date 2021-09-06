import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { registration } from "../../redux/ducks/users";

import "./Auth.css";

export default function Registration() {
  const isAuth = localStorage.getItem("auth");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmition = (e) => {
    e.preventDefault();
    if (password === confirm_password) {
      dispatch(registration(username, password));
      setUsername("");
      setPassword("");
      setConfirm_password("");
      history.push("/");
    } else {
      alert("both field of password should be same");
      setUsername("");
      setPassword("");
      setConfirm_password("");
    }
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form__container">
      <form action="submit" className="form" onSubmit={handleSubmition}>
        <div className="form__header">Registration</div>
        <input
          type="username"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="new-password"
          id="new-password"
          placeholder="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="confirm password"
          value={confirm_password}
          required
          onChange={(e) => setConfirm_password(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <div className="link">
        <Link to="/">login</Link>
      </div>
    </div>
  );
}
