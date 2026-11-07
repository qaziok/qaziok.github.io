import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: "page",
      source: "articles/*.md",
      schema: z.object({
        published: z.string(),
        slug: z.string(),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects/*.json",
      schema: z.object({
        name: z.string(),
        url: z.string(),
        description: z.string(),
        thumbnail: z.string(),
      }),
    }),
    experience: defineCollection({
      type: "data",
      source: "experience/*.json",
      schema: z.object({
        title: z.string(),
        company: z.string(),
        url: z.string(),
        period: z.string(),
        points: z.array(z.string()),
        tags: z.array(z.string()),
      }),
    }),
    links: defineCollection({
      type: "data",
      source: "links/*.json",
      schema: z.object({
        name: z.string(),
        url: z.string().optional(),
        filename: z.string().optional(),
        icon: z.string(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
