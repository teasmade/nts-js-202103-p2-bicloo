/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './LogSignButtons.css';
import { useHistory } from 'react-router-dom';

export default function LogSignButtons(props) {
  const history = useHistory();

  const redirectSignUp = () => {
    history.push('/signUp');
  };

  const redirectSignIn = () => {
    history.push({
      pathname: '/signIn',
      state: props.page,
    });
  };

  return (
    <div className="logSignButtonsContainer">
      <div className="logSignButtons">
        <button onClick={redirectSignUp} id="signUp" type="button">
          S&#039;inscrire
        </button>
        <button onClick={redirectSignIn} id="login" type="button">
          Connexion
        </button>
      </div>
      {props.noLog ? (
        <p
          onClick={() => {
            history.push('/map');
          }}
          id="noLogin"
          style={props.profile ? { color: 'black' } : null}
        >
          Accéder à la carte sans se connecter
        </p>
      ) : null}
    </div>
  );
}
