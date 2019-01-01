
import API from '../../api'
import Types from '../types'
const state = {
  userInfo: {}, // 用户详情
  topicDetail: {} // 话题详情
}

const getters = {
  userInfo: state => {
    return state.userInfo
  },
  topicDetail: state => {
    return state.topicDetail
  }
}
const actions = {
  [Types.GET_USER_INFO]: async ({commit}, data) => {
    await API.user.getUserInfo(data).then(res => {
      commit(Types.GET_USER_INFO, res.data.data)
    })
  },
  [Types.GET_TOPIC_DETAIL]: async ({commit}, data) => {
    await API.user.getTopicDetail(data).then(res => {
      commit(Types.GET_TOPIC_DETAIL, res.data.data)
    })
  }
}

const mutations = {
  [Types.GET_USER_INFO]: (state, list) => {
    state.userInfo = list
  },
  [Types.GET_TOPIC_DETAIL]: (state, list) => {
    state.topicDetail = list
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
