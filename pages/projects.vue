<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const title = "Projects | Jakub Dajczak";
const description =
  "There are some of my projects that I'm proud of. That's not much, but everyone has to start somewhere.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

defineOgImageComponent('Page', {
  title: 'Projects',
  subTitle: 'Work that I\'ve done and that I\'m proud of',
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
