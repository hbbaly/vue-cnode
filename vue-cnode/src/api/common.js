
import http from '@/utils/http'

export default {
  /*  首页获取文章列表
  * @param {number} page : 页数
  * @param {string} tab : 类型
  * @param {number} limit : 一页几条数据
  */
  getTopics: (data) => {
    return http.get(`topics?page=${data.page}&tab=${data.tab}&limit=${data.limit}`)
  }
}
