import Vue from 'vue';
import Vuex from 'vuex';
import turnos from './modules/turnos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    turnos,
  },
});
