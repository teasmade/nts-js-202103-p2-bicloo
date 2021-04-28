/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './reward.css';

export default function Reward({ rewardName, price, active, onRewardClick }) {
  // this state currently does nothing haha!
  // const [rewardActive, setRewardActive] = useState(false);

  return (
    <div
      className={active ? 'rewardActive' : 'reward'}
      onClick={active ? null : onRewardClick}
      onKeyPress={onRewardClick}
      role="button"
      tabIndex={0}
    >
      <div>{rewardName}</div>
      <div>{price} XP</div>
    </div>
  );
}
