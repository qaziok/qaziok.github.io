export const toIsoDate = (date: string) => date.replaceAll("/", "-");

export const formatDate = (date: string) =>
  new Date(toIsoDate(date)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
