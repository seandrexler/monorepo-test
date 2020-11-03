export default {
  namespaced: true,
  state: {
    userAccount: undefined,
    loggedIn: false
  },
  mutations: {
    SET_USER_ACCOUNT(state, details) {
      state.userAccount = details.userAccount;
      state.loggedIn = details.loggedIn;
    }
  },
  actions: {
    updatedLoggedIn({ commit }, details) {
      commit('SET_USER_ACCOUNT', details);
    }
  },
  getters: {}
};
