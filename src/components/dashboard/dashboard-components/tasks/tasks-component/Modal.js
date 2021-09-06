import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { addTask } from "../../../../../redux/ducks/tasks";

export default function Modal({ userId, imp }) {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [important, setImportant] = useState(imp);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleImportant = (e) => {
    setImportant(e.target.checked);
  };

  const handleSubmit = () => {
    dispatch(addTask(task, userId, important));
    setTask("");
  };

  return (
    <Popup
      trigger={
        <div className="add__icon">
          <span className="toggle__add">Add Task</span>
          <AddCircleOutlineOutlinedIcon fontSize="small" />
        </div>
      }
      modal
      closeOnDocumentClick={false}
    >
      {(close) => (
        <form
          action="submit"
          className="task__add"
          onSubmit={() => {
            close();
          }}
        >
          <div className="add__header">Add a task to do ...</div>
          <div className="add__item">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              name="add"
              id="add"
              onChange={handleInput}
              value={task}
            />
          </div>
          <div className="add__item">
            <label htmlFor="important">Important</label>
            <input
              type="checkbox"
              name="important"
              id="important"
              onChange={handleImportant}
              checked={important}
            />
          </div>

          <div className="add__btn">
            <button
              type="submit"
              className="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              Add
            </button>
            <button
              type="submit"
              className="button"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </Popup>
  );
}
