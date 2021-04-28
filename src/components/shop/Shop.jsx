import React from 'react';
import RewardList from './RewardList';
import './shop.css';
import UserService from '../../Services/UserService';

export default function Shop() {
  const user = UserService.getUser();
  let rewards = null;
  UserService.getAllRewards().then((data) => {
    rewards = data;
  });

  /*
  1 - Shop se monte (rewards vaut null)
  2 - mounted, donc appel useEffect
  3 - dans useEffect, tu peux faire un appel API (getRewards)
  4 - toujours dans useEffect getRewards.then()
  5 - dans le then, tu mets à jour un state avec les nouvelles données reçues de l'API (then(data) ....)
  6 - ton state update ton composant
  7 - et là hop, tes rewards sont dispo, et peuvent être utilisées
  8 - !!! Condition dans le useeffect pour ne pas rappeler l'API à chaque fois (boucle sans fin)



  */
  const pseudo = user ? UserService.getUserName() : null;
  const totalXp = user ? UserService.getTotalXp() : null;
  const rewardsBought = user ? UserService.getUserRewards() : null;
  return (
    <div className="shopBody">
      {console.log(rewards)}
      <div className="container">
        {user ? (
          <div className="xpbar">{totalXp} XP disponibles</div>
        ) : (
          <div className="xpbar" />
        )}
        <div className="choose">
          Bonjour
          {user
            ? ` ${pseudo}, choisissez vos récompenses :)`
            : ', regardez ce que vous pouvez gagner! Sign up to win teh kewl lootz!'}
        </div>
      </div>
      {/* 2 rewards lists needed, pass in rewards or rewards bought based on user
      staten ++ pass in XP if we want to display reward too expensive message??? */}
      {user ? (
        <RewardList user={user} rewardsToDisplay={rewardsBought} />
      ) : (
        <RewardList /* NOT LOGGED USER PROPS HERE */ />
      )}
    </div>
  );
}
