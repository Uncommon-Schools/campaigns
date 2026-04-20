# 10 — Migration Complexity

> Content and integration migration risk matrix. What moves cleanly, what needs to be rebuilt, and what's blocked on external input.

---

**[← CMS Evaluation](./09-CMS-EVALUATION.md) | [Next: Hosting Recommendation →](./11-HOSTING-RECOMMENDATION.md)**

---

## Migration Approach

**Content:** Drupal Migrate module with custom source plugins reading the WordPress database directly. Automated migration — not manual copy/paste.

**Integrations:** Assessed individually below. Most survive via GTM or straightforward module replacement. Three are high complexity.

---

## Part 1: Content Migration

| Content Type | Volume | Risk | Notes |
|---|---|---|---|
| Pages | 795 | **HIGH** | Custom post types need content type mapping in Drupal. Define all content types and fields in Phase 02 before migration begins. |
| People profiles | 749 | MEDIUM | Clean structured data, maps well to Drupal entity |
| School profiles | 399 | MEDIUM | School content type + region taxonomy in Drupal |
| Impact blog | 245 | MEDIUM | Author and date fields must carry over with content |
| News/blog posts | 1,848 | MEDIUM | Highest volume — automate entirely |
| **Total URLs needing 301 redirects** | **3,843+** | **HIGH** | Zero SEO regression is a hard requirement. Every URL must redirect correctly. This is a 3,843-row spreadsheet that must be completed before launch. Not optional. |

### Pre-migration requirements (complete in Phase 02)

1. **Content model:** Define all Drupal content types, fields, and taxonomy before a single page migrates
2. **URL audit:** Crawl all 3,843 URLs — flag low-value pages (thin people profiles, stale translated duplicates) for consolidation vs. redirect vs. discard. Do not migrate junk.
3. **Image audit:** Inventory all media. Re-optimize to WebP before migration. Do not migrate uncompressed legacy images into the new CMS.

---

## Part 2: Integration Migration

| Integration | Risk | Migration Path |
|---|---|---|
| FundraiseUp | LOW | Widget embed survives. Drop the same embed code into Drupal. |
| GTM container | LOW | Same container ID, new page template |
| GA4 (primary) | LOW | Survives via GTM |
| Hotjar | LOW | Via GTM |
| Facebook Pixel | LOW | Via GTM |
| handl UTM Grabber | LOW | Recreate via GTM + localStorage (client-side). **Eliminates CDN bypass.** |
| MonsterInsights | LOW | **Remove.** Redundant with GTM/GA4. No replacement needed. |
| Gravity Forms → Webform | MEDIUM | Rebuild form-by-form in Drupal Webform. Full parity, accessible out of box. |
| Thrive Leads → JS component | MEDIUM | Replace with Drupal block + JS component. Remove from every page where not needed. |
| Yoast + AIOSEO → Metatag | MEDIUM | Drupal Metatag module handles bulk migration. Standardizes to one system across all domains. |
| **SmartRecruiters** | **HIGH** | Custom API integration. No off-shelf Drupal module exists. Must build from scratch. **Scope this in Phase 02** — if left to Phase 04 it becomes a launch blocker. |
| **TranslatePress → Drupal Multilingual** | **HIGH** | 6 languages, 3,843+ URLs, active broken Spanish. Drupal core Multilingual replaces this natively, but per-language QA is a discrete workstream. Plan for it in Phase 03/04. |
| **Salesforce** | **HIGH** | Mature Drupal Salesforce Suite module exists. But CRM field mapping must be designed with whoever owns the Salesforce instance at Uncommon. Cannot scope without that conversation. |
| Avela | **TBD** | Not visible in homepage source. Need enrollment flow traced. |
| SchoolMint | **TBD** | Same as Avela. |
| Lever | **TBD** | Detected in codebase alongside SmartRecruiters. Confirm active or legacy before building ATS integration. |
| GA4 (G-X5WHC48ND7) | **TBD** | Purpose unknown. Confirm before finalizing analytics migration plan. |

---

→ See [04-INTEGRATIONS.md](./04-INTEGRATIONS.md) for full integration inventory and notes.  
→ See [12-OPEN-QUESTIONS.md](./12-OPEN-QUESTIONS.md) for all TBD items blocked on Anthony.

---

**[← CMS Evaluation](./09-CMS-EVALUATION.md) | [Next: Hosting Recommendation →](./11-HOSTING-RECOMMENDATION.md)**
