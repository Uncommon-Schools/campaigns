# 01 — Platform Recommendation
**Prepared by:** US-Dev | **Status:** ✅ Complete | **Date:** April 20, 2026

> Evaluates platform options for the 30th anniversary landing page and makes a recommendation. Factors: build speed, media support, animation capability, performance, hosting, WCAG compliance, and fit with existing Uncommon infrastructure.

---

**[← Back to Index](./00-INDEX.md) | [Next: Technical Spec →](./02-TECHNICAL-SPEC.md)**

---

## The Requirement

A single-page, scroll-driven experience that takes the user on a journey through 30 years of Uncommon. Media-heavy. Modern. Every section earns its place. The user should feel the weight and pride of what Uncommon has built.

This is not a brochure page. It's an experience. The platform decision needs to support that.

---

## Options Evaluated

### Option 1: Static HTML/CSS/JS + GSAP
A hand-coded single page with no framework. GSAP (GreenSock Animation Platform) is the industry standard for scroll-driven animation — used by Apple, Stripe, Google for this exact type of experience.

**Pros:**
- Absolute maximum performance — nothing loads that isn't needed
- GSAP ScrollTrigger is purpose-built for this type of scroll-driven storytelling
- Zero framework overhead — the page is exactly what was written
- Can be hosted on Cloudflare Pages (free, global CDN, instant deploys)
- No licensing complexity beyond GSAP (free for non-commercial; $199/yr business license for Uncommon)

**Cons:**
- No visual editor — all changes require code
- If the page ever needs significant content updates, they require dev involvement

---

### Option 2: Next.js Static Export + Vercel
A React-based static site exported to HTML at build time. Same end result as Option 1 but with a component architecture.

**Pros:**
- Component model is useful if sections become reusable (e.g., for future campaign pages)
- Strong ecosystem for media optimization (next/image for lazy loading, WebP, responsive sizes)
- Vercel hosting is fast and free for this use case
- GSAP integrates cleanly with React

**Cons:**
- More build infrastructure than a single landing page needs
- React hydration adds JS weight — for a single page, this is overhead without benefit
- Longer setup time

---

### Option 3: Webflow
Visual development platform. Design and build in the browser.

**Pros:**
- Fastest to build for a design team that can work directly in it
- Interactions and scroll animations have good UI tooling
- Hosting is built in

**Cons:**
- Animation capability is limited compared to GSAP — complex scroll-driven storytelling quickly hits Webflow's ceiling
- Limited control over performance (JS bundles, render behavior)
- Knockout font integration requires custom code injection regardless
- Not aligned with Uncommon's existing infrastructure (WP Engine/Cloudflare)
- Ongoing hosting cost (~$23–35/month) for what is essentially a static page

---

### Option 4: WordPress Page (Existing WP Engine)
Add the anniversary page as a custom template on the existing `uncommonschools.org` WP Engine instance.

**Pros:**
- Lives on the existing domain — no separate hosting
- Editors can update content without a developer

**Cons:**
- WordPress theme framework (Sage) adds a build step — no faster than a custom static page
- Thrive Leads and jQuery load on every WP page (known bloat issue from the audit)
- The 30th anniversary experience requires scroll animation and media delivery that WP does not help with
- Adds complexity to a CMS that's already being replaced
- Wrong tool entirely for this scope

---

## Evaluation Matrix

| Platform | Animation Capability | Performance | Build Speed | Hosting | Maintenance | Fit |
|---|---|---|---|---|---|---|
| **Static HTML + GSAP** | ✅ Best in class | ✅ Maximum | ✅ Fast (no setup overhead) | ✅ Cloudflare Pages (free) | ⚠️ Dev required for changes | ✅ |
| Next.js Static | ✅ Excellent | ✅ Very good | ⚠️ Longer setup | ✅ Vercel (free) | ⚠️ Dev required for changes | ✅ |
| Webflow | ⚠️ Limited | ⚠️ Moderate | ✅ Fastest | ⚠️ Paid, separate | ✅ Non-dev editable | ❌ |
| WordPress | ❌ Not suited | ❌ Known bloat | ❌ Slow, complex | ✅ Already paid | ✅ Non-dev editable | ❌ |

---

## Recommendation: Static HTML/CSS/JS + GSAP, hosted on Cloudflare Pages

**Why:**

This page is a campaign experience, not a content-managed website. It will be built once, launched, and run for the anniversary period. The content is unlikely to need day-to-day editing — and if it does, those edits are simple enough that dev involvement is not a burden.

The vision calls for scroll-driven storytelling at a level that requires GSAP. Webflow's interaction system hits its limits before GSAP's even starts. Next.js is the right choice for multi-page applications — for a single page, it adds infrastructure without benefit.

Static HTML + GSAP is what the best-in-class anniversary and campaign pages are built with. It gives us:
- Full control over every animation, transition, and media load
- Page load under 2 seconds with proper asset optimization
- Clean Core Web Vitals (no framework JS overhead)
- Free hosting on Cloudflare Pages with instant global CDN (same CDN provider as the existing site)
- A codebase that's easy to archive when the campaign ends

**Font note:** Knockout (Hoefler & Co.) requires a web license. Options:
1. Purchase a Hoefler web license (~$99–200 depending on pageviews) — recommended, keeps full brand fidelity
2. Use a variable-weight fallback (e.g., Impact or a similar condensed sans) for headlines — acceptable if budget is a constraint, but should be confirmed with Creative

**Flagging for Creative:** Platform choice means full creative freedom — no Webflow layout constraints. GSAP ScrollTrigger supports: pinned sections, parallax, timeline-synced animations, video scrubbing, horizontal scroll panels, counter animations. If Creative has a reference site or interaction in mind, confirm it can be built (it almost certainly can) before wireframes are too far along.

---

**[← Back to Index](./00-INDEX.md) | [Next: Technical Spec →](./02-TECHNICAL-SPEC.md)**
