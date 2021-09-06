import React, { useState } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./dashboard-components/sidebar/Sidebar";
import Important from "./dashboard-components/tasks/Important";
import Today from "./dashboard-components/tasks/Today";
import Trash from "./dashboard-components/tasks/Trash";

import "./Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [status, setStatus] = useState("all");
  const handleNav = (e) => {
    const navElements = e.target.parentElement.children;
    const arrayNavElements = Array.from(navElements);

    arrayNavElements.forEach((ele) => {
      ele.classList.remove("nav__focus");
    });

    e.target.classList.add("nav__focus");

    setStatus(`${e.target.id}`);
  };

  return (
    <div className="dashboard">
      <Sidebar user={user} />
      <div className="tasks">
        <div className="task__nav">
          <ul className="task__nav__items">
            <li
              className="task__nav__item nav__focus"
              id="all"
              onClick={handleNav}
            >
              All
            </li>
            <li className="task__nav__item" id="pending" onClick={handleNav}>
              Pending
            </li>
            <li
              className="task__nav__item"
              id="in progress"
              onClick={handleNav}
            >
              In Progress
            </li>
            <li className="task__nav__item" id="completed" onClick={handleNav}>
              Completed
            </li>
          </ul>
        </div>
        <Route exact path="/dashboard">
          <Today status={status} user={user} />
        </Route>
        <Route exact path="/dashboard/important">
          <Important status={status} user={user} />
        </Route>
        <Route exact path="/dashboard/trash">
          <Trash status={status} user={user} />
        </Route>
      </div>
    </div>
  );
}
