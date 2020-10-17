const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.JWT_SECRET 
};