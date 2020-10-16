import React, { useState } from 'react';
import MainNavbar from '../MainNavbar';
import Queue from '../Queue';
import NotifactionBox from '../NotificationBox';

export default function ParentHome(props) {
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
          <Queue history={props.history} title={"My Child's Courses"} />
        </div>
      </div>
    </div>
  )
}
