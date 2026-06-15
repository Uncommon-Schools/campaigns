# Existing Site Stabilization Requirements (v1)

**Audience:** Sitecare and Wenni (scoping), Courtney (review), ET (timing update)
**Author:** Anthony Emezu, Creative Director
**Status:** Draft v1 — for Anthony review before Courtney handoff
**Target handoff to Sitecare:** Wednesday, June 17, 2026

---

## Purpose

The full website redesign launches Q1 2027. That timeline is non-negotiable, but it leaves the current site live for another 6–9 months. The current site has confirmed bugs, performance issues, and compliance gaps that are costing us traffic, conversions, and credibility today.

This document defines the **existing-site stabilization scope** — the surgical fixes Sitecare and Wenni should implement on the current WordPress install in parallel with the full redesign. It is not a redesign scope. It is not a content migration scope. It is the punch list to stop the bleeding while the new site is being built.

All findings below come from the Phase 01 technical audit (`01-audit/dev/`) and the June 3 Firefall call with Scott Park.

---

## Scope Boundaries (Read First)

**In scope:**
- Bug fixes on the live current site
- Performance and caching fixes that do not require platform change
- Compliance and accessibility fixes required by Title II ADA and PII collection law
- Analytics and SEO baseline instrumentation needed before launch comparison

**Out of scope:**
- Visual redesign of any kind
- New page templates or content types
- CMS migration (Drupal 10 / Pantheon decision is the new-site track)
- Theme refactor beyond what is required to ship a fix
- Salesforce, SmartRecruiters, or enrollment integration changes (new-site track)

**Working principle:** No fix should consume resources that would otherwise accelerate the Q1 2027 launch. If a fix requires more than 2 weeks of dev time or risks regression, route it to the new-site track instead.

---

## Severity Definitions

- **P0 — Stop the bleeding:** Active bugs visible to users or search engines today. Fix immediately.
- **P1 — Compliance / legal exposure:** Required by ADA Title II or PII law. Fix before Q4 2026.
- **P2 — Performance / drop-off:** Measurably hurts conversion or traffic. Fix in scoped batches.
- **P3 — Baseline / measurement:** Required to validate new-site performance against current state. Set up now, no user-facing change.

---

## P0 — Stop the Bleeding (Fix Immediately)

### 1. Spanish (`/es/`) serving English content
- **What's happening:** `/es/` URLs serve English content with an `es-MX` lang tag in the HTML.
- **Impact:** Google is indexing duplicate English content tagged as Spanish. Spanish-speaking parents land on English pages. SEO and UX harm simultaneously.
- **Likely cause:** TranslatePress v3.1.2 misconfiguration or missing translations across regional installs.
- **Fix scope:** Audit all 5 regional installs for the same misconfiguration. Either populate the Spanish translations or remove the `/es/` routes and hreflang tags until they can be done correctly.
- **Acceptance:** No `/es/` URL serves English content. Hreflang tags accurate across all domains.

### 2. `llms.txt` serving wrong content on 4 of 5 domains
- **What's happening:** All 5 domains serve Camden Prep's `llms.txt` file.
- **Impact:** ChatGPT, Perplexity, and Google AI Overviews read the wrong organizational metadata for every Uncommon region. AI-driven discovery is actively misinformed.
- **Fix scope:** Generate domain-specific `llms.txt` for each install. Validate with curl against all 5 domains.
- **Acceptance:** Each domain serves an `llms.txt` describing that specific region.

### 3. Three Google Analytics profiles firing on every page
- **What's happening:** GA4 `G-1Z558Q2T6W` (primary), GA4 `G-X5WHC48ND7` (purpose unknown), and MonsterInsights Premium v10.1.0 (redundant GA wrapper) all fire.
- **Impact:** Traffic counts inflated. Any "we lost X% of traffic" or "we gained X%" report cannot be trusted. Scott Park flagged this directly on the June 3 call.
- **Fix scope:** Confirm purpose of second GA4 property with whoever set it up. Keep one primary GA4 property. Remove MonsterInsights entirely. Document final analytics architecture in this repo.
- **Acceptance:** One GA4 property firing per page. MonsterInsights uninstalled. Documented baseline in `02-current-site-fixes/analytics-architecture.md`.

