const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load User model
const Announcement = require("../models/Announcement");
// Load middleware
const checkAuth = require("../middlewares/authorization/checkAuth");

// @route POST api/announcements
// @desc Create a announcement
// @access Private
router.post("/", (req, res) => {
   
});

// @route GET api/announcements
// @desc Get list of all announcements
// @access Private
router.get("/", async (req, res) => {
    const users = await User.find();
    if(users) {
        res.json(users);
    }
});

// @route GET api/posts/:announcementId
// @desc Get a announcement
// @access Private
router.get("/:announcementId", async (req, res) => {
});

module.exports = router;