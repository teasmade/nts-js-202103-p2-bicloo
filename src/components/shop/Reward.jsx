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
  // this state currently does nothing haha!
  // const [rewardActive, setRewardActive] = useState(false);
  const clickHandler = () => {
    console.log(id);
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
      <div>{rewardName}</div>
      <div>{price} XP</div>
    </div>
  );
}
