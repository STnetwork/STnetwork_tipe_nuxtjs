const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (env === 'development') {
  require('dotenv').config()
}
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    linkActiveClass: 'is-active'
  },
  mode: 'spa',
  plugins: ['~plugins/buefy'],
  env: {
    TIPE_API_KEY: process.env.TIPE_API_KEY,
    TIPE_ID: process.env.TIPE_ID
  },
  head: {
    title: 'STnetwork',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'STnetwork Systems & Networks' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['@nuxtjs/apollo', 'nuxt-buefy', '@nuxtjs/font-awesome', '@nuxtjs/pwa', '@nuxtjs/webpackmonitor'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/default.js'
    }
  },
  css: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#830CD6' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
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
    }
  }
}
