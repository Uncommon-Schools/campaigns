# Phase 01 Technical Audit — Uncommon Schools Website
**Audit date:** March 24, 2026 | **Status:** Complete | **Next phase:** Phase 02 (pending Anthony sign-off)

> This folder contains the full Phase 01 technical audit of the uncommonschools.org network. Start here and follow the links in sequence, or jump directly to any section below.

---

## Folder Map

| File | What It Covers |
|---|---|
| [01-EXECUTIVE-SUMMARY.md](./01-EXECUTIVE-SUMMARY.md) | Top-line findings and recommendation in plain language |
| [02-INFRASTRUCTURE.md](./02-INFRASTRUCTURE.md) | Hosting setup, CDN configuration, domain inventory |
| [03-CMS-ASSESSMENT.md](./03-CMS-ASSESSMENT.md) | What's working and broken in the current WordPress setup |
| [04-INTEGRATIONS.md](./04-INTEGRATIONS.md) | Every third-party integration: status, migration risk, open questions |
| [05-SEO-DIAGNOSTICS.md](./05-SEO-DIAGNOSTICS.md) | Crawlability, indexation, meta structure, hreflang, structured data |
| [06-AI-READINESS.md](./06-AI-READINESS.md) | How the site feeds AI search engines — and what's broken |
| [07-ACCESSIBILITY.md](./07-ACCESSIBILITY.md) | WCAG 2.2 AA gap analysis (Title II compliance requirement) |
| [08-PERFORMANCE.md](./08-PERFORMANCE.md) | TTFB benchmarks, HTML payload, CDN bypass root cause |
| [09-CMS-EVALUATION.md](./09-CMS-EVALUATION.md) | Drupal vs Webflow vs Sanity vs Payload — full comparison + recommendation |
| [10-MIGRATION-COMPLEXITY.md](./10-MIGRATION-COMPLEXITY.md) | Content and integration migration risk matrix |
| [11-HOSTING-RECOMMENDATION.md](./11-HOSTING-RECOMMENDATION.md) | Pantheon vs Acquia — hosting recommendation with cost estimates |
| [12-OPEN-QUESTIONS.md](./12-OPEN-QUESTIONS.md) | Outstanding items blocking Phase 02 full scope |

---

## Critical Issues (Act Now)

- **CDN bypass** — all 141K monthly visitors hit origin directly due to UTM cookie injection
- **Camden TTFB: 1,418ms** — 7–10x slower than every other site
- **llms.txt broken** — all 5 sites serve Camden Prep's AI metadata
- **Spanish /es/ broken** — English content served with es-MX lang tag (live SEO issue)

---

## Phase 02 Entry Point

Before Phase 02 can begin, answers are needed from Anthony. See [12-OPEN-QUESTIONS.md](./12-OPEN-QUESTIONS.md).
