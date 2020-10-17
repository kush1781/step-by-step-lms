const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const passport = require("passport");
const teachersRoute = require("./routes/users/teachers");
const studentsRoute = require("./routes/users/students");
const parentsRoute = require("./routes/users/parents");
const coursesRoute = require("./routes/courses");
const postsRoute = require("./routes/posts");
const announcementsRoute = require("./routes/announcements");
const resultsRoute = require("./routes/quiz/results");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cors());
// To disable cors() errors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-type, Accept, Authorization"
      );
  if(req.method==="OPTIONS"){
      res.header("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
      return  res.status(200).json({});
  }
  next();    
});

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
app.use("/api/courses", coursesRoute);
app.use("/api/posts", postsRoute);
app.use("/api/announcements", announcementsRoute);
app.use("/api/results", resultsRoute);
  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));