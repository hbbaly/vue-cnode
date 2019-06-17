import Vue from 'vue'
import dealTab from './dealTab'
import replayDay from './replayDay'
let filters = {
  dealTab,
  replayDay
}
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))
export default filters