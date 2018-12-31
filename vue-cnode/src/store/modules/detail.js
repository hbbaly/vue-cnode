
import API from '../../api'
import Types from '../types'
const state = {
  topicDetail: {}
}

const getters = {
  topicDetail: state => {
    return state.topicDetail
  }
}
console.log(Types)
const actions = {
  [Types.GET_TOPIC_DETAIL]: async ({commit}, data) => {
    await API.detail.getTopicDetail(data).then(res => {
      commit(Types.GET_TOPIC_DETAIL, res.data.data)
    })
  }
}

const mutations = {
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
