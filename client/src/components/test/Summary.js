import React, { useState, useEffect } from 'react';

const Summary = (props) => {
    const { initialHours = 0, initialMinute = 0, initialSeconds = 0 } = props;
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours == 0)
                        props.onTimeOver();
                    else {
                        setHours(hours-1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                } 
                else {
                    if (minutes == 5) {
                        props.warning(5);
                    }
                    if (minutes == 1) {
                        props.warning(1);
                    }
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    const getTimer = () => {
        let time = '';
        if (hours<=9) {
            time+='0';
        }
        time+=hours.toString();
        time+=':';
        if (minutes<=9) {
            time+='0';
        }
        time+=minutes.toString();
        time+=':';
        if (seconds<=9) {
            time+='0';
        }
        time+=seconds.toString();
        return time;
    }
    return (
        <div className="text-center mt-5"><h2>Summary</h2>
            <div className='statis text-center'>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box bg-primary" style={{ background: 'blue' }}>
                                <h3 style={{ color: 'white' }}>{props.attempted}</h3>
                                <p className="lead" style={{ color: 'white' }}>Total Questions Attempted</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box success" style={{ background: 'green' }}>
                                <h3 style={{ color: 'white' }}>{(props.total - props.attempted)}</h3>
                                <p className="lead" style={{ color: 'white' }}>Questions Remaining</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box warning" style={{ background: 'purple' }}>
                                <h3 style={{ color: 'white' }}>
                                    {getTimer()}
                                </h3>
                                <p className="lead" style={{ color: 'white' }}>Time Remaining</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;