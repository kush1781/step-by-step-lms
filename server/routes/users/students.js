const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/users/Student");
// Load middleware
const checkAuth = require("../../middlewares/authorization/checkAuth");
const Student = require("../../models/users/Student");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    console.log(req.body);
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                standard: req.body.standard,
                section: req.body.section
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => {
                            const payload = {
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    userType: user.userType
                                }
                            };
                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                { expiresIn: 31556926 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        user,
                                        token: "Bearer " + token
                                    });
                                }
                            );
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user._id,
                    name: user.name
                };
                Student.findById(payload.id).then((user) => {
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { expiresIn: 31556926 },
                        (err, token) => {
                            res.json({
                                user,
                                token: "Bearer " + token
                            });
                        }
                    );
                })// Sign token
            }
            else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

// @route GET api/users/teacher
// @desc Get list of all teachers
// @access Private
router.get("/", checkAuth, async (req, res) => {
    const users = await User.find();
    if (users) {
        res.json(users);
    }
});

module.exports = router;