import React, { useEffect, useMemo, useState } from 'react';
import AddCourse from '../AddCourse';
import MainNavbar from '../MainNavbar';
import Queue from '../Queue';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import NotifactionBox from '../NotificationBox';
import LoadingPage from './LoadingPage';
import { useDispatch, useSelector } from 'react-redux';
import { setMyCourses } from '../../store/actions/courses';
import getCourses from '../../apiCalls/getCourses';
import addCourse from '../../apiCalls/addCourse';

export default function TeacherHome(props) {
  const [user] = useState(useSelector(state => state.user));
  const [courseModalVisible, setCourseModalVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const handleAddCourse = async (body) => {
    const course = await addCourse(body);
    setCourseModalVisible(false);
    props.history.push(`/${user.userType.toLowerCase()}/home`);
  }

  useMemo(async () => {
    console.log('user');
    console.log(user.user._id);
    const body = JSON.stringify({ _id: user.user._id })
    console.log(body);
    const myCourses = await getCourses(body, user.userType);
    console.log(myCourses);
    setCourses(myCourses);
  }, [])
  dispatch(setMyCourses(courses));
  if (courses) {
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
            <Queue history={props.history} title={'My Courses'} courses={courses} />
            <Button onClick={() => setCourseModalVisible(true)}>Add Course</Button>
            {/* <Queue history={props.history} title={'Upcoming Tests'} /> */}
            <Modal show={courseModalVisible} onHide={() => setCourseModalVisible(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddCourse user={user.user} handleAddCourse={handleAddCourse} />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <LoadingPage />
  }
}
