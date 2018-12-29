/**
 * 首页 api
 */
import http from '@/utils/http'
const defaultTopics = {
  page:1,
  tab:"",
  limit:10
}
 export default {
   /**
    * @type page : 页数
    * @type tab : 类型
    * @type limit : 一页几条数据
    */
   getTopics: (data = defaultTopics) => {
     return http.get(`topics?page=${data.page}&tab=${data.tab}&limit=${data.limit}`)
   }
 }