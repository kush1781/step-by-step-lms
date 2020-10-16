import React, { useState } from 'react';
import MainNavbar from '../MainNavbar';
import Post from '../Post';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { storage } from '../../firebase/firebase';

export default function Course(props) {
  const [user, setUser] = useState({ name: 'Manthan Tolia', userType: 'teacher' });
  const [newPostBody, setPost] = useState('');
  const [link, setLink] = useState('');
  const [course, setCourse] = useState({
    name: 'Electronic Instrumentation',
    standard: '10th',
    section: 'E',
    material: [{
      _id: '1',
      title: 'Week 1',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }, {
      _id: '2',
      title: 'Week 2',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }, {
      _id: '3',
      title: 'Week 3',
      body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
      link: 'https://www.google.com/'
    }],
    tests: [{
      _id: '1',
      title: 'Minor 1',
      body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
    }, {
      _id: '2',
      title: 'Minor 2',
      body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
    }, {
      _id: '3',
      title: 'Mid Sem',
      body: 'Date: 27th October Time: 3PM Duration: 3 hours'
    }],
    posts: [{
      _id: '1',
      author: 'Manthan Tolia',
      date: '17/10/2020',
      body: 'I have a doubt please help me with it',
      link: 'https://www.google.com/',
      comments: [{
        _id: '1',
        author: 'Kushal Gupta',
        date: '17/10/2020',
        link: 'https://www.google.com/',
        body: 'Sure, I will help you'
      }, {
        _id: '2',
        author: 'Manthan Tolia',
        date: '17/10/2020',
        link: '',
        body: 'Thank you so much'
      }]
    }, {
      _id: '2',
      author: 'Manthan Tolia',
      date: '17/10/2020',
      link: '',
      body: 'I have a doubt please help me with it',
      comments: [{
        _id: '3',
        author: 'Kushal Gupta',
        date: '17/10/2020',
        link: '',
        body: 'Sure, I will help you'
      }, {
        _id: '4',
        author: 'Manthan Tolia',
        date: '17/10/2020',
        link: '',
        body: 'Thank you so much'
      }]
    }]
  });
  //get course using redux
  return (
    <div>
      <MainNavbar />
      <div className='container'>
        <h1>{`${course.name}_${course.standard}_${course.section}`}</h1>
        <div className="material-box">
          {
            course.material.map((mat) =>
              <div key={mat._id} className="mat-box">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <h3 style={{ paddingRight: '1%' }}>{mat.title}</h3>
                  <Button onClick={() => {
                    const newwindow = window.open('/', 'test_window', 'toolbar=no,menubar=no');
                    if (window.focus) { newwindow.focus() }
                    return false;
                  }}>Open</Button>
                </div>
                <p>{mat.body}</p>
              </div>
            )
          }
        </div>
        <h2>Tests</h2>
        <div className="material-box">
          {
            course.tests.map((test) =>
              <div key={test._id} className="mat-box">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <h3 style={{ paddingRight: '1%' }}>{test.title}</h3>
                  <Button onClick={() => {
                    const newwindow = window.open('/', 'test_window', 'toolbar=no,menubar=no');
                    if (window.focus) { newwindow.focus() }
                    return false;
                  }}>Open</Button>
                </div>
                <p>{test.body}</p>
              </div>
            )
          }
        </div>
        <h2>Discussion Forum</h2>
        <div className="container">
          <div className="Queue-box" style={{ marginBottom: '1%' }}>
            <h2>New Post</h2>
            <Form className="container" style={{ marginBottom: '1%' }} onSubmit={((e) => {
              e.preventDefault();
              const newPost = {
                _id: '3',
                author: user.name,
                date: '18/10/2020',
                body: newPostBody,
                comments: [],
                link
              }
              setPost('');
              setLink('');
              console.log(newPost);
              const allPosts = course.posts.concat(newPost);
              setCourse({ ...course, posts: allPosts })
            })}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Control value={newPostBody} onChange={((e) => { setPost(e.target.value) })} as="textarea" placeholder="Your content" autoComplete="none" />
              </Form.Group>
              <input type='file' onChange={(e) => {
                const fileName = e.target.files[0].name;
                storage.ref(`forum/${fileName}`).put(e.target.files[0]).on('state_changed', (snapshot) => {
                },
                  (error) => {
                    console.log(error)
                  },
                  (complete) => {
                    console.log(fileName)
                    storage.ref(`forum/${fileName}`).getDownloadURL().then((url => setLink(url)), e => { console.log(e) });
                  })
              }} />
              <Button variant="dark" type="submit">Post</Button>
            </Form>
          </div>
        </div>
        <div className="container">
          {course.posts.map((post, index) =>
            <Post key={post._id} post={post} handleAddComment={((comment, commentLink) => {
              const newComment = ({
                _id: '5',
                author: user.name,
                date: '18/10/2020',
                body: comment,
                link: commentLink
              })
              const newPost = course.posts[index];
              newPost.comments.push(newComment);
              console.log(newPost);
              const allPosts = course.posts;
              allPosts[index] = newPost;
              setCourse({ ...course, posts: allPosts })
            })}
            />)}
        </div>
      </div>
    </div>
  )
}
