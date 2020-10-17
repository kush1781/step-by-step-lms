import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function QuestionForm(props) {
  const [quesType, setQuesType] = useState('Select');
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')

  const handleAddQuestion = () => {
    let options = [];
    if (option1)
      options.push(option1)
    if (option2)
      options.push(option2)
    if (option3)
      options.push(option3)
    if (option4)
      options.push(option4)
    let answer = [];
    if (answer1)
      answer.push(answer1)
    if (answer2)
      answer.push(answer2)
    if (answer3)
      answer.push(answer3)
    if (answer4)
      answer.push(answer4)
    const ques = {
      question,
      quesType
    }
    if (options.length > 0) {
      ques.options = options;
    }
    if (answer.length > 0) {
      ques.answer = answer;
    }
    setQuesType('Select');
    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setAnswer1('');
    setAnswer2('');
    setAnswer3('');
    setAnswer4('');
    props.handleAddQuestion(ques);
  }

  return (
    <div>
      <h2>Add Question</h2>
      <Form>
        <Form.Group>
          <Form.Label>Question Type</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {quesType}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => { setQuesType(1) }} >MCQ-I</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(2) }} >MCQ-II</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(3) }} >MCQ-III</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(4) }} >Integer Type</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(5) }} >Fill in the blank</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(6) }} >True/False</Dropdown.Item>
              <Dropdown.Item onSelect={() => { setQuesType(7) }} >Subjective</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control onChange={(e) => setQuestion(e.target.value)} as="textarea" placeholder="Enter Question" />
        </Form.Group>
        {quesType != 7 ? <p>Answer</p> : <></>}
        {
          quesType <= 3 ?
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input onChange={(e) => { setAnswer1(e.target.value) }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                <Form.Control style={{ marginBottom: '1%' }} onChange={(e) => { setOption1(e.target.value) }} type="text" value={option1} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input onChange={(e) => { setAnswer2(e.target.value) }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                <Form.Control style={{ marginBottom: '1%' }} onChange={(e) => { setOption2(e.target.value) }} type="text" value={option2} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input onChange={(e) => { setAnswer3(e.target.value) }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                <Form.Control style={{ marginBottom: '1%' }} onChange={(e) => { setOption3(e.target.value) }} type="text" value={option3} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <input onChange={(e) => { setAnswer4(e.target.value) }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                <Form.Control style={{ marginBottom: '1%' }} onChange={(e) => { setOption4(e.target.value) }} type="text" value={option4} />
              </div>
            </div> :
            quesType <= 5 ?
              <Form.Group>
                <Form.Control style={{ marginBottom: '1%' }} type='text' onChange={(e) => setAnswer1(e.target.value)} />
              </Form.Group> : quesType == 6 ?
                <div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input onChange={(e) => { setAnswer1('True') }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                    <p>True</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input onChange={(e) => { setAnswer1('False') }} style={{ marginRight: '1%' }} name={props.index} type="checkbox" />
                    <p>False</p>
                  </div>
                </div> : <></>
        }
      </Form>
      <Button onClick={handleAddQuestion} variant="dark" type="submit">Add</Button>
    </div>
  )
}