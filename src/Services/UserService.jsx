/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */

const UserService = {
  // user id in state
  user: null,

  getUser() {
    return this.user || null;
  },

  logUser(pseudo, password) {
    return fetch('Users.json')
      .then((response) => response.json())
      .then((data) => {
        const userToLog = data.users.find(
          (user) => user.pseudo === pseudo || user.email === pseudo
        );
        if (userToLog && userToLog.password === password) {
          this.user = userToLog;
          console.log('mdp ok');
          return Promise.resolve(true);
        } else {
          console.log('mdp ko');

          return Promise.reject(false);
        }
      });
  },

  logOut() {
    this.user = null;
  },

  // getXp

  // addXp

  // removeXp

  // getLevel

  // setLevel

  // getBadgesWon

  // addBadge

  // getRewardsBought

  // addRewardBougth

  // return [getUser, logUser];
};

export default UserService;
