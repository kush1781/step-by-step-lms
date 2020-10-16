import React from 'react';

export default function NotifactionBox(props) {
  return (
    <div className="notification-box">
      <h2>{props.heading}</h2>
      <div className="notification-box-line"></div>
    </div>
  )
}
