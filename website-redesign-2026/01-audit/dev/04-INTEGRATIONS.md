# 04 — Integration Ecosystem

> Every confirmed third-party integration on the current site: what it does, its migration risk, and what's still unknown.

---

**[← CMS Assessment](./03-CMS-ASSESSMENT.md) | [Next: SEO Diagnostics →](./05-SEO-DIAGNOSTICS.md)**

---

## Full Integration Inventory

### Analytics & Tracking

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| GTM (GTM-K6VDVNK) | ✓ Active, shared across all sites | LOW | Survives migration as-is |
| GA4 (G-1Z558Q2T6W) | ✓ Active — primary property | LOW | Survives via GTM |
| GA4 (G-X5WHC48ND7) | ✓ Active — purpose unknown | LOW | Confirm use before migrating analytics setup |
| MonsterInsights Premium v10.1.0 | ✓ Active | LOW — **Remove** | Redundant GA wrapper on top of GTM/GA4. Adds overhead, no benefit. |
| Hotjar (ID 1236109) | ✓ Active | LOW | Via GTM |
| Facebook Pixel | ✓ Active | LOW | Via GTM |
| handl UTM Grabber v3 | ✓ Active — **causing CDN bypass** | LOW | Replace with GTM + localStorage. Current cookie-based approach breaks Cloudflare caching. |

### Forms & Lead Capture

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| Gravity Forms v2.9.29 | ✓ Active throughout | MEDIUM | Rebuild as Drupal Webform (full parity, accessible out of box) |
| Thrive Leads v10.8.8 | ✓ Active | MEDIUM | Replace with Drupal block/JS component. Currently loads on every page regardless of whether a form is present. |

### Enrollment

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| Avela | Not detected in homepage source | **TBD** | Likely on school-specific pages. Need enrollment flow traced to scope. |
| SchoolMint | Not detected in homepage source | **TBD** | Same as Avela — need a live enrollment link from Anthony. |

### Careers / ATS

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| SmartRecruiters | ✓ Confirmed in main.js | **HIGH** | Custom API integration. No off-shelf Drupal module exists — requires a full custom module build. Scope in Phase 02 before Phase 04. |
| Lever | Found in main.js | **TBD** | Present alongside SmartRecruiters. Confirm if active or legacy before building ATS integration. |

### Donations

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| FundraiseUp (widget AXGXSELV) | ✓ Active on /donate/ | LOW | Widget embed survives migration with no rebuild required. |

### Translation

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| TranslatePress v3.1.2 | ✓ Active — **broken** | **HIGH** | 6 languages, 3,843+ URLs. Spanish /es/ currently serves English content with es-MX lang tag — active SEO bug. Replace with Drupal core Multilingual. Plan per-language QA as a discrete Phase 04 workstream. |

### CRM

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| Salesforce | Not detected on-page | **HIGH** | Mature Drupal Salesforce Suite module exists, but CRM field mapping must be designed with whoever owns the Salesforce instance at Uncommon. |

### SEO Plugins

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| Yoast SEO v27.2 | ✓ Active on main domain | MEDIUM | Replace with Drupal Metatag + Schema.org modules |
| All in One SEO | ✓ Active on subdomains | LOW | Mismatch with main — standardize on Metatag in Drupal build |

### Knowledge Base

| Integration | Status | Migration Risk | Notes |
|---|---|---|---|
| Zendesk (uncommonkbase.zendesk.com) | ✓ Active — separate platform | NONE | Fully isolated. No migration action needed. |

---

## Migration Risk Summary

| Risk Level | Integrations |
|---|---|
| **LOW** | FundraiseUp, GTM, GA4, Hotjar, Facebook Pixel, handl UTM (→ GTM/localStorage), MonsterInsights (remove) |
| **MEDIUM** | Gravity Forms → Webform, Thrive Leads → JS component, Yoast/AIOSEO → Metatag |
| **HIGH** | SmartRecruiters (custom module build), TranslatePress → Drupal Multilingual, Salesforce (CRM field mapping) |
| **TBD** | Avela, SchoolMint, Lever, GA4 second property |

---

→ See [12-OPEN-QUESTIONS.md](./12-OPEN-QUESTIONS.md) for all items blocked on Anthony input.  
→ See [10-MIGRATION-COMPLEXITY.md](./10-MIGRATION-COMPLEXITY.md) for the full migration complexity matrix.

---

**[← CMS Assessment](./03-CMS-ASSESSMENT.md) | [Next: SEO Diagnostics →](./05-SEO-DIAGNOSTICS.md)**
