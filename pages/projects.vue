<template>
  <main>
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="flex flex-col gap-8">
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

defineOgImage("Page", {
  title: "Projects",
  subTitle: "Work that I've done and that I'm proud of",
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryCollection("projects").order("stem", "ASC").all()
);
</script>
