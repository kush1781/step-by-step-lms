const express = require('express');
const Test = require('../models/examQues');
const router = new express.Router();
const authStudent = require('../middleware/authUser');
const authFaculty = require('../middleware/authFaculty');
const Submission = require('../models/submission');

router.post('/submission/new', authStudent, async (req, res) => {
    try { 
        const test = await Test.findById(req.body.testId);
        const submission = new Submission({
            testId: req.body.testId,
            courseId: req.body.courseId,
            studentId: req.user._id,
            objectiveQues: req.body.objectiveQues,
            subjectiveQues: req.body.subjectiveQues,
            objectiveScore: 0,
            subjectiveScore: -1,
            score: 0
        });
        await submission.save();
        let quesMap = new Map();
        
        test.objectiveQues.forEach(ques => {
            quesMap.set(ques._id.toString(), {
                ques
            })
        });

        
        submission.objectiveQues.forEach((ques) => {
            if (ques.quesType == 1 || ques.quesType == 4 || ques.quesType == 6) {
                const question = quesMap.get(ques._id.toString()).ques;
                if (question.answer[0] == ques.answer[0]) {
                    ques.status = 1;
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
                console.log(ques);
            }
            else if (ques.quesType == 2) {
                const question = quesMap.get(ques._id.toString()).ques;
                question.answer.forEach((answer, index) => {
                    if (answer == ques.answer[index]) {
                        ques.status = 1;
                        submission.objectiveScore = submission.objectiveScore + (question.score/ques.answer.length);
                    }
                })
                console.log(ques);
            }
            else if (ques.quesType == 3) {
                const question = quesMap.get(ques._id.toString()).ques;
                let allCorrrect = true
                question.answer.forEach((answer, index) => {
                    if (answer != ques.answer[index]) {
                        allCorrrect = false;
                    }
                })
                if (allCorrrect) {
                    ques.status = 1;
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
            }
            else if (ques.quesType == 5) {
                const question = quesMap.get(ques._id.toString()).ques;
                if (question.answer == ques.answer) {
                    ques.status = 2;
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
            }
            //add subjective question evaluation
        })
        submission.score = submission.objectiveScore;
        await submission.save();
        res.send({ submission });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/submission/get/faculty', authFaculty, async (req, res) => {
    try {
        const submissions = await Submission.find( {studentId: req.body.studentId, courseId: req.body.courseId} );
        let results = [];
        const promises = submissions.map(async (sub) => {
            let result = {
                objectiveQues: [],
                score: sub.score
            };
            results.push(result)
            const test = await Test.findById(sub.testId);
            return test;
        })
        console.log(results)
        const tests = await Promise.all(promises);
        tests.forEach((test, index) => {
            let quesMap = new Map();
            test.objectiveQues.forEach(ques => {
                quesMap.set(ques._id.toString(), ques)
            });
            console.log(results[index]);
            test.objectiveQues.forEach(ques => {
                results[index].objectiveQues.push({
                    ques: quesMap.get(ques._id.toString()),
                    status: ques.status
                });
            })
        })
        res.send({ results });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/submission/get/student', authStudent, async (req, res) => {
    try {
        const submissions = await Submission.find( {studentId: req.user._id, courseId: req.body.courseId} );
        let results = [];
        const promises = submissions.map(async (sub) => {
            let result = {
                objectiveQues: [],
                score: sub.score
            };
            results.push(result)
            const test = await Test.findById(sub.testId);
            return test;
        })
        console.log(results)
        const tests = await Promise.all(promises);
        tests.forEach((test, index) => {
            let quesMap = new Map();
            test.objectiveQues.forEach(ques => {
                quesMap.set(ques._id.toString(), ques)
            });
            console.log(results[index]);
            test.objectiveQues.forEach(ques => {
                results[index].objectiveQues.push({
                    ques: quesMap.get(ques._id.toString()),
                    status: ques.status
                });
            })
        })
        res.send({ results });
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router