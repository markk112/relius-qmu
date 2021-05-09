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
    usbAttached (context, device) {
      console.log('from state', device);
      if (context.state.status === 0) {
        context.commit('setStatus', 1);
      }
    }
  },
  modules: {
  }
})
