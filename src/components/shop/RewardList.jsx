import Reward from './Reward';
import rewardsData from './rewardsData';

const RewardList = () => {
  return (
    <div className="RewardList">
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
