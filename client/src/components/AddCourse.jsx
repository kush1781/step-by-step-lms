import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function AddCourse(props) {
  const [name, setName] = useState('');
  const [standard, setStandard] = useState('Standard');
  const [section, setSection] = useState('Section');
  console.log(props.user);
  const handleAddCourse = async () => {
    const body = JSON.stringify({
      name,
      standard,
      section,
      teacher: {
        _id: props.user._id,
        name: props.user.name
      }
    });
    props.handleAddCourse(body);
  }

  return (
    <Form className="container" style={{ marginBottom: '1%' }}>
      <Form.Group>
        <Form.Label>Course Name</Form.Label>
        <Form.Control value={name} onChange={((e) => { setName(e.target.value) })} type="text" placeholder="Course Name" autoComplete="none" />
      </Form.Group>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {standard}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => { setStandard('Prep') }} >Prep</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('1st') }} >1st</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('2nd') }} >2nd</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('3rd') }} >3rd</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('4th') }} >4th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('5th') }} >5th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('6th') }} >6th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('7th') }} >7th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('8th') }} >8th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('9th') }} >9th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('10th') }} >10th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('11th') }} >11th</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setStandard('12th') }} >12th</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={{ paddingLeft: '0.5%' }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {section}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => { setSection('A') }} >A</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setSection('B') }} >B</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setSection('C') }} >C</Dropdown.Item>
            <Dropdown.Item onSelect={() => { setSection('D') }} >D</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Button onClick={handleAddCourse} style={{ marginTop: '1%' }} variant="dark">Add</Button>
    </Form>
  )
}