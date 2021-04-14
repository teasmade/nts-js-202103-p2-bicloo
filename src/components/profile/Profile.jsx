import React from 'react';
import LogSignButtons from '../tools/LogSignButtons';
import './Profile.css';

export default function Profile() {
  return (
    <div>
      <div className="hero-profile">
        <h1 className="title-profile">Log or sign up to see your profile !</h1>
        <LogSignButtons />
      </div>
    </div>
  );
}
