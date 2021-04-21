/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// import React, { useState } from 'react';
import './reward.css';

export default function Reward(props) {
  // const [ rewardActive ] = useState(false);

  return (
    <>
      <div>
        <div>{props.rewardName}</div>
        <div>{props.price}</div>
      </div>
    </>
  );
}
