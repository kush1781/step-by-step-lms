const mongoose = require('mongoose')

const objectiveQuesSchema = new mongoose.Schema({
    quesType: {
        type: Number,
        required: true,
        max: 8,
        min: 1
    },
    question: {
        type: String,
        required: true
    },
    options: [String],
    answer: [String],
    score: Number
})

const subjectiveQuesSchema = new mongoose.Schema({
    quesType: {
        type: Number,
        required: true,
        max: 8,
        min: 1
    },
    question: {
        type: String,
        required: true
    },
    score: Number
})

const TestSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    objectiveQues: [objectiveQuesSchema],
    subjectiveQues: [subjectiveQuesSchema],
    startDateTime: {
        type: Date,
        required: true
    },
    endDateTime: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Test = mongoose.model('Test', TestSchema)

module.exports = Test;