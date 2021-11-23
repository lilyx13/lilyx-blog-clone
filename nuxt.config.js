export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Lilyx Web Consulting",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
    "@nuxt/image",
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Bebas+Neue': true,
      Montserrat: [300, 400, 600, 700],
      'Source+Code+Pro': true
    },
    preconnect: true
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://content.nuxtjs.org/themes/docs/
    "@nuxt/content",
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
