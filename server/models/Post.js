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
  creterId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createrName: {
    type: String,
    required: true
  },
  createrType: {
    type: String,
    required: true
  },
  link: String,
  comments: CommentSchema,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("posts", PostSchema);