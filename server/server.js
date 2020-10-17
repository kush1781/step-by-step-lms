const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");
const teachersRoute = require("./routes/users/teachers");
const studentsRoute = require("./routes/users/students");
const parentsRoute = require("./routes/users/parents");
const postsRoute = require("./routes/posts");
const announcementsRoute = require("./routes/announcements");
const resultsRoute = require("./routes/results");

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
app.use("/api/users/teacher", teachersRoute);
app.use("/api/users/student", studentsRoute);
app.use("/api/users/parent", parentsRoute);
app.use("/api/posts", postsRoute);
app.use("/api/announcements", announcementsRoute);
app.use("/api/results", resultsRoute);
  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));