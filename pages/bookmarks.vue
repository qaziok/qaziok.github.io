<template>
  <main>
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const title = "Bookmarks | Jakub Dajczak";
const description =
  "Awesome things I've found on the internet. Hope you'll find something useful here.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});

defineOgImageComponent("Page", {
  title: "Bookmarks",
  subTitle: "Some interesting links I found on the internet",
});

const bookmarks = [
  {
    id: 1,
    label: "Cobalt - save whatever you want, however you want",
    url: "https://cobalt.tools/",
  },
  {
    id: 2,
    label: "Free developer sandbox for developers from Microsoft",
    url: "https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-get-started",
  },
  {
    id: 3,
    label: "Phind.com - Great AI search engine",
    url: "https://www.phind.com",
  },
  {
    id: 4,
    label: "Coolors - The super fast color schemes generator!",
    url: "https://coolors.co/",
  },
  {
    id: 5,
    label: "GPRM - GitHub Profile ReadMe Maker",
    url: "https://gprm.itsvg.in/",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
