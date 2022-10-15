const route = require("express").Router();
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
  searchTodo,
} = require("../controllers/todoController");

route.get("/", getTodo);
route.post("/save", saveTodo);
route.post("/update", updateTodo);
route.delete("/delete/:id", deleteTodo);
route.post("/search", searchTodo);

module.exports = route;
