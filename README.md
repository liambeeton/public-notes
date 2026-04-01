# Public Notes

My personal public notes site built with [FumaDocs](https://fumadocs.vercel.app) and Next.js.

## Stack

- **[Next.js 16](https://nextjs.org)** — App Router, static site generation
- **[FumaDocs](https://fumadocs.vercel.app)** — docs framework with sidebar, ToC, and full-text search
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling
- **[pnpm](https://pnpm.io)** — package manager

## Development

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Note

Create a new `.mdx` file in `content/docs/`:

```sh
content/docs/my-new-note.mdx
```

Add frontmatter at the top:

```mdx
---
title: My New Note
description: A short description.
---

Content goes here.
```

Then add the filename (without extension) to `content/docs/meta.json` to control its position in the sidebar.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to deploy.

## Source

Dotfiles referenced in the Mac setup note: [github.com/liambeeton/dotfiles](https://github.com/liambeeton/dotfiles)
