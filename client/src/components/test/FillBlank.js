import React, { useState } from 'react';

const FIllBlank = (props) => {
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
                            <div className="card-header content-center" style={{ background: '#313348', color: 'white' }}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{ color: 'white' }}><strong>Question No. {props.index + 1}: </strong> Fill the correct answer.<span className="badge badge-pill badge-warning notification">Fill in the blanks</span></p>
                            </div>
                            <div className="card-body text-dark">
                                {props.ques.question}
                            </div>
                            <input name="FITB" type="text" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button onClick={onSave} type="button" className="btn btn-success">Save</button> 
                <button onClick={props.onNext} type="button" className="btn btn-warning">Next</button>
            </div>
        </div>
    )
}

export default FIllBlank;