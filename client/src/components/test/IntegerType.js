import React, { useState } from 'react';

const IntegerType = (props) => {
    const [answer, setAnswer] = useState([]);

    const handleChange = (e) => {
        setAnswer([e.target.value]);
    }

    const onSave = () => {
        if (Number.isInteger(parseInt(answer[0]))) {
            props.setAnswer(props.index, answer, props.ques.quesType);
        }
        else {
            alert('Please type an integer');
        }
    }

    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{background: '#313348', color: 'white'}}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{color: 'white'}}><strong>Question No. {props.index+1}: </strong>Answer the following question rounded upto the nearest integer.<span className="badge badge-pill badge-danger notification">Integer Type</span></p>
                            </div>
                            <div className="card-body text-dark">
                                <p>{props.ques.question}</p>
                        Answer: <input name="integer" type="text" placeholder="Only Integer" onChange={handleChange} />
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

export default IntegerType;