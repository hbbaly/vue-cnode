module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/css/reset.css'],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /** 
   * plugins
   */
  plugins: ['~/plugins/flexible.js','~/plugins/better-scroll.js','~/plugins/allFilters.js'],
  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // 这里从插件，只加载一次
    vendor: ['axios', 'lib-flexible','better-scroll'],
      postcss: {
        plugins: {
            // Disable `postcss-url`
          'postcss-url': false,
          // Add some plugins
          'postcss-px2rem':{
            remUnit: 75
          }
        },
        preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
  }
}

