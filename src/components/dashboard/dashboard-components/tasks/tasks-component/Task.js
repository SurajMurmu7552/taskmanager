import React from "react";
import { useDispatch } from "react-redux";
import { Delete, ArrowLeft } from "@material-ui/icons";

import { delTask, getTask, updateTask } from "../../../../../redux/ducks/tasks";

export default function Task({ task, userId }) {
  const dispatch = useDispatch();

  const handleMore = (e) => {
    const id = e.target.parentElement.parentElement.id;
    console.log(id);
    dispatch(delTask(id));
  };

  const handleToggle = (e) => {
    const id = e.target.nextSibling;
    id.classList.remove("toggle");
  };

  const handleStatus = (e) => {
    const toggle = e.target.parentElement;

    const id = e.target.parentElement.parentElement.parentElement.id;
    const status = e.target.id;
    toggle.classList.add("toggle");

    dispatch(updateTask(id, status));

    dispatch(getTask(userId));
  };

  const handleImportant = (e) => {
    const checked = e.target.checked;
    const id = e.target.parentElement.parentElement.id;

    dispatch(updateTask(id, checked));

    dispatch(getTask(userId));
  };

  const handleStyle = (status) => {
    if (status === "pending") {
      return {
        background: "rgba(255, 0, 0, 0.6)",
        color: "#333",
      };
    }
    if (status === "in progress") {
      return {
        background: "rgba(255, 255, 0, 0.6)",
        color: "#333",
      };
    }
    if (status === "completed") {
      return {
        background: "rgba(0,255, 0, 0.6)",
        color: "#333",
      };
    }
  };
  return (
    <li className="task__item" id={task._id}>
      <div className="task__value">
        <input
          type="checkbox"
          name="task__value"
          id="task__value"
          checked={task.important}
          onChange={handleImportant}
        />
        <label htmlFor="task__value">{task.task}</label>
      </div>
      <div className="task__btns">
        <span
          className="status__btn"
          style={handleStyle(task.status)}
          onClick={handleToggle}
        >
          {task.status}
        </span>
        <ul className="status__more toggle">
          <li
            className="status__btn more__btn"
            id="pending"
            onClick={handleStatus}
          >
            pending
          </li>
          /
          <li
            className="status__btn more__btn"
            id="in progress"
            onClick={handleStatus}
          >
            in progress
          </li>
          /
          <li
            className="status__btn more__btn"
            id="completed"
            onClick={handleStatus}
          >
            completed
          </li>
          <ArrowLeft fontSize="small" />
        </ul>
        <div className="del__btn" onClick={handleMore}>
          <Delete fontSize="small" />
        </div>
      </div>
    </li>
  );
}
