import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  let user = useSelector((state) => state.users);
  console.log(user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />
          <PrivateRoute path="/dashboard" componenet={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
