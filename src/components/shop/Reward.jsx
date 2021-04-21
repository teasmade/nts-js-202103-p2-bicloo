/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './reward.css';

export default function Reward(props) {
  const [rewardActive, setRewardActive] = useState(false);

  return (
    <div
      className={rewardActive ? 'rewardActive' : 'reward'}
      onClick={() => setRewardActive(!rewardActive)}
      onKeyPress={() => setRewardActive(!rewardActive)}
      role="button"
      tabIndex={0}
    >
      <div>{props.rewardName}</div>
      <div>{props.price}</div>
    </div>
  );
}
