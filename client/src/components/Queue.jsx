import React, { useState } from 'react'
import CourseBox from './CourseBox'
import Button from 'react-bootstrap/Button';

export default function Queue(props) {
  const [courses] = useState([{ name: 'Physics' }, { name: 'Chemistry' }, { name: 'Maths' }, { name: 'SST' }, { name: 'Biology' }, { name: 'English' }, { name: 'Hindi' }])
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [next] = '>';
  const [prev] = '<';
  return (
    <div className="Queue-box">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h2>{props.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '1%' }}>
          <Button variant='dark' style={{ marginRight: '1%', marginTop: '3%', marginBottom: '3%' }} onClick={() => { if (start > 0 && end <= courses.length - 1) { setStart(start - 1); setEnd(end - 1) } }}>{prev}</Button>
          <Button variant='dark' style={{ marginRight: '1%', marginTop: '3%', marginBottom: '3%' }} onClick={() => { if (start >= 0 && end < courses.length - 1) { setStart(start + 1); setEnd(end + 1) } }}>{next}</Button>
        </div>
      </div>
      <div className="Queue-line"></div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {
          courses.map((course, index) => {
            if (index >= start && index <= end) {
              return <CourseBox history={props.history} name={course.name} />
            }
          })
        }
      </div>
    </div>
  )
}
