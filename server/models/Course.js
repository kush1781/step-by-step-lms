const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const CommentSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: true
  },
  link: String
})

const PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: true
  },
  link: String,
  comments: [CommentSchema]
})

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  teacher: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  standard: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  material: [{
    title: {
      type: String,
      required: true
    },
    body: String,
    link: String
  }],
  tests: [{
    testId: mongoose.Schema.Types.ObjectId,
    title: String
  }],
  posts: [PostSchema]
});

module.exports = Course = mongoose.model("Courses", CourseSchema);