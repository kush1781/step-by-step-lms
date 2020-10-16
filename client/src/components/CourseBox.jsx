import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function CourseBox(props) {
  const [user] = useState(useSelector(state => state.user))
  return (
    <div className="Course-box">
      <div>
        <img src={require("../public/favicon.ico")} />
      </div>
      <div className="clickable">
        <p style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => props.history.push(`/${user.userType}/course/1`)}>{props.name}</p>
      </div>
    </div>
  )
}
