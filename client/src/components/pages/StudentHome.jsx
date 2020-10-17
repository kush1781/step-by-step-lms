import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getCourses from '../../apiCalls/getCourses';
import { setMyCourses } from '../../store/actions/courses';
import MainNavbar from '../MainNavbar'
import NotifactionBox from '../NotificationBox'
import Queue from '../Queue'
import LoadingPage from './LoadingPage';

export default function StudentHome(props) {
  const [user] = useState(useSelector(state => state.user));
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  useMemo(async () => {
    const body = JSON.stringify({ _id: user.user._id })
    const myCourses = await getCourses(body, user.userType);
    console.log(myCourses);
    setCourses(myCourses);
  }, [])
  if (courses) {
    dispatch(setMyCourses(courses));
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
          </div>
        </div>
      </div>
    )
  }
  else {
    return <LoadingPage />
  }
}
