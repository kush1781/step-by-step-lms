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
<<<<<<< HEAD:server/models/User.js
  userType: {
    type: String,
    required: true,
    enum: ["student", "teacher"]
  },
  courses: [{
    name: String
  }]
=======
  children: {
    type: [ Schema.Types.ObjectId ],
    ref: "Student"
  },
  posts: {
    type: [ Schema.Types.ObjectId ],
    ref: "Post"
  }
>>>>>>> 3d0c8b688aa9233526215dd6653fac22f0930a0c:server/models/users/Parent.js
});

module.exports = mongoose.model("parents", StudentSchema);