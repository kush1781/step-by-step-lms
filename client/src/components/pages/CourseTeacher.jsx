import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MainNavbar from '../MainNavbar';
import Post from '../Post';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { storage } from '../../firebase/firebase';
import LoadingPage from './LoadingPage';
import AddMaterial from '../AddMaterial';
import Modal from 'react-bootstrap/Modal';
import newMaterial from '../../apiCalls/newMaterial';
import newPost from '../../apiCalls/newPost';
import addComment from '../../apiCalls/addComment';
import { editCourse } from '../../store/actions/courses';

// {
//   _id: '1',
//   name: 'Physics',
//   standard: '10th',
//   section: 'E',
//   material: [{
//     _id: '1',
//     title: 'Week 1',
//     body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
//     link: 'https://www.google.com/'
//   }, {
//     _id: '2',
//     title: 'Week 2',
//     body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
//     link: 'https://www.google.com/'
//   }, {
//     _id: '3',
//     title: 'Week 3',
//     body: 'Blah blah Blah blah Blah blah Blah blah Blah blah',
//     link: 'https://www.google.com/'
//   }],
//   tests: [{
//     _id: '1',
//     title: 'Minor 1',
//     body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
//   }, {
//     _id: '2',
//     title: 'Minor 2',
//     body: 'Date: 17th October Time: 5:30PM Duration: 20 minutes'
//   }, {
//     _id: '3',
//     title: 'Mid Sem',
//     body: 'Date: 27th October Time: 3PM Duration: 3 hours'
//   }],
//   posts: []
// }

export default function Course(props) {
  const [user] = useState(useSelector(state => state.user));
  const [newPostBody, setPost] = useState('');
  const [link, setLink] = useState('');
  const [materialModalVisible, setMaterialModalVisible] = useState(false);
  const [course, setCourse] = useState(useSelector(state => state.courses.filter((c) => { return c._id == props.match.params.id })[0]));
  const dispatch = useDispatch();

  const handleAddMaterial = async (title, body, link) => {
    const requestBody = JSON.stringify({ _id: course._id, material: { title, body, link } });
    const getMaterial = await newMaterial(requestBody);
    console.log(getMaterial);
    const updateCourse = course;
    updateCourse.material = getMaterial.material;
    console.log('course teacher');
    console.log(updateCourse);
    setCourse(updateCourse);
    dispatch(editCourse(updateCourse));
    setMaterialModalVisible(false);
  }

  if (course) {
    return (
      <div>
        <MainNavbar history={props.history} />
        <div className='container'>
          <h1>{`${course.name}_${course.standard}_${course.section}`}</h1>
          <div className="material-box">
            <Button variant='dark' style={{ marginBottom: '1%' }} onClick={() => setMaterialModalVisible(true)}>Add Material</Button>
            <Modal show={materialModalVisible} onHide={() => setMaterialModalVisible(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Material</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddMaterial handleAddMaterial={handleAddMaterial} />
              </Modal.Body>
            </Modal>
            {
              course.material.map((mat) =>
                <div key={mat._id} className="mat-box">
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h3 style={{ paddingRight: '1%' }}>{mat.title}</h3>
                    <Button onClick={() => {
                      const newwindow = window.open(mat.link, 'test_window', 'toolbar=no,menubar=no');
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
            <Button variant='dark' style={{ marginBottom: '1%' }}>Create Test</Button>
            {
              course.tests.map((test) =>
                <div key={test._id} className="mat-box">
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h3 style={{ paddingRight: '1%' }}>{test.title}</h3>
                    <Button onClick={() => {
                      const newwindow = window.open(`/test/${test._id}`, 'test_window', 'toolbar=no,menubar=no');
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
            <div className="Queue-box" style={{ marginTop: '1%', marginBottom: '1%' }}>
              <h2>New Post</h2>
              <Form className="container" style={{ marginBottom: '1%' }} onSubmit={(async (e) => {
                e.preventDefault();
                //send update to backend
                const body = JSON.stringify({
                  _id: course._id,
                  post: {
                    author: user.user.name,
                    date: Date.now,
                    body: newPostBody,
                    link
                  }
                })
                const getPost = await newPost(body);
                setPost('');
                setLink('');
                console.log(getPost);
                const allPosts = course.posts;
                allPosts.unshift(getPost)
                const updatedCourse = { ...course, posts: allPosts };
                setCourse(updatedCourse);
                dispatch(editCourse(updatedCourse));
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
              <Post key={post._id} post={post} handleAddComment={(async (comment, commentLink) => {
                //send update to backend and then to redux
                const body = JSON.stringify({
                  courseId: course._id,
                  postId: post._id,
                  comment: {
                    author: user.user.name,
                    date: Date.now,
                    body: comment,
                    link: commentLink
                  }
                })
                const newComment = await addComment(body);
                const newPost = course.posts[index];
                newPost.comments.push(newComment);
                console.log(newPost);
                const allPosts = course.posts;
                allPosts[index] = newPost;
                const updatedCourse = { ...course, posts: allPosts };
                setCourse(updatedCourse);
                dispatch(editCourse(updatedCourse));
              })}
              />)}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <LoadingPage />
    )
  }
}
