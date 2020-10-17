const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const passport = require("passport");

const users = require("./routes/api/users");
const courses = require("./routes/api/courses");
=======
// const passport = require("passport");
const teachersRoute = require("./routes/users/teachers");
const studentsRoute = require("./routes/users/students");
const parentsRoute = require("./routes/users/parents");
const postsRoute = require("./routes/posts");
const announcementsRoute = require("./routes/announcements");
const resultsRoute = require("./routes/results");
>>>>>>> 3d0c8b688aa9233526215dd6653fac22f0930a0c

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);

// Routes
<<<<<<< HEAD
app.use("/api/users", users);
app.use("/api/courses", courses);

=======
app.use("/api/users/teacher", teachersRoute);
app.use("/api/users/student", studentsRoute);
app.use("/api/users/parent", parentsRoute);
app.use("/api/posts", postsRoute);
app.use("/api/announcements", announcementsRoute);
app.use("/api/results", resultsRoute);
  
>>>>>>> 3d0c8b688aa9233526215dd6653fac22f0930a0c
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));