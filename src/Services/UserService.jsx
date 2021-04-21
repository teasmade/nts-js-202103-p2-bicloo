/* eslint-disable no-unused-vars */
import { useState } from 'react';

const UserService = () => {
  // user id in state
  const [loggedUser, setLoggedUser] = useState(null);

  const getUser = (id) => {
    if (loggedUser) {
      return Promise.resolve(loggedUser);
    }
    return fetch('./Database.json').then((data) => {
      const loggeduser = data.users.find((user) => user.id === id);
      setLoggedUser(loggeduser);
      return loggedUser;
    });
  };

  // const logUser;

  // logOut

  // checkPassword return true/false

  // getXp

  // addXp

  // removeXp

  // getLevel

  // setLevel

  // getBadgesWon

  // addBadge

  // getRewardsBought

  // addRewardBougth
};

export default UserService;
