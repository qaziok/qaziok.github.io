export const articleTitle = (article: { title: string; subtitle?: string }) =>
  article.subtitle ? `${article.title} - ${article.subtitle}` : article.title;
