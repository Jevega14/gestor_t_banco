import axios from 'axios';

const state = {
  turnos: [],
};

const mutations = {
  SET_TURNOS(state, turnos) {
    state.turnos = turnos;
  },
};

const actions = {
  async fetchTurnos({ commit }) {
    try {
      const response = await axios.get('/api/turnos');
      commit('SET_TURNOS', response.data);
    } catch (error) {
      console.error('Error fetching turnos:', error);
    }
  },
};

const getters = {
  allTurnos: state => state.turnos,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
