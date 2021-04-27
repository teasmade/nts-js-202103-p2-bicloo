import React from 'react';
import RewardList from './RewardList';
import './shop.css';
import UserService from '../../Services/UserService';

export default function Shop() {
  const allRewards = UserService.getAllRewards();
  const pseudo = UserService.getUserName();
  const totalXp = UserService.getTotalXp();
  const rewardsBought = UserService.getRewardsBought();
  return (
    <div className="shopBody">
      {console.log(UserService.getUser())}
      {console.log(allRewards)}
      {console.log(rewardsBought)}
      <div className="container">
        <div className="xpbar">{totalXp} XP disponibles</div>
        <div className="choose">
          Bonjour {pseudo}, choisissez votre récompense!
        </div>
      </div>
      <RewardList />
    </div>
  );
}
