const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/taskmanager";

const taskDb = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to database ${conn.connection.name} `);
  } catch (err) {
    console.log(err);
  }
};

module.exports = taskDb;
