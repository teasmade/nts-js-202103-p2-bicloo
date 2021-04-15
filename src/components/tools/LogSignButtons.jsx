/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './LogSignButtons.css';

export default function LogSignButtons(props) {
  return (
    <div className="logSignButtonsContainer">
      <div className="logSignButtons">
        <button id="signUp" type="button">
          Sign up
        </button>
        <button id="login" type="button">
          Login
        </button>
      </div>
      {props.noLog ? <p id="noLogin">Access the map without login</p> : null}
    </div>
  );
}
