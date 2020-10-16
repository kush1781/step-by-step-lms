import React from 'react'

export default function CourseBox(props) {
  return (
    <div className="Course-box">
      <div>
        <img src={require("../public/favicon.ico")} />
      </div>
      <div>
        <a href='/student/course/1'>{props.name}</a>
      </div>
    </div>
  )
}
