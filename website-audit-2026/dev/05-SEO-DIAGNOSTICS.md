# 05 — SEO Diagnostics

> Crawlability, indexation, meta structure, hreflang, and structured data across the uncommonschools.org network.

---

**[← Integrations](./04-INTEGRATIONS.md) | [Next: AI Readiness →](./06-AI-READINESS.md)**

---

## Plugin Situation

- **Main domain:** Yoast SEO v27.2
- **All subdomains:** All in One SEO

This mismatch causes inconsistent meta tags, Open Graph tags, and sitemap behavior across the network. Fix: standardize on Drupal Metatag module for the entire network in Phase 04.

---

## What's Working

- Sitemap: well-structured `sitemap_index.xml` with 14 sub-sitemaps ✓
- HSTS enforced ✓
- Canonical tags present ✓
- Hreflang: 12 tags on homepage ✓
- HTTP/2 confirmed across all domains ✓

---

## Page Title & Meta Issues

| Page | Issue |
|---|---|
| Homepage | Title: "Homepage - Uncommon Schools" — not keyword-optimized |
| Homepage | **3x H1 tags** (rotating hero banners) — Google expects exactly 1 primary heading per page |
| /enroll/ | No meta description |
| /careers/ | No meta description |
| /results/ | Title contains unescaped HTML entities (`Uncommon&#039;s Results`) — raw-encoded apostrophe appears in SERP |

---

## Crawl Issues

| Issue | Impact |
|---|---|
| `Crawl-delay: 10` in robots.txt | Artificially slows Googlebot across 3,843+ URLs — can delay indexing of new/updated content |
| Two conflicting `User-agent` blocks in robots.txt | One from Yoast, one manually added — crawler behavior at the conflict point is unpredictable |
| 3,843 total indexed URLs | Many likely low-value (thin people profiles, stale translated duplicates) — audit for consolidation vs. redirect vs. discard before migration |

---

## Translation / Hreflang

- 6 languages implemented with hreflang tags
- **⚠️ Spanish /es/ is broken (active issue):** /es/ serves English content with `es-MX` lang tag. Google is actively indexing this as duplicate English content incorrectly tagged as Spanish. This is not just a UX issue — it's a live crawling and indexation problem.

---

## Structured Data

Only auto-generated Yoast schema is present. Everything missing:

| Schema Type | Status | Impact |
|---|---|---|
| Organization | ❌ Missing | Critical for nonprofit entity disambiguation in AI and search |
| EducationalOrganization | ❌ Missing | Standard markup for K-12 orgs |
| Article (news/blog posts) | ❌ Missing | datePublished, author, publisher all absent |
| FAQ | ❌ Missing | FAQ content exists but isn't exposed to Google AI Overviews |
| Speakable | ❌ Missing | Google Assistant / AI surface support |
| Event | ❌ Missing | |

---

## Total URL Inventory

| Content Type | Count |
|---|---|
| Pages | 602 |
| Posts (news/blog) | 1,848 |
| People profiles | 749 |
| School profiles | 399 |
| Impact blog | 245 |
| **Total requiring 301 redirects** | **3,843+** |

Zero SEO regression during migration is a hard requirement. Every URL must redirect correctly. This is a 3,843-row spreadsheet that must be completed before launch.

---

→ See [06-AI-READINESS.md](./06-AI-READINESS.md) for AI-specific schema and llms.txt issues.  
→ See [10-MIGRATION-COMPLEXITY.md](./10-MIGRATION-COMPLEXITY.md) for URL redirect planning.

---

**[← Integrations](./04-INTEGRATIONS.md) | [Next: AI Readiness →](./06-AI-READINESS.md)**
