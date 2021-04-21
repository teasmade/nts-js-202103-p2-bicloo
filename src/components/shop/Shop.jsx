import React from 'react';
import RewardList from './RewardList';
import './shop.css';

export default function Shop() {
  return (
    <div className="shopBody">
      <div className="container">
        <div className="xpbar">1468 XP disponibles</div>
        <div className="choose">Choisissez votre récompense!</div>
      </div>
      <div className="rewards">
        <RewardList />
      </div>
    </div>
  );
}
