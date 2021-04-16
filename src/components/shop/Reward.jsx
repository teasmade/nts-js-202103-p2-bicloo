/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './reward.css';

export default function Reward(props) {
  return (
    <div className="reward">
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}
