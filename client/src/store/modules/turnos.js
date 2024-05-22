const state = {
    turnos: [],
    lastCalled: [],
    currentTurn: null,
    turnCounter: { N: 0, P: 0, BG: 0 },
  };
  
  const getters = {
    turnosEnEspera: (state) => state.turnos,
    ultimosLlamados: (state) => state.lastCalled,
    siguienteTurno: (state) => {
      if (state.turnos.length > 0) {
        return state.turnos[0];
      }
      return null;
    },
  };
  
  const actions = {
    agregarTurno({ commit }, turno) {
      commit('AGREGAR_TURNO', turno);
    },
    llamarTurno({ commit }, { turno, modulo }) {
      commit('LLAMAR_TURNO', { turno, modulo });
    },
    siguienteTurno({ commit }) {
      commit('SIGUIENTE_TURNO');
    },
  };
  
  const mutations = {
    AGREGAR_TURNO(state, turno) {
      state.turnos.push(turno);
    },
    LLAMAR_TURNO(state, { turno, modulo }) {
      state.turnos = state.turnos.filter((t) => t.codigo !== turno.codigo);
      const llamado = { ...turno, modulo };
      state.lastCalled.unshift(llamado);
      if (state.lastCalled.length > 5) {
        state.lastCalled.pop();
      }
    },
    SIGUIENTE_TURNO(state) {
      if (state.turnos.length > 0) {
        state.currentTurn = state.turnos.shift();
      }
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  