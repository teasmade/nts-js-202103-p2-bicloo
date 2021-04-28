/* eslint-disable react/prop-types */
import Reward from './Reward';
import rewardsData from './rewardsData';
import './reward.css';

const RewardList = ({ user, rewardsToDisplay }) => {
  return (
    <div className="rewards">
      {console.log(user)}
      {console.log(rewardsToDisplay)}
      {rewardsData.map((reward) => {
        return (
          <Reward
            key={reward.id}
            rewardName={reward.rewardName}
            price={reward.price}
          />
        );
      })}
    </div>
  );
};

export default RewardList;
