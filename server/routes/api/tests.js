const express = require('express');
const Test = require('../models/examQues');
const router = new express.Router();
const authFaculty = require('../middleware/authFaculty');
const authStudent = require('../middleware/authUser');

router.post('/new', authFaculty, async (req, res) => {
    try {
        const test = new Test({
            courseId: req.body.courseId,
            title: req.body.title,
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime,
            duration: req.body.duration,
            window: req.body.window
        })
        await test.save()
        res.send({
            test
        });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/addobj', authFaculty, async (req, res) => {
    try {
        const test = await Test.findById(req.body.testId);
        let ques;
        if (req.body.quesType <= 3) {
            ques = {
                quesType: req.body.quesType,
                question: req.body.text,
                options: req.body.options,
                answer: req.body.answer,
                score: req.body.score
            }
        }
        else if (req.body.quesType == 4) {
            ques = {
                quesType: req.body.quesType,
                question: req.body.text,
                answer: req.body.answer,
                score: req.body.score
            }
        }
        else if (req.body.quesType == 5) {
            ques = {
                quesType: req.body.quesType,
                question: req.body.text,
                answer: req.body.answer.toLowerCase(),
                score: req.body.score
            }
        }
        else if (req.body.quesType == 6) {
            ques = {
                quesType: req.body.quesType,
                question: req.body.text,
                answer: req.body.answer,
                score: req.body.score
            }
        }
        test.objectiveQues.push(ques);
        await test.save();
        res.send({ status: 'question added' });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tests/addsubj', authFaculty, async (req, res) => {
    try {
        const test = await Test.findById(req.body.testId);
        const ques = {
            quesType: req.body.quesType,
            question: req.body.text,
            score: req.body.score
        }
        test.subjectiveQues.push(ques);
        await test.save();
        res.send({ status: 'ok' });
    } catch (e) {
        res.status(400).send(e)
    }
})

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

router.post('/get', authStudent, async (req, res) => {
    try {
        const allTests = await Test.find({ courseId: req.body.courseId });
        let tests
        allTests.forEach(test => {
            tests.push({
                _id: test._id,
                title: test.title,
                startDateTime: test.startDateTime,
                endDateTime: test.endDateTime,
                duration: test.duration,
            })
        });
        res.send({ tests });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/attempt', authStudent, async (req, res) => {
    try {
        const test = await Test.findById(req.body.testId);
        test.objectiveQues = shuffle(test.objectiveQues);
        test.subjectiveQues = shuffle(test.subjectiveQues);
        res.status(200).send(test);
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router