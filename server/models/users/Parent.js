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
  children: {
    type: [ Schema.Types.ObjectId ],
    ref: "Student"
  },
  posts: {
    type: [ Schema.Types.ObjectId ],
    ref: "Post"
  }
});

module.exports = mongoose.model("parents", StudentSchema);