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
    class="flex relative"
    :style="{ width: '1200px', height: '600px', backgroundColor: '#000000' }"
  >
    <div
      class="flex flex-col justify-between absolute"
      :style="{ top: '72px', left: '96px', right: '96px', bottom: '80px' }"
    >
      <div class="flex items-center">
        <img
          src="/avatar.png"
          alt="Jakub Dajczak"
          class="rounded-full"
          :style="{
            width: '80px',
            height: '80px',
            marginRight: '24px',
            border: '4px solid #262626',
          }"
        />
        <div class="flex flex-col">
          <div
            class="flex font-bold"
            :style="{ fontSize: '30px', color: '#f5f5f5' }"
          >
            Jakub Dajczak
          </div>
          <div class="flex" :style="{ fontSize: '24px', color: '#a3a3a3' }">
            qaziok.github.io
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div
          class="flex font-bold"
          :style="{
            fontSize: '22px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#a3a3a3',
            marginBottom: '20px',
          }"
        >
          {{ label }}
        </div>
        <div
          class="flex font-bold"
          :style="{
            fontSize: titleSize,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textWrap: 'balance',
            color: '#ffffff',
          }"
        >
          {{ title }}
        </div>
        <div
          v-if="subTitle"
          class="flex"
          :style="{ marginTop: '20px', fontSize: '36px', color: '#a3a3a3' }"
        >
          {{ subTitle }}
        </div>
      </div>
    </div>

    <div
      class="flex absolute"
      :style="{
        left: '0',
        right: '0',
        bottom: '0',
        height: '4px',
        backgroundImage:
          'linear-gradient(90deg, rgba(45,212,191,0), rgba(45,212,191,0.7), rgba(45,212,191,0))',
      }"
    />
  </div>
</template>
