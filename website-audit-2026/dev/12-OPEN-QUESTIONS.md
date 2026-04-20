# 12 — Open Questions

> Items blocking Phase 02 full scope. All require input from Anthony before integration specs and architecture can be finalized.

---

**[← Hosting Recommendation](./11-HOSTING-RECOMMENDATION.md) | [↑ Back to Index](./00-INDEX.md)**

---

## Blocking Questions

| # | Question | Blocked Work |
|---|---|---|
| 1 | **Boston regional domain** — URL not found in site scan. What is it? | Domain inventory, infrastructure scope |
| 2 | **Domains 7–9** — brief mentions 9 domains; 5 confirmed, 4 unaccounted for. What are they? | Full domain/hosting scope |
| 3 | **Lever vs SmartRecruiters** — both detected in codebase (`main.js`). Which ATS is active? Is Lever legacy? | Phase 04 ATS integration scope. If both are active, two integrations need to be built. If Lever is legacy, scope drops. |
| 4 | **Avela + SchoolMint** — not visible on network homepage source. Where do these appear in the enrollment flow? Need a live enrollment URL to trace. | Enrollment integration complexity and Phase 04 scoping |
| 5 | **GA4 property G-X5WHC48ND7** — purpose unknown. What is this property tracking? | Analytics migration plan |
| 6 | **Salesforce ownership** — who owns the Salesforce instance at Uncommon? CRM field mapping must be designed with that person. | Salesforce integration spec (HIGH complexity item) |

---

## Non-Blocking / Phase 02 Confirmations

These don't block Phase 02 starting, but need to be answered before Phase 04 integration spec is locked:

- Confirm Avela and SchoolMint are still the active enrollment tools (not replaced by something else)
- Confirm FundraiseUp widget ID AXGXSELV is still the active donation widget
- Confirm Hotjar is still actively used (session recordings actively reviewed by someone)

---

## How to Answer

Flag answers in #dev or share directly. Once questions 1–6 above are resolved, Phase 02 integration and architecture specs can be finalized.

---

**[← Hosting Recommendation](./11-HOSTING-RECOMMENDATION.md) | [↑ Back to Index](./00-INDEX.md)**
