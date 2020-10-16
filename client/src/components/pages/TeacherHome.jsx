import React, { useState } from 'react';
import AddCourse from '../AddCourse';
import MainNavbar from '../MainNavbar';
import Queue from '../Queue';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default function TeacherHome() {
  const [courseModalVisible, setCourseModalVisible] = useState(false)
  return (
    <div>
      <MainNavbar />
      <div className='container'>
        <div className="Home">
          <h1>My Dashboard</h1>
          <Button onClick={() => setCourseModalVisible(true)}>Add Course</Button>
          <Modal show={courseModalVisible} onHide={() => setCourseModalVisible(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddCourse />
            </Modal.Body>
          </Modal>
          <Queue title={'My Courses'} />
          <Queue title={'Upcoming Tests'} />
          <Queue title={'Graded Tests'} />
        </div>
      </div>
    </div>
  )
}
