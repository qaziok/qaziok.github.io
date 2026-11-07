export default defineAppConfig({
  ui: {
    colors: {
      primary: "teal",
      neutral: "neutral",
    },
    button: {
      slots: {
        base: "rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]",
      },
    },
  },
});
