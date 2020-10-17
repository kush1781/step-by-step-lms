const express = require("express");
const router = express.Router();
// Load input validation
const User = require("../models/users/Teacher");
const Student = require("../models/users/Student");
const Course = require("../models/Course");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/addcourse", async (req, res) => {
  // Form validation
  console.log('called')
  const newCourse = new Course({
    name: req.body.name,
    standard: req.body.standard,
    section: req.body.section,
    teacher: req.body.teacher,
    material: [],
    tests: [],
    posts: []
  })
  await newCourse.save();
  const user = await User.findById(req.body.teacher._id);
  user.courses.push({
    _id: newCourse._id,
    name: `${newCourse.name}_${newCourse.standard}_${newCourse.section}`
  });
  await user.save()
  res.send(newCourse);
});

router.post('/teacher', async (req, res) => {
  console.log(req.body);
  const user = await User.findById(req.body._id);
  // console.log(user);
  const promises = user.courses.map(async (course) => {
    const myCourse = await Course.findById(course._id);
    return myCourse;
  })
  const courses = await Promise.all(promises);
  console.log(courses);
  res.send(courses);
})

router.post('/student', async (req, res) => {

  const user = await Student.findById(req.body._id);
  // console.log(user);
  const courses = await Course.find({ standard: user.standard, section: user.section });
  console.log(courses);
  res.send(courses);
})

router.post('/newmaterial', async (req, res) => {
  try {
    const course = await Course.findById(req.body._id);
    const newMaterial = req.body.material;
    course.material.push(newMaterial);
    await course.save();
    console.log(course)
    res.send({ status: 'ok' });
  }
  catch (e) {
    res.send(e);
  }
})

router.post('/newpost', async (req, res) => {
  try {
    const course = await Course.findById(req.body._id);
    const newPost = {
      ...req.body.post,
      comments: []
    }
    course.posts.unshift(newPost);
    await course.save();
    console.log(course)
    res.send({ status: 'ok' });
  }
  catch (e) {
    res.send(e);
  }
})

router.post('/newcomment', async (req, res) => {
  try {
    const course = await Course.findById(req.body.course._id);
    course.posts.map((post) => {
      if (post._id == req.body.post._id) {
        post.comments.push(req.body.comment);
      }
    })
    await course.save()
    console.log(course)
    res.send({ status: 'ok' });
  }
  catch (e) {
    res.status(400).send(e)
  }
})

//student get courses

// router.post('/student', async (req, res) => {
//   const user = await User.findById(req.body._id);
//   // console.log(user);
//   const promises = user.courses.map(async (course) => {
//     const myCourse = await Course.findById(course._id);
//     return myCourse;
//   })
//   const courses = await Promise.all(promises);
//   res.send(courses);
// })

module.exports = router;