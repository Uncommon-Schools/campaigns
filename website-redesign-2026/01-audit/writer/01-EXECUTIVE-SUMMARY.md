# 01 — Executive Summary
**Phase 01: Content Audit | Uncommon Schools**

> The short version: what's broken, what's working, and what to fix first. Read this before anything else.

→ Full architecture detail: [02-ARCHITECTURE.md](./02-ARCHITECTURE.md)
→ Page-by-page decisions: [03-CONTENT-INVENTORY.md](./03-CONTENT-INVENTORY.md)

---

## The 5 Core Problems

**1. Dual regional architecture**
Regional content lives both at `/regions/nyc/` (main domain) AND `nyc.uncommonschools.org`. Neither is complete. Split authority, duplicate content, user confusion. A family navigating from the homepage hits dead ends; a family who lands directly on the subdomain gets a full experience. Two sites for the same user.

**2. Audience-blind navigation**
Families, educators, and donors share the same nav with no clear pathways. Enroll — the highest-priority action on the site — is buried under "Our Schools." There is no moment where the site asks: *who are you, and what do you need?*

**3. Thin individual school pages**
52 schools. Most pages are ~200 words, created February 2018 by agency "briteweb." No principal info, no photos, no differentiation. These pages serve no one — not families, not search engines, not AI crawlers.

**4. AI search invisibility**
The homepage is video-heavy with ~300 words of crawlable text. FAQ content exists but has no schema markup. The main domain's `llms.txt` is misconfigured and serves Camden content to AI crawlers. Uncommon does not own the answers to the questions their audiences are asking. (See [05-AI-SEARCH.md](./05-AI-SEARCH.md).)

**5. Content asset fragmentation**
Uncommon Sense, HS Curriculum Hub, and the books ecosystem are genuinely strong assets. None are properly connected to the main site. They exist as islands.

---

## What's Actually Working

- **About Us** — mission, history, milestones. Solid.
- **The Student Experience** — specific, human, describes actual school life. Trust-builder.
- **Donate** — tiered giving copy with concrete impact statements. Functional.
- **Uncommon Sense blog** — active, practitioner-quality writing. Needs SEO restructure, not replacement.
- **Sharing Our Practices** — unique differentiator. No competitor has this.
- **Results data** — 96% college acceptance rate, CREDO study. Compelling. Poorly surfaced.

---

## Immediate Fixes (Before Phase 02)

| Priority | Issue | Owner |
|---|---|---|
| 🔴 Critical | Main domain `llms.txt` resolves to Camden content | Dev |
| 🔴 Critical | Alumni Impact page 404s — primary nav item | Dev + Content |
| 🔴 Critical | Paid media tracking URLs in public sitemaps | Dev |
| 🟠 High | TEST page live on Camden subdomain | Dev |
| 🟠 High | Blog URL inconsistency (/uncommon-sense-blog/ 404s) | Dev |
| 🟡 Medium | Donation form third-party dependency — needs monitoring | Dev |

---

## Bottom Line

The mission is strong. The results are real. There's enough raw material here for an excellent site. What's missing is a content strategy — not just a redesign. Phase 02 should lead with architecture and audience, not copy.

→ Next: [02-ARCHITECTURE.md — Domain Map & Dual Architecture Problem](./02-ARCHITECTURE.md)
