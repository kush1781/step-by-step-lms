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
router.post("/", async (req, res) => {
    const { title, body, teacherId, teacherName } = req.body;
    try {
        const announcement = await new Announcement({
            title, 
            body, 
            teacherId, 
            teacherName
        }).save();

        res.status(200).json({ status: true });
    }
    catch(e) {
        res.status(400).json({ errors: e });
    }    
});

// @route GET api/announcements
// @desc Get list of all announcements
// @access Private
router.get("/", async (req, res) => {
    try {
        const announcements = await Announcement.find();
    
        res.status(200).json(announcements);
    }
    catch(e) {
        res.status(400).json({ errors: e });
    }  
});

// @route GET api/posts/:announcementId
// @desc Get a announcement
// @access Private
router.get("/:announcementId", async (req, res) => {
});

module.exports = router;