export const isIsoDate = (date: unknown) =>
  typeof date === "string" &&
  /^\d{4}-\d{2}-\d{2}$/.test(date) &&
  !Number.isNaN(Date.parse(date)) &&
  new Date(date).toISOString().startsWith(date);

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
