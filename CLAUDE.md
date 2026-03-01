# Method Marketing Site - Development Guidelines

Method is a recipe app for people with ADHD and executive dysfunction. It restructures
recipes into guided, step-by-step cooking workflows. This repo is the marketing site at
`method.cooking`; the app is a separate repo (`method`) at `app.method.cooking`.

## Backlog Accountability Ritual

At the start of every new conversation, read `BACKLOG.md` (in this repo) and check what
the user is asking against the current NOW priorities. The three work tracks are:

1. **Marketing/business/customer acquisition** — tracked in BACKLOG.md
2. **UX** — relatively stable, minor mobile tweaks only (in the app repo)
3. **Data quality** — LORA/prompt engineering, handled in separate threads

If the request isn't directly related to a NOW item, an obvious bug, a meta/planning
conversation, or work in tracks 2-3, gently push back. Something like: "This sounds
like it's in the LATER bucket — your NOW items are [X, Y, Z]. Want to swap something
out, or should we stay focused?" Don't be annoying about it, but be consistent.

## User Preferences

When I say "ship it" I mean I'm happy with this feature and it can be committed, pushed, and deployed.

When setup tasks are needed (env vars, config, etc.) and you have CLI access to do them, do the setup directly rather than listing instructions for me.

## Technical Overview

- **Framework**: Next.js with static export (`output: 'export'` in next.config.ts)
- **Styling**: Tailwind CSS with `@tailwindcss/typography` for blog prose
- **Blog**: MDX files in `content/` with gray-matter frontmatter
  - Frontmatter fields: `title`, `description`, `date`, `published` (boolean)
  - Posts with `published: false` are excluded from the index
- **Landing page**: `app/page.tsx` — CTAs link to `app.method.cooking` for auth
- **Blog rendering**: `next-mdx-remote` for server-side MDX compilation

## Commands

- `npm run dev` — local dev server
- `npm run build` — test static export (catches broken pages)
- `npm run lint` — ESLint

## Deployment

Push to main on GitHub triggers auto-deploy via Vercel. This is safe — it's a static
site with no dynamic API routes, so the Vercel builder bug that affects the app repo
does not apply here.

Vercel project: `method-site`, domain: `method.cooking` (+ `www.method.cooking`).

## Git Workflow

Use GitHub directly for PRs. Use `gh pr create` and `gh pr merge`.

Commit frequently — this is a content site, deploys are cheap and fast.

## Adding Blog Posts

1. Create `content/my-post-slug.mdx`
2. Add frontmatter: `title`, `description`, `date` (YYYY-MM-DD), `published: true`
3. Write content in MDX (standard markdown + JSX components if needed)
4. `npm run build` to verify it renders
5. Commit and push — auto-deploys
