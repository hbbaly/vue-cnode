import API from '../api/index.js'
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
  // 服务端渲染，专用
  async nuxtServerInit ({ commit }, data ) {
    await API.common.getTopics().then(res => {
      if (data.page === 1) {
        commit(Types.GET_FIRSTTOPICS, res.data.data)
      } else {
        commit(Types.GET_TOPICS, res.data.data)
      }
    })
  },
  [Types.GET_TOPICS]: async ({commit}, data) => {
    await API.common.getTopics(data).then(res => {

      if (data.page === 1) {
        commit(Types.GET_FIRSTTOPICS, res.data.data)
      } else {
        commit(Types.GET_TOPICS, res.data.data)
      }
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
  state: () => state,
  getters,
  actions,
  mutations
}