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
  console.log(user);
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
    res.send({ material: course.material });
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
    console.log(course)
    course.posts.unshift(newPost);
    await course.save();
    res.send(course.posts[0]);
  }
  catch (e) {
    console.log(e);
    res.send(e);
  }
})

router.post('/newcomment', async (req, res) => {
  try {
    const course = await Course.findById(req.body.courseId);
    let i;
    course.posts.map((post, index) => {
      if (post._id == req.body.postId) {
        i = index;
        post.comments.push(req.body.comment);
      }
    })
    await course.save()
    console.log(course)
    const l = course.posts[i].comments.length;
    res.send(course.posts[i].comments[l - 1]);
  }
  catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router;