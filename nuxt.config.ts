// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {

  },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'everything Nuxt3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})

