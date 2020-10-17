import React, { useState } from 'react';

const Assert = (props) => {
    const [answer, setAnswer] = useState([]);

    const handleChange = (e) => {
        setAnswer([e.target.value]);
    }

    const onSave = () => { 
        props.setAnswer(props.index, answer, props.ques.quesType);
    }
    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{background: '#313348', color: 'white'}}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{color: 'white'}}><strong>Question No. {props.index+1}: </strong>{props.ques.question}<span className="badge badge-pill notification" style={{ background: 'grey' }}>True/False</span></p>
                            </div>
                            <div className="card-body text-dark">
                                <ol >
                                    <li><input onChange={handleChange} name="Q1" type="radio" value="true" />True</li>
                                    <li><input onChange={handleChange} name="Q1" type="radio" value="false" /> False</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={onSave} type="button" className="btn btn-success">Save</button> 
                <button onClick={props.onNext} type="button" className="btn btn-warning">Next</button>
            </div>
        </div>
    )
}

export default Assert;