# Method — Product Backlog

Last updated: 2026-07-06

**North star: Ken and his wife use Method full-time and feel nothing is missing.**

No launch deadline. No AppSumo. Quality first — this is both a product worth paying
for and an AI engineering education platform. Don't ask others to pay real money until
the product can replace what they're already using.

---

## How to Use This

- **NOW**: Current focus. Work top-to-bottom within each track.
- **NEXT**: Queued once NOW items are done or stable.
- **LATER**: Important but not yet, revisit at each planning cycle.
- **SOMEDAY**: Ideas and possibilities, no commitment.

Tracks run semi-independently. Items marked 🔧 are product/engineering, 📈 are
business/ops.

---

## Track 1: Core Quality (Parsing, Import, Scanning)

The product lives or dies by whether it handles real-world recipes well. This means
eval-driven development — measure accuracy, run evals, improve prompts and logic,
repeat. Target: 98–99% accuracy across all three surfaces.

### NOW

#### 🔧 Eval framework for recipe parsing
- Build a golden dataset: 50–100 real-world recipes with hand-verified expected output
- Wire to `npm run test:prompt-workflow-evals`
- Score per-field accuracy (title, ingredients, steps, timings, equipment)
- Track scores in a results file so regressions are visible in PRs
- Goal: establish a baseline, then drive it toward 98–99%

#### 🔧 Web import quality audit
- Identify the top 10 recipe sites by user import attempts (or manually test common ones)
- Document failure modes: wrong ingredient count, mangled steps, missing timings
- Build import-specific eval fixtures that reproduce each failure
- Fix top failures one by one, with evals as regression guards

#### 🔧 Image scanning quality audit
- Collect 20–30 diverse scanning inputs (typed cards, handwritten, magazine clippings, photos of screens)
- Identify failure modes in current OCR + parse pipeline
- Build scan-specific eval fixtures
- Fix and verify with evals

### NEXT

#### 🔧 Continuous eval reporting
- Run evals on every PR (or at least every push to main)
- Output a score summary in CI — fail if accuracy drops below threshold
- Consider eval leaderboard for tracking improvement over time

---

## Track 2: Method Chef Quality

Method Chef is a differentiator. It needs to be genuinely good — not just functional.

### NOW

#### 🔧 Method Chef smoke test pass
- Systematic walkthrough: what questions work well, what breaks or misleads
- Document failure modes (hallucinated times, wrong substitutions, confused context)
- Write test fixtures covering the most common chef interactions

#### 🔧 Context awareness audit
- Does Chef have the right recipe context? The right step context?
- Does it know about ingredient quantities when asked about substitutions?
- Fix any context gaps found

### NEXT

#### 🔧 Chef modification flow (#112)
- Chef can suggest modifications and save them as a copy
- Show a diff/summary before saving
- Never overwrite original

---

## Track 3: iOS App

Recipe apps live on mobile. This is table stakes for real household use.

**Decisions (2026-07-06):** Fully native **Swift/SwiftUI** (not React Native) — idiomatic
iOS/iPadOS, new repo `method-ios`, min iOS 26, TestFlight-only distribution for now.
**Offline-first**: 100% offline-capable except server-side LLM analysis (import parsing,
enhancement, chat). Full offline read-write with a queued-mutation sync engine — not
read-only. Phased full port; plan lives with the method repo planning docs. On-device
Apple Foundation Models for simple tasks (dietary checks, tag suggestions, gated
single-page scan) in a later phase.

### NOW

#### 🔧 iOS Phase 0 — server seams + spikes (method repo)
- Structured import failure codes + `GET /api/jobs/{id}` status endpoint + events auth
- Client-supplied-content import (WKWebView browser-fallback seam)
- Golden fixtures exporter (`scripts/export-ios-fixtures.ts`) for Swift contract tests
- Clerk Bearer-token spike + iOS native-app registration in Clerk Dashboard

