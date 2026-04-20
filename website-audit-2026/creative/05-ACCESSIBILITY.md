# 05 — Accessibility Assessment
**Uncommon Schools Website Audit | Phase 01: Dig**

> WCAG 2.2 AA violations identified through source analysis and visual inspection. Full browser validation (Lighthouse + screen reader) required in Phase 04. Includes the Spanish translation double-failure and ADA compliance context.

---

## Critical Violations — Live Now

| Issue | Standard | Severity |
|---|---|---|
| Homepage hero video autoplays with audio — no visible pause mechanism | WCAG 1.4.2 Audio Control | **Critical** |
| Spanish `/es/` serves English content tagged `es-MX` | WCAG 3.1.2 Language of Parts | **Critical** |
| 4+ homepage images missing alt text (corroborated by Dev audit) | WCAG 1.1.1 Non-text Content | **Critical** |
| 3× H1 tags on homepage (rotating hero) | WCAG 1.3.1 Info & Relationships | **High** |

---

## High Priority — Redesign-Critical

| Issue | Standard | Severity |
|---|---|---|
| Text over video overlays likely fails 4.5:1 contrast — needs browser validation | WCAG 1.4.3 Contrast | High |
| "Read More" links beneath video sections likely fail 24×24px touch target minimum on mobile | WCAG 2.5.8 Target Size | High |
| Focus ring visibility cannot be confirmed without browser testing — high risk given theme age | WCAG 2.4.7 Focus Visible | High |
| Rotating hero carousel has no pause mechanism | WCAG 2.2.2 Pause, Stop, Hide | High |
| Dev flagged 8 potentially unlabeled form inputs | WCAG 1.3.1 / 4.1.2 | High |
| Low contrast ratios in footer | WCAG 1.4.3 Contrast | Medium |

---

## Spanish Translation — Double Failure

The Spanish-language version of the site is tagged `es-MX` (Mexico Spanish) but serves English content. This is a double failure:

1. **Accessibility violation** — Screen readers announce the page as Spanish, then read English content. Broken experience for visually impaired Spanish speakers.
2. **Mission failure** — Spanish-speaking families receive no usable translated content. Uncommon serves an 86% economically disadvantaged population that includes a significant Spanish-speaking community. The site is failing them directly.

**This is an urgent fix. It carries both legal risk and a direct contradiction of the mission.**

---

## Compliance Context

Title II of the ADA now applies to charter schools. WCAG 2.2 AA is the mandatory standard.

The current site has material violations that create legal exposure. The new build must **ship compliant** — not be remediated after launch. Budget for accessibility QA as a discrete Phase 04 workstream, not a checkbox at the end of development.

---

## Navigation

← [04 — Audience Pathways](./04-AUDIENCE-PATHWAYS.md) | → [06 — Competitive Research](./06-COMPETITIVE-RESEARCH.md)
