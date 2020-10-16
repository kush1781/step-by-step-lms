import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { storage } from '../firebase/firebase';

export default function Post(props) {
  const [newComment, setComment] = useState('');
  const [link, setLink] = useState('')
  return (
    <div className="Queue-box" style={{ margin: '0' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={require("../public/profile.png")} style={{ width: '45px', height: '45px' }} />
        <div>
          <p>{props.post.author}<br />{props.post.date}</p>
        </div>
      </div>
      <p>{props.post.body} <br /> {props.post.link ? <Button onClick={() => {
        const newwindow = window.open(props.post.link, 'test_window', 'toolbar=no,menubar=no');
        if (window.focus) { newwindow.focus() }
        return false;
      }}>Reference Doc</Button> : <></>}</p>
      <div className="comment-box">
        <p>Comments</p>
        {props.post.comments.map(comment =>
          <div key={comment._id}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <img src={require("../public/profile.png")} style={{ width: '45px', height: '45px' }} />
              <div>
                <p>{comment.author}<br />{comment.date}</p>
              </div>
            </div>
            <p>{comment.body} <br /> {comment.link ? <Button onClick={() => {
              const newwindow = window.open(comment.link, 'test_window', 'toolbar=no,menubar=no');
              if (window.focus) { newwindow.focus() }
              return false;
            }}>Reference Doc</Button> : <></>}</p>
          </div>
        )}
        <Form onSubmit={(e) => { e.preventDefault(); props.handleAddComment(newComment, link); setComment(''); setLink('') }} className="container" style={{ marginBottom: '1%' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control value={newComment} onChange={(e) => { setComment(e.target.value) }} as="textarea" placeholder="Your comment" autoComplete="none" />
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
          <Button variant="dark" type="submit">Reply</Button>
        </Form>
      </div>
    </div>
  )
}