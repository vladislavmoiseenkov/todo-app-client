const state = {
  user: null,
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

const actions = {
  setUser({ commit }, userData) {
    commit('setUser', userData);
  },
};

const mutations = {
  setUser(state, userData) {
    // eslint-disable-next-line
    state.user = { ...userData };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
