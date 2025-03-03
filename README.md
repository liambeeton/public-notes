# Liam Beeton's Public Notes

A modern static site generator built with Next.js, Nextra, React, and MDX.

## 📚 Overview

This repository contains a statically generated website built using Next.js and the Nextra framework. It leverages the power of React components and MDX (Markdown with JSX) to create a fast, SEO-friendly site with a great developer experience.

## ✨ Features

- **Next.js** - React framework for production-grade static sites
- **Nextra** - A simple, powerful and flexible site generation framework
- **MDX Support** - Write content using Markdown with embedded React components
- **Fast Static Generation** - Pre-rendered static pages for optimal performance
- **Responsive Design** - Mobile-friendly interface that works on all devices
- **SEO Optimized** - Built-in SEO best practices for better discoverability
- **Dark Mode** - Built-in dark mode with easy customization
- **TypeScript** - Type safety throughout the codebase

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8+ (LTS recommended)
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/liambeeton/public-notes.git
cd public-notes
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## 📝 Content Structure

The content of the site is organized as follows:

```
pages/
├── index.mdx         # Home page
├── about.mdx         # About page
├── docs/             # Documentation pages
│   ├── index.mdx     # Docs home page
│   ├── getting-started.mdx
│   └── ...
├── blog/             # Blog posts
│   ├── index.mdx     # Blog home page
│   └── [slug].mdx    # Blog post template
└── _app.js           # Custom App component
```

## 🛠️ Customization

### Theme Configuration

You can customize the Nextra theme by modifying the `theme.config.js` file:

```javascript
// theme.config.js
export default {
  logo: <span>Your Site Name</span>,
  project: {
    link: 'https://github.com/liambeeton/public-notes',
  },
  docsRepositoryBase: 'https://github.com/liambeeton/public-notes/blob/main',
  // ...more config options
}
```

### Adding New Pages

Create new `.mdx` files in the `pages` directory to add new pages to your site:

```mdx
---
title: My New Page
description: This is a description for the new page
---

# My New Page

This is the content of my new page written in MDX.

<CustomComponent prop="value" />
```

## 📦 Building for Production

1. Generate a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. The static site will be generated in the `.next` directory. You can deploy this to your hosting provider.

3. To test the production build locally:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 🚢 Deployment

This site can be deployed to various hosting platforms:

### Vercel (Recommended)

```bash
npm run deploy
# or
yarn deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

### GitHub Pages

Update the `next.config.js` file:

```javascript
// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  basePath: '/public-notes',
  assetPrefix: '/public-notes/',
})
```

Then use GitHub Actions to build and deploy the site.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Nextra](https://nextra.site/)
- [React](https://reactjs.org/)
- [MDX](https://mdxjs.com/)
