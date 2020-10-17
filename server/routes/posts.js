const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load Post model
const Post = require("../models/Post");
// Load middleware
const checkAuth = require("../middlewares/authorization/checkAuth");

// @route POST api/posts
// @desc Create a post
// @access Private
router.post("/", (req, res) => {
   
});

// @route GET api/posts
// @desc Get list of all posts
// @access Private
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        if(posts) {
            res.json(post);
        }
    }
    catch(e) {
        res.status(400).json({ errors: "Server Error" });
    }
});

// @route GET api/posts/:postId
// @desc Get a post
// @access Private
router.get("/:postId", async (req, res) => {
});

module.exports = router;