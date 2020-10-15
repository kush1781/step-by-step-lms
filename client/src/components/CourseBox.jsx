import React from 'react'

export default function CourseBox(props) {
  return (
    <div className="Course-box">
      <img src={require("../public/favicon.ico")} />
      <p>{props.name}</p>
    </div>
  )
}
