const context = require.context('@/store/modules', true, /\w*\.js$/)

const toHump = str => str.replace(/\/(\w)/g, ($0, $1) => $1.toUpperCase()).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())

const modules = {}

context.keys().map(key => {
  const moduleName = toHump(key).replace(/\.js/g, '').replace(/\./, '') || 'app'
  if (moduleName !== 'Index') {
    modules[moduleName] = context(key).default || context(key)
  }
})
export default modules
