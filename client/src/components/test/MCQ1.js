import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const MCQ1 = (props) => {
    const [answer, setAnswer] = useState([]);

    const handleChange = (e) => {
        setAnswer([e.target.value]);
    }
    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{ background: '#313348', color: 'white' }}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{ color: 'white' }}><strong>Question No. {props.index+1}: </strong>{props.ques.question}<span className="badge badge-pill badge-primary ml-2" >MCQ-I</span></p>
                            </div>
                            <div className="card-body text-dark">
                                <ol>
                                    <li>
                                        <input onChange={handleChange} name={props.index} type="radio" value={props.ques.options[0]} />
                                        {props.ques.options[0]}
                                    </li>
                                    <li>
                                        <input onChange={handleChange} name={props.index} type="radio" value={props.ques.options[1]} />
                                        {props.ques.options[1]}
                                    </li>
                                    <li>
                                        <input onChange={handleChange} name={props.index} type="radio" value={props.ques.options[2]} />
                                        {props.ques.options[2]}
                                    </li>
                                    <li>
                                        <input onChange={handleChange} name={props.index} type="radio" value={props.ques.options[3]} />
                                        {props.ques.options[3]}
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => {props.setAnswer(0, answer, props.ques.quesType)}} className="btn btn-success">Save</button>
                <button onClick={props.onNext} className="btn btn-warning">Next</button>
            </div>
        </div >
    )
}

export default MCQ1;