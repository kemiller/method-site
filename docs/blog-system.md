# Blog System

The blog uses MDX files in `content/` rendered by Next.js with `next-mdx-remote`.

## Adding a Post

1. Create `content/<slug>.mdx`
2. Add frontmatter:

```yaml
---
title: "Your Title"
description: "Short description for index page and meta tags"
date: "YYYY-MM-DD"
published: true
---
```

3. Write content below the frontmatter as standard markdown (or MDX if you need JSX)
4. Run `npm run build` to verify it renders
5. Push to main — Vercel auto-deploys

## Frontmatter Fields

| Field | Required | Default | Notes |
|-------|----------|---------|-------|
| `title` | Yes | slug | Page title and `<h1>` |
| `description` | Yes | `""` | Shown on index and in `<meta>` |
| `date` | Yes | `""` | `YYYY-MM-DD`, used for sorting (newest first) |
| `published` | No | `true` | Set to `false` to hide from index and static export |

## How It Works

- **`lib/posts.ts`** — reads `content/*.mdx` files, parses frontmatter with `gray-matter`, returns sorted post metadata and content
- **`app/blog/page.tsx`** — blog index, lists all published posts sorted by date descending
- **`app/blog/[slug]/page.tsx`** — individual post page, renders MDX with `next-mdx-remote/rsc`, generates static params for export
- **Static export** — `generateStaticParams()` ensures all published posts become static HTML at build time

## Draft Posts

Set `published: false` in frontmatter. The post won't appear in the index or get a generated static page.

## Styling

Post body uses Tailwind's `@tailwindcss/typography` plugin via the `prose prose-slate` classes. Standard markdown elements (headings, lists, code blocks, links) are styled automatically.
