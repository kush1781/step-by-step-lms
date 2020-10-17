import React, { useState } from 'react';
import { storage } from '../../firebase/firebase';

const Subjective = (props) => {
    const [answer, setAnswer] = useState('');
    const [link, setLink] = useState('');

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const onSave = () => {
        props.setAnswer(props.index, answer, props.ques.quesType, link);
    }
    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{ background: '#313348', color: 'white' }}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{ color: 'white' }}><strong>Question No. {props.index + 1}: </strong>Answer the following question rounded upto the nearest integer.<span className="badge badge-pill notification" style={{ background: '#6c038f', color: 'white' }}>Subjective</span></p>
                            </div>
                            <div className="card-body text-dark">
                                <p>{props.ques.question}</p>
                                <p>Select one of the answering options below</p>
                                <div className="card-body text-dark">
                                    Type Your Answer in the given box or Upload it here <input type="file" name="File" onChange={(e) => {
                                        const fileName = e.target.files[0].name;
                                        storage.ref(`tests/${fileName}`).put(e.target.files[0]).on('state_changed', (snapshot) => {
                                        },
                                            (error) => {
                                                console.log(error)
                                            },
                                            (complete) => {
                                                console.log(fileName)
                                                storage.ref(`tests/${fileName}`).getDownloadURL().then((url => setLink(url)), e => { console.log(e) });
                                            })
                                    }} />
                                    <br></br>
                                </div>
                            </div>
                            <textarea onChange={handleChange} rows="10" columns="10"> </textarea>
                        </div>
                    </div>
                    <button onClick={onSave} type="button" className="btn btn-success">Save</button>
                    <button onClick={props.onNext} type="button" className="btn btn-warning">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Subjective;