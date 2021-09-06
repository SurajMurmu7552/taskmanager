import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestoreIcon from "@material-ui/icons/Restore";
import { getTrash, restoreTrash } from "../../../../redux/ducks/trash";

import "./Tasks.css";

export default function Trash({ status, user }) {
  const dispatch = useDispatch();

  const userId = user.userId;

  useEffect(() => {
    dispatch(getTrash(userId));
  }, [dispatch, userId]);

  const trash = useSelector((state) => state.trash);

  const handleMore = (e) => {
    const id = e.target.parentElement.parentElement.id;

    dispatch(restoreTrash(id));
    dispatch(getTrash(userId));
    console.log(id);
  };

  const style = {
    background: "#C6C6C6",
    color: "#fff",
  };

  const handleTask = (task) => {
    return (
      <li className="task__item" key={task._id} id={task._id}>
        <div className="task__value">
          <label htmlFor="task__value">{task.task}</label>
        </div>
        <div className="task__btns">
          <span className="status__btn" style={style}>
            {task.status}
          </span>
          <div className="del__btn" onClick={handleMore}>
            <RestoreIcon fontSize="small" />
          </div>
        </div>
      </li>
    );
  };

  const handleDisplay = (status) => {
    if (status === "all") {
      return trash.map((task) => handleTask(task));
    } else {
      return trash
        .filter((task) => task.status === status)
        .map((task) => handleTask(task));
    }
  };

  return (
    <>
      <div className="task__container">
        <div className="task">
          <div className="task__header">
            <div className="task__title">Trash</div>
          </div>
          <ul className="task__items">{handleDisplay(status)}</ul>
        </div>
      </div>
    </>
  );
}
