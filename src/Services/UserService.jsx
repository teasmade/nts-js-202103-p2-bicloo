/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import axios from '../axios-orders';

const UserService = {
  // user id in state
  user: null,

  levels: [0, 1000, 2000, 5000, 10000],

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

    this.levels.forEach((lvl, index) => {
      if (this.user.total_xp_won >= lvl && this.user.level !== index)
        this.setLevel(index);
    });
  },

  remove(nbXp) {
    this.user.current_xp -= nbXp;
    this.updateUser('current_xp', this.user.current_xp);
  },

  getCurrentXp() {
    return this.user.current_xp;
  },

  getTotalXp() {
    return this.user.total_xp_won;
  },

  getLevel() {
    return this.user.level;
  },

  setLevel(index) {
    this.user.level = index;
  },

  // getBadgesWon

  // addBadge

  // getRewardsBought

  // addRewardBougth
};

export default UserService;
