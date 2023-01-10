import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  ssr: false,

  head: {
    titleTemplate: '%s',
    title: 'Landing Page MIS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }
    ],
    script: [
      {
         src: '/js/state.js'
      }
    ],
  },

  css: [
  ],

  plugins: [
    {src:'~/plugins/toastr.js'},
    {src:'~/plugins/sweetalert2.js'},
    {src:'~/plugins/index.js'}
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.baseURL+'api/',
    credentials:true
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints:{
            login:{
              url:'/api/login'
            },
            logout:{
              url:'/api/logout'
            },
            user:{
              url:'/api/me'
            }
        },
      },
    },
    redirect:{
      login:'/login',
      logout:'/login',
      home:'/'
    }
  },

  router: {
    middleware: ['auth']
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
