/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import axios from '../axios-orders';

const UserService = {
  // user id in state
  user: null,

  getUser() {
    return this.user || null;
  },

  logUser(pseudo, password) {
    return axios
      .get('/users.json')
      .then((data) => data.data)
      .then((data) => {
        console.log(data);
        const userToLog = null;
        // iterate through users
        for (const user in data) {
          console.log(data[user]);
          if (
            (data[user].pseudo === pseudo || data[user].email === pseudo) &&
            data[user].password === password
          ) {
            this.user = data[user];
          }
        }
        return this.user ? Promise.resolve(true) : Promise.reject(false);
      });
  },

  logOut() {
    this.user = null;
  },

  updateUser(property, value) {
    axios.patch(
      `/users/${this.user.user_ID}/.json`,
      { [property]: value },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
  },

  addXp(nbXp) {
    this.user.total_xp_won += nbXp;
    this.user.current_xp += nbXp;
    this.updateUser('total_xp_won', this.user.total_xp_won);
    this.updateUser('current_xp', this.user.current_xp);
  },

  remove(nbXp) {
    this.user.current_xp -= nbXp;
    this.updateUser('current_xp', this.user.current_xp);
  },

  // getLevel

  // setLevel

  // getBadgesWon

  // addBadge

  // getRewardsBought

  // addRewardBougth
};

export default UserService;
