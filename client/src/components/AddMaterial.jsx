import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { storage } from '../firebase/firebase';

export default function AddMaterial(props) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [body, setBody] = useState('');
  return (
    <div className="container">
      <Form style={{ marginBottom: '1%' }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control value={title} onChange={((e) => { setTitle(e.target.value) })} type="text" placeholder="Title" autoComplete="none" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control value={body} onChange={((e) => { setBody(e.target.value) })} as="textarea" placeholder="Content" autoComplete="none" />
        </Form.Group>
        <input type='file' onChange={(e) => {
          const fileName = e.target.files[0].name;
          storage.ref(`material/${fileName}`).put(e.target.files[0]).on('state_changed', (snapshot) => {
          },
            (error) => {
              console.log(error)
            },
            (complete) => {
              console.log(fileName)
              storage.ref(`material/${fileName}`).getDownloadURL().then((url => setLink(url)), e => { console.log(e) });
            })
        }} />
      </Form>
      <Button style={{ marginTop: '1%' }} variant="dark" onClick={() => {
        props.handleAddMaterial(title, body, link);
      }}>Add</Button>
    </div>
  )
}