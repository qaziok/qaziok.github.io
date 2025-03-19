<template>
  <div class="min-h-screen">
    <div class="h-8"></div>
    <UContainer>
      <NuxtPage />
    </UContainer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
