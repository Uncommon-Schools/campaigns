# 05 — AI Search Readiness & llms.txt Audit
**Phase 01: Content Audit | Uncommon Schools**

> Assesses how well Uncommon's content is positioned to be surfaced by AI search engines (ChatGPT, Perplexity, Google AI Overviews). Includes a live audit of llms.txt files across all domains.

← [04-AUDIENCE-MAPPING.md](./04-AUDIENCE-MAPPING.md) | → [06-COMPETITIVE-AUDIT.md](./06-COMPETITIVE-AUDIT.md)

---

## Current AI Search Visibility

Uncommon Schools is consistently **not** the source AI engines pull from on priority queries.

| Query | What AI Returns | Uncommon's Status |
|---|---|---|
| "best charter school network" | US News, Niche, Fordham Institute rankings | Not present |
| "how to enroll in charter school NYC" | SchoolMint, NYC DOE Charter pages | Subdomain appears but isn't primary answer |
| "college prep charter school Newark" | Niche.com, third-party reviews | Third-party context only |
| "teach at a charter school" | KIPP careers, general job sites | Not present |
| "best schools for Black students college prep" | Various third parties | Not present — despite being the literal answer |
| "what is a charter school" | Wikipedia, government sources | FAQ page not visible |

---

## Root Causes

1. **Thin crawlable text on high-traffic pages** — The homepage is video-heavy. School pages are 200-word placeholders. AI engines can't extract quality answers because the answers aren't structured or present.
2. **No FAQ schema markup** — The FAQ page at `/faq/` has good content but no JSON-LD schema. AI engines use structured markup to identify Q&A content for featured snippets and direct answers.
3. **No topic authority pages** — There's no page that definitively answers "what is the Uncommon Schools model?" or "how does charter school enrollment work?" These answers exist in fragments across blog posts and FAQ entries. They need dedicated, structured treatment.
4. **Essay-format blog content** — Uncommon Sense posts are valuable but written as practitioner essays. AI engines prefer content with clear questions, direct answers at the top, and numbered lists.

---

## 10 High-Priority Topics Uncommon Should Own

1. "How to enroll in a charter school in [city]" — city-specific pages with exact enrollment steps
2. "What is the Uncommon Schools model?" — dedicated explainer with structured sections
3. "College acceptance rates at charter schools" — own the 96% stat; it's extraordinary and it's theirs
4. "What's the difference between charter schools and public schools?" — FAQ answer page
5. "AP courses at charter high schools" — HS Curriculum Hub is the answer; it needs to be findable from the main site
6. "Teaching jobs at charter schools" — job-seekers use AI search; Uncommon needs to appear in the answer
7. "How does a charter school lottery work?" — families ask this constantly, especially during enrollment season
8. "Best schools for Black and Latino students college prep" — Uncommon is literally the answer; they need to claim it
9. "What support do charter schools provide for students with disabilities?" — addressed in Our Approach but buried
10. "Teach Like a Champion — Uncommon Schools" — massive inbound authority sitting idle with no main-site connection

---

## llms.txt Audit

> **What is llms.txt?** A machine-readable file (emerging standard, gaining broad adoption) that tells AI crawlers which pages to index on a site. Think of it as `robots.txt` for AI engines. Uncommon Schools is generating these automatically via All in One SEO v4.9.5.1.

### Domain Status

| Domain | llms.txt | Issues |
|---|---|---|
| uncommonschools.org | ✅ Present | **Critical: resolves to Camden content** |
| camdenprep.uncommonschools.org | ✅ Present (~40 pages) | Paid media URLs exposed; TEST page listed |
| nyc.uncommonschools.org | Not confirmed | Needs verification |
| roxburyprep.uncommonschools.org | Not confirmed | Needs verification |
| rochesterprep.uncommonschools.org | Not confirmed | Needs verification |
| hscurriculum.uncommonschools.org | Not confirmed | Needs verification |

---

### Critical Finding: Main Domain llms.txt Resolves to Camden Content

When an AI crawler requests `uncommonschools.org/llms.txt`, it receives the Camden Prep subdomain page inventory. This means:

- AI engines indexing the "network flagship site" are receiving a Camden regional page list instead of network content
- The main domain's content is effectively **invisible to structured AI indexing**
- The entire network homepage, About Us, Results, Careers, Donate, and Uncommon Sense content is not being indexed by AI crawlers

This is a WordPress multisite or redirect misconfiguration in the AIOSEO plugin. It is a **Dev ticket** — not a content task.

---

### Finding: Paid Media Tracking URLs Publicly Exposed

The Camden `llms.txt` includes internal paid campaign landing pages:

```
- 26-27 School Year Enrollment Great Schools
- 26-27 School Year Enrollment DemGen
- 26-27 School Year Enrollment DOOH
- 26-27 School Year Enrollment Programmatic
- 26-27 School Year Enrollment Google Search
- 25-26 School Year Enrollment Meta Rollover
- 25-26 School Year Enrollment eTarget
- 25-26 School Year Enrollment Organic
```

These are UTM/campaign landing pages for paid media tracking. They are now:
- Indexed by AI crawlers
- Visible to competitors (reveals media mix and campaign naming conventions)
- Returning duplicate content signals (all point to the same enrollment page)

**Fix:** Mark all campaign landing pages `noindex` in WordPress. Exclude from `llms.txt` and `sitemap.xml` via AIOSEO settings.

---

### Finding: TEST Page Live in Production

`camdenprep.uncommonschools.org/test/` is live, listed in the `llms.txt`, and being indexed. Delete immediately.

---

### Finding: "What is a Charter School?" Page on Camden

Camden has a dedicated page at `camdenprep.uncommonschools.org/what-is-a-charter-school/`. This is exactly the kind of AEO-valuable answer page that should exist on the main domain. It doesn't. Either promote this page to `uncommonschools.org/what-is-a-charter-school/` or replicate it there with FAQ schema markup.

---

## Recommendations Summary

| Action | Priority | Owner |
|---|---|---|
| Fix main domain `llms.txt` misconfiguration | 🔴 Critical | Dev |
| Exclude all campaign tracking URLs from sitemaps + llms.txt | 🔴 Critical | Dev + Content |
| Delete TEST page on Camden | 🔴 Critical | Dev |
| Add FAQ schema to /faq/ and all Q&A content | 🟠 High | Dev + Content |
| Create 5–8 "Answer pages" for priority topics | 🟠 High | Content |
| Promote "What is a Charter School?" to main domain | 🟠 High | Content |
| Restructure Uncommon Sense posts: answer-first format | 🟡 Medium | Content |
| Audit remaining 4 subdomains for llms.txt | 🟡 Medium | Dev |
| Add EducationalOrganization schema to school pages | 🟡 Medium | Dev |

---

→ Next: [06-COMPETITIVE-AUDIT.md — KIPP + Outside-Sector Comparisons](./06-COMPETITIVE-AUDIT.md)
