import { definePerson } from "nuxt-schema-org/schema";
import { isIsoDate } from "./utils/date";

const invalidArticleDates: string[] = [];

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

  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  hooks: {
    "content:file:afterParse"({ collection, content }) {
      if (collection.name !== "articles") return;
      for (const field of ["published", "updated"]) {
        const value = content[field];
        if (value != null && !isIsoDate(value)) {
          const message = `${content.id}: "${field}" must be a YYYY-MM-DD date, got ${JSON.stringify(value)}`;
          invalidArticleDates.push(message);
          throw new Error(message);
        }
      }
    },
    "build:before"() {
      if (invalidArticleDates.length) {
        throw new Error(invalidArticleDates.join("\n"));
      }
    },
  },

  compatibilityDate: "2025-01-30",
});
