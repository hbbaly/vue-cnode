const dealTab = (val) => {
  let arr = ['ask', 'share', 'job', 'good', 'dev']
  let arrText = ['问答', '分享', '招聘', '精华', '客户端测试']
  let index = arr.indexOf(val)
  if (index >= 0) return arrText[index]
}
export default dealTab
