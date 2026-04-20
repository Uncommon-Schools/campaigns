# 03 — UX & Navigation Audit
**Uncommon Schools Website Audit | Phase 01: Dig**

> Detailed breakdown of the navigation structure, key user flows, and specific failure points across the network site and regional subdomains.

---

## Primary Navigation

**Current:** About Us | Our Schools | Our Approach | Careers | Give | Enroll

**Problems:**
- **"Our Approach"** is organizational-speak — users unfamiliar with Uncommon don't know what it means
- **"Give"** is weaker than "Donate" — misaligns with the page title and user search intent
- **No audience segmentation** — a parent, a teacher, and a donor see the same undifferentiated nav
- **"Our Schools"** dropdown leads to `/regions/` WordPress archive stubs, not real school content

---

## Enrollment Flow

```
Homepage → Enroll button → /enroll/ → one sentence + city buttons → regional subdomain
```

A Brooklyn family needs 3+ clicks before seeing any school information. The `/enroll/` page is functionally empty:
- One sentence of copy
- No steps or what-to-expect
- No FAQ
- No Spanish
- No trust signals

**This is the highest-priority conversion path on the site and it is empty.**

---

## Donation Flow

```
Homepage → Give → /donate/ → FundraiseUp widget + tiered giving copy
```

The tiered copy is solid ($100 / $250 / $1K / $5K with specific outcomes). Problem: the FundraiseUp form loads *below* "Other Ways to Donate" — the primary action is not visually primary on the page.

---

## Specific Navigation Failures

| Failure | Impact |
|---|---|
| **Alumni Impact → 404** | Primary nav item goes nowhere. Flagship donor proof page is dead. Direct revenue risk. |
| `/careers/` duplicates "Why Uncommon?" paragraph verbatim | No conviction-building. Teachers find no real reason to apply. |
| `/our-approach/` buries special education inside pedagogy section | No separate page or IA for a major audience concern |
| No visible search on the network site | Users with specific questions have no fallback |
| Dual architecture: `/regions/nyc/` stub + full `nyc.uncommonschools.org` site | Same user, two experiences, fragmented trust |

---

## Navigation

← [02 — Visual Design](./02-VISUAL-DESIGN.md) | → [04 — Audience Pathways](./04-AUDIENCE-PATHWAYS.md)
