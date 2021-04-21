import React, { useState } from 'react';
import LogSignButtons from '../tools/LogSignButtons';
import './Log.css';
import Profile from './Profile';

const Log = () => {
  const [logged, setLogged] = useState(true);

  const signPage = (
    <>
      <section className="log" id="profile">
        <div className="max-width">
          <div className="log-content">
            <div className="text-1">Log or Sign up to</div>
            <div className="text-2">see your profile</div>
          </div>
          <LogSignButtons />
        </div>
      </section>
    </>
  );

  return (
    <div className="logContainer">
      <button type="button" onClick={() => setLogged(!logged)}>
        Click to test
      </button>{' '}
      {logged ? <Profile /> : signPage}
    </div>
  );
};

export default Log;
