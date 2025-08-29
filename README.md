This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Performance Optimizations

### Static Site Generation (SSG)

The service pages are optimized for maximum performance using Static Site Generation:

- **Pre-rendered at build time**: All service pages are generated statically during the build process
- **Zero server processing**: Pages load instantly without server-side rendering
- **SEO optimized**: Pre-generated metadata and content for better search engine visibility
- **Bilingual support**: Both Arabic and English versions are pre-rendered
- **Core Web Vitals**: Optimized for better performance scores

### Available Services

The following service pages are automatically generated:

- `/en/services/software-engineering`
- `/en/services/technical-education`
- `/en/services/product-consulting`
- `/ar/services/software-engineering`
- `/ar/services/technical-education`
- `/ar/services/product-consulting`

### Build Verification

To verify that all service pages are generated correctly, run:

```bash
npm run build
```

The build output will show the number of static pages generated for services.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
