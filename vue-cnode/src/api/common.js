
import http from '@/utils/http'
const defaultTopics = {
  page: 1,
  tab: '',
  limit: 10
}
export default {
  /*  首页获取评论列表
  * @param {number} page : 页数
  * @param {string} tab : 类型
  * @param {number} limit : 一页几条数据
  */
  getTopics: (data = defaultTopics) => {
    return http.get(`topics?page=${data.page}&tab=${data.tab}&limit=${data.limit}`)
  }
}
