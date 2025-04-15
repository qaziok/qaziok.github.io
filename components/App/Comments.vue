<template>
  <div class="mt-8"></div>
</template>
<script>
export default {
  data() {
    return {
      giscusFrame: null,
    };
  },
  mounted() {
    this.initializeGiscus();
    // Watch for color mode changes
    this.$watch(
      () => useColorMode().value,
      () => this.updateTheme()
    );
  },
  methods: {
    getTheme() {
      return useColorMode().value === "dark"
        ? "noborder_dark"
        : "noborder_light";
    },
    initializeGiscus() {
      const scriptTag = document.createElement("SCRIPT");
      scriptTag.setAttribute("src", "https://giscus.app/client.js");
      scriptTag.setAttribute("data-repo", "qaziok/qaziok.github.io");
      scriptTag.setAttribute("data-repo-id", "R_kgDOMenMCQ");
      scriptTag.setAttribute("data-category", "Blog");
      scriptTag.setAttribute("data-category-id", "DIC_kwDOMenMCc4CpIS2");
      scriptTag.setAttribute("data-mapping", "pathname");
      scriptTag.setAttribute("data-strict", "0");
      scriptTag.setAttribute("data-reactions-enabled", "1");
      scriptTag.setAttribute("data-emit-metadata", "0");
      scriptTag.setAttribute("data-input-position", "top");
      scriptTag.setAttribute("data-theme", this.getTheme());
      scriptTag.setAttribute("data-lang", "en");
      scriptTag.setAttribute("data-loading", "lazy");
      scriptTag.setAttribute("crossorigin", "anonymous");
      scriptTag.setAttribute("async", "async");
      this.$el.appendChild(scriptTag);

      // Wait for the iframe to be created
      const checkFrame = setInterval(() => {
        const frame = this.$el.querySelector(".giscus-frame");
        if (frame) {
          this.giscusFrame = frame;
          clearInterval(checkFrame);
        }
      }, 100);
    },
    updateTheme() {
      if (this.giscusFrame) {
        this.giscusFrame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: this.getTheme(),
              },
            },
          },
          "https://giscus.app"
        );
      }
    },
  },
};
</script>
