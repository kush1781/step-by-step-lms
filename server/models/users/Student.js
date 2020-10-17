const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  courses: {
    type: [ Schema.Types.ObjectId ],
    ref: "Course"
  },
  posts: {
    type: [ Schema.Types.ObjectId ],
    ref: "Post"
  },
  results: {
    type: [ Schema.Types.ObjectId ],
    ref: "Result"
  }
});

module.exports = mongoose.model("students", StudentSchema);