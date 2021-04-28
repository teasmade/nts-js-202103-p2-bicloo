/* eslint-disable react/prop-types */
import Reward from './Reward';
// import rewardsData from './rewardsData';
import './reward.css';

const RewardList = ({ user, rewardsToDisplay }) => {
  return (
    <div className="rewards">
      {console.log(user)}
      {console.log(rewardsToDisplay)}
      {rewardsToDisplay.map((reward) => {
        return (
          <Reward
            key={reward.id}
            rewardName={reward.name}
            price={reward.price}
            active={reward.active}
          />
        );
      })}
    </div>
  );
};

export default RewardList;
