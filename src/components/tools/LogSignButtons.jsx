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
    history.push('/signIn');
  };

  return (
    <div className="logSignButtonsContainer">
      <div className="logSignButtons">
        <button onClick={redirectSignUp} id="signUp" type="button">
          Sign-Up
        </button>
        <button onClick={redirectSignIn} id="login" type="button">
          Sign-In
        </button>
      </div>
      {props.noLog ? (
        <p
          onClick={() => {
            history.push('/map');
          }}
          id="noLogin"
        >
          Access the map without login
        </p>
      ) : null}
    </div>
  );
}
