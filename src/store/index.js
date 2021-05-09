import { createStore } from 'vuex'

export default createStore({
  state: {
    status: 0,
  },
  mutations: {
    setStatus (state, status) {
      state.status = status;
    }
  },
  actions: {
    usbAttached ({commit}, device) {
      console.log('true');
      if (this.state.status === 0) {
        commit('setStatus', 1);
      }
    }
  },
  modules: {
  }
})
