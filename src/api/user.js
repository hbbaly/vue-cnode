
import http from '@/utils/http'

export default {
  // 首页获取用户详情
  getUserInfo: (data) => {
    return http.get(`user/${data.name}`)
  },
  // 首页获取文章详情
  getTopicDetail: (data) => {
    return http.get(`topic/${data.id}`)
  }
}
