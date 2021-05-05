import React, { useState } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import LogSignButtons from '../tools/LogSignButtons';
import UserService from '../../Services/UserService';
import ModalBackdrop from '../modal/ModalBackdrop';
import Modal from '../modal/Modal';
import HomeModalContent from './HomeModalContent';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpenHandler = () => setModalIsOpen(true);
  const modalCloseHandler = () => setModalIsOpen(false);

  const history = useHistory();
  const loggedUser = () => (
    <>
      <p>Bienvenue {UserService.getUserName()}</p>
      <button
        type="button"
        className="homeButton"
        onClick={() => history.push('/map')}
      >
        Accéder à la carte
      </button>
    </>
  );
  const noLoggedUser = (
    <>
      <button type="button" className="homeButton" onClick={modalOpenHandler}>
        Discover <br />
        the concept
      </button>
      {modalIsOpen ? (
        <Modal Content={<HomeModalContent onCancel={modalCloseHandler} />} />
      ) : null}
      {modalIsOpen ? <ModalBackdrop onCancel={modalCloseHandler} /> : null}
      <LogSignButtons noLog />
    </>
  );
  return (
    <div className="mainSection home">
      <h2 className="logoTitle">
        <span>BiclooApp</span>
      </h2>
      <p>The App which will make you ride ye boïke more, and more !</p>

      {!UserService.getUser() ? noLoggedUser : loggedUser()}
    </div>
  );
}
