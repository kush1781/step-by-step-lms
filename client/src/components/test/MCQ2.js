import React, { useState } from 'react';

const MCQ2 = (props) => {
    const [a1, seta1] = useState(false);
    const [a2, seta2] = useState(false);
    const [a3, seta3] = useState(false);
    const [a4, seta4] = useState(false);
    
    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{ background: '#313348' }}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{ color: 'white' }}><strong>Question No. {props.index + 1}: </strong>{props.ques.question}<span className="badge badge-pill badge-success notification" >MCQ-II</span></p>
                            </div>
                            <div className="card-body text-dark">
                                <ol>
                                    <li>
                                        <input onChange={(e) => seta1(!a1)} name={props.index} type="checkbox" value={props.ques.options[0]} />
                                        {props.ques.options[0]}
                                    </li>
                                    <li>
                                        <input onChange={(e) => seta2(!a2)} name={props.index} type="checkbox" value={props.ques.options[1]} />
                                        {props.ques.options[1]}
                                    </li>
                                    <li>
                                        <input onChange={(e) => seta3(!a3)} name={props.index} type="checkbox" value={props.ques.options[2]} />
                                        {props.ques.options[2]}
                                    </li>
                                    <li>
                                        <input onChange={(e) => seta4(!a4)} name={props.index} type="checkbox" value={props.ques.options[3]} />
                                        {props.ques.options[3]}
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    let ans = [];
                    if(a1) ans.push(props.ques.options[0]);
                    if(a2) ans.push(props.ques.options[1]);
                    if(a3) ans.push(props.ques.options[2]);
                    if(a4) ans.push(props.ques.options[3]);
                    props.setAnswer(props.index, ans, props.ques.quesType);
                }} type="button" className="btn btn-success">Save</button> 
                <button onClick={props.onNext} type="button" className="btn btn-warning">Next</button>
            </div>
        </div>
    )
}

export default MCQ2;