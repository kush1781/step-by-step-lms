import React, { useState } from 'react';
import Header from './Header';
import '../style/style.css';
import '../style/bootstrap.css'
import '../style/bootstrap.min.css'
import NavigationBar from './NavigationBar';
import MCQ1 from './MCQ1';
import MCQ2 from './MCQ2';
import MCQ3 from './MCQ3';
import IntegerType from './IntegerType';
import FillBlank from './FillBlank';
import Assert from './Assert';
import Subjective from './Subjective';
import Summary from './Summary';
import { useSelector } from 'react-redux';
const Test = (props) => {
    const [user] = useState(useSelector(state => state.user));
    const [course] = useState('General Knowledge')
    const test = {
        _id: "5f77112efcf39d5ea859782e",
        courseId: "5f76ef2d6216a9313017e25a",
        title: "Minor 1",
        startDateTime: 36751624351,
        endDateTime: 37751624351,
        duration: 1800,
        window: 600,
        objectiveQues: [{
            _id: "5f7715d17ff1d25a9016c2ff",
            question: 'Who is the Prime minister of India?',
            options: ["Modi", "Tolia", "Sharma", "Gupta"],
            quesType: 1,
            score: 1
        }, {
            _id: "5f7715f67ff1d25a9016c300",
            question: 'Who is the Prime minister of India?',
            options: ["Modi", "Tolia", "Sharma", "Gupta"],
            quesType: 2,
            score: 2
        }, {
            _id: "5f7715f67ff1d25a9016c301",
            question: 'What is your age?',
            quesType: 4,
            score: 1
        }, {
            _id: "5f7715f67ff1d25a9016c302",
            question: 'Delhi is the ____ of India.',
            quesType: 5,
            score: 1
        }, {
            _id: "5f7715f67ff1d25a9016c303",
            question: 'Delhi is the capital of India.',
            quesType: 6,
            score: 1
        }],
        subjectiveQues: [{
            _id: "5f7715f67ff1d25a9016c303",
            question: 'Delhi is the capital of India.',
            quesType: 7,
            score: 1
        }, {
            _id: "5f7715f67ff1d25a9016c301",
            question: 'Who is the prime minister of India?',
            quesType: 7,
            score: 1
        }]
    }
    const [currQues, setCurrQues] = useState(1);
    const [totalQues] = useState(test.objectiveQues.length + test.subjectiveQues.length);

    const getQuestions = (questions = []) => {
        const questionIds = [];
        questions.map((question) => {
            const ques = {
                _id: question._id,
                quesType: question.quesType,
                score: question.score
            };
            questionIds.push(ques);
        })
        return questionIds;
    }

    const onNext = () => {
        if (currQues <= test.objectiveQues.length) {
            setCurrQues(currQues + 1);
        }
        else {
            if (currQues < test.subjectiveQues.length + test.objectiveQues.length) {
                setCurrQues(currQues + 1);
            }
        }
    }

    const [submission, setSubmission] = useState({
        testId: test._id,
        courseId: test.courseId,
        objectiveQues: getQuestions(test.objectiveQues),
        subjectiveQues: getQuestions(test.subjectiveQues)
    });

    const setAnswer = (index, answer = "", quesType, newLink = "") => {
        if (quesType == 7) {
            let questions = [...submission.subjectiveQues]
            if (newLink)
                questions[index - props.test.objectiveQues.length].link = newLink;
            else
                questions[index - props.test.objectiveQues.length].answer = answer;
            console.log(questions[index - props.test.objectiveQues.length])
            setSubmission({
                ...submission,
                subjectiveQues: questions
            })

        }
        else if (quesType <= 6) {
            let questions = [...submission.objectiveQues]
            questions[index].answer = answer;
            console.log(questions[index])
            setSubmission({
                ...submission,
                objectiveQues: questions
            })
        }
    }

    const getAttempted = () => {
        let attempted = 0;
        submission.objectiveQues.map((ques) => {
            if (ques.answer) {
                attempted++;
            }
        })
        submission.subjectiveQues.map((ques) => {
            if (ques.answer || ques.answerDoc) {
                attempted++;
            }
        })
        return attempted;
    }

    const displayQues = () => {
        switch (currQues <= test.objectiveQues.length ? test.objectiveQues[currQues - 1].quesType : test.subjectiveQues[currQues - test.objectiveQues.length - 1].quesType) {
            case 1:
                return (<MCQ1
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 2:
                return (<MCQ2 key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 3:
                return (<MCQ3
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext} />)
            case 4:
                return (<IntegerType
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 5:
                return (<FillBlank
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 6:
                return (<Assert key={currQues - 1}
                    index={currQues - 1}
                    ques={test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 7:
                return (<Subjective key={currQues - 1}
                    index={currQues - 1}
                    ques={test.subjectiveQues[currQues - test.objectiveQues.length - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
        }
    }

    const onTimeOver = () => {
        //submit and quit
    }

    const warning = (timeLeft) => {
        alert(`${timeLeft} minutes left`);
    }

    return (
        <div>
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <NavigationBar user={user} test={test} selectQues={setCurrQues} />
                <div className="page-content">
                    <Header title={test.title} course={course} />
                    {
                        displayQues()
                    }
                    <Summary attempted={getAttempted()} total={totalQues} initialMinute={5} initialSeconds={30} warning={warning} onTimeOver={onTimeOver} />
                </div>
            </div>
        </div>
    )
}

export default Test;