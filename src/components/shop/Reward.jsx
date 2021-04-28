/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './reward.css';

export default function Reward({ rewardName, price, active }) {
  // this state currently does nothing haha!
  const [rewardActive, setRewardActive] = useState(false);

  return (
    <div
      className={active ? 'rewardActive' : 'reward'}
      onClick={() => setRewardActive(!rewardActive)}
      onKeyPress={() => setRewardActive(!rewardActive)}
      role="button"
      tabIndex={0}
    >
      <div>{rewardName}</div>
      <div>{price} XP</div>
    </div>
  );
}
