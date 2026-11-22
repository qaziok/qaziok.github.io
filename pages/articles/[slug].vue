<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article>
        <h1>{{ title }}</h1>
        <ContentRenderer :value="doc" />
        <AppComments />
      </article>
    </div>
  </main>
</template>

<script setup>
import { defineArticle, useSchemaOrg } from "#schema-org/app";

const route = useRoute();
const { slug } = route.params;
const { data: doc } = await useAsyncData(`article-${slug}`, () =>
  queryCollection("articles").path(`/articles/${slug}`).first()
);

if (!doc.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Sorry, but the article you're looking for doesn't exist.",
    fatal: true,
  });
}

const { published, description, subtitle } = doc.value;
const updated = doc.value.updated ?? published;
const title = articleTitle(doc.value);

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "article",
  twitterCard: "summary_large_image",
  articleAuthor: "Jakub Dajczak",
  articlePublishedTime: published,
  articleModifiedTime: updated,
});

useSchemaOrg([
  defineArticle({
    headline: title,
    description,
    datePublished: published,
    dateModified: updated,
  }),
]);

defineOgImage("Page", {
  title: doc.value.title,
  subTitle: subtitle,
  label: `Article · ${formatDate(published)}`,
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  text-decoration-line: none;
}
</style>
