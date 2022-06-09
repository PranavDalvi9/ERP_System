const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/ERP-System?retryWrites=true&w=majority");
};
