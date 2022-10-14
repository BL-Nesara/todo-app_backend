const route = require("express").Router();
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

route.get("/", getTodo);
route.post("/save", saveTodo);
route.post("/update", updateTodo);
route.delete("/delete/:id", deleteTodo);

module.exports = route;
