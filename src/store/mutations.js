import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN_FLAG] (state, flag) {
    state.loginFlag = flag
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  }
}

export default mutations
