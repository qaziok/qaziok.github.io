export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
  ],

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },

  mdc: {
    highlight: {
      theme: {
        default: "github-dark",
        dark: "github-dark",
        light: "github-dark",
      },
      langs: ["python"],
    },
  },

  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700, 800, 900],
      },
      { name: "Cascadia Code", provider: "none" },
    ],
  },

  site: {
    url: "https://qaziok.github.io",
    name: "Jakub Dajczak's personal blog",
  },

  compatibilityDate: "2025-01-30",
});
