// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@pinia/nuxt'
  ],
  features:{
    inlineStyles:false
  },

  css:['~/assets/style/main.css'],

  app:{
    head:{
      htmlAttrs:{
        dir:"rtl"
      }
    }
  },
})