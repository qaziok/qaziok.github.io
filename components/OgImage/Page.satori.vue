<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    label?: string;
  }>(),
  {
    title: "title",
    subTitle: "",
    label: "Personal blog",
  }
);

const titleSize = props.title.length > 24 ? "76px" : "96px";
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-between relative bg-black px-24 pt-[72px] pb-20"
    :style="{ boxSizing: 'border-box' }"
  >
    <div class="flex items-center">
      <img
        src="/avatar.png"
        alt="Jakub Dajczak"
        class="rounded-full w-20 h-20 mr-6 border-4 border-neutral-800"
      />
      <div class="flex flex-col">
        <div class="flex font-bold text-[30px] text-neutral-100">
          Jakub Dajczak
        </div>
        <div class="flex text-2xl text-neutral-400">qaziok.github.io</div>
      </div>
    </div>

    <div class="flex flex-col">
      <div
        class="flex font-bold uppercase text-[22px] tracking-widest text-neutral-400 mb-5"
      >
        {{ label }}
      </div>
      <div
        class="flex font-bold text-white tracking-tight leading-[1.1]"
        :style="{ fontSize: titleSize, textWrap: 'balance' }"
      >
        {{ title }}
      </div>
      <div v-if="subTitle" class="flex mt-5 text-4xl text-neutral-400">
        {{ subTitle }}
      </div>
    </div>

    <div
      class="flex absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-teal-400/0 via-teal-400/70 to-teal-400/0"
    />
  </div>
</template>
