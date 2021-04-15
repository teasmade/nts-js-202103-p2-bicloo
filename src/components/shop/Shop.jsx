import React from 'react';
import Reward from './Reward';
import './shop.css';

export default function Shop() {
  return (
    <div className="shopBody">
      <div className="container">
        <div className="xpbar">1468 XP disponibles</div>
        <div className="choose">Choisissez votre récompense!</div>
      </div>
      <div className="rewards">
        <Reward />
        <Reward />
        <Reward />
        <Reward />
        <Reward />
        <Reward />
      </div>
    </div>
  );
}
