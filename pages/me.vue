<template>
  <main class="space-y-6 max-w-md mx-auto">
    <div class="space-y-4 text-center">
      <div class="flex justify-between items-center">
        <div class="flex-1">
          <!-- Empty div for spacing -->
        </div>
        <div class="flex-1 flex justify-center">
          <NuxtImg
            src="/avatar.png"
            alt="Jakub Dajczak"
            class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-32 sm:w-32"
            sizes="96px sm:128px"
            placeholder
            format="webp"
          />
        </div>
        <div class="flex-1 flex justify-end">
          <AppThemeToggle class="rounded-full p-2.5" />
        </div>
      </div>
      <h1
        class="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
      >
        Jakub Dajczak
      </h1>
      <p class="text-gray-900 dark:text-gray-400 max-w-xs mx-auto">
        Software developer from Gdańsk, Poland. In my free time, I'm traveling
        the world and playing video games.
      </p>
    </div>

    <div class="space-y-8">
      <div v-for="group in linkGroups" :key="group.tag" class="text-center">
        <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">
          {{ group.name }}
        </h2>
        <div class="space-y-3">
          <a
            v-for="link in group.links"
            :key="link.icon"
            :href="link.filename ? `/${link.filename}` : link.url"
            :download="link.filename"
            :class="[
              'group flex items-center gap-4 px-4 py-3 rounded-full border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-800/90 backdrop-blur hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-200',
              { 'cursor-pointer': link.filename },
            ]"
          >
            <div class="flex justify-start">
              <Icon
                :name="link.icon"
                class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400"
              >
              </Icon>
            </div>
            <span
              class="text-sm text-gray-700 dark:text-gray-300 flex-grow text-left"
            >
              {{ link.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "minimal",
});

const title = "Jakub Dajczak";
const description =
  "I'm Jakub, fullstack developer from Poland. Working with Python, Ruby, GraphQL, and Apache Solr.";

defineOgImageComponent("Page", {
  title,
  subTitle: "Personal blog about programming and technology",
  author: "",
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

const { data: links, error } = await useAsyncData("links", async () => {
  try {
    return await queryContent("/links")
      .where({
        $or: [
          { tags: { $contains: "portfolio" } },
          { tags: { $contains: "contact" } },
        ],
      })
      .find();
  } catch (e) {
    console.error("Failed to fetch links:", e);
    return [];
  }
});

const linkGroups = computed(() => {
  if (!links.value || error.value) return [];

  const groups = [
    {
      tag: "portfolio",
      name: "PORTFOLIO",
      links: links.value.filter((link) => link.tags.includes("portfolio")),
    },
    {
      tag: "contact",
      name: "CONTACT",
      links: links.value.filter((link) => link.tags.includes("contact")),
    },
  ];

  return groups.filter((group) => group.links.length > 0);
});
</script>