### 4. Title and meta hygiene on top-funnel pages
- **What's happening:**
  - Homepage title: "Homepage - Uncommon Schools" (not keyword-optimized)
  - Homepage: 3 H1 tags from rotating hero banners (Google expects exactly 1)
  - `/enroll/`: no meta description
  - `/careers/`: no meta description
  - `/results/`: unescaped HTML entity (`Uncommon&#039;s Results`) appears in SERP
- **Fix scope:** Rewrite homepage title. Reduce homepage to one H1. Add meta descriptions to `/enroll/` and `/careers/`. Fix entity encoding on `/results/`.
- **Acceptance:** All 4 pages pass standard SEO audit (Yoast or SEMrush) with no critical issues.

---

## P1 — Compliance and Legal Exposure

### 5. Cookie consent banner (currently missing)
- **What's happening:** No cookie consent banner detected on any page. Site collects PII via Gravity Forms across 5 regions.
- **Impact:** Compliance gap under CCPA, state-level privacy law, and best practice for K-12 institutions collecting parent and student data.
- **Recommendation:** Termly (~$120/year for multi-domain), per Scott Park's recommendation. Integrate with GTM for tag firing consent control.
- **Fix scope:** Install Termly (or equivalent). Configure consent categories. Wire to GTM so analytics, advertising, and tracking tags respect consent state. Roll out across all 5 domains.
- **Acceptance:** Cookie banner visible on first visit per domain. Consent state controls GTM tag firing. Privacy policy linked from banner.

### 6. Accessibility (Title II ADA — WCAG 2.2 AA)
- **What's happening (confirmed):**
  - 4 homepage images missing alt text
  - 4 homepage images missing width/height (CLS risk + screen reader gap)
  - 8 form inputs potentially unlabeled (requires browser validation)
- **What's pending Phase 02 browser audit:** color contrast, keyboard traps, focus ring visibility
- **Fix scope:** Patch confirmed alt text and dimension issues now. Validate and patch form labels. Run full Lighthouse accessibility audit on all 5 domains and triage findings into P1 (patch on current site) and P2 (defer to new site if patching risks regression).
- **Acceptance:** Lighthouse accessibility score ≥ 95 on every top-funnel page (homepage, `/enroll/`, `/careers/`, `/donate/`). No confirmed WCAG 2.2 AA violations on those pages.

---

## P2 — Performance and Drop-off

### 7. Camden Prep TTFB at 1,418ms (7–10x slower than peers)
- **What's happening:** Camden Prep returns 1,418ms TTFB. Every other regional site is between 186ms and 283ms.
- **Impact:** Severe drop-off in Camden region. Likely worst performance on mobile.
- **Fix scope:** Diagnose root cause (cold cache, plugin conflict, theme issue, misconfigured WP Engine instance). Bring Camden Prep into line with peer sites or document why it cannot be done on the current platform.
- **Acceptance:** Camden Prep TTFB ≤ 300ms (peer benchmark).

### 8. CDN bypass on all 5 domains
- **What's happening:** Every page returns `cf-cache-status: DYNAMIC`. Cloudflare is caching nothing. 141K monthly visitors bypass the edge and hit WP Engine origin directly.
- **Root cause:** `handl UTM Grabber v3` plugin sets 9 cookies per request. Cookies signal "personalized" to Cloudflare, which skips edge cache.
- **Fix scope:** Replace `handl UTM Grabber` with GTM + localStorage for client-side UTM persistence. Validate Cloudflare cache hit rate post-fix.
- **Acceptance:** `cf-cache-status: HIT` on ≥ 80% of marketing page requests post-deploy.

### 9. HTML payload bloat on top-funnel pages
- **What's happening:** Homepage, `/careers/`, and `/donate/` all serve 118–122KB of HTML (target: 30–60KB). Cause: Thrive Leads and jQuery loading on every page regardless of need.
- **Fix scope:** Conditional load Thrive Leads only where a Thrive form is present. Audit jQuery dependency — defer or eliminate where possible.
- **Acceptance:** Top-funnel HTML payload ≤ 70KB.

