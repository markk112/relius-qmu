import { createStore } from 'vuex'

export default createStore({
  state: {
    status: 0,
    questSerial: 'XXXXXXXXXXXXXX',
    questCustomName: 'John\'s Quest',
    questFirmwareVersion: '?',
    questModel: 'unknown'
  },
  mutations: {
    setStatus (state, status) {
      state.status = status;
    },
    setQuestSerial (state, questSerial) {
      state.questSerial = questSerial;
    }
  },
  actions: {
    questAttached (context, device) {
      if (context.state.status === 0) {
        context.commit('setStatus', 1);
      }
    },
    questRemoved (context, device) {
      if (context.state.status === 1) {
        context.commit('setStatus', 0);
      }
    },
    setQuestSerial ({ commit }, questSerial) {
      commit('setQuestSerial', questSerial);
    },
  },
  modules: {
  }
})
