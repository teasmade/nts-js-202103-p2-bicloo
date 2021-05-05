import axios from '../axios-orders';

const UserService = {
  // user id in state
  user: null,
  rewards: null,

  levels: [0, 1000, 2000, 5000, 10000],

  getUser() {
    return this.user || null;
  },

  logUser(pseudo, password) {
    return axios
      .get('/users.json')
      .then((data) => data.data)
      .then((data) => {
        // iterate through users
        const users = Object.entries(data);
        [, this.user] = users.find(
          (user) =>
            (user[1].pseudo === pseudo || user[1].email === pseudo) &&
            user[1].password === password
        );

        return this.user ? Promise.resolve(true) : Promise.resolve(false);
      });
  },

  logOut() {
    this.user = null;
  },

  // createUser() {
  //   axios.
  // },

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

  getUserName() {
    return this.user.pseudo;
  },

  removeXp(nbXp) {
    this.user.total_xp_won -= nbXp;
    this.updateUser('total_xp_won', this.user.total_xp_won);
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

  getAllBadge() {
    const userBadges = this.user.badges_won;
    return axios
      .get('/badges.json')
      .then((data) => data.data)
      .then((data) => {
        return data.map((badge) => {
          const newBadge = badge;
          newBadge.active = !!userBadges.includes(newBadge.id);
          return newBadge;
        });
      });
  },

  addBadge(badgeId) {
    if (!this.user.badges_won.includes(badgeId)) {
      this.user.badges_won.push(badgeId);
      this.updateUser('badges_won', this.user.badges_won);
    }
  },

  // renamed to reflect fetch of all rewards plus active or not for this.user
  // ADD IN PROMISE RESOLVE STEP???
  getUserRewards() {
    const userRewards = this.user.rewards_bought;
    return axios
      .get('/rewards.json')
      .then((data) => data.data)
      .then((data) => {
        return data.map((reward) => {
          const newReward = reward;
          newReward.active = !!userRewards.includes(newReward.id);
          newReward.buyable = this.user.total_xp_won >= newReward.price;
          return newReward;
        });
      });
  },

  // renamed to reflect fetch of all possible rewards
  // if rewards not yet called, start promise chain; if rewards already !null, return this.rewards as a promise so that it works with method call (still async) further down the chain.
  getAllRewards() {
    if (this.rewards) {
      return Promise.resolve(this.rewards);
    }

    return axios.get('/rewards.json').then((response) => {
      this.rewards = response.data;
      return response.data;
    });
  },

  addRewardBought(rewardId) {
    if (!this.user.rewards_bought.includes(rewardId)) {
      this.user.rewards_bought.push(rewardId);
      this.updateUser('rewards_bought', this.user.rewards_bought);
    }
  },
};

export default UserService;
