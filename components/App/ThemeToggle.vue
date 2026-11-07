<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <UTooltip text="Toggle theme">
    <button
      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
      @click="isDark = !isDark"
    >
      <Icon
        aria-hidden="true"
        name="solar:moon-outline"
        class="w-5 h-5 dark:hidden"
      />
      <Icon
        aria-hidden="true"
        name="solar:sun-2-outline"
        class="w-5 h-5 hidden dark:inline-block"
      />
      <span class="sr-only">Toggle theme</span>
    </button>
  </UTooltip>
</template>
