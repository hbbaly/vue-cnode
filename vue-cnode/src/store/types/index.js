const context = require.context('@/store/types', true, /\w*\.js$/)
console.log(context)
const types = {}

const assign = Object.assign

const toHump = str => str.replace(/\/(\w)/g, ($0, $1) => $1.toUpperCase()).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())

context.keys().map(key => {
  const moduleName = toHump(key).replace(/\.js/g, '').replace(/\./, '')
  if (moduleName !== 'Index') {
    assign(types, context(key).default || context(key))
  }
})

export default types
