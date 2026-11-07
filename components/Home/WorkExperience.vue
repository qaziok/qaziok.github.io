<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      Work Experience
    </h2>
    <div class="space-y-4">
      <AppExperienceCard v-for="(job, id) in jobs" :key="id" :job="job" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: jobs } = await useAsyncData("experience-home", () =>
  queryCollection("experience").order("stem", "ASC").all()
);
</script>
