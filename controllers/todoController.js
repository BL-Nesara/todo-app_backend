const todoModel = require("../model/todoSchema");

module.exports.getTodo = async (req, res) => {
  try {
    const getList = await todoModel.find();
    return res.status(200).json({
      statusCode: 200,
      message: "fetched data successfully",
      data: getList,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "server error" + error });
  }
};

module.exports.saveTodo = async (req, res) => {
  try {
    const saveText = req.body.text;
    const newTodo = new todoModel({ text: saveText });
    const savedTodo = await newTodo.save();
    return res.status(201).json({
      statusCode: 201,
      message: "data added successfully",
      data: savedTodo,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "server error" + error });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const filterId = req.body._id;
    const updateText = req.body.text;
    const completeTodo = req.body.completeTodo;
    const updateTodo = await todoModel.findOneAndUpdate(
      { _id: filterId },
      { text: updateText },
      { new: true }
    );
    return res.status(200).json({
      statusCode: 200,
      message: "data updated successfully",
      data: updateTodo,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "server error" + error });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const deleteId = req.params.id;
    await todoModel.findByIdAndDelete({ _id: deleteId });
    return res
      .status(200)
      .json({ statusCode: 200, message: "deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "server error" + error });
  }
};

module.exports.searchTodo = async (req, res) => {
  try {
    const searchText = req.body.searchText;
    const searchResult = await todoModel.find({
      text: { $regex: `.*${searchText}.*` },
    });
    if (!searchResult) {
      return res.status(400).json({ message: "Todo Not Found" });
    }
    return res.status(200).json({
      statusCode: 200,
      message: "filtered data",
      data: searchResult,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusCode: 500, message: "server error" + error });
  }
};
