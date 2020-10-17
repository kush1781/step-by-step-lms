const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CommentSchema;