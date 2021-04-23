import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import LogSignButtons from '../tools/LogSignButtons';
import UserService from '../../Services/UserService';

export default function Home() {
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
      <button type="button" className="homeButton">
        Discover <br />
        the concept
      </button>
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
