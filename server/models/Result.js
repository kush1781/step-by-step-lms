const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResultSchema = new Schema({
});

module.exports = mongoose.model("results", ResultSchema);