### 10. Cache TTL too short
- **What's happening:** Cache TTL set to 600 seconds (10 minutes) on static marketing pages.
- **Fix scope:** Raise to 86,400s (24 hours) for static marketing pages. Carve out exceptions for blog index, news index, and any dynamic pages.
- **Acceptance:** TTL ≥ 86,400s on homepage, `/enroll/`, `/careers/`, `/donate/`, regional homepages.

### 11. Image and media weight
- **What's happening:** No WebP across any install. No lazy loading. No `<picture>` tags. Scott Park flagged oversized images as likely culprit for snail-pace loads.
- **Fix scope:** Bulk-convert top-funnel page images to WebP. Add lazy loading attribute. This is a content fix, not a theme refactor.
- **Acceptance:** All hero and above-the-fold images on top-funnel pages served as WebP. Lazy loading active on below-the-fold images.

---

## P3 — Baseline and Measurement (Required for Launch Comparison)

### 12. SEO baseline via SEMrush (or equivalent)
- **Why now:** Scott Park flagged this as a "start today" item. Without historical data on the current site, we cannot measure new-site performance against current state. Some metrics are seasonal — every month without baseline data is a month we cannot reclaim.
- **Fix scope:** Stand up SEMrush (or equivalent) on all 5 domains. Track: organic keyword rankings, organic traffic, top landing pages, backlink profile. Configure weekly snapshots.
- **Acceptance:** Active SEMrush project running on all 5 domains. First baseline report exported by July 1.

### 13. Robots.txt cleanup
- **What's happening:** `Crawl-delay: 10` slows Googlebot across 3,843+ URLs. Two conflicting `User-agent` blocks (one from Yoast, one manual).
- **Fix scope:** Remove `Crawl-delay`. Resolve conflicting User-agent blocks. Validate with Google Search Console.
- **Acceptance:** Single coherent robots.txt. No conflicting directives. Google Search Console reports no crawl errors.

### 14. Confirm subdomain architecture
- **What's happening:** Scott Park asked whether subdomains are separate WordPress installs or a multisite. Audit suggests separate installs. Sitecare can confirm definitively.
- **Why it matters:** Determines whether stabilization fixes can be deployed network-wide or must be repeated per install.
- **Fix scope:** Confirm architecture with WP Engine. Document in `02-current-site-fixes/architecture-confirmed.md`.

---

## Deployment Requirements

- **Staging environment required.** No fixes pushed directly to production. WP Engine makes staging straightforward — use it.
- **Per-fix rollback plan.** Every fix ships with a rollback procedure documented in the PR or ticket.
- **Weekly status against this list.** Sitecare and Wenni report progress against P0 → P3 in a shared doc, updated weekly. Anthony reviews. Courtney reports to ET.
- **No new-site work creeps into this scope.** Any fix that requires more than 2 weeks of dev or risks regression routes to the new-site track instead.

---

## Open Items (Need Anthony Input Before Sitecare Scopes)

1. Boston regional site URL — not found in audit. Likely a domain like `boston.uncommonschools.org` or similar. Needed for completeness.
2. Domains 7 through 9 — original brief referenced 9 domains, 5 confirmed. Inventory needs closure.
3. Second GA4 property `G-X5WHC48ND7` — who set it up, what it tracks. Needed before MonsterInsights removal and analytics rationalization.
4. Avela and SchoolMint enrollment integration locations — which regional pages route to which platform.

---

## Reference

- Full Phase 01 dev audit: `../01-audit/dev/`
- Phase 01 executive summary: `../01-audit/dev/01-EXECUTIVE-SUMMARY.md`
- Phase 01 SEO diagnostics: `../01-audit/dev/05-SEO-DIAGNOSTICS.md`
- Phase 01 performance: `../01-audit/dev/08-PERFORMANCE.md`
- Phase 01 accessibility: `../01-audit/dev/07-ACCESSIBILITY.md`
- Phase 01 integrations: `../01-audit/dev/04-INTEGRATIONS.md`
- June 3 Firefall call notes (Scott Park): `../meetings/transcripts/` (TBD path)

---

## Revision Log

- **v1, June 15, 2026 — Anthony.** Initial draft for Anthony review. Compiled from Phase 01 dev audit and June 3 Firefall call.
