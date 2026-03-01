# Method — Vision & Strategy

Internal document. Not published. This is the "why" behind everything.

## Mission

Make cooking accessible for people whose brains fight against traditional recipes.

## The Insight

Recipe content is optimized for discovery (SEO, ads, scrolling), not for use. The gap
between "finding a recipe" and "successfully cooking it" is where people with executive
dysfunction fall off. Method closes that gap.

## Who We Serve

**Primary**: People with ADHD, autism, or other executive function challenges who want
to cook but find traditional recipes overwhelming. Estimated 15-20% of adults have some
form of executive dysfunction.

**Secondary**: Anyone who finds cooking from a wall of text frustrating — parents
cooking while managing kids, people recovering from illness/injury, older adults with
cognitive changes.

**Not our audience**: Food bloggers, professional chefs, people who enjoy the creative
chaos of cooking. They don't need structure — we'd just be in their way.

## Product Thesis

1. Recipes should be workflows, not documents
2. The right information at the right time beats all the information all the time
3. AI can bridge the gap between how recipes are written and how they need to be used
4. The cooking surface (method mode) is the product — everything else is plumbing

## Business Model

### Phase 1: Freemium (current)
- **Free tier**: Full access, ad-supported (contextual ads in method mode + rewarded video during AI wait)
- **Premium ($10/mo or $100/yr)**: Ad-free, priority AI, future premium features
- **Key metric**: Free tier must be self-sustaining after SLM reduces AI costs

### Cost Structure
- AI per-action: $0.05-0.15 (current), target $0.003-0.01 (post-SLM)
- Hosting: minimal (Vercel free/hobby tier)
- Auth: Clerk free tier (10k MAU)
- The business is profitable if: (premium revenue + ad revenue) > (AI costs + hosting + tools)

### Phase 2: Creator Ecosystem (1,000+ users)
- Embeddable accessible recipe widget for food bloggers
- Value prop: "Your recipe, accessible to the 15-20% of your audience with ADHD"
- Revenue: freemium for bloggers, premium for analytics/customization
- This creates a flywheel: more recipes in Method → more users → more bloggers interested

### Phase 3: Commerce (speculative)
- Ingredient-level purchase links (Instacart, Amazon Fresh) in method mode
- Contextual and high-intent — user is literally about to cook and knows what they need
- Affiliate/partnership revenue

## Competitive Landscape

| Competitor | What they do | Why we're different |
|-----------|-------------|-------------------|
| Paprika | Recipe storage/organization | Stores recipes but doesn't change the cooking experience |
| Mealime | Meal planning + grocery lists | Planning-focused, not cooking-focused |
| WP Recipe plugins | SEO recipe cards for bloggers | Serves bloggers, not cooks. Designed for Google, not kitchens |
| Notion/spreadsheets | DIY recipe organization | Flexible but no structure, no AI, no cooking mode |
| ChatGPT/Claude | "Give me a recipe for X" | Generates recipes but no workflow, no persistence, no cooking UI |

**Our moat**: The combination of AI structuring + purpose-built cooking UX + ADHD-specific design
is hard to replicate. Any one piece alone is not defensible. Together they create a product
that genuinely serves an underserved niche.

## Growth Strategy

### Channel priority (ordered)
1. **SEO content**: Long-tail keywords around ADHD + cooking. Low competition, high intent.
2. **Reddit**: Genuine participation in r/ADHD, r/adhdwomen, r/cooking, r/mealprep. Not astroturfing.
3. **Podcast guest spots**: ADHD podcasts. Authentic story, not a sales pitch.
4. **Social media** (via VA): Repurposed blog content on Instagram/TikTok. User never touches the platforms.
5. **Creator partnerships** (Phase 2): Bloggers embed Method widget, exposing their audience to the product.

### What we're NOT doing
- Paid acquisition (too expensive for a side business at this stage)
- X/Twitter auto-responders (reputation risk, poor ROI)
- App Store presence (no native app — web-first until usage justifies it)

## Operating Principles

1. **Profitable first, growth second.** This is a side business. It needs to sustain itself.
2. **Automate operations, not relationships.** Blog content can be automated. Social media needs a human. Support needs a human-trained bot.
3. **Ship to learn.** Pricing, features, channels — test with real users, don't theorize.
4. **The SLM is the business unlock.** Free tier economics don't work at current AI costs. Training a specialized small model is not optional — it's the foundation of profitability.
5. **Respect the user's brain.** Every design decision should reduce cognitive load, not add to it. This applies to the marketing site too — clear, calm, no dark patterns.

## Key Metrics (to instrument)

- Method mode session duration and frequency (ad revenue potential)
- AI actions per user per month (cost driver)
- Free → paid conversion rate
- Monthly churn rate (premium)
- CAC by channel (when we start spending)
- Recipe imports per user (engagement proxy)

## Open Questions

- Is $10/mo the right price? Need data.
- Should free tier have a cap on AI actions? Or unlimited with ads?
- When does the SLM need to be ready relative to user growth?
- Is a native app ever necessary, or is PWA sufficient?
- How do we handle recipe copyright concerns from content creators?
