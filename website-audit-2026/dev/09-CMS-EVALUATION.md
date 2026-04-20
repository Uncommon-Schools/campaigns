# 09 — CMS Evaluation

> Full comparison of Drupal, Webflow, Sanity, and Payload CMS against Uncommon's requirements. Recommendation with rationale.

---

**[← Performance](./08-PERFORMANCE.md) | [Next: Migration Complexity →](./10-MIGRATION-COMPLEXITY.md)**

---

## Evaluation Criteria

Evaluated against: multisite/subdomain architecture, WCAG 2.2 AA compliance, 6-language multilingual, SmartRecruiters + FundraiseUp + Salesforce integrations, 141K monthly visitors, editorial self-sufficiency (editors should not need a developer for day-to-day content).

---

## Option 1: Drupal 10 — ✅ Recommended

**License:** Open source — zero license cost  
**Hosting:** Pantheon or Acquia (both Drupal-native)

Native multisite: a single Drupal codebase serves all 6+ domains with shared content types, distinct regional content, and inherited templates. Layout Builder gives editors drag-and-drop page composition without touching code. Paragraph components = modular, reusable content blocks that can be shared across regions.

**Key capabilities:**
- Native multisite — no per-domain install, no separate projects
- Native multilingual (Drupal core Language + Content Translation + TMGMT) — replaces broken TranslatePress
- Mature Salesforce Suite module — CRM sync without custom code
- Drupal Webform — full Gravity Forms parity, WCAG-accessible out of box
- Metatag + Schema.org modules — replaces Yoast/AIOSEO, enables rich schema across all content types
- Search API + Solr/Elasticsearch — site search (currently completely absent)
- Pathauto — clean, consistent URLs across all content types and regions
- Custom SmartRecruiters module required — medium complexity, but scoped and achievable

**Risk:** Developer overhead. Drupal is powerful but it is not a no-code platform. The build requires a capable Drupal developer. That's the tradeoff.

**Endorsed by Lippincott** (design partner).

---

## Option 2: Webflow Enterprise — ❌ Not Recommended

**License:** $500–2,000+/month (Enterprise)

Best visual editor on the market. Non-developers can manage pages without touching code. However:

- **No true multisite** — each region would be a separate Webflow project with no shared content types and no unified CMS
- SmartRecruiters, Salesforce CRM sync, and 6-language multilingual all require third-party middleware
- Enterprise cost is higher than Drupal on Pantheon for significantly less capability

Wrong tool for this integration surface and network architecture.

---

## Option 3: Sanity (Headless) — ⚠️ Possible, Not Recommended

**License:** $99–custom/month + hosting

API-first, single Studio for multiple front-ends. Excellent for dev-heavy teams building custom Next.js or similar front-ends. Adds a two-system architecture (Sanity content + separate front-end deployment pipeline). More build complexity than Drupal for this scope with no meaningful payoff. Higher total cost, no mature integration modules.

---

## Option 4: Payload CMS — ⚠️ Not Ready

**License:** Open source

Strong developer experience, TypeScript-native. But: young ecosystem, not battle-tested at 141K visitors + 6 domains + 6 languages + 5 complex integrations. Promising for smaller projects; not the right choice at this scale.

---

## Evaluation Matrix

| Platform | License | Multisite | Multilingual | CRM Integration | WCAG | Editor UX | Verdict |
|---|---|---|---|---|---|---|---|
| **Drupal 10** | Free | ✅ Native | ✅ Native core | ✅ Mature modules | ✅ Proven | ✅ Layout Builder | ✅ **Recommended** |
| Webflow Enterprise | $$$+ | ❌ No | ⚠️ Limited | ⚠️ Middleware only | ✅ Good | ✅ Best in class | ❌ Wrong tool |
| Sanity | $$ | ✅ Yes | ⚠️ Custom build | ⚠️ Custom build | ⚠️ Custom build | ✅ Good | ⚠️ High dev cost |
| Payload CMS | Free | ✅ Yes | ⚠️ Custom build | ⚠️ Custom build | ⚠️ Custom build | ⚠️ Dev-facing | ⚠️ Too early |

---

## Drupal Architecture for Uncommon

**Recommended setup:** Single Drupal 10 install, multisite configuration

- Shared content types: School, Person, Region, Impact Story, News Post, Career
- Domain-level context: content tagged by region surfaces automatically on the correct subdomain
- Regional sites inherit global templates; override at domain level for regional customization
- One content node → 6 language variants via Drupal core multilingual stack

**Module stack (Phase 04):**

| Module | Purpose |
|---|---|
| Layout Builder | Page composition without dev involvement |
| Paragraphs | Modular content components (replaces Sage blade components) |
| Webform | Replaces Gravity Forms |
| Metatag + Schema.org | Replaces Yoast/AIOSEO; rich schema on all content |
| Drupal core Multilingual | Replaces TranslatePress; fixes broken /es/ |
| Pathauto | Clean URLs across all content types + regions |
| Search API + Solr | Site search (currently nonexistent) |
| Salesforce Suite | CRM sync |
| Custom SmartRecruiters module | /careers/jobs/ board via API |

---

→ See [11-HOSTING-RECOMMENDATION.md](./11-HOSTING-RECOMMENDATION.md) for the Pantheon vs Acquia hosting decision.  
→ See [10-MIGRATION-COMPLEXITY.md](./10-MIGRATION-COMPLEXITY.md) for what this migration involves.

---

**[← Performance](./08-PERFORMANCE.md) | [Next: Migration Complexity →](./10-MIGRATION-COMPLEXITY.md)**
