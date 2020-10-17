const mongoose = require("mongoose");
const CommentSchema = require("./Comment");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  creatorName: {
    type: String,
    required: true
  },
  creatorType: {
    type: String,
    required: true
  },
  link: String,
  comments: [ CommentSchema ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("posts", PostSchema);