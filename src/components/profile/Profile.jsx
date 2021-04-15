import React from 'react';
import Background from '../../assets/background.png';

export default function Profile() {
  return (
    <div>
      <div className="bg-profile">
        <img src={Background} alt="backgroundImage" />
      </div>
    </div>
  );
}
