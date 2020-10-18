import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function CourseBox(props) {
  const [user] = useState(useSelector(state => state.user))
  // console.log(props.course);
  return (
    <div className="Course-box">
      <div>
        <img src={require("../public/favicon.ico")} />
      </div>
      <div className="clickable">
        <p style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => props.history.push(`/${user.userType.toLowerCase()}/course/${props.courseId}`)}>
          {`${props.course.name}_${props.course.standard}_${props.course.section}`}
        </p>
      </div>
    </div>
  )
}
