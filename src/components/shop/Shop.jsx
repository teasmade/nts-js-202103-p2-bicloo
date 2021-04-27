import React from 'react';
import RewardList from './RewardList';
import './shop.css';
import UserService from '../../Services/UserService';

export default function Shop() {
  const user = UserService.getUser();
  const rewards = UserService.getAllRewards();
  const pseudo = user ? UserService.getUserName() : null;
  const totalXp = user ? UserService.getTotalXp() : null;
  const rewardsBought = user ? UserService.getUserRewards() : null;
  return (
    <div className="shopBody">
      {console.log(user)}
      {console.log(rewards)}
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
