// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@clerk/nuxt'],

  clerk: {
    signInUrl: '/sign-in',
    afterSignInUrl: '/courses',
    afterSignUpUrl: '/courses',
  },

  content: {
    highlight: { theme: 'github-light' },
    markdown: { toc: { depth: 3 } }
  },

  css: ['~/assets/css/globals.css'],

  app: {
    head: {
      title: 'Classical Arabic with Peter Omar Kovacik',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A step-by-step programme in Classical Arabic — the language of the Qur\'an and the Islamic scholarly tradition — with Peter Omar Kovacik.'
        },
        { property: 'og:title', content: 'Classical Arabic with Peter Omar Kovacik' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://arabicwithomar.com' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IM+Fell+English:ital@0;1&family=Cinzel:wght@400;600&display=swap'
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  compatibilityDate: '2024-11-01',
})