<template>
  <div class="space-y-1">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-100">
        {{ job.title }}
      </h3>
      <span class="text-sm text-gray-600 dark:text-gray-400">{{
        job.period
      }}</span>
    </div>
    <p class="text-gray-600 dark:text-gray-400">
      <a
        :href="job.url"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-primary-500 transition-colors underline"
      >
        {{ job.company }}
      </a>
    </p>
    <ul
      v-if="job.points.length"
      class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1"
    >
      <li v-for="point in job.points" :key="point">{{ point }}</li>
    </ul>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in job.tags"
        :key="tag"
        class="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>
