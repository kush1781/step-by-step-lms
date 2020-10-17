import React from 'react';
import { Image } from 'react-bootstrap';

const NavigationBar = (props) => {

    const getButton = (quesType, index) => {
        switch (quesType) {
            case 1: return (<button key={index} onClick={() => props.selectQues(index)} className="btn bg-primary">{index}</button>);
            case 2: return (<button key={index} onClick={() => props.selectQues(index)} className="btn bg-success">{index}</button>);
            case 3: return (<button key={index} onClick={() => props.selectQues(index)} className="btn" style={{ background: '#076126' }}>{index}</button>);
            case 4: return (<button key={index} onClick={() => props.selectQues(index)} className="btn bg-danger">{index}</button>);
            case 5: return (<button key={index} onClick={() => props.selectQues(index)} className="btn bg-warning" >{index}</button>);
            case 6: return (<button key={index} onClick={() => props.selectQues(index)} className="btn" style={{ background: 'grey' }}>{index}</button>);
            case 7: return (<button key={index} onClick={() => props.selectQues(index + props.test.objectiveQues.length)} className="btn" style={{ background: '#6c038f' }}>{index + props.test.objectiveQues.length}</button>);
        }
    }

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <div id="close-sidebar">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="sidebar-header">
                    <div className="user-pic">
                        <Image className="img-responsive rounded-circle" src={require('../../public/logo.png')} alt="User picture" />
                    </div>
                    <div className="user-info">
                        <span className="user-name">{props.user.name}</span>
                        <span className="user-status">
                            <span>Online</span>
                        </span>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li className="header-menu">
                            <span>Legends</span>
                        </li>
                        <div>
                            <li><span className="badge badge-pill badge-primary notification">MCQ - I</span>
                                <span className="badge badge-pill badge-success notification">MCQ - II</span>
                                <span className="badge badge-pill notification" style={{ background: '#076126', color: 'white' }}>MCQ - III</span>
                                <li><span className="badge badge-pill badge-danger notification">Integer Type</span>
                                    <span className="badge badge-pill badge-warning notification">Fill in the blanks</span></li>
                                <span className="badge badge-pill notification" style={{ background: 'grey', color: 'white' }}>True & False</span>
                                <span className="badge badge-pill notification" style={{ background: '#6c038f', color: 'white' }}>Subjective</span>
                            </li>
                        </div>
                        <li className="header-menu">
                            <span>Objective</span>
                        </li>
                        <div className="questionTags">
                            {
                                props.test.objectiveQues.map((ques, index) => getButton(ques.quesType, index + 1))
                            }
                        </div>
                        <li className="header-menu">
                            <span>Subjective</span>
                        </li>
                        <div className="questionTags">
                            {
                                props.test.subjectiveQues.map((ques, index) => getButton(ques.quesType, index + 1))
                            }
                        </div>
                    </ul>
                </div>
            </div>
            <div className="sidebar-footer" style={{ padding: '5px 0 0 0' }}>
                <a href="#" title="Notification">
                    <span className="badge badge-pill badge-warning notification">Submit & Quit</span>
                </a>
                <a href="#" title="Sign Out">
                    <i className="fa fa-power-off"></i>
                </a>
            </div>
        </nav>
    )
}

export default NavigationBar;