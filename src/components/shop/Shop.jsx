/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import RewardList from './RewardList';
import './shop.css';
import UserService from '../../Services/UserService';
import ModalBackdrop from '../modal/ModalBackdrop';
import Modal from '../modal/Modal';
import ShopModalContent from './ShopModalContent';

export default function Shop() {
  const user = UserService.getUser();
  const [allRewards, setAllRewards] = useState(null);
  // if user null (not connected)... async call to user service to get all possible rewards
  if (!user) {
    useEffect(() => {
      UserService.getAllRewards().then((data) => {
        setAllRewards(data);
      });
    }, []);
  } else {
    // another use effect here to get all logged user rewards
    useEffect(() => {
      UserService.getUserRewards().then((data) => {
        setAllRewards(data);
      });
    }, []);
  }

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpenHandler = () => setModalIsOpen(true);
  const modalCloseHandler = () => setModalIsOpen(false);

  // clickedRewardKey added to allow for description, but will also be needed to confirm selection, write back to DB, spend XP
  const [clickedRewardKey, setClickedRewardKey] = useState(null);

  return (
    <div className="shopBody">
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
      {/* staten ++ pass in XP if we want to display reward too expensive message??? */}
      {allRewards ? (
        <RewardList
          user={user}
          rewardsToDisplay={allRewards}
          onRewardClick={modalOpenHandler}
          setClickedRewardKey={setClickedRewardKey}
        />
      ) : null}
      {modalIsOpen ? (
        <Modal
          Content={
            <ShopModalContent
              user={user}
              onCancel={modalCloseHandler}
              allRewards={allRewards}
              clickedRewardKey={clickedRewardKey}
              setAllRewards={setAllRewards}
            />
          }
        />
      ) : null}
      {modalIsOpen ? <ModalBackdrop onCancel={modalCloseHandler} /> : null}
    </div>
  );
}
