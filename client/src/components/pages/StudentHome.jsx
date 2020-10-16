import React from 'react'
import MainNavbar from '../MainNavbar'
import NotifactionBox from '../NotificationBox'
import Queue from '../Queue'

export default function StudentHome(props) {
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
          <Queue history={props.history} title={'Upcoming Tests'} />
          <Queue history={props.history} title={'My Courses'} />
        </div>
      </div>
    </div>
  )
}
