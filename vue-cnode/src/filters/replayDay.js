/*  过滤器
  * @param {string} val : 最后一次评论事件
  */
const replayDay = (val, type = 'replay') => {
  try {
    // 将UTC时间格式转化为时间戳
    let TPos = val.indexOf('T')
    let ZPos = val.indexOf('Z')
    let ymd = val.substr(0, TPos)
    let hms = val.substr(TPos + 1, ZPos - TPos - 1)
    let newDatetime = ymd + ' ' + hms
    // 处理成为时间戳
    let timestamp = new Date(Date.parse(newDatetime))
    let nowTime = new Date().getTime() // 获取当前时间戳
    // 计算距离当前几天
    let replayTime = nowTime - timestamp
    let replayHour = Math.ceil(replayTime / 1000 / 3600)
    // 不仅要计算天数，还要计算月份，年份
    if (replayHour >= 24 && replayHour < 720) {
      let day = Math.floor(replayHour / 24)
      return `${day}天前`
    } else if (replayHour >= 720 && replayHour < 24 * 30 * 12) {
      // 向下取整
      let month = Math.ceil(replayHour / 24 / 30)
      return `${month}月前`
      // return `${replayHour}小时前`
    } else if (replayHour >= 24 * 30 * 12) {
      // 年份向下取整
      let year = Math.floor(replayHour / 24 / 30 / 12)
      return `${year}年前`
    } else {
      return `${replayHour}小时前`
    }
  } catch (err) {
    return '没有评论'
  }
}
export default replayDay
