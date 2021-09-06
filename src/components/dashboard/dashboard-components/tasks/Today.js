import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../../../redux/ducks/tasks";

import Modal from "./tasks-component/Modal";
import Task from "./tasks-component/Task";

import "./Tasks.css";

export default function Today({ status, user }) {
  const dispatch = useDispatch();

  const userId = user.userId;
  useEffect(() => {
    dispatch(getTask(userId));
  }, [dispatch, userId]);

  const todaysTask = useSelector((state) => state.tasks);

  const handleDisplay = (status) => {
    if (status === "all") {
      return todaysTask.map((task) => (
        <Task task={task} key={task._id} userId={userId} />
      ));
    } else {
      return todaysTask
        .filter((task) => task.status === status)
        .map((task) => <Task task={task} key={task._id} userId={userId} />);
    }
  };

  return (
    <>
      <div className="task__container">
        <div className="task">
          <div className="task__header">
            <div className="task__title">Today's Tasks</div>
            <Modal userId={userId} imp={false} />
          </div>
          <ul className="task__items">{handleDisplay(status)}</ul>
        </div>
      </div>
    </>
  );
}
