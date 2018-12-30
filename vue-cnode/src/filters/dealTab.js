const dealTab = (val, isTop) => {
  try {
    if (isTop) {
      return '置顶'
    } else {
      let arr = ['ask', 'share', 'job', 'good']
      let arrText = ['问答', '分享', '招聘', '精华']
      let index = arr.indexOf(val)
      if (index >= 0) return arrText[index]
      return ''
    }
  } catch (err) {
    return ''
  }
}
export default dealTab
