/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './reward.css';

export default function Reward({
  id,
  rewardName,
  price,
  active,
  onRewardClick,
  setClickedRewardKey,
}) {
  const clickHandler = () => {
    setClickedRewardKey(id);
    onRewardClick();
  };
  return (
    <div
      className={active ? 'rewardActive' : 'reward'}
      onClick={active ? null : clickHandler}
      onKeyPress={active ? null : clickHandler}
      role="button"
      tabIndex={0}
    >
      <div className="rewardName">{rewardName}</div>
      <div className="rewardPrice">{price} XP</div>
    </div>
  );
}
