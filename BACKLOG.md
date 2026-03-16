# Method — Business & Product Backlog

Last updated: 2026-03-16

**North star: AppSumo launch June 1. Submit by April 27.**

Everything is now organized around the AppSumo timeline. Pick from the top of the current phase.

---

## How to Use This

- **NOW**: The current phase. Work top-to-bottom within each phase.
- **AFTER LAUNCH**: Post-AppSumo priorities. Don't touch yet.
- **SOMEDAY**: Ideas and possibilities. Review post-launch.

Items marked with 🔧 are product/engineering. Items marked with 📈 are business/ops.

---

## Phase 1: Foundation — Mar 16–Mar 30

Goal: know what we're building and whether it works.

### 🔧 Define tier logic
- Specify exact monthly credit limits for Free, Plus, Premium
- Specify which features are gated per tier
- Document assumptions to validate post-launch

### 🔧 Set up analytics (PostHog)
Instrument key events: recipe generation, credit usage, tier upgrade, redemption code entry.
Create launch dashboard: redemptions/hour, credit usage by tier, error rate.

### 🔧 Set up error monitoring (Sentry)
Confirm alerts are wired to email/Slack.

### 🔧 App audit
Full walkthrough as a new user. Create punch list of anything broken, embarrassing, or incomplete.
Prioritize ruthlessly — only fix what would cause a refund request.

### 🔧 Write load test scripts
Tool: loader.io (no-code) or k6. Cover: recipe generation, auth, credit check/decrement.
Don't run yet — just get scripts ready.

---

## Phase 2: Product Polish — Mar 30–Apr 13

Goal: first-run experience is solid; freemium works end-to-end.

### 🔧 Implement freemium gating
- Enforce monthly credit limits per tier
- Credit reset logic (monthly, based on account creation date or calendar month)
- Graceful degradation UX when credits exhausted (upsell prompt, not hard error)

### 🔧 Work through punch list
Prioritize anything affecting first-run experience.

### 🔧 Set up Playwright smoke test suite
Tool: Playwright codegen or Reflect.run (no-code, scheduled runs).
Cover: free user happy path, Plus user happy path, credit exhaustion state, redemption code entry.
Wire to run on every deploy.

---

## Phase 3: AppSumo Infrastructure — Apr 13–Apr 20

Goal: codes work, stacking works, redemption flow is airtight.

### 🔧 Build redemption code batch generator
- Generate 1000 unique one-time-use codes (UUIDs or similar)
- Store in DB with status: unused / redeemed / revoked
- Export CSV for AppSumo submission

### 🔧 Build redemption flow
- Landing page AppSumo redirects buyers to post-purchase
- Code entry UI
- Validation endpoint: check code exists, unused → mark consumed → create/upgrade Clerk user → assign tier
- Handle edge cases: already-redeemed, invalid, expired

### 🔧 Implement code stacking
- If existing Plus account enters a second valid code → upgrade to Premium
- Idempotent: redeeming same tier code twice should not double-upgrade or error badly

### 🔧 Redemption edge case tests
- Already-redeemed code
- Invalid code
- Stacking second code onto existing account
- Stacking onto free account (should work)

---

## Phase 4: Listing Assets — Apr 20–Apr 27

Goal: everything AppSumo needs to approve the listing.

### 📈 Automated screenshot pipeline
Tool: Playwright codegen + Shots.so for device frames.
Capture: empty state, recipe generated, credit counter, tier comparison.
Output to /assets/screenshots/ — regenerate with one command after UI changes.

### 📈 Demo video
Tool: Arcade (interactive demo, no editing) — strongly preferred.
Cover: onboarding → generate a recipe → show credit usage → upsell moment.

### 📈 Write AppSumo listing copy
- Headline (lead with the "aha" moment, not the feature list)
- Short description
- Feature bullets (3–5, benefit-framed)
- FAQ section (redemption instructions, what "lifetime" means, credit limits)
- Tier breakdown table (what each code count unlocks)

### 📈 Hero / feature images
Use Figma with a reusable template, or Shots.so wrapping Playwright screenshots.

---

## 🚩 Milestone: Submit AppSumo Application — April 27

Apply at: https://sell.appsumo.com

Submission checklist:
- [ ] Working product (not beta/coming soon)
- [ ] Redemption URL
- [ ] Batch of 500–1000 unique codes
- [ ] Pricing / tier structure confirmed
- [ ] Listing copy draft
- [ ] Hero image

---

## Phase 5: Buffer + Approval Wait — Apr 27–May 18

### 🔧 Run load tests
Tool: loader.io free tier. Target: 200–500 concurrent users, 10 minutes sustained.
Focus on AI inference pipeline — most likely bottleneck. Fix failures before launch.

### 🔧 Set up uptime monitoring
Tool: BetterUptime or UptimeRobot (free tier).
Monitor: main app URL, API health endpoint, redemption landing page.
Alert to email + Slack.

### 📈 Respond to AppSumo feedback
They may request copy changes, pricing adjustments, or product fixes.
Turnaround quickly — delays push the launch date.

### 📈 Write launch-day engagement plan
- Be active on the deal page answering questions in real time
- Prepare canned responses: redemption issues, what credits mean, refund policy
- Plan how to seed first taco reviews (personal network, beta users)

---

## Phase 6: Launch Prep — May 18–Jun 1

