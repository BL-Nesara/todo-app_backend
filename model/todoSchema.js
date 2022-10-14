const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
  },
  {
    collection: "todos",
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoSchema);
