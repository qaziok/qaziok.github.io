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
    <div class="space-y-4 text-gray-900 dark:text-gray-400">
      <p>
        I'm Jakub, a software developer from Gdańsk, Poland. I hold a Bachelor's
        degree in Computer Science from Gdańsk University of Technology.
      </p>
      <p>
        Currently, I'm working as a Fullstack Developer at
        <a href="https://www.lipscore.com" target="_blank" class="underline"
          >Lipscore</a
        >, where I work with Ruby on Rails, JavaScript, REST, OpenAPI, and
        Sidekiq.
      </p>
      <p>
        Over my few years as a developer, I've worked with several programming
        languages, but I feel most comfortable with Ruby (which I work with
        daily) and Python (which I use for private projects). I've also worked
        on a few C# projects and dabbled in Java, JavaScript, Vue, and Docker.
        These days, I use Mac and Linux for my development work.
      </p>
      <p>
        I decided to build this website not out of necessity, but because I
        wanted to better organize my thoughts and projects (which I’ve created
        and abandoned more times than I can count) and maybe share them with
        others.
      </p>
      <p>
        In my free time, I’m traveling the world, tinkering with small projects,
        learning new random things, building and setting up servers for my
        friends, playing video games and watching movies.
      </p>
    </div>
  </div>
</template>

<script setup>
const title = "Jakub Dajczak";
const description =
  "I'm Jakub, a fullstack developer from Gdańsk, Poland. I work with Ruby on Rails, Python, JavaScript, and APIs.";

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
