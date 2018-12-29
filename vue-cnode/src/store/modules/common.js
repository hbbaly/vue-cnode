
import API from '../../api'
import Types from '../types'
const state = {
  topicList: []
}

const getter = {
  topicList: state => {
    return state.topicList
  }
}

const actions = {
  [Types.GET_TOPICS]: ({commit}, data) => {
    return API.common.getTopics(data).then(res => {
      commit(Types.GET_TOPICS, res.data.data)
    })
  }
}

const mutations = {
  [Types.GET_TOPICS]: (state, data) => {
    state.topicList = data
  }
}
export default {
  state,
  getter,
  actions,
  mutations
}
