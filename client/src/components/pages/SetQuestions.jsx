import React, { useState } from 'react';
import MainNavbar from '../MainNavbar';
import QuestionForm from '../paper/QuestionForm';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

export default function SetQuestions(props) {
  const [objectiveQues, setObjectiveQues] = useState(null);
  const [subjectiveQues, setSubjectiveQues] = useState(null);
  const [currQues, setCurrQues] = useState(1);
  const [title, setTitle] = useState('');
  const [questionModalVisible, setQuestionModalVisible] = useState(false);
  const [startDateTime, setStartDateTime] = useState(new Date())
  const [endDateTime, setEndDateTime] = useState(new Date())

  const handleAddQuestion = (ques) => {
    if (ques.quesType <= 6) {
      const questions = objectiveQues ? objectiveQues : [];
      questions.push(ques);
      setObjectiveQues(questions);
    }
    else {
      const questions = subjectiveQues ? subjectiveQues : [];
      questions.push(ques);
      setSubjectiveQues(questions);
    }
    setQuestionModalVisible(false);
  }

  const handleCreateTest = () => {
  }

  return (
    <div>
      <MainNavbar history={props.history} />
      <div className="container">
        <h1>Create New Test</h1>
        <Form>
          <Form.Group>
            <Form.Label>Test Title</Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Title" />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ marginRight: '1%' }} >Start Time</Form.Label>
            <DateTimePicker
              onChange={setStartDateTime}
              value={startDateTime}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ marginRight: '1%' }} >End Time</Form.Label>
            <DateTimePicker
              onChange={setEndDateTime}
              value={endDateTime}
            />
          </Form.Group>
        </Form>
        <Button onClick={() => setQuestionModalVisible(true)}>Add Question</Button>
        <Modal show={questionModalVisible} onHide={() => setQuestionModalVisible(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Question {currQues}.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QuestionForm handleAddQuestion={handleAddQuestion} />
          </Modal.Body>
        </Modal>
        <div>
          <h2>Objective</h2>
          {
            objectiveQues ? objectiveQues.map((ques, index) => {
              return (
                <div key={index} className="Queue-box" style={{ marginTop: '0' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <p>Q.{index + 1}</p>
                      <p>{ques.question}</p>
                    </div>
                    <p>{ques.quesType <= 3 ? 'MCQ' : ques.quesType == 4 ? 'Integer' : ques.quesType == 5 ? 'Fill in the Blanks' : 'True/False'}</p>
                  </div>
                </div>
              )
            }) : <></>
          }
          <h2>Subjective</h2>
          {
            subjectiveQues ? subjectiveQues.map((ques, index) => {
              return (
                <div key={index} className="Queue-box" style={{ marginTop: '0' }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>Q.{index + 1}</p>
                    <p>{ques.question}</p>
                  </div>
                </div>
              )
            }) : <></>
          }
        </div>
        <Button variant='dark' onClick={handleCreateTest}>Create</Button>
      </div>
    </div>
  )
}