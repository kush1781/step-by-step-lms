import React from 'react'
import MainNavbar from '../MainNavbar'
import Queue from '../Queue'

export default function StudentHome() {
  return (
    <div>
      <MainNavbar />
      <div className='container'>
        <div className="Home">
          <h1>My Dashboard</h1>
          <Queue title={'Upcoming Tests'} />
          <Queue title={'My Courses'} />
          <Queue title={'Graded Tests'} />
          <p>Student Home</p>
        </div>
      </div>
    </div>
  )
}
