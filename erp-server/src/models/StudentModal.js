const mongoose = require("mongoose");

const StudentInfoSchema = new mongoose.Schema(
  {
    name : { type: String, require: true },
      department : { type: String, require: true },
      academic : { type: String, require: true },
      phone : { type: String, require: true },
      fees : { type: String, require: true },
      role : { type: String, require: true },
      email :{ type: String, require: true },
      roll : { type: String, require: true },
      term : { type: String, require: true },
      password : { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const StudentData = mongoose.model("student-Info", StudentInfoSchema);
module.exports = StudentData;