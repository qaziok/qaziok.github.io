export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
  ],

  ui: {
    icons: ["heroicons", "lucide"],
  },

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
    highlight: {
      theme: {
        default: "github-dark", // Light theme do not work great for now :(
        dark: "github-dark",
      },
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  site: {
    url: "https://qaziok.github.io",
    name: "Jakub Dajczak's personal blog",
  },

  mdc: {
    highlight: {
      langs: ['python']
    }
  },

  compatibilityDate: "2025-01-30",
});
