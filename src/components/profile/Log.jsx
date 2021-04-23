import React, { useEffect, useState } from 'react';
import LogSignButtons from '../tools/LogSignButtons';
import './Log.css';
import Profile from './Profile';
import UserService from '../../Services/UserService';

const Log = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => setLogged(UserService.getUser()), []);
  const signPage = (
    <>
      <section className="log" id="profile">
        <div className="max-width">
          <div className="log-content">
            <div className="text-1">Log or Sign up to</div>
            <div className="text-2">see your profile</div>
          </div>
          <LogSignButtons noLog page="profile" />
        </div>
      </section>
    </>
  );

  return <div className="logContainer">{logged ? <Profile /> : signPage}</div>;
};

export default Log;
