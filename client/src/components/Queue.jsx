import React from 'react'
import CourseBox from './CourseBox'

export default function Queue(props) {
  return (
    <div className="Queue-box">
      <h2>{props.title}</h2>
      <div className="Queue-line"></div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CourseBox name={"Electronic Instrumentation"} />
        <CourseBox name={"Cellular and Mobile Communication"} />
        <CourseBox name={"ADSP"} />
      </div>
    </div>
  )
}
