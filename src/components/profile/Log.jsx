import React, { useEffect, useState } from 'react';
/* import LogSignButtons from '../tools/LogSignButtons'; */
import './Log.css';
import Profile from './Profile';
import UserService from '../../Services/UserService';
import SignIn from './signin/SignIn';

const Log = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => setLogged(UserService.getUser()), []);

  return (
    <div className="logContainer">{logged ? <Profile /> : <SignIn />}</div>
  );
};

export default Log;
