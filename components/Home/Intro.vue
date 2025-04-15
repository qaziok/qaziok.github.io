<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.png"
      alt="Jakub Dajczak"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
      @dblclick="navigateTo('/me')"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I’m Jakub, a software developer from Gdańsk, Poland.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I’m a Fullstack Developer at
      <a href="https://www.qtravel.ai" target="_blank" class="underline"
        >Qtravel.ai</a
      >, where I work with Ruby on Rails, GraphQL and Apache Solr. Concurrently,
      I’m pursuing my Master’s degree in Computer Science at Gdańsk University
      of Technology, where I also earned my Bachelor’s degree.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Over my few years as a developer, I’ve worked with several programming
      languages, but I feel most comfortable with Python and Ruby. I’ve also
      worked on a few C# projects and dabbled in Java, JavaScript and Vue and
      have experience working with Docker. These days, I mostly use Linux, but I
      still keep Windows on my drive for random university projects.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I decided to build this website not out of necessity, but because I wanted
      to better organize my thoughts and projects (which I’ve created and
      abandoned more times than I can count) and maybe share them with others.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      In my free time, I’m traveling the world, tinkering with small projects,
      learning new random things, building and setting up servers for my
      friends, playing video games and watching movies.
    </p>
  </div>
</template>

<script setup>
const title = "Jakub Dajczak";
const description =
  "I’m Jakub, fullstack developer from Poland. Working with Python, Ruby, GraphQL, and Apache Solr.";

defineOgImageComponent("Page", {
  title,
  subTitle: "Personal blog about programming and technology",
  author: "",
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>
