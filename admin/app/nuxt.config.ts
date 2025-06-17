// https://nuxt.com/docs/api/configuration/nuxt-config
import 'dotenv/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Validations',
    },
  },
  devServer: {
    host: '0.0.0.0',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@pinia/nuxt', '@nuxtjs/leaflet', '@formkit/nuxt'],
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [],
      failOnError: false,
    },
  },
  ssr: false,
})
