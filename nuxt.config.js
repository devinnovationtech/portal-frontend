export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portal Jabarprov - Satu Portal untuk Semua Hal Tentang Jawa Barat',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portal ini menyediakan informasi resmi, akses ke berbagai layanan publik, dan tempat menyampaikan aspirasi mengenai program dari Pemerintah Daerah Provinsi Jawa Barat.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      // Preload Images
      { rel: 'preload', as: 'image', href: '/logo-mobile.svg' },
      { rel: 'preload', as: 'image', href: '/images/banners/1.webp' },
      { rel: 'preload', as: 'image', href: '/images/hero.svg' }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      newrelic: ['innerHTML']
    }
  },

  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/fonts/intro.css',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/jabar-design-system.js',
    '~/plugins/vue-gtag',
    '~/plugins/vue-awesome-swiper',
    '~/plugins/vue-touch-events',
    '~/plugins/vue-lazy-load',
    '~/plugins/vue-easy-lightbox',
    '~/plugins/lite-youtube-embed.client.js',
    '~/plugins/device.server',
    '~/plugins/newrelic-browser.server',
    '~/plugins/hotjar.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  publicRuntimeConfig: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    axios: {
      browserBaseURL: process.env.BROWSER_API_URL
    },
    newrelic: {
      accountId: process.env.NEW_RELIC_ACCOUNT_ID,
      applicationId: process.env.NEW_RELIC_APPLICATION_ID,
      licenseKey: process.env.NEW_RELIC_LICENSE_KEY
    },
    hotjarSiteId: process.env.HOTJAR_SITE_ID
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  eslint: {
    fix: true
  },

  googleFonts: {
    families: {
      Lato: [400, 500, 600, 700],
      Roboto: [400, 500, 600, 700],
      Lora: [400, 500, 600, 700],
      'Open Sans': [400, 500, 600, 700]
    },
    display: 'swap',
    preload: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'portal-vue/nuxt',
    // https://www.npmjs.com/package/vue-social-sharing
    'vue-social-sharing/nuxt',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000'
  },

  // // Nuxt Toast configuration: https://github.com/shakee93/vue-toasted#options
  // toast: {
  //   position: 'top-center',
  //   theme: 'bubble'
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@jabardigitalservice/jds-design-system',
      /@fullcalendar.*/
    ],
    postcss: {
      plugins: {
        cssnano: {
          preset: ['default', { calc: false }]
        }
      }
    }
  },

  loading: {
    color: '#FFC62E'
  }
}
