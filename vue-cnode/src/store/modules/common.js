
import API from '../../api'
import Types from '../types'
const state = {
  topicList: []
}

const getters = {
  topicList: state => {
    return state.topicList
  }
}

const actions = {
  [Types.GET_TOPICS]: async ({commit}, data) => {
    await API.common.getTopics(data).then(res => {
      if (data.page === 1) commit(Types.GET_FIRSTTOPICS, res.data.data)
      commit(Types.GET_TOPICS, res.data.data)
    })
  }
}

const mutations = {
  [Types.GET_TOPICS]: (state, list) => {
    state.topicList = [...state.topicList, ...list]
  },
  [Types.GET_FIRSTTOPICS]: (state, list) => {
    state.topicList = list
  },
  resetTpics: (state) => {
    state.topicList = []
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
