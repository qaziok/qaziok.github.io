<template>
  <main>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc tag="article">
        <template v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h3>Sorry, but the article you're looking for doesn't exist.</h3>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "Jakub Dajczak",
});

defineOgImageComponent("Article");
</script>
<style lang="postcss">
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
