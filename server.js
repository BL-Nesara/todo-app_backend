const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoute = require("./routes/todoRoute");

dotenv.config();
const app = express();
const port = process.env.PORT ?? 4500;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err.message ?? err));

app.use(todoRoute);

app.listen(port, () => {
  console.log(`server started running in ${port}`);
});
