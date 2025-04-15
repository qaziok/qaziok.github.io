<template>
  <main>
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const title = "Articles | Jakub Dajczak";
const description =
  "All of my articles. This section is important to me because I want to share what I’ve learned, what I’ve accomplished, and the struggles I’ve overcome. I hope you enjoy them.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

defineOgImageComponent("Page", {
  title: "Articles",
  subTitle: "Write-ups on coding and tech topics",
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>
