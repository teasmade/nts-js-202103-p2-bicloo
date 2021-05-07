import React, { useState } from 'react';
import Badges from './badges/Badges';
import History from './history/History';
import './Profile.css';
import UserService from '../../Services/UserService';

const Profile = () => {
  const pseudo = UserService.getUserName();
  const level = UserService.getLevel();
  const totalXp = UserService.getTotalXp();
  const [openBadges, setOpenBadges] = useState(true);
  const [openHistory, setOpenHistory] = useState(true);
  return (
    <div className="profileContainer">
      <h1 className="text-4xl my-5">Bonjour {pseudo}</h1>
      <div className="relative pt-1 w-11/12">
        <div
          style={{ backgroundColor: '#C4C4C4' }}
          className="overflow-hidden h-2 mb-4 text-xs flex rounded-2xl h-8"
        >
          <div
            style={{ backgroundColor: '#17BEBB' }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center w-3/4"
          >
            <p className="progress-text">{`total XP : ${totalXp}`}</p>
          </div>
        </div>
      </div>
      <p>
        Félicitations <strong>{pseudo}</strong>!
      </p>
      <p>Tu as atteint le niveau {level}</p>
      <div className="profile-howto">
        <p>Comment gagner plus d&apos;XP?</p>
      </div>
      <div className="profile-break-lines" />
      <section className="profile-sections">
        <button
          type="button"
          className="profil-sub-titles text-2xl mb-10"
          onClick={() => setOpenBadges(!openBadges)}
        >
          Mes badges
        </button>
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
      <section className="profile-sections">
        <button
          type="button"
          className="profil-sub-titles text-2xl mb-10"
          onClick={() => setOpenHistory(!openHistory)}
        >
          Mes trajets
        </button>
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
