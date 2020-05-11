import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: (process.env.NODE_ENV != 'production'),
  state,
  mutations,
  actions,
  modules,
  getters
})
