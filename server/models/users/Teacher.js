const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TeacherSchema = new Schema({
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
  announcements: {
    type: [ Schema.Types.ObjectId ],
    ref: "Announcement"
  }
});

module.exports = mongoose.model("teachers", TeacherSchema);