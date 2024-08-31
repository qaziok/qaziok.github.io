<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    author?: string;
  }>(),
  {
    title: "title",
    subTitle: "subTitle",
    author: "Jakub Dajczak",
  }
);
</script>

<template>
  <div
    class="h-full w-full flex items-start justify-start bg-neutral-900 relative"
  >
    <img
      src="/avatar.png"
      alt="Jakub Dajczak"
      class="absolute m-8 top-0 right-0 m-4 rounded-full h-40 w-40 shadow-lg"
    />

    <h1 class="text-2xl m-0 pt-40 pl-20 font-bold text-left text-white">
      {{ author }}
    </h1>
    <h1 class="text-8xl pl-20 font-bold text-left text-white">
      {{ title }}
    </h1>
    <p class="text-4xl pl-20 font-bold text-left text-white">
      {{ subTitle }}
    </p>

    <svg
      class="absolute bottom-0 left-0 right-0"
      viewBox="0 0 1200 627"
      width="1200"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1FBBAA" stop-opacity="0" />
          <stop offset="100%" stop-color="#1FBBAA" stop-opacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="0" y="471" width="1200" height="157" fill="url(#gradient)" />
    </svg>
  </div>
</template>
