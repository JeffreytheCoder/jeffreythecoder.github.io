
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'static',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Jeffrey Yu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: "Who is Jeffrey Yu | Personal Website", name: "Who is Jeffrey Yu | Personal Website", content: "Who is Jeffrey Yu | Personal Website" }
    ],
    // script: [
    //   { innerHTML: require('./assets/js/flexible_nuxt'), type: 'text/javascript', charset: 'utf-8'}
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/yu_logo.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'aos/dist/aos.css',
    'vue-typed-js/dist/vue-typed-js.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '@/plugins/ElementUI', ssr: true },
    {src: '@/plugins/ParticlesBG', mode: 'client'},
    {src: '@/plugins/VueParticles', mode: 'client'},
    {src: '@/plugins/aos.js', mode: 'client'},
    {src: '@/plugins/VueTypedJS.js', mode: 'client'},
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components1
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', {duration: 1000}],
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: ['axios'],
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
  }
}