#### 🔧 iOS Phase 1 — browse / detail / cook / sync
- Library list → recipe detail (Shop/Cook) → method mode step-by-step
- Timers with notifications (Live Activity as 1.5)
- Offline-first sync engine (GRDB, delta sync, queued mutations, image cache)
- Exit criteria: airplane-mode test — full offline cook-through, clean queue drain on reconnect

### NEXT

#### 🔧 iOS Phase 2 — import
- Web URL import from share sheet
- In-app browser import fallback (for bot-blocked/paywalled/JS-heavy sites)
- Photo scanning from camera roll
- Recipe editor + manual creation (fully offline via queued saves)

#### 🔧 iOS Phase 3 — Chat with Chef + settings parity

#### 🔧 iOS Phase 4 — on-device Foundation Models (dietary, tags, gated scan)

---

## Track 4: Family Library Sharing

The "household" use case — Ken and his wife sharing the same recipe library.

### NOW

#### 🔧 Define sharing model
- Options: shared library (one account for household), or separate accounts with shared collection
- Consider: who owns a recipe when shared? Can both edit? Who deletes?
- Decide on the model before building anything

### NEXT

#### 🔧 Implement sharing
- Invite by email → accept → access shared library
- Clear ownership and permission model in UI
- Conflict resolution: last-write-wins for edits, explicit delete confirmation

---

## Track 5: Polish & Reliability

The things that make daily use feel solid.

### NOW

#### 🔧 App audit (daily use perspective)
- Full walkthrough as a daily user, not a new user
- Punch list: anything broken, slow, or annoying in regular use
- Fix the top 5 things that would make Ken or his wife reach for another app

### NEXT

#### 🔧 Set up error monitoring (Sentry)
- Know when things break in production before users report it

#### 🔧 Set up analytics (PostHog)
- Understand which features are actually used
- Not for growth hacking — for product decisions

#### 🔧 Dietary compatibility warnings (#82)
- Re-implement with reliable matching

---

## LATER — Infrastructure & Monetization

Don't prioritize these until the product is genuinely good for daily use.

### 🔧 Freemium gating
- Credit limits, tier enforcement, graceful degradation UX
- Revisit tier definitions once we know real usage patterns

### 📈 AppSumo or other monetization
- AppSumo is still a viable channel but the timing is no longer fixed
- Only pursue when the product can hold up to public scrutiny

### 🔧 URL processing cache (#95)
- Same recipe URL = don't re-parse. Cost + performance win.

### 🔧 Cost attribution dashboard (#94)
- Per-user, per-action cost tracking. Needed to calculate real LTV.

### 🔧 Export and backup (#93)
- User self-serve data export. Trust signal and retention.

### 🔧 User deletion and data cleanup (#96)
- Legal requirement (GDPR/CCPA).

### 📈 SLM training for cost reduction
- Most important long-term profitability lever once there are real users.

---

## SOMEDAY

No commitment. Review when the product is stable and growing.

### 📈 Android app
- After iOS is solid and there's evidence of demand.

### 📈 Recipe creator partnerships
- Embeddable accessible recipe widget for food bloggers.

### 📈 Affiliate/commerce integration
- Ingredient purchase links (Instacart, Amazon Fresh).

### 📈 Blog content pipeline
- Keyword list → Claude drafts → batch-approve weekly.

### 📈 Podcast guest appearances
- Pitch ADHD podcasts: "I have ADHD, I built a cooking app for us."

---

## Operating Costs

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Vercel | $0–20 | Free tier likely sufficient early |
| Postgres (Neon) | $0–25 | Depends on usage |
| AI (Claude API) | Variable | ~$0.05–0.15 per action |
| Clerk (auth) | $0–25 | Free tier: 10k MAU |
| Analytics (PostHog) | $0 | Free tier: 1M events/mo |
| Sentry | $0 | Free tier sufficient |
| Domain/DNS | ~$1 | Annual, amortized |

---

## Weekly Review

- What shipped this week?
- Are evals improving or holding steady?
- Anything in daily use that's broken or annoying?
- Pull next item within active tracks.
