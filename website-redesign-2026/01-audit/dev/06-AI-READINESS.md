# 06 — AI Readiness

> How the current site feeds (or fails to feed) AI search engines — ChatGPT, Perplexity, Google AI Overviews. Two active broken issues and a full schema gap analysis.

---

**[← SEO Diagnostics](./05-SEO-DIAGNOSTICS.md) | [Next: Accessibility →](./07-ACCESSIBILITY.md)**

---

## Active Broken Issue: llms.txt

`llms.txt` exists across all sites but is **broken network-wide.**

Every domain — `uncommonschools.org`, `nyc`, `camdenprep`, `rochesterprep`, `northstar` — serves **Camden Prep's** llms.txt content. AI crawlers indexing all 5 sites are receiving identical incorrect organizational metadata. This is live right now and directly affects how ChatGPT, Perplexity, and Google AI Overviews understand and represent the organization.

**Root cause:** AIOSEO on subdomains + Yoast on main = fragmented llms.txt generation with no unified output per domain.

**Fix:** Regenerate per-domain with correct organizational context. Standardize on a single SEO system (Drupal Metatag) in the new build to produce one unified, accurate llms.txt per domain.

---

## Schema Gaps

Key organizational data is present on the site as plain HTML text — AI models have to infer it rather than extract it from structured data.

| Schema | Status | Notes |
|---|---|---|
| Organization | ❌ Missing | **Critical.** Should include name, logo, address, sameAs (Wikipedia, Wikidata, social profiles). AI models use this for entity disambiguation. |
| EducationalOrganization | ❌ Missing | Standard markup for charter/K-12 networks |
| Article | ❌ Missing on all news/blog posts | datePublished, author, publisher all absent |
| FAQ | ❌ Missing | FAQ content exists on-site but is invisible to AI Overviews |
| Speakable | ❌ Missing | Required for Google Assistant / conversational AI surfaces |
| Event | ❌ Missing | |

**Key stats in plain HTML text (not machine-readable):**
- 96% college acceptance rate
- 4x national average graduation rate
- CREDO recognition
- 20,000+ students, 52 schools, 30-year mission

These are the organization's most compelling claims. AI has to infer them from prose instead of extracting them as structured facts.

---

## robots.txt

No AI bot directives present. GPTBot, ClaudeBot, and PerplexityBot are not addressed. This should be an explicit policy decision, not an oversight.

**Fix (Drupal build):** Add explicit allow/disallow directives for AI crawlers based on Uncommon's content policy. Do not leave it unaddressed.

---

## What Good Looks Like (Phase 04 Target)

- Per-domain llms.txt with accurate organizational context
- Organization + EducationalOrganization schema on all pages
- Article schema on all news/blog/impact posts
- FAQ schema on all FAQ content
- Key stats exposed as structured data, not just prose
- Explicit AI bot policy in robots.txt

---

→ See [05-SEO-DIAGNOSTICS.md](./05-SEO-DIAGNOSTICS.md) for broader structured data and schema issues.  
→ See [09-CMS-EVALUATION.md](./09-CMS-EVALUATION.md) for how Drupal Metatag + Schema.org modules address this.

---

**[← SEO Diagnostics](./05-SEO-DIAGNOSTICS.md) | [Next: Accessibility →](./07-ACCESSIBILITY.md)**
