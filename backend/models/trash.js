const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trashSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    important: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("trash", trashSchema);
