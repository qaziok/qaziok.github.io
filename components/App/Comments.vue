<template>
  <div class="mt-8">
    <Giscus
      repo="qaziok/qaziok.github.io"
      repo-id="R_kgDOMenMCQ"
      :category="giscusCategory"
      :category-id="giscusCategoryId"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="theme"
      lang="en"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";

const colorMode = useColorMode();
const { giscusCategory, giscusCategoryId, giscusThemeBase } =
  useRuntimeConfig().public;

const theme = computed(() => {
  const mode = colorMode.value === "dark" ? "dark" : "light";
  return `${giscusThemeBase}/${mode}.css`;
});
</script>