### 🔧 Set up support triage
Script to watch support inbox. Auto-tag by type: redemption issue / refund request / feature question / bug report. Lets you batch-handle by category during high-volume launch window.

### 🔧 Final QA pass
Full walkthrough as a new AppSumo buyer: purchase → redemption → first use.
Confirm credit limits enforced correctly. Confirm stacking works end-to-end.

### 📈 Coordinate go-live with AppSumo
Confirm June 1 launch date with AppSumo account manager.
Confirm marketing assets are approved.

### 📈 Launch-day PostHog dashboard
Redemptions per hour, credit usage by tier, error rate. Have visible during launch.

---

## Key Risks

1. **Slipping April 27 is the only thing that kills June 1.** Phase 4 (assets) takes longer than expected — start copy and video earlier than feels necessary.
2. **AI inference latency under load** — test this specifically, not just web server throughput.
3. **Credit limit abuse during 60-day refund window** — set limits conservatively. Worst-case usage must stay within your AI cost floor.
4. **Pricing leak** — don't publish pricing anywhere online that undercuts AppSumo tier before launch.

---

## Tiers & Pricing

| Tier | How acquired | Monthly credits | Notes |
|------|-------------|-----------------|-------|
| Free | Sign up | TBD | Ad-supported |
| Plus | AppSumo 1 code (~$59) | TBD | Lifetime |
| Premium | AppSumo 2 stacked codes (~$118) | TBD / unlimited | Lifetime + perks |

Revenue split: 95% new AppSumo customers, 70% existing Sumo-lings.
Payout delay: ~90 days (60-day refund window + end-of-month processing).

---

## Tool Decisions

| Need | Tool | Notes |
|------|------|-------|
| Load testing | loader.io | Free, no-code |
| Smoke tests | Reflect.run or Playwright codegen | Reflect = no-code |
| Screenshots | Playwright codegen + Shots.so | Automated, regeneratable |
| Demo video | Arcade | Interactive, no editing |
| Uptime monitoring | BetterUptime free tier | Zero effort |
| Analytics | PostHog | Already in plan |
| Error monitoring | Sentry | Already in plan |

---

## After Launch — Growth & Monetization

Don't touch these until post-AppSumo feedback is in.

### 📈 Blog content pipeline
Script: keyword list → Claude drafts post → publishes as draft → batch-approve weekly.
Depends on: manual posts existing as tone samples.

### 📈 Podcast guest appearances
Pitch 10-15 ADHD podcasts. "I have ADHD, I built a cooking app for us."

### 📈 Ad monetization — method mode surface
Evaluate Chicory (recipe-specific ingredient ads) for the recipe view.
Requires analytics data on method mode dwell time.

### 🔧 Cost attribution dashboard (#94)
Per-user, per-action cost tracking. Needed to calculate real LTV.

### 🔧 User deletion and data cleanup (#96)
Legal requirement (GDPR/CCPA).

### 🔧 URL processing cache (#95)
Performance/cost optimization. Same recipe URL = don't re-parse.

### 🔧 Export and backup (#93)
User self-serve data export. Trust signal and retention tool.

### 📈 SLM training for cost reduction
Most important long-term profitability lever. Free tier economics don't work without this.

### 🔧 Method Mode entry point rework
Default recipe view shows standard layout. Floating "Cook in Method Mode" button launches guided view.

### 🔧 Auto-collapse sidebar on medium-width screens
Collapse by default on ~768–1024px. Percentage-based breakpoints.

---

## SOMEDAY — Phase 2 & Beyond

Don't think about these until 1,000+ active users.

### 📈 Recipe creator partnerships
Embeddable accessible recipe widget for food bloggers.
Pitch: "Your recipe, accessible to the 15-20% of your audience with ADHD."

### 🔧 Method Chef modifies recipes (#112)
AI suggests and saves recipe modifications. Marked experimental in UI.
- Show diff/summary before saving
- Always save as a copy (never overwrite original)

### 🔧 Dietary compatibility warnings (#82)
Re-implement with reliable matching.

### 📈 Native mobile app
Only if web usage patterns justify it.

### 📈 Affiliate/commerce integration
Ingredient purchase links (Instacart, Amazon Fresh) in method mode.

---

## Operating Costs Tracker

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Vercel | $0-20 | Free tier likely sufficient early |
| Postgres (Neon) | $0-25 | Depends on usage |
| AI (Claude API) | Variable | ~$0.05-0.15 per action × users × actions |
| Clerk (auth) | $0-25 | Free tier: 10k MAU |
| Analytics (PostHog) | $0 | Free tier: 1M events/mo |
| Sentry | $0 | Free tier sufficient initially |
| Domain/DNS | ~$1 | Annual, amortized |
| **Total pre-revenue** | **~$20-65/mo + AI** | |

AI cost is the wildcard. At 20 users doing 10 actions/month: $10-30/mo.
At 200 users: $100-300/mo. SLM is the fix.

---

## Weekly Review Checklist

- [ ] What did I ship this week?
- [ ] Am I on track for the current phase deadline?
- [ ] Any escalated support tickets?
- [ ] Pull next item within phase

## Monthly Review Checklist

- [ ] Review costs (AI spend, hosting, any tools)
- [ ] Phase deadline at risk?
- [ ] Anything blocking AppSumo submission?
