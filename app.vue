<template>
  <UApp>
    <NuxtLoadingIndicator color="#14b8a6" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const route = useRoute();
const site = useSiteConfig();
const canonical = computed(() => `${site.url}${route.path}`);

useHead({ link: [{ rel: "canonical", href: canonical }] });

useSeoMeta({
  ogUrl: canonical,
  ogSiteName: site.name,
  ogType: "website",
});
</script>
