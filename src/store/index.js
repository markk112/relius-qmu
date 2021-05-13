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

    setStatus(state, status) {
      state.status = status;
    },

    updateDeviceProps(state, questObj) {
      state.questSerial = questObj.serial;
      state.questFirmwareVersion = questObj.firmware;
      let qModel;
      if (questObj.model === 'hollywood') {
        qModel = 'quest 2';
      }
      const formattedModelStr = questObj.manufacturer + ' ' + qModel;
      state.questModel = formattedModelStr;
    }

  },
  actions: {

    questAttached(context, device) {
      if (context.state.status === 0) {
        context.commit('setStatus', 1);
      }
    },

    questRemoved(context, device) {
      if (context.state.status === 1) {
        context.commit('setStatus', 0);
      }
    },

    updateDeviceProps({ commit }, propsObj) {
      commit('updateDeviceProps', propsObj);
    }

  },
  modules: {
  }
})
