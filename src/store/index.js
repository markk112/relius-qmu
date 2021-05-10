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
    questAttached (context, device) {
      if (context.state.status === 0) {
        console.log(device);
        context.commit('setStatus', 1);
      }
    },
    questRemoved (context, device) {
      if (context.state.status === 1) {
        context.commit('setStatus', 0);
      }
    }
  },
  modules: {
  }
})
