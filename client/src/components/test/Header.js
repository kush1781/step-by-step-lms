import React from 'react';

const Header = (props) => {
    return (
        <div className="welcome">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content text-center" style={{background: '#313348', color: 'white'}}>
                            <h2 className="text-light"><strong>Welcome to {props.title}</strong></h2>
                            <h2 className="text-light"><strong>Course: {props.course}</strong></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;