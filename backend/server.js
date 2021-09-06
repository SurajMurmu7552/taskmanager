const express = require("express");
const cors = require("cors");

//db connection
const taskDb = require("./config/db.js");

//routes
const tasks = require("./routes/api");
const auth = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//code to write
taskDb();

app.use("/api", tasks);

app.use("/auth", auth);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
