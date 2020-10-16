import React, { useState } from 'react';
import AddCourse from '../AddCourse';
import MainNavbar from '../MainNavbar';
import Queue from '../Queue';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import NotifactionBox from '../NotificationBox';

export default function TeacherHome(props) {
  const [courseModalVisible, setCourseModalVisible] = useState(false)
  return (
    <div>
      <MainNavbar history={props.history} />
      <div className='container'>
        <div className="Home">
          <h1>My Dashboard</h1>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5%' }}>
            <NotifactionBox history={props.history} heading={'Notice'} />
            <NotifactionBox history={props.history} heading={'Events'} />
            <NotifactionBox history={props.history} heading={'Holidays'} />
          </div>
          <Queue history={props.history} title={'My Courses'} />
          <Button onClick={() => setCourseModalVisible(true)}>Add Course</Button>
          <Queue history={props.history} title={'Upcoming Tests'} />
          <Modal show={courseModalVisible} onHide={() => setCourseModalVisible(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddCourse />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}
