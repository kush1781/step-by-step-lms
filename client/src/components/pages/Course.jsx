import React, { useState } from 'react'
import MainNavbar from '../MainNavbar'

export default function Course(props) {
  const [course, setCourse] = useState({
    name: 'Electronic Instrumentation',
    class: '10th',
    section: 'E',
    material: [{
      title: 'Week 1',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }, {
      title: 'Week 2',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }, {
      title: 'Week 3',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }],
    tests: [{
      title: 'Minor 1',
      body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
    }, {
      title: 'Minor 2',
      body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
    }, {
      title: 'Mid Sem',
      body: 'Date: 27th October Time: 3PM Duration: 3 hours'
    }]
  });
  //get course using redux
  return (
    <div >
      <MainNavbar />
      <div className='container'>
        <h1>{`${course.name}_${course.class}_${course.section}`}</h1>
        <div className="material-box">
          {
            course.material.map((mat) =>
              <div className="mat-box">
                <h3><a href={mat.link}>{mat.title}</a></h3>
                <p>{mat.body}</p>
              </div>
            )
          }
        </div>
        <h1>Tests</h1>
        <div className="material-box">
          {
            course.tests.map((test) =>
              <div className="mat-box">
                <h3><a href="" onClick={() => {
                  const newwindow = window.open('/', 'test_window', 'toolbar=no,menubar=no');
                  if (window.focus) { newwindow.focus() }
                  return false;
                }}>{test.title}</a></h3>
                <p>{test.body}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
