# 01 — Executive Summary

> Top-line findings from the Phase 01 technical audit. Read this first. Follow links for full detail on any section.

---

**[← Index](./00-INDEX.md) | [Next: Infrastructure →](./02-INFRASTRUCTURE.md)**

---

## The Short Version

The Uncommon Schools website is 5 independent WordPress installs with no shared CMS, no content reuse, and a CDN that isn't working. The site has active broken translation, broken AI metadata, accessibility violations, and one regional site that loads 7–10x slower than the rest. None of this is insurmountable — all of it is fixable in the redesign, and several issues are pre-existing bugs that should be patched now regardless.

**Recommendation: Rebuild on Drupal 10, hosted on Pantheon.**

---

## Top Findings

### Infrastructure
- 5 separate WordPress installs on WP Engine — no multisite, no shared configuration, 5x maintenance overhead
- Cloudflare CDN bypassed on **all pages** — handl UTM Grabber plugin sets cookies that force every request to origin. 141K monthly visitors hit WP Engine directly.
- Camden Prep TTFB: **1,418ms** — 7–10x slower than every other regional site

### Content & CMS
- No multisite architecture — regional sites can't share content or templates with the network
- Sage theme requires a developer for any theme change — editors are blocked
- jQuery + Thrive Leads loaded on every page regardless of whether they're needed

### Active Bugs (Live Now)
- **Spanish /es/ broken** — /es/ serves English content with es-MX hreflang tag. Google is indexing duplicate English content tagged as Spanish.
- **llms.txt broken** — all 5 domains serve Camden Prep's AI context file. ChatGPT, Perplexity, and Google AI Overviews all read the wrong organizational metadata.

### SEO
- Homepage has 3x H1 tags (rotating hero banners)
- /enroll/ and /careers/ have no meta descriptions
- robots.txt has `Crawl-delay: 10` — slows Googlebot across 3,843+ URLs
- Minimal structured data — no Organization, Article, FAQ, or speakable schema

### Accessibility
- 4 homepage images missing alt text
- 8 form inputs potentially unlabeled
- Full keyboard/contrast audit pending browser testing (Phase 02)

---

## Recommendation

**Drupal 10 on Pantheon.**

Drupal is the only platform that natively handles: multisite architecture for 6+ domains, 6-language multilingual, WCAG 2.2 AA compliance patterns, and mature integration modules for Salesforce, SmartRecruiters, and FundraiseUp. Open-source — no license fee. Endorsed by Lippincott.

Pantheon solves the CDN bypass issue (not cookie-dependent), provides Dev/Test/Live environments, and replaces 5 separate WP Engine instances with a single bill.

---

**[← Index](./00-INDEX.md) | [Next: Infrastructure →](./02-INFRASTRUCTURE.md)**
