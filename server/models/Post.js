const mongoose = require("mongoose");
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
  createrType: {
    type: String,
    required: true
  },
  creterId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  link: String,
  comments: [ String ]
});

module.exports = mongoose.model("posts", PostSchema);