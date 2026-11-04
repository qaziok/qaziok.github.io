<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <article v-if="doc">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
          <AppComments />
        </article>
      </article>
      <h3 v-else>Sorry, but the article you're looking for doesn't exist.</h3>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
const { data: doc } = await useAsyncData(`article-${slug}`, () =>
  queryCollection("articles").path(`/articles/${slug}`).first()
);

useSeoMeta({
  title: doc.value?.title,
  description: doc.value?.description,
  ogTitle: doc.value?.title,
  ogDescription: doc.value?.description,
  twitterCard: "summary_large_image",
  articleAuthor: "Jakub Dajczak",
});

defineOgImage("Article", { title: doc.value?.title });
</script>
<style>
.prose h2 a,
.prose h3 a {
  text-decoration-line: none;
}
</style>
