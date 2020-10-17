const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnouncementSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Teacher"
  },
  teacherName: {
    type: String,
    required: true
  },
  link: String
});

module.exports = mongoose.model("announcements", AnnouncementSchema);