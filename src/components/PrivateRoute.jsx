import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ componenet: Componenet, ...rest }) {
  const auth = useSelector((state) => state.auth);
  const isAuth = localStorage.getItem("auth");
  console.log(auth);
  console.log(isAuth);

  if (!isAuth) {
    if (auth === true) {
      return <div>loading ...</div>;
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Componenet {...props} /> : <Redirect to="/" />
      }
    />
  );
}
