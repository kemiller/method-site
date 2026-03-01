# Method — Business & Product Backlog

Last updated: 2026-03-01

This is the single prioritized backlog for Method. Everything — product, business,
marketing, ops — lives here. Pick from the top. Ignore the bottom until you get there.

---

## How to Use This

- **NOW**: The current sprint. Max 3 items in progress at once.
- **NEXT**: Queued and ready. Pull when a NOW slot opens.
- **LATER**: Scoped but not urgent. Don't think about these yet.
- **SOMEDAY**: Ideas and possibilities. Review quarterly.

Items marked with 🔧 are product/engineering. Items marked with 📈 are business/ops.

---

## NOW — Get to First Real Users

The goal of this phase is: **10-20 real users (not you) are using Method weekly.**
Nothing else matters until this is true.

### ~~🔧 Email verification and password reset (#90)~~ ✅ DONE
Handled by Clerk. Closed.

### ~~🔧 Google OAuth (#91)~~ ✅ DONE
Handled by Clerk (dashboard toggle). Closed.

### ~~🔧 Sign in with Apple (#92)~~ ✅ DONE
Handled by Clerk (dashboard toggle). Closed.

### ~~📈 Split marketing site from app~~ ✅ DONE
`kemiller/method-site` deployed to `method.cooking`. App at `app.method.cooking`.

### 🔧 Payments foundation — Stripe (#87)
Even if you launch free-only, wiring Stripe now means you can flip the switch later
without a scramble. Get it into test mode and move on.
- Checkout, portal, webhooks, idempotent handlers
- Blocks: user tiers (#88)

### 📈 Write 3-5 blog posts manually (1/3 published)
Set the voice and tone for automated content later.
- ✅ "Why I built a recipe app for my ADHD brain" — live at /blog/why-i-built-method
- ⏳ "Cooking with executive dysfunction: what helps" — outline ready in content/drafts/
- ⏳ "What Method does differently" — outline ready in content/drafts/
These also become your SEO foundation and your podcast pitch material.

---

## NEXT — Harden for Strangers

The goal of this phase is: **strangers can sign up, use the app, and not break things.**

### 🔧 Rate limiting and abuse controls (#98)
Non-negotiable before public access. Protects your wallet.

### 🔧 Observability baseline (#99)
You need to know when things break before users tell you.

### 🔧 User tiers, credits, and entitlements (#88)
Free vs. paid enforcement. Depends on Stripe (#87).

### 🔧 In-app support and feedback (#97)
Simple email-based feedback. Doesn't need to be fancy — a mailto link with
pre-filled subject is fine for v1.

### 📈 Set up analytics (PostHog free tier)
Instrument: method mode session duration, AI actions per user, recipe imports
per user, retention by week. You need this data before you can make any
business decisions.

### 📈 Set up support bot (Crisp free tier)
AI-powered chat widget. Train on your help docs. Handles 70-80% of queries.

---

## LATER — Growth & Monetization

The goal of this phase is: **sustainable growth with revenue covering costs.**

### 📈 Automated blog content pipeline
Script: keyword list → Claude drafts post → publishes as draft → you batch-approve weekly.
Depends on: your 3-5 manual posts existing as tone samples.

### 📈 Hire part-time social media VA ($400-800/mo)
Repurposes blog content to Instagram/TikTok. Sends you a weekly 3-bullet summary.
You never open the apps. Non-negotiable that this is a human, not automation.

### 📈 Podcast guest appearances
Pitch 10-15 ADHD podcasts. "I have ADHD, I built a cooking app for us."
VA clips interviews for social. One-time effort per appearance.

### 📈 Ad monetization — method mode surface
Evaluate Chicory (recipe-specific ingredient ads) for the recipe view.
Requires: analytics data on method mode dwell time and session frequency.
This is your highest-value ad surface — don't waste it on generic display.

### 📈 Rewarded video ads during AI wait
Google AdMob or similar. Show during AI processing.
Requires: user tiers (#88) so you only show to free tier.

### 🔧 Cost attribution dashboard (#94)
Per-user, per-action cost tracking. Needed to calculate real LTV.

### 🔧 User deletion and data cleanup (#96)
Legal requirement (GDPR/CCPA). Do before you have many users.

### 🔧 URL processing cache (#95)
Performance/cost optimization. Same recipe URL = don't re-parse.

### 🔧 Export and backup (#93)
User self-serve data export. Trust signal and retention tool.

### 📈 Pricing validation
Launch at $10/mo, $100/yr. Instrument conversion funnel.
Don't theorize — measure.

### 📈 SLM training for cost reduction
Your most important long-term profitability lever.
Free tier economics don't work without this.

---

## SOMEDAY — Phase 2 & Beyond

Don't think about these until you have 1,000+ active users.

### 📈 Recipe creator partnerships
Embeddable accessible recipe widget for food bloggers.
Pitch: "Your recipe, accessible to the 15-20% of your audience with ADHD."
Start with 5-10 mid-tier bloggers who have ADHD themselves.

### 🔧 Method Chef modifies recipes (#112)
AI can suggest and save recipe modifications.

### 🔧 Dietary compatibility warnings (#82)
Re-implement with reliable matching.

### 🔧 Prompt injection hardening (#63)
Harden URL import against adversarial input.

### 🔧 Invite codes and controlled onboarding (#89)
Waitlist/invite system. Maybe useful for launch, maybe not.

### 📈 Native mobile app
Only if web usage patterns justify it.

### 📈 Affiliate/commerce integration
Ingredient purchase links (Instacart, Amazon Fresh) in method mode.
Depends on: proven dwell time data, meaningful user base.

---

## Weekly Review Checklist

Every [pick a day], spend 30 minutes:

- [ ] What did I ship this week?
- [ ] Are my 3 NOW items still the right 3?
- [ ] Any escalated support tickets?
- [ ] Pull one item from NEXT if a NOW slot opened

## Monthly Review Checklist

First [pick a day] of the month, spend 1 hour:

- [ ] Review costs (AI spend, hosting, any tools)
- [ ] Review one metric (pick: conversion, retention, or usage)
- [ ] Is anything in LATER now urgent? Move it up
- [ ] Is anything in NOW stuck? Unstick or kill it

---

## Operating Costs Tracker

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Vercel | $0-20 | Free tier likely sufficient early |
| Supabase/Postgres | $0-25 | Depends on provider |
| AI (Claude API) | Variable | ~$0.05-0.15 per action × users × actions |
| Clerk (auth) | $0-25 | Free tier: 10k MAU |
| Analytics (PostHog) | $0 | Free tier: 1M events/mo |
| Support (Crisp) | $0 | Free tier sufficient initially |
| Domain/DNS | ~$1 | Annual, amortized |
| **Total pre-revenue** | **~$20-65/mo + AI** | |

AI cost is the wildcard. At 20 users doing 10 actions/month each: $10-30/mo.
At 200 users: $100-300/mo. SLM is the fix.
