import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "nuxt-schema-org",
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
        default: "github-light",
        dark: "github-dark",
        light: "github-light",
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

  runtimeConfig: {
    public: {
      giscusThemeBase: "https://qaziok.github.io/giscus",
      giscusCategory: "Blog",
      giscusCategoryId: "DIC_kwDOMenMCc4CpIS2",
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
  },

  site: {
    url: "https://qaziok.github.io",
    name: "Jakub Dajczak's personal blog",
    trailingSlash: true,
  },

  schemaOrg: {
    identity: definePerson({
      name: "Jakub Dajczak",
      image: "/avatar.png",
      url: "https://qaziok.github.io",
      sameAs: [
        "https://github.com/qaziok",
        "https://www.linkedin.com/in/qaziok/",
      ],
    }),
  },

  compatibilityDate: "2025-01-30",
});
