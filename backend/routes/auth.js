const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const Users = require("../models/users");

const router = express.Router();

//registration

router.post("/registration", async (req, res) => {
  const { username, password } = req.body;

  const exist = await Users.findOne({ username });

  if (exist) {
    res.status(400).json({
      msg: "already exists",
    });
  }

  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(password, salt);

  const entry = {
    userId: uuidv4(),
    username,
    password: hashedPassword,
  };

  const user = await Users.create(entry);

  console.log(user);

  if (user) {
    res.status(200).json({
      msg: "user created",
    });
  } else {
    res.status(400).json({
      msg: "error",
    });
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  console.log(username);

  const user = await Users.findOne({ username });

  console.log(user);

  const compare = await bcrypt.compare(password, user.password);

  if (compare) {
    const data = {
      userId: user.userId,
      username: user.username,
    };
    res.status(200).json({
      data,
      msg: "success",
      auth: true,
    });
  } else {
    res.status(400).json({
      msg: "incorrect credentials ",
      auth: false,
    });
  }
});

module.exports = router;
