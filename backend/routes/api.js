const express = require("express");
const { v4: uuidv4 } = require("uuid");

const Tasks = require("../models/task");
const Trash = require("../models/trash");

const router = express.Router();

router.post("/tasks", async (req, res) => {
  const { userId } = req.body;

  const tasks = await Tasks.find({ userId });

  if (tasks) {
    res.status(200).json({
      data: tasks,
      msg: "success",
    });
  }
});

router.post("/add", async (req, res) => {
  const { userId, task, status, important } = req.body;

  const entry = {
    _id: uuidv4(),
    userId,
    task,
    status,
    important,
  };

  const tasks = await Tasks.create(entry);

  if (task) {
    res.status(200).json({
      data: tasks,
      msg: "task created",
    });
  } else {
    res.status(400).json({
      msg: "error ",
    });
  }
});
router.post("/delete", async (req, res) => {
  const { _id } = req.body;
  const task = await Tasks.findOneAndDelete({ _id });

  if (task) {
    const entry = {
      _id: task._id,
      userId: task.userId,
      task: task.task,
      status: task.status,
      important: task.important,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };

    const trash = await Trash.create(entry);
    res.status(200).json({
      data: task,
      msg: "task deleted",
    });
  } else {
    res.status(400).json({
      msg: "error",
    });
  }
});

router.post("/update", async (req, res) => {
  const { _id, request } = req.body;

  if (typeof request == "boolean") {
    const tasks = await Tasks.updateOne({ _id }, { important: request });
    if (tasks) {
      res.status(200).json({
        data: tasks,
        msg: "updated the status",
      });
    } else {
      res.status(400).json({
        msg: "error",
      });
    }
  }
  if (typeof request == "string") {
    const tasks = await Tasks.updateOne({ _id }, { status: request });
    if (tasks) {
      res.status(200).json({
        data: tasks,
        msg: "updated the status",
      });
    } else {
      res.status(400).json({
        msg: "error",
      });
    }
  }
});

router.post("/trash", async (req, res) => {
  const { userId } = req.body;
  const trash = await Trash.find({ userId });

  if (trash) {
    res.status(200).json({
      data: trash,
      msg: "success",
    });
  }
});

router.post("/restore", async (req, res) => {
  const { _id } = req.body;
  const trash = await Trash.findOneAndDelete({ _id });

  if (trash) {
    const entry = {
      _id: trash._id,
      userId: trash.userId,
      task: trash.task,
      status: trash.status,
      important: trash.important,
      createdAt: trash.createdAt,
      updatedAt: trash.updatedAt,
    };

    const task = await Tasks.create(entry);
    res.status(200).json({
      data: trash,
      msg: "task deleted",
    });
  } else {
    res.status(400).json({
      msg: "error",
    });
  }
});

module.exports = router;
