
# My personal website

This is my personal website, built with [Nuxt 4](https://nuxt.com/) and [Nuxt UI](https://ui.nuxt.com/) and hosted on GitHub Pages.

Built with [Zooper](https://github.com/fayazara/zooper) template.

## Development

Requires Node.js 24. The `.env` file points comments at the `Blog-dev` discussion category, so local tests don't land under real articles.

```bash
cp .env.example .env
npm install
npm run dev       # dev server on port 2137
npm run generate  # static build in .output/public
npm run serve     # preview the static build
```

Pushing to `main` deploys the site with GitHub Actions.
