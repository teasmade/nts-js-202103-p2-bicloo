/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Badges from './badges/Badges';
import History from './history/History';
import './Profile.css';

const Profile = () => {
  const user = 'Fake user'; // getUser() from user service
  const xp = '1500xp';
  const [openBadges, setOpenBadges] = useState(true);
  const [openHistory, setOpenHistory] = useState(true);
  return (
    <div className="profileContainer">
      <h1 className="text-4xl my-5">Bonjour {user}</h1>
      <div className="relative pt-1 w-11/12">
        <div
          style={{ backgroundColor: '#C4C4C4' }}
          className="overflow-hidden h-2 mb-4 text-xs flex rounded-2xl h-8"
        >
          <div
            style={{ backgroundColor: '#17BEBB' }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center w-3/4"
          >
            <p className="progress-text">{xp}</p>
          </div>
        </div>
      </div>
      <p className="text-center">
        Félicitation <strong>{user}</strong>! Tu as atteind le niveau &quot;get
        the info&quot;
      </p>
      <div className="profile-howto">
        <p>Comment gagner plus d&apos;XP?</p>
      </div>
      <div className="profile-break-lines" />
      <section
        className="profile-sections"
        onClick={() => setOpenBadges(!openBadges)}
      >
        <h2 className="profil-sub-titles text-2xl mb-10">Mes badges</h2>
        <div
          className={`profile-sections-container${
            openBadges ? '_open' : '_close'
          }`}
        >
          {/* map sur les badges aquis */}
          <Badges badgeTitle="1km" number={1} />
          <Badges badgeTitle="champion" number={2} />
          <Badges badgeTitle="10km" number={3} />
          <Badges badgeTitle="super champion" number={4} />
        </div>
      </section>
      <div className="profile-break-lines" />
      <section
        className="profile-sections"
        onClick={() => setOpenHistory(!openHistory)}
      >
        <h2 className="profil-sub-titles text-2xl mb-10">Mes trajets</h2>
        <div
          className={`profile-sections-container${
            openHistory ? '_open' : '_close'
          }`}
        >
          {/* map sur les trajets réalisés */}
          <History date="01/01/1850" length="15" xp="160" />
          <History date="01/02/1850" length="10" xp="120" />
          <History date="01/03/1850" length="5" xp="95" />
          <History date="01/04/1850" length="12" xp="137" />
        </div>
      </section>
    </div>
  );
};

export default Profile;
