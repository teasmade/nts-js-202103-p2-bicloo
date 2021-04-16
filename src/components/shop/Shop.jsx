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
        <Reward name="10% sur votre abonnement" price="150 XP" />
        <Reward
          name="une entrée gratuite au Musée des Beaux arts"
          price="100 XP"
        />
        <Reward name="1 mois offert" price="200 XP" />
        <Reward name="1 repas dans un restaurant" price="200 XP" />
        <Reward
          name="une entrée gratuite au Musée des Beaux arts"
          price="100 XP"
        />
        <Reward name="1 mois offert" price="200 XP" />
      </div>
    </div>
  );
}
