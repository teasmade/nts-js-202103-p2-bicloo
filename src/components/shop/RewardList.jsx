import Reward from './Reward';
import rewardsData from './rewardsData';
import './reward.css';

const RewardList = () => {
  return (
    <div className="rewards">
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
