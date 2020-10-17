const mongoose = require('mongoose');

const objectiveQuesSchema = new mongoose.Schema({
    quesType: Number,
    answer: [String],
    status: {
        type: Number,
        default: 0,
    },
    score: Number
});

const subjectiveQuesSchema = new mongoose.Schema({
    quesType: Number,
    answer: String,
    link: String,
    status: {
        type: Number,
        default: 0,
    },
    score: Number
});

const SubmissionSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    objectiveQues: [objectiveQuesSchema],
    subjectiveQues: [subjectiveQuesSchema],
    objectiveScore: {
        type: Number,
        default: 0
    },
    subjectiveScore: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 0
    }
});

const Submission = mongoose.model('Submission', SubmissionSchema)

module.exports = Submission;