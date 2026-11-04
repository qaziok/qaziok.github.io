import type { Nuxt } from "nuxt/schema";

// Keep the plain MDC prose components so articles stay styled by `prose`.
const removeNuxtUiProse = (_options: unknown, nuxt: Nuxt) => {
  nuxt.hook("components:dirs", (dirs) => {
    const index = dirs.findIndex((dir) =>
      String(typeof dir === "string" ? dir : dir.path).includes(
        "@nuxt/ui/dist/runtime/components/prose"
      )
    );
    if (index !== -1) dirs.splice(index, 1);
  });
};

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    removeNuxtUiProse,
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
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-dark", // Light theme do not work great for now :(
            dark: "github-dark",
            light: "github-dark",
          },
          langs: ["python"],
        },
      },
    },
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
