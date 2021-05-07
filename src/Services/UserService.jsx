import axios from '../axios-orders';

const UserService = {
  // user id in state
  user: null,
  rewards: null,

  levels: [0, 1000, 2000, 5000, 10000],

  getUser() {
    const storedUser = localStorage.getItem('user');
    if (!this.user && storedUser) {
      this.user = JSON.parse(storedUser);
    }
    return this.user || null;
  },

  logUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  },

  logOut() {
    this.user = null;
    localStorage.removeItem('user');
  },

  async getAllUsers() {
    const usersData = await axios.get('/users.json').then((res) => res.data);
    return usersData;
  },

  async createUserInDatabase(uid, name) {
    let usersData = await axios.get('/users.json').then((res) => res.data);
    // check if the user isn't already existing, if not, create it
    if (!usersData[uid]) {
      usersData = await axios
        .put(
          `/users/${uid}/.json`,
          {
            id: uid,
            pseudo: name,
            current_xp: 0,
            total_xp_won: 0,
            level: 1,
            user_ID: uid,
            badges_won: [],
            reward_bought: [],
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          return res.data;
        });
    } else {
      usersData = usersData[uid];
    }
    this.logUser(usersData);
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

  getUserName() {
    return this.user.pseudo;
  },

  removeXp(nbXp) {
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

  getAllBadge() {
    const userBadges = this.user.badges_won || [];
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
    const userRewards = this.user.rewards_bought || [];
    return axios
      .get('/rewards.json')
      .then((data) => data.data)
      .then((data) => {
        return data.map((reward) => {
          const newReward = reward;
          newReward.active = !!userRewards.includes(newReward.id);
          newReward.buyable = this.user.current_xp >= newReward.price;
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
    if (!this.user.rewards_bought) {
      this.user.rewards_bought = [];
    }

    if (!this.user.rewards_bought.includes(rewardId)) {
      this.user.rewards_bought.push(rewardId);
      this.updateUser('rewards_bought', this.user.rewards_bought);
    }
  },

  setValidatedRoute(xp) {
    if (!this.user.journeys) {
      this.user.journeys = [];
    }
    this.user.journeys.push({ date: Date.now(), xp });
    this.updateUser('journeys', this.user.journeys);
  },

  getJourneys() {
    return this.user.journeys;
  },
};

export default UserService;
