import tools from '@/utils/tools'

const state = {
  userInfo: {
    token: '',
    roleId: '',     // 5：家长，4：老师
    userName: '',
    phone: ''
  }
}

const mutations = {
  putUserInfo (state, val) {
    state.userInfo = {
      ...state.userInfo,
      ...val
    }
    tools.setCookie('userInfo', state.userInfo, 86400000)     // 24小时有效
  }
}

const actions = {
  putUserInfo: ({ commit }, val) => commit('putUserInfo', val)
}

const getters = {
  userInfo: state => state.userInfo
}

export default {
  state,
  getters,
  actions,
  mutations
}
