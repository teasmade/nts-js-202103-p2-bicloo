/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './LogSignButtons.css';
import { useHistory } from 'react-router-dom';

export default function LogSignButtons(props) {
  const signUp = useHistory();
  const signIn = useHistory();

  const redirectSignUp = () => {
    signUp.push('/signUp');
  };

  const redirectSignIn = () => {
    signIn.push('/signIn');
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
      {props.noLog ? <p id="noLogin">Access the map without login</p> : null}
    </div>
  );
}
